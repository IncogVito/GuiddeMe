import {EntitySearchParams} from "./firestore.model";

export class EntityProcessResult<T> {
  processType: ProcessType;
  success: boolean;
  entity: T;
  oldEntity?: T;
  searchParams?: EntitySearchParams;
  errorCode?: string;

  private constructor(processType: ProcessType,
                      success: boolean,
                      entity: T,
                      oldEntity?: T,
                      searchParams?: EntitySearchParams,
                      errorCode?: string) {
    this.processType = processType;
    this.success = success;
    this.entity = entity;
    this.oldEntity = oldEntity;
    this.searchParams = searchParams;
    this.errorCode = errorCode;
  }

  public static ofSuccess<T>(processType: ProcessType,
                             entity: T,
                             oldEntity?: T,
                             searchParams?: EntitySearchParams,
                             errorCode?: string) {
    return new EntityProcessResult(processType, true, entity, oldEntity, searchParams);
  }

  public static ofError<T>(processType: ProcessType, entity: T, errorCode: string, oldEntity?: T, searchParams?: EntitySearchParams) {
    return new EntityProcessResult(processType, true, entity, oldEntity, searchParams, errorCode);
  }
}

export enum ProcessType {
  NONE = 'NONE',
  UPDATE = 'UPDATE',
  CREATE = 'CREATE',
  READ = 'READ',
  REMOVE = 'REMOVE'
}
