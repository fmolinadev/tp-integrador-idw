import React, { useEffect, useState } from "react";

import { ButtonAction, InputTextValues } from "../../../../../components/index.js";
import swal from "sweetalert2";
import styles from "./../../components.module.css";
import { createNewService } from "../../../../../services/amenities/add.ameneties.services.js";
import { getAllServices } from "../../../../../services/amenities/getAll.ameneties.services.js";

const AddNewService = () => {
  const [allServicesCurrently, setAllServicesCurrently] = useState([]);
  const [addNewService, setAddNewService] = useState("");
  const [isUniqueService, setIsUniqueService] = useState(true);

  const handlerAddNewType = async () => {
    if (addNewService !== "" && isUniqueService) {
      const dataService = await createNewService({
        Nombre: addNewService,
      });

      if (dataService.id !== null) {
        setAddNewService("");
        setIsUniqueService(true);
        swal.fire({
          title: "Éxito",
          text: "El nuevo servicio se creo correctamente.",
          icon: "success",
        });
      } else {
         swal.fire({
          title: "Error",
          text: "El nuevo servicio no se pudo crear.",
          icon: "error",
        });
      }
    }
  };

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

  useEffect(() => {
    const isUnique = allServicesCurrently.every(
      (option) => option.Nombre.toLowerCase() !== addNewService.toLowerCase()
    );
    setIsUniqueService(isUnique);
  }, [addNewService, allServicesCurrently]);

  return (
    <div className={styles.container_placement}>
      <p className={styles.action_title}>
        Define en nombre del nuevo servicio a crear:
      </p>
      <br />
      <div className={styles.input_container_with}>
        <InputTextValues
          value={addNewService}
          changevalue={setAddNewService}
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

      <ButtonAction
        message={"Crear servicio"}
        disabled={(addNewService.length === 0) | !isUniqueService}
        actionHandler={handlerAddNewType}
      />
    </div>
  );
};

export default AddNewService;
