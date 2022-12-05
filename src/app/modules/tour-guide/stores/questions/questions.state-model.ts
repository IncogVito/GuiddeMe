import {QuestionModel} from "../../models/question.model";
import {LoadingEntityStateModel} from "../../../shared/models/store/loading-entity.state-model";

export interface QuestionsStateModel extends LoadingEntityStateModel {
  tourId: string;
  questions: QuestionModel[];
}

export const getDefaultQuestionsState: QuestionsStateModel = {
  fetched: false,
  loading: false,
  tourId: undefined!,
  questions: []
}
