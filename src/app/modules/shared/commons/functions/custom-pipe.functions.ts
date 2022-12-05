import {OperatorFunction} from "rxjs";
import {operate} from "rxjs/internal/util/lift";
import {createOperatorSubscriber} from "rxjs/internal/operators/OperatorSubscriber";

export function withElementChanged<T, K extends keyof T>(fieldName: K, transformFn: (value: T[K], index: number) => T[K], thisArg?: any): OperatorFunction<T, T> {
  return operate((source, subscriber) => {
    // The index of the value from the source. Used with projection.
    let index = 0;
    // Subscribe to the source, all errors and completions are sent along
    // to the consumer.
    source.subscribe(
      createOperatorSubscriber(subscriber, (value: T) => {
        const transformedValue: T = {
          ...value,
          fieldName:  transformFn.call(thisArg, value[fieldName], index++)
        }
        subscriber.next(transformedValue);
      })
    );
  });
}
