import {TourModel, TourViewModel} from "../../models/tour.model";
import {ArrayUtilService} from "../../../shared/services/utils/array-util.service";
import {CardSingleDetailModel} from "../../../shared/models/card-single-detail.model";
import {TourStopUtilService} from "../util/tour-stop.util.service";


export class TourMapperService {

  constructor() {
  }

  public static mapToViewModel(tourModel: TourModel): TourViewModel {
    return {
      id: tourModel.id,
      expanded: false,
      imageUrl: tourModel.mainImageUrl,
      mapImageUrl: tourModel.mapImageUrl,
      previewImageUrl: tourModel.previewImageUrl,
      time: tourModel.time,
      title: tourModel.title,
      tourDetails: this.mapTourDetails(tourModel),
      tourStops: TourStopUtilService.convertCoordinatesToMapPins(tourModel.tourStopsCoordinates)
    }
  }

  public static mapToViewModels(tourModels: TourModel[]): TourViewModel[] {
    return ArrayUtilService.emptyIfNull(tourModels)
      .map(singleTour => this.mapToViewModel(singleTour));
  }

  public static mapTourDetails(tourModel: TourModel): CardSingleDetailModel[] {
    const aggregatedTourDetails: CardSingleDetailModel[] = [{
      icon: 'map',
      text: `${tourModel.stopsCount} punktów`
    }];
    if (tourModel.quizAvailable) {
      aggregatedTourDetails.push({
        icon: 'sports_esports',
        text: 'Dostępny quiz',
        colorStyle: 'orange'
      })
    }
    return aggregatedTourDetails;
  }
}
