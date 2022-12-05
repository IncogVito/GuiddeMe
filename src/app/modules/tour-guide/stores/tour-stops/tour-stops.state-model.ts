import {LoadingEntityStateModel} from "../../../shared/models/store/loading-entity.state-model";
import {TourStopModel} from "../../models/tour-stop.model";

export interface TourStopsStateModel extends LoadingEntityStateModel {
  tourId: string | undefined;
  tourStops: TourStopModel[];
}

export const getDefaultTourStopsState: TourStopsStateModel = {
  fetched: false,
  loading: false,
  tourStops: [],
  tourId: undefined
}
