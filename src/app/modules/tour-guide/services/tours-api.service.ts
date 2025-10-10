import {Injectable} from '@angular/core';
import {FirebaseAbstractApiService} from "../../shared/services/api/firebase-abstract-api.service";
import {TourModel, TourSearchParams} from "../models/tour.model";
import {Firestore, QueryConstraint, where} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ToursApiService extends FirebaseAbstractApiService<TourModel, TourSearchParams> {

  constructor(protected override readonly firestore: Firestore) {
    super(firestore);
  }

  protected createSearchEntityQuery(params: Partial<TourSearchParams>): QueryConstraint[] {
    const constraints: QueryConstraint[] = [];

    if (params.id) {
      constraints.push(where('id', '==', params.id));
    }
    if (params.categoryId) {
      constraints.push(where('categoryId', '==', params.categoryId));
    }
    console.log(constraints);

    return constraints;
  }

  protected readonly entityPath: string = 'tours';
}
