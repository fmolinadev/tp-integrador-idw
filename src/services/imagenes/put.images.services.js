import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const putImage = async (id, dataImage) => {
  const data = await axiosService.put({
    baseURL: BASE_URL.IMAGENES,
    path: `/updateImagen/${id}`,
    data: dataImage,
  });

  return data;
};
