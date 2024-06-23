import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const deleteImage = async (id) => {
  const data = await axiosService.delete({
    baseURL: BASE_URL.IMAGENES,
    path: `/deleteImagen/${id}`,
  });

  return data;
};
