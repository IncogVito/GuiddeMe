import {Injectable} from '@angular/core';
import {AngularFirestore, QueryFn} from "@angular/fire/compat/firestore";
import {EntitiesResult, EntitySearchParams, FirestoreModel, PaginationParams} from "../../models/firestore.model";
import {catchError, map, Observable, of, take} from "rxjs";
import {EntityProcessResult, ProcessType} from "../../models/entity-process-result.model";

import firebase from "firebase/compat";
import Query = firebase.firestore.Query;

@Injectable({
  providedIn: 'root'
})
export abstract class FirebaseAbstractApiService<ENTITY extends FirestoreModel, SEARCH_PARAMS extends EntitySearchParams> {

  protected constructor(protected firestore: AngularFirestore) {
  }

  protected readonly abstract entityPath: string;

  public loadEntityById(id: string): Observable<EntityProcessResult<ENTITY>> {
    return this.firestore
      .collection<ENTITY>(this.entityPath)
      .doc(id)
      .valueChanges({idField: 'id'})
      .pipe(
        take(1),
        map((elem) => EntityProcessResult.ofSuccess(ProcessType.READ, elem!)),
        catchError((err) => of(EntityProcessResult.ofError(ProcessType.READ, {id} as any, err)))
      );
  }

  public loadAllEntities(): Observable<EntityProcessResult<EntitiesResult<ENTITY>>> {
    return this.loadEntitiesByParams({});
  }


  // TODO - dokończyć
  // public createEntity(entity: ENTITY): Observable<EntityProcessResult<ENTITY>> {
  //   return fromPromise(this.firestore
  //     .collection<ENTITY>(this.entityPath)
  //     .add({...entity, id: ''})
  //   ).pipe(
  //     map(result => FirebaseAbstractApiService.combineWithGeneratedId<ENTITY>(entity, result.id)),
  //     map((entityWithId) => new EntityProcessSuccess(entityWithId, ProcessType.CREATE)),
  //     catchError((err) => of(new EntityProcessError(entity, ProcessType.CREATE, err)))
  //   )
  // }

  public static combineWithGeneratedId<ENTITY>(entity: ENTITY, id: string): ENTITY {
    return {...entity, id}
  }

  // TODO - dokończyć
  // public updateEntity(entity: Partial<ENTITY>): Observable<EntityProcessResult<ENTITY>> {
  //   const oldDocumentReadAction = this.firestore
  //     .collection<ENTITY>(this.entityPath)
  //     .doc(entity.id)
  //     .valueChanges({idField: 'id'})
  //     .pipe(take(1));
  //
  //   const updateAction = fromPromise(this.firestore
  //     .collection<ENTITY>(this.entityPath)
  //     .doc(entity.id)
  //     .update({...entity}));
  //
  //   return oldDocumentReadAction.pipe(
  //     switchMap(oldDocument => combineLatest([of(oldDocument), updateAction])),
  //     map(([oldDocument, _]) => new EntityProcessSuccess(this.combineUpdatedEntity(oldDocument!, entity), ProcessType.UPDATE, oldDocument)),
  //     catchError(err => of(new EntityProcessError(entity as ENTITY, ProcessType.UPDATE, err)))
  //   )
  // }
  //
  // public removeEntity(entity: ENTITY): Observable<EntityProcessResult<ENTITY>> {
  //   return fromPromise(this.firestore
  //     .collection<ENTITY>(this.entityPath)
  //     .doc(entity.id)
  //     .delete()
  //   ).pipe(
  //     map(() => new EntityProcessSuccess(entity, ProcessType.UPDATE)),
  //     catchError((err) => of(new EntityProcessError(entity, ProcessType.UPDATE, err)))
  //   )
  // }

  public loadEntitiesByParams(params: Partial<SEARCH_PARAMS>): Observable<EntityProcessResult<EntitiesResult<ENTITY>>> {
    const query = this.createSearchEntityQuery(params) as any; // TODO
    return this.performSearchByQuery(query, params);

  }

  // public loadPaginatedEntitiesByParams(params: EntityPaginationSearchParams<EntitySearchParams<any>>): Observable<EntityProcessResult<EntitiesResult<ENTITY>>> {
  //   const query = this.createSearchEntityQueryWithPagination(params) as any; // TODO
  //   return this.performSearchByQuery(query, params.filters, params.pagination);
  // }

  protected combineUpdatedEntity(old: ENTITY, updating: Partial<ENTITY>): ENTITY {
    return {
      ...old,
      ...updating
    }
  }

  private performSearchByQuery(query: QueryFn, params: EntitySearchParams, pagination?: PaginationParams): Observable<EntityProcessResult<EntitiesResult<ENTITY>>> {
    const userSingleCollectionRef = this.firestore.collection<ENTITY>(this.entityPath, query);

    return userSingleCollectionRef.get()
      .pipe(
        take(1),
        map(snapshot => {
          const entities = snapshot.docs.map(doc => FirebaseAbstractApiService.combineWithGeneratedId(doc.data(), doc.id));
          return EntityProcessResult.ofSuccess(
            ProcessType.READ,
            this.combinePaginatedResult(entities, {...params, page: pagination?.page})
          )
        }),
        catchError(err => {
            console.error(err);
            return of(EntityProcessResult.ofError(
              ProcessType.READ,
              this.combinePaginatedResult([], params),
              err))
          }
        )
      );
  }

  protected combinePaginatedResult(entities: ENTITY[], params: EntitySearchParams): EntitiesResult<ENTITY> {
    return {
      pagination: params.page!,
      entities: entities
    }
  }

  protected abstract createSearchEntityQuery(params: Partial<SEARCH_PARAMS>): Query<ENTITY>;

  // protected abstract createSearchEntityQueryWithPagination(params: EntityPaginationSearchParams<EntitySearchParams<any>>): Query<ENTITY>;
}
