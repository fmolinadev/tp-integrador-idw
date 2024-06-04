import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const deleteOneTypesAccommodations = async (id) => {
  const data = await axiosService.delete({
    baseURL: BASE_URL.TIPO_ALOJAMIENTOS,
    path: `/deleteTipoAlojamiento/${id}`,
  });

  return data;
};
