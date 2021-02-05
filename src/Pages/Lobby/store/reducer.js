import { CATEGORIES_LOADED, ITEMS_LOADED, SET_CATEGORY } from "./actions";

const defaultState = {
  categories: {},
  items: [],
  selectedCategory: { main: "All", sub: [] }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ITEMS_LOADED:
      return {
        ...state,
        items: action.payload
      };
    case CATEGORIES_LOADED:
      return {
        ...state,
        categories: action.payload
      };
    case SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };

    default:
      return state;
  }
};
