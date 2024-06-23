import React, { useEffect, useState } from "react";
import styles from "../../components.module.css";
import { getAllServices } from "../../../../../services/amenities/getAll.ameneties.services";

const ViewAllServices = () => {
  const [allServicesCurrently, setAllServicesCurrently] = useState([]);

  const handleGetAllServices = async () => {
    try {
      const allServices = await getAllServices();
      if(allServices){
        setAllServicesCurrently(allServices);
      }
      
    } catch (error) {
      console.error("Error al cargar los tipos de alojamiento: ", error);
    }
  };

  useEffect(() => {
    handleGetAllServices();
  }, []);

  return (
    <div className={styles.container_placement}>
      <p className={styles.action_title}>
        Los servicios creados hasta el momento son:
      </p>
      {allServicesCurrently.length > 0 ? (
        <ul className={styles.ul_columns}>
          {allServicesCurrently.map((e, index) => (
            <li key={index}>{e.Nombre}</li>
          ))}
        </ul>
      ) : (
        <p>No hay tipos de alojamientos creados</p>
      )}
    </div>
  );
};

export default ViewAllServices;
