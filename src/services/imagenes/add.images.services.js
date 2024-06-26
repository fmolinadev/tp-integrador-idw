import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const createNewImage = async (newImage) => {
  const data = await axiosService.post({
    baseURL: BASE_URL.IMAGENES,
    path: "/createImagen",
    data: newImage,
  });

  return data;
};
