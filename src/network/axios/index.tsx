import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5151/",
  timeout: 1000 * 1000,
});

export default axiosInstance;
