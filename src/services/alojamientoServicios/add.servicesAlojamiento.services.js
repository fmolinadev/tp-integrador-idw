import { BASE_URL } from "../../global.request";
import { axiosService } from "../axios.service";


export const createNewServiceLodging = async (newData) => {
  const data = await axiosService.post({
    baseURL: BASE_URL.ALOJAMIENTOS_Y_SERVICIOS,
    path: "/createAlojamientoServicio",
    data: newData
  });

  return data;
};
