import {EntitySearchParams} from "../../shared/models/firestore.model";

export interface TourStopModel {
  id: string;
  tourId: string;
  name: string;
  descriptionHtml: string;
  address: string;
  orderIndex: number;
}

export interface TourStopSearchParams extends EntitySearchParams {
  tourId: string;
}
