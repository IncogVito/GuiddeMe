import { Injectable } from '@angular/core';
import {FirebaseAbstractApiService} from "../../shared/services/api/firebase-abstract-api.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFirestoreQueryBuilder} from "../../shared/services/utils/angular-firestore-query.builder";
import {QuestionModel, QuestionSearchParams} from "../models/question.model";

import firebase from "firebase/compat";
import Query = firebase.firestore.Query;

@Injectable({
  providedIn: 'root'
})
export class QuestionApiService extends FirebaseAbstractApiService<QuestionModel, QuestionSearchParams> {

  protected readonly entityPath: string = "questions";

  constructor(protected override readonly firestore: AngularFirestore) {
    super(firestore);
  }

  protected createSearchEntityQuery(params: Partial<QuestionSearchParams>): Query<QuestionModel> {
    const queryBuilder = new AngularFirestoreQueryBuilder<QuestionModel>();
    return queryBuilder
      .addEqualsConstraint('id', params.id)
      .addIncludeConstraint('id', params.questionIds)
      .build() as any; // TODO typing
  }

}
