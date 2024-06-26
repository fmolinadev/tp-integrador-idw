import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const getAllServices = async () => {
  const data = await axiosService.get({
    baseURL: BASE_URL.SERVICIOS,
    path: "/getAllServicios",
  });

  return data;
};
