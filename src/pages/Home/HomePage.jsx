import React, { useEffect, useState } from "react";
import { getAllLodgings } from "../../services/alojamientos/getAll.alojamientos.services";
import { StatusRequestEnum } from "../../enums/statusFetchs.enum";
import styles from "./home.module.css";
import HeroHome from "./components/HeroHome";
import AllCards from "./components/Cards/AllCards";
import { filterLodgings } from "../../utils/filteredResults";
import { getAllImages } from "../../services/imagenes/getAll.images.services";
import { ButtonAction } from "../../components";

function HomePage() {
  const [allLodgings, setAllLodgings] = useState([]);
  const [filteredLodgings, setFilteredLodgings] = useState([]);
  const [statusRequest, setStatusRequest] = useState(StatusRequestEnum.IDLE);

  const [numberOfBathrooms, setNumberOfBathrooms] = useState(null);
  const [numberOfRooms, setNumberOfRooms] = useState(null);
  const [accommodationType, setAccommodationType] = useState(null);

  const [priceRange, setPriceRange] = useState(null);

  const elementsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredLodgings.length / elementsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleLoading = async () => {
    try {
      setStatusRequest(StatusRequestEnum.LOADING);

      const lodgings = await getAllLodgings();
      const images = await getAllImages();

      if (lodgings && images) {
        const lodgingsWithImages = lodgings.map(lodging => {
          const image = images.find(img => img.idAlojamiento === lodging.idAlojamiento);
          return {
            ...lodging,
            Imagen: image ? image.RutaArchivo : null,
          };
        });

        setAllLodgings(lodgingsWithImages);
        setStatusRequest(StatusRequestEnum.SUCCESS);
      } else {
        setStatusRequest(StatusRequestEnum.ERROR);
      }
    } catch (error) {
      console.error("Error al cargar los alojamientos:", error);
      setStatusRequest(StatusRequestEnum.ERROR);
    }
  };

  useEffect(() => {
    handleLoading();
  }, []);

useEffect(() => {
  let filtered = filterLodgings(allLodgings, numberOfBathrooms, numberOfRooms, accommodationType, priceRange);

  setFilteredLodgings(filtered);
  setCurrentPage(1);
}, [allLodgings, numberOfBathrooms, numberOfRooms, accommodationType, priceRange]);



  const paginatedLodgings = filteredLodgings.slice(
    (currentPage - 1) * elementsPerPage,
    currentPage * elementsPerPage
  );

  return (
    <main className={styles.main_container}>
      {statusRequest === StatusRequestEnum.LOADING ? (
        <p>Cargando...</p>
      ) : statusRequest === StatusRequestEnum.ERROR ? (
        <p>Error</p>
      ) : (
        <>
          <HeroHome
            current={allLodgings.length > 0 ? allLodgings.length : 0}
            numberOfBathrooms={numberOfBathrooms}
            setNumberOfBathrooms={setNumberOfBathrooms}
            numberOfRooms={numberOfRooms}
            setNumberOfRooms={setNumberOfRooms}
            accommodationType={accommodationType}
            setAccommodationType={setAccommodationType}
            setPriceRange={setPriceRange}
            priceRange={priceRange}
          />
          <AllCards results={paginatedLodgings} />
          <div className={styles.paginate_container}>
            <ButtonAction actionHandler={handlePrevPage} disabled={currentPage === 1} message="< Atrás" />
            <span className={styles.currentPageStyles}>{currentPage}</span>
            <ButtonAction actionHandler={handleNextPage} disabled={currentPage === totalPages} message="Siguiente >" />
          </div>
        </>
      )}
    </main>
  );
}

export default HomePage;
