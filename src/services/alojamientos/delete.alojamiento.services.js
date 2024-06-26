import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const deleteOneAccommodation = async (id) => {
  
  const data = await axiosService.delete({
    baseURL: BASE_URL.ALOJAMIENTOS,
    path: `/deleteAlojamiento/${id}`,
  });

  return data;
};
