import {Injectable} from '@angular/core';
import {FirebaseAbstractApiService} from "../../shared/services/api/firebase-abstract-api.service";
import {TourStopModel, TourStopSearchParams} from "../models/tour-stop.model";
import {Firestore, QueryConstraint, where} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class TourStopApiService extends FirebaseAbstractApiService<TourStopModel, TourStopSearchParams> {

  constructor(protected override readonly firestore: Firestore) {
    super(firestore);
  }

  protected createSearchEntityQuery(params: Partial<TourStopSearchParams>): QueryConstraint[] {
    const constraints: QueryConstraint[] = [];

    if (params.tourId) {
      constraints.push(where('tourId', '==', params.tourId));
    }

    return constraints;
  }

  protected readonly entityPath: string = 'tour-stops';
}

