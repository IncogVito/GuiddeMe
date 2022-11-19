import {EntitySearchParams} from "../../shared/models/firestore.model";

export interface QuestionModel {
  id: string;
  content: string;
  answers: string[];
  correctAnswers: string[];
}

export interface QuestionGameResponseModel {
  question: QuestionModel;
  response: string | undefined;
}

export interface QuestionSearchParams extends EntitySearchParams {
  questionIds: string[];
}

export interface QuestionModalResponse {
  response: string | undefined;
  disableQuizRequest?: boolean;
}
