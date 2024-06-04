import { axiosService } from "../axios.service";
import { BASE_URL } from ".././../global.request";

export const getAllLodgings = async () => {
  const data = await axiosService.get({
    baseURL: BASE_URL.ALOJAMIENTOS,
    path: "/getAlojamientos",
  });

  return data;
};
