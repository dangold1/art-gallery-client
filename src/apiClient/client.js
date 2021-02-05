import axios from "axios";

const API_URL_ROOT = "https://wa-dev-tests-func.azurewebsites.net/api/load";
const API_KEY = "ka83cnn2";

const getItemsApiEndpoint = () => `${API_URL_ROOT}/${API_KEY}/items`;
const getCategoriesApiEndpoint = () => `${API_URL_ROOT}/${API_KEY}/categories`;

const loadCategories = async () => {
  // TODO: Get The full list from the API
  const response = await axios.get(getCategoriesApiEndpoint());
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Invalid API response code");
  }
};

// This method may throw an error
const loadItems = async () => {
  const response = await axios.get(getItemsApiEndpoint());
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Invalid API response code");
  }
};

export { loadCategories, loadItems };
