import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const getAllTypesAccommodations = async () => {
  const data = await axiosService.get({
    baseURL: BASE_URL.TIPO_ALOJAMIENTOS,
    path: "/getTiposAlojamiento",
  });

  return data;
};
