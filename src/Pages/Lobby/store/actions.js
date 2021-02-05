import { mapCategories } from "../../../services/category.service";

export const CATEGORIES_LOADED = "CATEGORIES_LOADED";
export const ITEMS_LOADED = "ITEMS_LOADED";
export const SET_CATEGORY = "SET_CATEGORY";

export const categoriesLoadedActionCreator = (categories) => {
  const payload = mapCategories(categories);
  payload.All = [];
  return {
    type: CATEGORIES_LOADED,
    payload: payload
  };
};

export const itemsLoadedActionCreator = (items) => ({
  type: ITEMS_LOADED,
  payload: items
});

export const setCategoryActionCreator = (category, subCategory) => ({
  type: SET_CATEGORY,
  payload: { main: category, sub: subCategory }
});
