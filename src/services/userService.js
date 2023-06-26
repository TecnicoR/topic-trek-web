import { apiHelper } from "./apiHelper";

export const doLogin = async (data) => {
  try {
    const response = await apiHelper.post(`/users/login`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const doSignup = async (data) => {
  try {
    const response = await apiHelper.post(`/users/signup`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const getMe = async () => {
  try {
    const response = await apiHelper.get(`/users/me`, );
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const updateMe = async (data) => {
  try {
    const response = await apiHelper.patch(`/users`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const forgotPassword = async (data) => {
  try {
    const response = await apiHelper.post(`/users/forgot-password`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};
