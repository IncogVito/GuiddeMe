import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CategoryModel, CategoryViewModel} from "../models/category.model";
import {FirebaseAbstractApiService} from "../../shared/services/api/firebase-abstract-api.service";
import {EntitiesResult, EntitySearchParams} from "../../shared/models/firestore.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFirestoreQueryBuilder} from "../../shared/services/utils/angular-firestore-query.builder";
import {CategoryMapperService} from "./mappers/category-mapper.service";
import {EntityMapperService} from "../../shared/services/mappers/entity-mapper.service";
import {withElementChanged} from "../../shared/commons/functions/custom-pipe.functions";
import {EntityProcessResult} from "../../shared/models/entity-process-result.model";
import {Query} from "firebase/firestore"

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService extends FirebaseAbstractApiService<CategoryModel, EntitySearchParams> {

  protected readonly entityPath: string = "categories";

  constructor(protected override readonly firestore: AngularFirestore) {
    super(firestore);
  }

  public fetchAllEntities(): Observable<EntityProcessResult<EntitiesResult<CategoryViewModel>>> {
    const transformFn = CategoryMapperService.mapToView;
    return this.loadAllEntities()
      .pipe(
        withElementChanged('entity', elem => EntityMapperService.mapEntities(elem, transformFn))
      )
  }


  protected createSearchEntityQuery(params: Partial<EntitySearchParams>): Query<CategoryModel, CategoryModel> {
    const queryBuilder = new AngularFirestoreQueryBuilder<CategoryModel>();
    return queryBuilder
      .addEqualsConstraint('id', params.id)
      .build() as any; // TODO typing
  }

}
