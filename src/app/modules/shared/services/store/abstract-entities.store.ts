import {EMPTY, Observable} from "rxjs";
import {Action, StateContext, Store} from "@ngxs/store";
import {FirebaseAbstractApiService} from "../api/firebase-abstract-api.service";
import {EntitiesResult, EntitySearchParams, FirestoreModel} from "../../models/firestore.model";
import {EntityProcessResult} from "../../models/entity-process-result.model";
import {AbstractEntitiesActions} from "./abstract-entities.actions";

export interface LoadingEntitiesState<VIEW_ENTITY> {
  fetched: boolean;
  loading: boolean;
  entities: VIEW_ENTITY[];
}

/**
 * Not implemented
 */
export abstract class AbstractEntitiesStore<ENTITY extends FirestoreModel, VIEW_ENTITY> {

  public entities$: Observable<VIEW_ENTITY[]> = EMPTY;

  constructor(private apiService: FirebaseAbstractApiService<ENTITY, EntitySearchParams>,
              private readonly store: Store) {
    this.entities$ = store.select(state => state.category.categories);
  }
  //
  // @Action(AbstractEntitiesActions.FetchAll)
  // feedAnimals(ctx: StateContext<LoadingEntitiesState<VIEW_ENTITY>>, _: AbstractEntitiesActions.Create<ENTITY>) {
  //   return this.apiService.fetchAllEntities().pipe(
  //     tap(result => {
  //       const state = ctx.getState();
  //       ctx.setState({
  //         ...state,
  //         fetched: true,
  //         loading: true,
  //         categories: [...result.entity.entities]
  //       });
  //     })
  //   );
  // // }

  protected abstract convertIntoView(entityResult: Observable<EntityProcessResult<EntitiesResult<ENTITY>>>)
  : Observable<EntityProcessResult<EntitiesResult<VIEW_ENTITY>>>;
}
