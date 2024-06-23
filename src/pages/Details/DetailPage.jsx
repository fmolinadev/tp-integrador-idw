import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ROUTES_PATHS from "../../routes/routesPath";
import { StatusRequestEnum } from "../../enums/statusFetchs.enum";
import { getDetailsForOneLodgings } from "../../services/alojamientos/getDetail.alojamientos.services ";
import { ButtonAction } from "../../components";
import ViewDetails from "./components/ViewDetails";
import styles from "./details.module.css";
import { getAllImages } from "../../services/imagenes/getAll.images.services";

function DetailPage() {
  const { id } = useParams();
  const [statusRequest, setStatusRequest] = useState(StatusRequestEnum.IDLE);
  const [detailsBooking, setDetailBooking] = useState(null);

  const handleLoadingDetail = async (id) => {
    try {
      setStatusRequest(StatusRequestEnum.LOADING);

      const lodgingDetail = await getDetailsForOneLodgings(id);
      const images = await getAllImages();

      if (lodgingDetail && images) {
        const image = images.find(img => img.idAlojamiento === lodgingDetail.idAlojamiento);
        const lodgingDetailWithImage = {
          ...lodgingDetail,
          Imagen: image ? image.RutaArchivo : null,
        };

        setDetailBooking(lodgingDetailWithImage);
        setStatusRequest(StatusRequestEnum.SUCCESS);
      } else {
        setStatusRequest(StatusRequestEnum.ERROR);
      }
    } catch (error) {
      console.error("Error al cargar los detalles:", error);
      setStatusRequest(StatusRequestEnum.ERROR);
    }
  };

  useEffect(() => {
    if (id) {
      handleLoadingDetail(id);
    }
  }, [id]);

  return (
    <div className={styles.main_container}>
      {statusRequest === StatusRequestEnum.LOADING ? (
        <p>Cargando...</p>
      ) : statusRequest === StatusRequestEnum.ERROR ? (
        <p>Error</p>
      ) : (
        <>
          <ViewDetails details={detailsBooking} />
          <br />
          <Link to={`${ROUTES_PATHS.home}`}>
            <ButtonAction message="Volver" />
          </Link>
        </>
      )}
    </div>
  );
}

export default DetailPage;
