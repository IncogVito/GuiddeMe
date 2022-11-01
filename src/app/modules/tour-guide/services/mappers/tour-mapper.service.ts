import {TourModel, TourViewModel} from "../../models/tour.model";
import {ArrayUtilService} from "../../../shared/services/utils/array-util.service";


export class TourMapperService {

  constructor() {
  }

  public static mapToViewModel(tourModel: TourModel): TourViewModel {
    return {
      id: tourModel.id,
      expanded: false,
      imageUrl: tourModel.mainImageUrl,
      time: tourModel.time,
      title: tourModel.title,

    }
  }

  public static mapToViewModels(tourModels: TourModel[]): TourViewModel[] {
    return ArrayUtilService.emptyIfNull(tourModels)
      .map(singleTour => this.mapToViewModel(singleTour));
  }
}
