import { axiosService } from "../axios.service";
import { BASE_URL } from "../../global.request";

export const getAllImages = async () => {
  const data = await axiosService.get({
    baseURL: BASE_URL.IMAGENES,
    path: "/getAllImagenes",
  });

  return data;
};
