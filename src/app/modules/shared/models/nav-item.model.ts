import {ContentModel} from "./content.model";

export interface NavItemModel {
  title: string;
  content: ContentModel[];
  active?: boolean;
}
