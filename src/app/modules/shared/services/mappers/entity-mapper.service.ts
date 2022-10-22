import {Injectable} from '@angular/core';
import {EntitiesResult} from "../../models/firestore.model";
import {ArrayUtilService} from "../utils/array-util.service";

@Injectable({
  providedIn: 'root'
})
  export class EntityMapperService {

  constructor() {
  }

  public static mapEntities<T, U>(entitiesResult: EntitiesResult<T>, mappingFn: (arg: T) => U): EntitiesResult<U> {
    return {
      ...entitiesResult,
      entities: ArrayUtilService.emptyIfNull(entitiesResult.entities)
        .map(singleEntity => mappingFn(singleEntity))
    }
  }

}
