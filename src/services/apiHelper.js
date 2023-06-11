import axios from "axios";

export const apiHelper = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiHelper.interceptors.request.use((requestOptions) => {
  const token = localStorage.getItem("accessToken");
  const tempHeaders = { ...requestOptions?.headers };
  if (token != null) {
    tempHeaders["Authorization"] = `Bearer ${token}`;
  }
  // This below header is for LocalTunnel, if using ( for development stage )
  // tempHeaders["Bypass-Tunnel-Reminder"] = "pass";
  requestOptions.headers = tempHeaders;
  return requestOptions;
});
