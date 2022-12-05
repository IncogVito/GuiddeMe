export class NumberUtilService {

  public static isNumber(val: any): boolean {
    return typeof val === 'number' || !Number.isNaN(+val);
  }

  public static roundBy(value: number, power: number) {
    return Math.round(value * Math.pow(10, power)) / Math.pow(10, power);
  }

  public static convertToNumber(value: string | number | undefined, defaultValue: number = 0): number {
    if (value !== null && value !== undefined && value !== '') {
      let valueStr = String(value);
      valueStr = valueStr.replace(',', '.');
      value = Number(valueStr);
    } else {
      return defaultValue;
    }

    return isNaN(Number(value)) ? defaultValue : Number(value);
  }

  public static range(start: number, end: number): number[] {
    return [...Array(1 + end - start).keys()].map(v => start + v)
  }

  public static add(...values: number[]): number {
    let sum = 0;
    values.forEach(singleValue => {
      sum = sum + this.convertToNumber(singleValue, 0);
    })
    return sum;
  }
}
