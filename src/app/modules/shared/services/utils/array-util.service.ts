export class ArrayUtilService {

  public static emptyIfNull<T>(obj: T[] | undefined | null): T[] {
    if (!obj) {
      return [];
    }
    return obj;
  }

  public static getFirst<T>(elements: T[], defaultIfEmpty: T | undefined = undefined): T | undefined {
    if (this.isEmpty(elements)) {
      return defaultIfEmpty;
    }
    return elements[0];
  }

  public static getFirstByMatchingFnRequired<T>(elements: T[], matchingFn: (elem: T) => boolean): T {
    if (this.isEmpty(elements)) {
      throw new Error('List is empty');
    }
    const matchingElements = elements.filter(elem => matchingFn(elem));
    if (this.isEmpty(matchingElements)) {
      throw new Error('No elements in the list left after filtering by matching function');
    }
    return this.getFirstRequired<T>(matchingElements);
  }

  public static getFirstByMatchingFn<T>(elements: T[], matchingFn: (elem: T) => boolean): T | undefined {
    if (this.isEmpty(elements)) {
      return undefined;
    }
    const matchingElements = elements.filter(elem => matchingFn(elem));
    if (this.isEmpty(matchingElements)) {
      return undefined;
    }
    return this.getFirst<T>(matchingElements);
  }

  public static getFirstByFieldEq<T>(elements: T[], fieldName: keyof T, value: T[keyof T]): T | undefined {
    if (this.isEmpty(elements)) {
      return undefined;
    }
    const matchingElements = elements.filter(elem => elem[fieldName] === value);
    if (this.isEmpty(matchingElements)) {
      return undefined;
    }
    return this.getFirst<T>(matchingElements);
  }

  public static getLast<T>(elements: T[], defaultIfEmpty: T | undefined = undefined): T | undefined {
    if (this.isEmpty(elements)) {
      return defaultIfEmpty;
    }
    return elements[elements.length - 1];
  }

  public static getFirstRequired<T>(elements: T[]): T {
    if (this.isEmpty(elements)) {
      throw new Error('Empty input array for getFirstRequired method');
    }
    return elements[0];
  }

  public static isEmpty(elements: any[]): boolean {
    return !elements || elements.length <= 0;
  }

  public static isNotEmpty(elements: any[] | undefined): boolean {
    return !!elements && !this.isEmpty(elements);
  }

  public static groupByUniqueField<T, KEY>(entries: T[], fieldName: keyof T): Map<KEY, T> {
    const dictionaryIdToValueMap: Map<KEY, T> = new Map<KEY, T>();

    this.emptyIfNull(entries).forEach(entry => {
      const key = entry[fieldName] as any as KEY;
      dictionaryIdToValueMap.set(key, entry);
    });
    return dictionaryIdToValueMap;
  }

  public static groupAccumulatedByField<T, KEY>(entries: T[], fieldName: keyof T): Map<KEY, T[]> {
    const dictionaryIdToValueMap: Map<KEY, T[]> = new Map<KEY, T[]>();

    this.emptyIfNull(entries).forEach(entry => {
      const key = entry[fieldName] as any as KEY;
      const accumulatedValue = dictionaryIdToValueMap.get(key) || [];
      accumulatedValue.push(entry);
      dictionaryIdToValueMap.set(key, accumulatedValue);
    });
    return dictionaryIdToValueMap;
  }

  public static areEquals<T>(a: T[], b: T[], comparingFn = (a: T, b: T) => a === b): boolean {
    const first = this.emptyIfNull(a);
    const second = this.emptyIfNull(b);

    if (!first)
      return false;

    if (second.length != first.length)
      return false;

    for (var i = 0, l = second.length; i < l; i++) {
      if (!comparingFn(second[i], first[i]))
        return false;
    }
    return true;
  }

  public static lengthOf(entries: any[] | undefined): number {
    if (!entries || this.isEmpty(entries)) {
      return 0;
    }
    return entries.length;
  }

  public static indexOf<T>(entries: T[], recognizeFn: (elem: T) => boolean): number {
    if (!entries || this.isEmpty(entries)) {
      return -1;
    }
    let index = -1;
    let counter = 0;
    let found = false;
    while (counter < entries.length && !found) {
      const entry = entries[counter];
      if (recognizeFn(entry)) {
        index = counter;
        found = true;
      }
      counter++;
    }
    return index;
  }

  public static exchangeAtIndex<T>(entries: T[], entry: T, index: number): T[] {
    let copiedArray = [...entries];
    copiedArray[index] = entry;
    return [...copiedArray]
  }

  // TODO documentation
  public static exchangeInTree<T>(matchingFn: (elem: T) => boolean,
                                  object: Partial<T>,
                                  allTree: T[],
                                  nestedProperty: keyof T
  ): T[] | undefined {
    let counter = 0;
    let updatedElem: T | undefined = undefined;

    while (!updatedElem && counter < ArrayUtilService.lengthOf(allTree)) {
      const possibleParent = allTree[counter];

      if (matchingFn(possibleParent)) {
        updatedElem = {
          ...possibleParent,
          ...object
        };
        break;
      }

      const updatedChildrenAsParent = this.exchangeInTree(matchingFn, object, possibleParent[nestedProperty] as any, nestedProperty);
      if (updatedChildrenAsParent) {
        updatedElem = {
          ...possibleParent,
          responses: updatedChildrenAsParent
        };
      } else {
        ++counter;
      }
    }
    if (!updatedElem) {
      return undefined;
    }
    return ArrayUtilService.exchangeAtIndex(allTree, updatedElem, counter);
  }

  public static getFromTree<T>(matchingFn: (elem: T) => boolean, allTree: T[], nestingProperty: keyof T): T | undefined {
    let counter = 0;
    let foundElem: T | undefined = undefined;

    while (!foundElem && counter < ArrayUtilService.lengthOf(allTree)) {
      const currentElem = allTree[counter];

      if (matchingFn(currentElem)) {
        foundElem = currentElem;
        break;
      }

      const elemFromChildren = this.getFromTree(matchingFn, currentElem[nestingProperty] as any, nestingProperty);
      if (elemFromChildren) {
        foundElem = elemFromChildren;
      } else {
        ++counter;
      }
    }

    if (!foundElem) {
      return undefined;
    }
    return foundElem;
  }

  public static exchangeByComparingFn<T>(entries: T[], entry: T, comparingFn: (a1: T, a2: T) => boolean): T[] {
    let index = 0;
    for (const singleEntry of entries) {
      if (comparingFn(singleEntry, entry)) {
        break;
      }
      index++;
    }
    if (index >= this.lengthOf(entries)) {
      console.warn(`Couldnt find element to swap in exchange process. Skipping.`);
      return entries;
    }
    return this.exchangeAtIndex<T>(entries, entry, index);
  }

  public static removeLast<T>(entries: T[]): T[] {
    if (this.isEmpty(entries)) {
      return [];
    }
    return entries.splice(-1, 1);
  }

  public static removeSecondArrayFromFirst<T, U>(firstArray: T[], secondArray: U[],
                                                 filteringFn = (elem: T, secondArray: U[]) => !secondArray.includes(elem as any)): T[] {
    return firstArray.filter((el) => filteringFn(el, secondArray));
  }

  public static removeElement<T>(entries: T[], element: T): T[] {
    if (this.isEmpty(entries)) {
      return [];
    }
    const index = entries.indexOf(element);
    return [...entries.slice(0, index), ...entries.slice(index + 1, entries.length - 1)];
  }
}

export function onlyUnique(value: any, index: number, self: any[]) {
  return self.indexOf(value) === index;
}
