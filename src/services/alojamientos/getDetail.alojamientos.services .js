import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const getDetailsForOneLodgings = async (id) => {
  const data = await axiosService.get({
    baseURL: BASE_URL.ALOJAMIENTOS,
    path: `/getAlojamiento/${id}`,
  });

  return data;
};
