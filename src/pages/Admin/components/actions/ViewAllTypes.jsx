import React, { useEffect, useState } from "react";
import { getAllTypesAccommodations } from "../../../../services/tiposDeAlojamientos/getAll.tiposDeAlojamientos.services";
import styles from "../components.module.css";
const ViewAllTypes = () => {
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

  return (
    <div className={styles.container_placement}>
      <p className={styles.action_title}>
        Los tipos de alojamientos creados hasta el momento son:
      </p>
      {accomodationsOptions.length > 0 ? (
        <ul className={styles.ul_columns}>
          {accomodationsOptions.map((e, index) => (
            <li key={index}>{e.label}</li>
          ))}
        </ul>
      ) : (
        <p>No hay tipos de alojamientos creados</p>
      )}
    </div>
  );
};

export default ViewAllTypes;
