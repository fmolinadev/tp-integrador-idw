import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  ButtonAction,
  InputTextValues,
  SelectValues,
} from "../../../../../components";

import { capitalizeFirstLetter } from "../../../../../utils/capitaaalizeFirstLetter";
import styles from "../../components.module.css";
import { getAllServices } from "../../../../../services/amenities/getAll.ameneties.services";
import { putService } from "../../../../../services/amenities/put.ameneties.services";

const PutOneService = () => {
  const [allServicesCurrently, setAllServicesCurrently] = useState([]);
  const [selectedService, setOneService] = useState(null);

  const [newNameService, setnewNameService] = useState("");

  const [isUniqueService, setisUniqueService] = useState(true);



  const handleEditService = async () => {
    if (newNameService !== "" && isUniqueService) {
      const dataType = await putService(selectedService, {
        Nombre: capitalizeFirstLetter(newNameService),
      });

      if (dataType.id !== null) {
        setnewNameService("");
        setOneService(null);
        setisUniqueService(true);
        Swal.fire({
          title: "Éxito",
          text: "El tipo se edito correctamente. ",
          icon: "success",
        });
      }
    }
  };

 const handleGetAllServices = async () => {
    try {
      const allServices = await getAllServices();
      
      if(allServices){
        const servicesOptions = allServices.map((service) => ({
          value: service.idServicio,
          label: service.Nombre,
        }));
        setAllServicesCurrently(servicesOptions);
      }
      
    } catch (error) {
      console.error("Error al cargar los tipos de alojamiento: ", error);
    }
  };

  useEffect(() => {
    handleGetAllServices();
  }, []);

  useEffect(() => {
    const isUnique = allServicesCurrently.every(
      (option) => option.label.toLowerCase() !== newNameService.toLowerCase()
    );
    setisUniqueService(isUnique);
  }, [newNameService, allServicesCurrently]);

  const clearFilters = () => {
    setnewNameService("");
    setOneService(null);
  };

  return (
    <div className={styles.container_placement}>
      <p className={styles.action_title}>
        Elige y edita el servicio:{" "}
      </p>
      <br />
      <div className={styles.input_container_with}>
        <SelectValues
          key={"service"}
          name="service"
          value={selectedService}
          changevalue={setOneService}
          options={allServicesCurrently}
          defaultMessage="Selecciona el servicio a editar"
          className={
            styles[!isUniqueService ? "inputs_admins_error" : "inputs_admins"]
          }
        />
      </div>
      <div className={styles.input_container_with}>
        <InputTextValues
          value={newNameService}
          changevalue={setnewNameService}
          error={!isUniqueService}
          errorMessage={
            "Ya existe este servicio. Intenta con otro nombre."
          }
          type={"text"}
          name={"new-service"}
          placeholder={"Inserta un nuevo servicio"}
          required={true}
          className={
            styles[!isUniqueService ? "inputs_admins_error" : "inputs_admins"]
          }
        />
      </div>

      <div>
        <ButtonAction
          message={"Editar servicio "}
          disabled={(newNameService.length === 0) | !isUniqueService}
          actionHandler={handleEditService}
        />
        <ButtonAction message="Limpiar filtros" actionHandler={clearFilters} />
      </div>
    </div>
  );
};

export default PutOneService;
