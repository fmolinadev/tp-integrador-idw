import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const createNewService = async (newService) => {
  const data = await axiosService.post({
    baseURL: BASE_URL.SERVICIOS,
    path: "/createServicio",
    data: newService
  });

  return data;
};
