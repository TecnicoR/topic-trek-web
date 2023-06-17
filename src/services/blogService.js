import { apiHelper } from "./apiHelper";

export const getLatestBlogs = async () => {
  try {
    const response = await apiHelper.get(`/blogs`);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await apiHelper.get(`/blogs/${id}`);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const getBlogByUserId = async (id) => {
  try {
    const response = await apiHelper.get(`/blogs/user/?userId=${id}`);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const deleteBlogById = async (id) => {
  try {
    const response = await apiHelper.delete(`/blogs/${id}`);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const createBlog = async (data) => {
  try {
    const response = await apiHelper.post(`/blogs`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};



// Below code is hardcoded mock data from server
