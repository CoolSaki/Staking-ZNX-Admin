import axios from "axios";
import { REQUEST_API_URL } from "../../config/constant";

export const getLogs = async (params: FormData) => {
  try {
    const response = await axios.post(
      `${REQUEST_API_URL}/logs/history`,
      params
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
