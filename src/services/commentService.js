import { apiHelper } from "./apiHelper";

export const getAllCommentsByBlogId = async (blogId) => {
  try {
    const response = await apiHelper.get(`/comments?blogId=${blogId}`);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const addComment = async (comment, blogId) => {
  try {
    const response = await apiHelper.post(`/comments?blogId=${blogId}`, comment);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};
