import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerformanceTestService {

  private perfTest2TimeMap: Map<string, DOMHighResTimeStamp> = new Map([]);

  constructor() {
  }

  public startTest(name: string) {
    this.perfTest2TimeMap.set(name, performance.now());
  }

  public finishTest(name: string) {
    const startValue = this.perfTest2TimeMap.get(name);
    const finishValue = performance.now();

    if (!startValue) {
      console.warn(`PerformanceTest | Couldn't find startValue for ${name}`)
      return;
    }

    console.log(`PerformanceTest | Test: ${name}, took ${finishValue - startValue} milliseconds.`);
    this.perfTest2TimeMap.delete(name);
  }
}
