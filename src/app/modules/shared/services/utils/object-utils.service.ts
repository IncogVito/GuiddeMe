export class ObjectUtilService {

  public static getRequired<T>(value: T | undefined): T {
    if (this.isValueDefined(value)) {
      return value!;
    }
    throw new Error('Field is supposed to be required but is undefined!');
  }

  public static getOrElse<T>(value: T | undefined, valueIfUndefined: T): T {
    if (this.isValueDefined(value)) {
      return value!;
    }
    return valueIfUndefined;
  }

  // TODO get nested types
  public static getNestedOrElse(value: any, nestedKeys: string[], valueIfUndefined: any): any {
    if (nestedKeys.length === 0) {
      return this.isValueDefined(value) ? value : valueIfUndefined;
    }

    if (this.isValueDefined(value)) {
      const copiedNestedFields = [...nestedKeys];
      return this.getNestedOrElse(value[copiedNestedFields[0]], copiedNestedFields.slice(1), valueIfUndefined);
    }
    return valueIfUndefined;
  }

  //
  // public static copyFields(object: any, fields: string[]) {
  //   const copiedObj = {};
  //   for (const fieldName of fields) {
  //     copiedObj[fieldName] = object[fieldName];
  //   }
  //   return copiedObj;
  // }
  //
  // public static copyFieldsWithoutEmptyField<T>(object: T, fields: string[]) {
  //   const copiedObj = {};
  //   for (const fieldName of fields) {
  //     if (this.isValueDefined(object[fieldName])) {
  //       copiedObj[fieldName] = object[fieldName];
  //     }
  //   }
  //   return copiedObj;
  // }
  //
  // public static checkIfValuesAreFilled = <T>(field: T, without?: string[]): boolean => {
  //   const values = Object.keys(field).filter(key => {
  //     if (without && without.length) {
  //       return !without.includes(key);
  //     }
  //     return true;
  //   });
  //   if (values && values.length) {
  //     return values
  //       .map(key => field[key])
  //       .some(value => !!value);
  //   }
  //   return false;
  // }

  public static compareByFields<U>(firstObject: U, secondObject: any, fieldNames: (keyof U)[]): boolean {
    let areEqual = true;
    if (this.isAnyNull(firstObject, secondObject)) {
      return false;
    }
    for (const fieldName of fieldNames) {
      if (areEqual) {

        if (typeof firstObject[fieldName] === 'string' || typeof secondObject[fieldName] === 'string') {
          areEqual = ('' + firstObject[fieldName]) === ('' + secondObject[fieldName]);
        } else {
          areEqual = JSON.stringify(firstObject[fieldName]) === JSON.stringify(secondObject[fieldName]);
        }
      }
    }
    return areEqual;
  }


  public static compareByAllFields(firstObject: any, secondObject: any) {
    const fields = Object.keys(firstObject);
    return this.compareByFields(firstObject, secondObject, fields);
  }

  // TODO - dostosować pod najnowszy typescript

  // public static getFieldValue<T, U>(object: U, fieldName: keyof U): T {
  //   if (!object) {
  //     return null;
  //   }
  //   return object[fieldName] as any;
  // }
  //
  // /**
  //  * Get nested value of objects
  //  * eq. for object:
  //  * {
  //  *  product: {
  //  *    id: 1,
  //  *    name: 2
  //  *  }
  //  * }
  //  * to get name of product call method with getNestedFieldValue(object, [product, name])
  //  *
  //  * @param object
  //  * @param fieldNameTree
  //  */
  // public static getNestedFieldValue<T>(object: any, fieldNameTree: string[]): T {
  //   const copiedFieldNameTree = [...fieldNameTree];
  //   if (!object || !copiedFieldNameTree || copiedFieldNameTree.length === 0) {
  //     return null;
  //   }
  //   const fieldName = copiedFieldNameTree[0];
  //   if (copiedFieldNameTree.length <= 1) {
  //     return object[fieldName];
  //   }
  //
  //   copiedFieldNameTree.shift();
  //   return this.getNestedFieldValue(object[fieldName], copiedFieldNameTree);
  // }
  //
  // public static clearFieldValue<U>(object: U, fieldName: keyof U): void {
  //   if (object) {
  //     object[fieldName] = null;
  //   }
  // }
  //
  public static isValueDefined(val: any) {
    return val !== null && val !== undefined && val !== '';
  }

  public static isValueNonDefined(val: any) {
    return !this.isValueDefined(val);
  }

  //
  // public static assignProperty<T>(target: T, propertyName: keyof T, value: any): void {
  //   if (this.isValueDefined(value)) {
  //     if (moment.isMoment(value)) {
  //       target[propertyName] = value.format('YYYY-MM-DD') as any;
  //     } else {
  //       target[propertyName] = value;
  //     }
  //   }
  // }
  //
  public static areIndicatedValuesFilled<T>(object: T, fieldNames: (keyof T)[], checkMode: 'ALL' | 'ANY'): boolean {
    let allModeValid = true;
    let anyModeValid = false;

    for (const fieldName of fieldNames) {
      const fieldValue = object[fieldName];
      if (checkMode === 'ALL' && allModeValid) {
        allModeValid = Array.isArray(fieldValue) ? !this.isEmpty(fieldValue) : this.isValueDefined(fieldValue);
      } else if (checkMode === 'ANY' && !anyModeValid) {
        anyModeValid = Array.isArray(fieldValue) ? !this.isEmpty(fieldValue) : this.isValueDefined(object[fieldName]);
      }
    }

    if (checkMode === 'ALL') {
      return allModeValid;
    } else {
      return anyModeValid;
    }
  }

  public static areValuesFilled<T>(object: T, checkMode: 'ALL' | 'ANY'): boolean {
    return this.areIndicatedValuesFilled(object, Object.keys(object) as any, checkMode);
  }

  public static isEmpty(elements: any[]): boolean {
    return !elements || elements.length <= 0;
  }

  //
  // public static cloneDeep<T>(object: T): T {
  //   return _.cloneDeep(object);
  // }
  //
  // /**
  //  * Methods checks equality between two objects. null === undefined = true
  //  * @param firstObj
  //  * @param secondObj
  //  */
  // static areEquals<T>(firstObj: T, secondObj: T): boolean {
  //   if (!this.isValueDefined(firstObj) && !this.isValueDefined(secondObj)) {
  //     return true;
  //   }
  //   return firstObj === secondObj;
  // }
  //
  // static hasAllFieldsEmpty(object: Object): boolean {
  //   for (const key in object) {
  //     if (object[key] !== null && object[key] !== '' && object[key] !== undefined) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  //
  public static isAnyNull(...args: any[]): boolean {
    for (const element of args) {
      if (!this.isValueDefined(element)) {
        return true;
      }
    }

    return false;
  }

  //
  // public static areAllNull(...args: any[]): boolean {
  //   let allNull = true;
  //   for (const element of args) {
  //     if (allNull) {
  //       allNull = !this.isValueDefined(element);
  //     }
  //   }
  //   return allNull;
  // }
  //
  // public static clearFieldsValues<T extends Object>(object: T | T[], fieldNames: (keyof T)[]): void {
  //   if (!ObjectUtilService.isValueDefined(object)) {
  //     return;
  //   }
  //
  //   if (Array.isArray(object)) {
  //     for (const elem of object) {
  //       this.clearFieldsValues(elem, fieldNames);
  //     }
  //     return;
  //   }
  //
  //   for (const fieldName of fieldNames) {
  //     object[fieldName] = undefined;
  //   }
  // }

  public static areArraysEquals(buf1: Uint8Array, buf2: Uint8Array) {
    if (buf1.byteLength != buf2.byteLength) return false;
    const dv1 = new Int8Array(buf1);
    const dv2 = new Int8Array(buf2);
    for (let i = 0; i != buf1.byteLength; i++) {
      if (dv1[i] != dv2[i]) return false;
    }
    return true;
  }

  public static replaceUndefinedFieldsIntoBlank(object: any) {
    if (!this.isValueDefined(object)) {
      return;
    }

    Object.keys(object).filter(key => {
      if (object[key] === null || object[key] === undefined) {
        object[key] = '';
      }
    });
  }
}
