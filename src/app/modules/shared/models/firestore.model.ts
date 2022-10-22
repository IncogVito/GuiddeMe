import {PageEvent} from "@angular/material/paginator";

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
