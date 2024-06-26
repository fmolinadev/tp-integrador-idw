import React, { useEffect, useState } from "react";
import { getAllLodgings } from "../../../../../services/alojamientos/getAll.alojamientos.services";
import { StatusRequestEnum } from "../../../../../enums/statusFetchs.enum";
import AllCardsSmall from "./AllCardsSmall";
import styles from "../../components.module.css";
import ModalView from "../../../../../components/Modal/Modal";
import ViewDetailsModal from "../../viewDetailModal/ViewDetailsModal";
import { ButtonAction, SelectValues } from "../../../../../components";
import { filterLodgings } from "../../../../../utils/filteredResults";
import { getAllTypesAccommodations } from "../../../../../services/tiposDeAlojamientos/getAll.tiposDeAlojamientos.services";
import { getAllImages } from "../../../../../services/imagenes/getAll.images.services";
import { getAllServiceAndLodgins } from "../../../../../services/alojamientoServicios/getAll.serviciosAlojamiento.services";

const ViewAllPlaces = () => {
  const [accomodationsTypes, setAccomodationsTypes] = useState([]);
  const [accomodationsOptions, setAccomodationsOptions] = useState([]);
  const [currentDetails, setCurrentDetails] = useState(null);
  const [loadingState, setLoadingState] = useState(StatusRequestEnum.IDLE);
  const [selectedForDetails, setSelectedForDetails] = useState(null); 
  const [modalIsOpen, setIsOpen] = useState(false);
  const [numberOfBathrooms, setNumberOfBathrooms] = useState(null);
  const [numberOfRooms, setNumberOfRooms] = useState(null);
  const [accommodationType, setAccommodationType] = useState(null);


  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

 const handleGetAllAccommodations = async () => {
  setLoadingState(StatusRequestEnum.LOADING);
  try {
    const lodgings = await getAllLodgings();
    const images = await getAllImages();
    const servicesResponse = await getAllServiceAndLodgins();

    if (lodgings && images && servicesResponse) {
      const lodgingsWithImagesAndServices = lodgings.map(lodging => {
        const image = images.find(img => img.idAlojamiento === lodging.idAlojamiento);
        const servicesFiltered = servicesResponse.filter(srv => srv.idAlojamiento === lodging.idAlojamiento);
        const totalServices = servicesFiltered.length > 0 ? servicesFiltered.map(service => ({ idServicio: service.idServicio, idAlojamientoServicio: service.idAlojamientoServicio })) : [];
        return {
          ...lodging,
          Imagen: image ? image.RutaArchivo : null,
          Servicios: totalServices,
        };
      });

      setAccomodationsOptions(lodgingsWithImagesAndServices);
      setLoadingState(StatusRequestEnum.SUCCESS);
    } else {
      setLoadingState(StatusRequestEnum.ERROR);
    }
  } catch (error) {
    setLoadingState(StatusRequestEnum.ERROR);
    console.error("Error al cargar los tipos de alojamiento: ", error);
  }
};

  useEffect(() => {
    handleGetAllAccommodations();
  }, [modalIsOpen]);

  useEffect(() => {
    if (selectedForDetails !== null) {
      const details = accomodationsOptions.find(
        option => option.idAlojamiento === selectedForDetails
      );
      setCurrentDetails(details);
    } else {
      setCurrentDetails(null); 
    }
  }, [selectedForDetails, accomodationsOptions]);

   const handleGetAllAcommodationsOptions = async () => {
    try {
      const accommodations = await getAllTypesAccommodations();
      if (accommodations) {
        const accommodationsOptions = accommodations.map((accommodation) => ({
          value: accommodation.idTipoAlojamiento,
          label: accommodation.Descripcion,
        }));

        setAccomodationsTypes(accommodationsOptions);
      }
    } catch (error) {
      console.error("Error al cargar los tipos de alojamiento: ", error);
    }
  };

  useEffect(() => {
    handleGetAllAcommodationsOptions();
  }, []);

    const bathRoomsOptions = [
    { value: 1, label: "1 baño" },
    { value: 2, label: "2 baños" },
    { value: 3, label: "3 baños" },
    { value: 4, label: "4 baños" },
    { value: 5, label: "5 baños" },
    { value: 6, label: "6 baños" },
  ];

  const bedRoomsOptions = [
    { value: 1, label: "1 habitación" },
    { value: 2, label: "2 habitaciones" },
    { value: 3, label: "3 habitaciones" },
    { value: 4, label: "4 habitaciones" },
    { value: 5, label: "5 habitaciones" },
    { value: 6, label: "6 habitaciones" },
  ];

  const clearFilters = () => {
    setNumberOfBathrooms(null);
    setNumberOfRooms(null);
    setAccommodationType(null);
  };

  const refreshCurrentDetails = async () => {
    handleGetAllAccommodations();
      const updatedDetails = accomodationsOptions.find(
        option => option.idAlojamiento === selectedForDetails
      );
      setCurrentDetails(updatedDetails);
  };

   const filteredLodgings = filterLodgings(
    accomodationsOptions,
    numberOfBathrooms,
    numberOfRooms,
    accommodationType
  );

  return (
    <div className={styles.container_placement}>
      <section className={styles.main_section_search}>
        <SelectValues
          key={"bathrooms"}
          name="bathrooms"
          value={numberOfBathrooms}
          changevalue={setNumberOfBathrooms}
          options={bathRoomsOptions}
          defaultMessage="Cantidad de baños"
          className={styles.select_container}
        />
        <SelectValues
          key={"rooms"}
          name="rooms"
          value={numberOfRooms}
          changevalue={setNumberOfRooms}
          options={bedRoomsOptions}
          defaultMessage="Habitaciones"
          className={styles.select_container}
        />
        <SelectValues
          key={"type"}
          name="type"
          value={accommodationType}
          changevalue={setAccommodationType}
          options={accomodationsTypes}
          defaultMessage="Tipo de alojamiento"
          className={styles.select_container}
        />
        <ButtonAction message="Limpiar filtros" actionHandler={clearFilters} />
      </section>
      {loadingState === StatusRequestEnum.LOADING ? (
        <p>Cargando... </p>
      ) : (
        <AllCardsSmall
          AllAccommodations={filteredLodgings}
          openModal={openModal}
          setselectedForDetails={setSelectedForDetails}
        />
      )}
      <ModalView modalIsOpen={modalIsOpen} closeModal={closeModal} contentLabel="IDW">
        {currentDetails && <ViewDetailsModal details={currentDetails} idSelected={selectedForDetails} setselectedForDetails={setSelectedForDetails} closeModal={closeModal} refreshDetails={refreshCurrentDetails}/> }
      </ModalView>
    </div>
  );
};

export default ViewAllPlaces;
