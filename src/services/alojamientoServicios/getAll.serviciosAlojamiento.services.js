import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const getAllServiceAndLodgins = async () => {
  const data = await axiosService.get({
    baseURL: BASE_URL.ALOJAMIENTOS_Y_SERVICIOS,
    path: "/getAllAlojamientoServicios",
  });

  return data;
};
