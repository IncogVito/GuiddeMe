import {EntitySearchParams} from "../../shared/models/firestore.model";
import {CardSingleDetailModel} from "../../shared/models/card-single-detail.model";

export interface TourViewModel {
  id: string;
  title: string;
  time: number;
  imageUrl: string;
  expanded: boolean;
  tourDetails: CardSingleDetailModel[];
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
  quizAvailable: boolean;
}

export interface TourSearchParams extends EntitySearchParams {
  categoryId: string;
}
