import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const putOneTypesAccommodations = async (id, dataType) => {
  const data = await axiosService.put({
    baseURL: BASE_URL.TIPO_ALOJAMIENTOS,
    path: `/putTipoAlojamiento/${id}`,
    data: dataType,
  });

  return data;
};
