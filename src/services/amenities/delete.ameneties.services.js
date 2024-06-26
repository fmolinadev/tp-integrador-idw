import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const deleteService = async (id) => {
  const data = await axiosService.delete({
    baseURL: BASE_URL.SERVICIOS,
    path: `/deleteServicio/${id}`,
  });

  return data;
};
