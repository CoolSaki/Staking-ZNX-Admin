import axios from "axios";
import { REQUEST_API_URL } from "../../config/constant";

export const registerAPI = async (params: FormData) =>
  axios.post(`${REQUEST_API_URL}/admin/users/signup`, params);

export const loginAPI = async (params: FormData) =>
  axios.post(`${REQUEST_API_URL}/admin/users/signin`, params);
