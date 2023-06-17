import { apiHelper } from "./apiHelper";

export const uploadFileToGetURL = async (file) => {
  console.log(file)
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await apiHelper.post(`/files`, formData);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};
