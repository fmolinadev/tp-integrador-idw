import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const putService = async (id, editService) => {
  const data = await axiosService.put({
    baseURL: BASE_URL.SERVICIOS,
    path: `/updateServicio/${id}`,
    data: editService,
  });

  return data;
};
