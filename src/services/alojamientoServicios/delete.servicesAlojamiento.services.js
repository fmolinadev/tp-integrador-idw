import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const deleteServiceLodgings = async (id) => {
  const data = await axiosService.delete({
    baseURL: BASE_URL.ALOJAMIENTOS_Y_SERVICIOS,
    path: `/deleteAlojamientoServicio/${id}`,
  });

  return data;
};
