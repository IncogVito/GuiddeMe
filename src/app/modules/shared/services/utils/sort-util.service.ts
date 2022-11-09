import {ArrayUtilService} from "./array-util.service";
import {ObjectUtilService} from "./object-utils.service";

export class SortUtilService {


  // TODO - get rid of any
  public static sortByTextField<T>(array: T[], fieldName: keyof T): T[] {
    return [...ArrayUtilService.emptyIfNull(array)]
      .sort((a1, a2) => this.compareText(a1[fieldName] as any, a2[fieldName] as any));
  }

  public static sortByNumberField<T>(array: T[], fieldName: keyof T, order: 'ASC' | 'DESC' = 'DESC'): T[] {
    const orderFactor = order === 'ASC' ? -1 : 1;
    return [...ArrayUtilService.emptyIfNull(array)]
      .sort((a1, a2) => orderFactor * this.compareNumber(a1[fieldName] as any, a2[fieldName] as any));
  }

  public static compareText(first: string, second: string): number {
    if (ObjectUtilService.isAnyNull(first, second)) {
      return ObjectUtilService.isValueNonDefined(first) ? -1 : 1;
    }
    return first.localeCompare(second);
  }

  public static compareNumber(first: number, second: number): number {
    if (ObjectUtilService.isAnyNull(first, second)) {
      return ObjectUtilService.isValueNonDefined(first) ? -1 : 1;
    }
    return first > second ? -1 : second > first ? 1 : 0;
  }
}
