import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const putAccommodation = async (id, dataType) => {
  const data = await axiosService.put({
    baseURL: BASE_URL.ALOJAMIENTOS,
    path: `/putAlojamiento/${id}`,
    data: dataType,
  });

  return data;
};
