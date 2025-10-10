import {Injectable} from '@angular/core';
import {FirebaseAbstractApiService} from "../../shared/services/api/firebase-abstract-api.service";
import {QuestionModel, QuestionSearchParams} from "../models/question.model";
import {Firestore, QueryConstraint, where} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class QuestionApiService extends FirebaseAbstractApiService<QuestionModel, QuestionSearchParams> {

  protected readonly entityPath: string = "questions";

  constructor(protected override readonly firestore: Firestore) {
    super(firestore);
  }

  protected createSearchEntityQuery(params: Partial<QuestionSearchParams>): QueryConstraint[] {
    const constraints: QueryConstraint[] = [];

    if (params.id) {
      constraints.push(where('id', '==', params.id));
    }

    if (params.questionIds) {
      constraints.push(where('id', 'in', params.questionIds || []));
    }

    return constraints;
  }

}
