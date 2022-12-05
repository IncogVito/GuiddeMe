import {CategoryModel, CategoryViewModel} from "../../models/category.model";

export class CategoryMapperService {

  public static mapToView(categoryModel: CategoryModel): CategoryViewModel {
    return categoryModel;
  }
}
