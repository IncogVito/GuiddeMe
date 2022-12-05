import {CategoryViewModel} from "../../models/category.model";

export interface CategoriesStateModel {
  fetched: boolean;
  loading: boolean;
  categories: CategoryViewModel[];
}

export const getDefaultCategoriesState: CategoriesStateModel = {
  fetched: false,
  loading: false,
  categories: []
}
