import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const putServiceandLodgins = async (id, editServiceLodgins) => {
  const data = await axiosService.put({
    baseURL: BASE_URL.ALOJAMIENTOS_Y_SERVICIOS,
    path: `/updateAlojamientoServicio/${id}`,
    data: editServiceLodgins,
  });

  return data;
};
