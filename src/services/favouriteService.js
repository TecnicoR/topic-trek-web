import { apiHelper } from "./apiHelper";

export const addToFav = async (blogId) => {
  try {
    const response = await apiHelper.post(`/favorites/?blogId=${blogId}`);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const removeFromFav = async (blogId) => {
  try {
    const response = await apiHelper.delete(`/favorites/?blogId=${blogId}`);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};


export const getFavorites = async () => {
  try {
    const response = await apiHelper.get(`/favorites`);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};


