import {ContentModel} from "./content.model";

export interface NavItemModel {
  navTitle: string;
  mainTextTitle: string;
  content: ContentModel[];
  active?: boolean;
}
