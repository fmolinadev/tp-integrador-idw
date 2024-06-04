import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const createNewTypesAccommodations = async (newType) => {
  const data = await axiosService.post({
    baseURL: BASE_URL.TIPO_ALOJAMIENTOS,
    path: "/createTipoAlojamiento",
    data: newType,
  });

  return data;
};
