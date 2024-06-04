import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SelectValues, ButtonAction } from "../../../components";
import { getAllTypesAccommodations } from "../../../services/tiposDeAlojamientos/getAll.tiposDeAlojamientos.services";
import styles from "../home.module.css";

const HeroHome = ({
  current,
  numberOfBathrooms,
  setNumberOfBathrooms,
  numberOfRooms,
  setNumberOfRooms,
  accommodationType,
  setAccommodationType,
}) => {
  const [accomodationsOptions, setAccomodationsOptions] = useState([]);

  const handleGetAllAcommodationsOptions = async () => {
    try {
      const accommodations = await getAllTypesAccommodations();
      if (accommodations) {
        const accommodationsOptions = accommodations.map((accommodation) => ({
          value: accommodation.idTipoAlojamiento,
          label: accommodation.Descripcion,
        }));

        setAccomodationsOptions(accommodationsOptions);
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

  return (
    <div className={styles.main_container_hero}>
      <section className={styles.main_section_text}>
        <h3>Hay {current} hospedajes disponibles</h3>
        <p>Nosotros encontramos el lugar, tu solo disfrutas.</p>
      </section>
      <section className={styles.main_section_search}>
        <SelectValues
          key={"bathrooms"}
          name="bathrooms"
          value={numberOfBathrooms}
          changevalue={setNumberOfBathrooms}
          options={bathRoomsOptions}
          defaultMessage="Cantidad de baños"
        />
        <SelectValues
          key={"rooms"}
          name="rooms"
          value={numberOfRooms}
          changevalue={setNumberOfRooms}
          options={bedRoomsOptions}
          defaultMessage="Habitaciones"
        />
        <SelectValues
          key={"type"}
          name="type"
          value={accommodationType}
          changevalue={setAccommodationType}
          options={accomodationsOptions}
          defaultMessage="Tipo de alojamiento"
        />
        <ButtonAction message="Limpiar filtros" actionHandler={clearFilters} />
      </section>
    </div>
  );
};

HeroHome.propTypes = {
  current: PropTypes.number,
  numberOfBathrooms: PropTypes.number | null,
  setNumberOfBathrooms: PropTypes.func,
  numberOfRooms: PropTypes.number | null,
  setNumberOfRooms: PropTypes.func,
  accommodationType: PropTypes.number | null,
  setAccommodationType: PropTypes.func,
};

export default HeroHome;
