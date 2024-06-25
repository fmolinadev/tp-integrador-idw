import { BASE_URL } from "../../global.request";
import { axiosService } from "../axios.service";


export const postNewLodgings = async (newLodgings) => {
  try {
    const data = {
      Titulo: newLodgings.Titulo,
      Descripcion: newLodgings.Descripcion,
      TipoAlojamiento: Number(newLodgings.TipoAlojamiento),
      Latitud:newLodgings.Latitud,
      Longitud: newLodgings.Longitud,
      PrecioPorDia: newLodgings.PrecioPorDia,
      CantidadDormitorios: newLodgings.CantidadDormitorios,
      CantidadBanios: newLodgings.CantidadBanios,
      Estado: "Disponible"
    };

    const response = await axiosService.post({
      baseURL: BASE_URL.ALOJAMIENTOS,
      data,
      path: "/createAlojamiento",
    });

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};