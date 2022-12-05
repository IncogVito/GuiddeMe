import {Injectable} from '@angular/core';
import {FirebaseAbstractApiService} from "../../shared/services/api/firebase-abstract-api.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFirestoreQueryBuilder} from "../../shared/services/utils/angular-firestore-query.builder";
import firebase from "firebase/compat";
import Query = firebase.firestore.Query;
import {TourStopModel, TourStopSearchParams} from "../models/tour-stop.model";

@Injectable({
  providedIn: 'root'
})
export class TourStopApiService extends FirebaseAbstractApiService<TourStopModel, TourStopSearchParams> {

  constructor(protected override readonly firestore: AngularFirestore) {
    super(firestore);
  }

  protected createSearchEntityQuery(params: Partial<TourStopSearchParams>): Query<TourStopModel> {
    const queryBuilder = new AngularFirestoreQueryBuilder<TourStopModel>();
    return queryBuilder
      .addEqualsConstraint('tourId', params.tourId)
      .build() as any; // TODO typing
  }

  protected readonly entityPath: string = 'tour-stops';
}

