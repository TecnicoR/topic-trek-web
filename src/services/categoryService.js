import { apiHelper } from "./apiHelper";

export const getCategories = async () => {
  try {
    const response = await apiHelper.get(`/categories?`);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};
