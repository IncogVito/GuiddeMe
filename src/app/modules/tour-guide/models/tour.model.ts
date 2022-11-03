import {EntitySearchParams} from "../../shared/models/firestore.model";

export interface TourViewModel {
  id: string;
  title: string;
  time: number;
  imageUrl: string;
  expanded: boolean;
}

export interface TourModel {
  id: string;
  title: string;
  time: number;
  mainImageUrl: string;
  allImages: string[];
  categoryId: string;
  stopsCount: number;
  descriptionHtml: string;
  mapImageUrl: string;
}

export interface TourSearchParams extends EntitySearchParams {
  categoryId: string;
}
