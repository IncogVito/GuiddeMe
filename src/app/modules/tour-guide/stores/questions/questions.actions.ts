export namespace QuestionsActions {
  export class LoadQuestions {
    static readonly type = '[Questions] LoadQuestions';
    constructor(public payload: { tourId: string }) {
    }
  }
}
