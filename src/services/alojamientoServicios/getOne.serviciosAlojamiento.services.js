import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const getOneServiceAndLodgins = async (id) => {
  const data = await axiosService.get({
    baseURL: BASE_URL.ALOJAMIENTOS_Y_SERVICIOS,
    path:`/getAlojamientoServicio/${id}`,   
  });
  return data;
};
