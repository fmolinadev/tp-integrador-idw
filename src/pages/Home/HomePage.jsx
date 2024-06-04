import React, { useEffect, useState } from "react";
import { getAllLodgings } from "../../services/alojamientos/getAll.alojamientos.services";
import { StatusRequestEnum } from "../../enums/statusFetchs.enum";
import styles from "./home.module.css";
import HeroHome from "./components/HeroHome";
import AllCards from "./components/Cards/AllCards";
import { filterLodgings } from "../../utils/filteredResults";

function HomePage() {
  const [allLodgings, setAllLodgings] = useState([]);
  const [statusRequest, setStatusRequest] = useState(StatusRequestEnum.IDLE);

  const [numberOfBathrooms, setNumberOfBathrooms] = useState(null);
  const [numberOfRooms, setNumberOfRooms] = useState(null);
  const [accommodationType, setAccommodationType] = useState(null);

  const handleLoading = async () => {
    try {
      setStatusRequest(StatusRequestEnum.LOADING);
      const res = await getAllLodgings();

      if (res) {
        setAllLodgings(res);
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

  const filteredLodgings = filterLodgings(
    allLodgings,
    numberOfBathrooms,
    numberOfRooms,
    accommodationType
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
          />
          <AllCards results={filteredLodgings} />
        </>
      )}
    </main>
  );
}

export default HomePage;
