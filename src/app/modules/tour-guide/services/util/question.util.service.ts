import {TourStopModel} from "../../models/tour-stop.model";
import {ArrayUtilService} from "../../../shared/services/utils/array-util.service";


export class QuestionUtilService {

  public static extractQuestionIds(tourStopModelArray: TourStopModel[]): string[] {
    return tourStopModelArray
      .flatMap(singleTourStop => ArrayUtilService.emptyIfNull(singleTourStop.questionIds));
  }
}
