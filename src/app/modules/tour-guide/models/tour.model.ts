import {EntitySearchParams} from "../../shared/models/firestore.model";
import {CardSingleDetailModel} from "../../shared/models/card-single-detail.model";
import {GeoPoint} from "@firebase/firestore-types";
import {MapElement} from "../../shared/models/map.model";

export interface TourViewModel {
  id: string;
  title: string;
  time: number;
  imageUrl: string;
  mapImageUrl: string;
  previewImageUrl: string;
  expanded: boolean;
  tourDetails: CardSingleDetailModel[];
  tourStops: MapElement[];
}

export interface TourModel {
  id: string;
  title: string;
  time: number;
  allImages: string[];
  categoryId: string;
  stopsCount: number;
  descriptionHtml: string;
  mapImageUrl: string;
  mainImageUrl: string;
  previewImageUrl: string;
  quizAvailable: boolean;
  tourStopsCoordinates: Map<string, GeoPoint>;
}

export interface TourSearchParams extends EntitySearchParams {
  categoryId: string;
}
