import {PageEvent} from "@angular/material/paginator";
import {EntityProcessResult, ProcessType} from "./entity-process-result.model";

export interface FirestoreModel {
  id: string;
}

export interface EntitySearchParams {
  id?: string;
  page?: PageEvent;
}

export interface EntitiesResult<ENTITY> {
  entities: ENTITY[];
  pagination?: PageEvent;
}

export interface PaginationParams {
  page: PageEvent;
  edgeItem?: any;
}

export const getEmptyEntitiesResult: EntityProcessResult<EntitiesResult<any>> = {
  entity: {entities: []},
  oldEntity: undefined,
  processType: ProcessType.READ,
  success: true
}
