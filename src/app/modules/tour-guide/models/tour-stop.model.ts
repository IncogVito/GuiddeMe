import {EntitySearchParams} from "../../shared/models/firestore.model";

export interface TourStopModel {
  id: string;
  tourId: string;
  name: string;
  descriptionHtml: string;
  mainImageUrl: string;
  imagesUrls: string[];
  address: string;
  orderIndex: number;
  questionIds: string[];
  coordinateLng: number;
  coordinateLat: number;
}

export interface TourStopSearchParams extends EntitySearchParams {
  tourId: string;
}
