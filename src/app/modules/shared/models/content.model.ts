import {MapElement} from "./map.model";

export interface ContentModel {
  subtitle?: string;
  imageUrl?: string;
  mapElements?: MapElement[];
  text?: string;
}
