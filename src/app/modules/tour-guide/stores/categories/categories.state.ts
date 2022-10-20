import {CategoryViewModel} from "../../models/category.model";

export interface CategoriesState {
  fetched: boolean;
  loading: boolean;
  categories: CategoryViewModel[];
}

export const getDefaultCategoriesState: CategoriesState = {
  fetched: false,
  loading: false,
  categories: []
}
