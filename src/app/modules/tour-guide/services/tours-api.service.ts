import {Injectable} from '@angular/core';
import {FirebaseAbstractApiService} from "../../shared/services/api/firebase-abstract-api.service";
import {TourModel, TourSearchParams} from "../models/tour.model";
import {Query} from "firebase/firestore"
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFirestoreQueryBuilder} from "../../shared/services/utils/angular-firestore-query.builder";

@Injectable({
  providedIn: 'root'
})
export class ToursApiService extends FirebaseAbstractApiService<TourModel, TourSearchParams> {

  constructor(protected override readonly firestore: AngularFirestore) {
    super(firestore);
  }

  protected createSearchEntityQuery(params: Partial<TourSearchParams>): Query<TourModel, TourModel> {
    const queryBuilder = new AngularFirestoreQueryBuilder<TourModel>();
    return queryBuilder
      .addEqualsConstraint('id', params.id)
      .addEqualsConstraint('categoryId', params.categoryId)
      .build() as any; // TODO typing
  }

  protected readonly entityPath: string = 'tours';
}
