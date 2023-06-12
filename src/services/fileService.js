import { apiHelper } from "./apiHelper";

export const uploadFileToGetURL = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await apiHelper.get(`/files`, formData);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};
