import {LoadingEntityStateModel} from "../../../shared/models/store/loading-entity.state-model";
import {TourModel, TourViewModel} from "../../models/tour.model";

export interface ToursStateModel extends LoadingEntityStateModel {
  categoryId: string | undefined;
  categoryName: string | undefined;
  tours: TourModel[];
  toursViewModel: TourViewModel[];
}

export const getDefaultToursState: ToursStateModel = {
  fetched: false,
  loading: false,
  tours: [],
  toursViewModel: [],
  categoryId: undefined,
  categoryName: undefined
}
