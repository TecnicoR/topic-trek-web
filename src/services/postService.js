// Below code is when getting data from actual server

export const getCurrentUserPosts = async () => {
  try {
    const response = await apiHelper.get(`/posts?${params}`);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};



// Below code is hardcoded mock data from server
