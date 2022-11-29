import {TourModel} from "../../models/tour.model";
import {TourStopModel} from "../../models/tour-stop.model";
import {NavItemModel} from "../../../shared/models/nav-item.model";
import {CardSingleDetailModel} from "../../../shared/models/card-single-detail.model";
import {createHeaderText} from "../../../shared/commons/functions/html-creator.common";
import {SortUtilService} from "../../../shared/services/utils/sort-util.service";

export class TourDescriptionUtilService {
  constructor() {
  }


  /**
   * TODO Languages
   * @param tourModel
   */
  public static extractTourDetails(tourModel: TourModel): CardSingleDetailModel[] {
    return [
      {
        text: tourModel.time + ' minut',
        icon: 'schedule'
      },
      {
        text: tourModel.stopsCount + ' punktów',
        icon: 'map'
      }
    ]
  }


  // TODO - English language && others
  public static extractTourInformation(tourModel: TourModel, tourStopModels: TourStopModel[]): NavItemModel[] {
    return [
      {
        navTitle: 'Informacje',
        mainTextTitle: 'Informacje',
        content: [
          {
            text: tourModel.descriptionHtml
          }
        ]
      },
      {
        navTitle: "Mapa",
        mainTextTitle: "Mapa",
        content: [
          {
            imageUrl: tourModel.mapImageUrl
          }
        ]
      },
      {
        navTitle: 'Lista stopów',
        mainTextTitle: 'Lista stopów',
        content: SortUtilService.sortByNumberField(tourStopModels, 'orderIndex', 'ASC')
          .map(singleStop => {
            return {text: createHeaderText(`${singleStop.orderIndex}`, singleStop.name)}
          })
      }
    ];
  }
}
