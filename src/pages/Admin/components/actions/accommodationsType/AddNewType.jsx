import React, { useEffect, useState } from "react";
import { getAllTypesAccommodations } from "../../../../../services/tiposDeAlojamientos/getAll.tiposDeAlojamientos.services";
import { createNewTypesAccommodations } from "../../../../../services/tiposDeAlojamientos/add.tipoDeAlojamiento.js";
import { ButtonAction, InputTextValues } from "../../../../../components";
import swal from "sweetalert2";
import styles from "./../../components.module.css";

const AddNewType = () => {
  const [accomodationsOptions, setAccomodationsOptions] = useState([]);
  const [addNewType, setAddNewType] = useState("");
  const [isUniqueType, setIsUniqueType] = useState(true);

  const handlerAddNewType = async () => {
    if (addNewType !== "" && isUniqueType) {
      const dataType = await createNewTypesAccommodations({
        Descripcion: addNewType,
      });

      if (dataType.id !== null) {
        setAddNewType("");
        setIsUniqueType(true);
        swal.fire({
          title: "Éxito",
          text: "El nuevo tipo se creo correctamente. ",
          icon: "success",
        });
      }
    }
  };

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

  useEffect(() => {
    const isUnique = accomodationsOptions.every(
      (option) => option.label.toLowerCase() !== addNewType.toLowerCase()
    );
    setIsUniqueType(isUnique);
  }, [addNewType, accomodationsOptions]);

  return (
    <div className={styles.container_placement}>
      <p className={styles.action_title}>
        Define en nombre del nuevo tipo de alojamiento a crear:
      </p>
      <br />
      <div className={styles.input_container_with}>
        <InputTextValues
          value={addNewType}
          changevalue={setAddNewType}
          error={!isUniqueType}
          errorMessage={
            "Ya existe este tipo de alojamiento. Intenta con otro nombre."
          }
          type={"text"}
          name={"new-type"}
          placeholder={"Inserta un nuevo tipo"}
          required={true}
          className={
            styles[!isUniqueType ? "inputs_admins_error" : "inputs_admins"]
          }
        />
      </div>

      <ButtonAction
        message={"Crear nuevo tipo"}
        disabled={(addNewType.length === 0) | !isUniqueType}
        actionHandler={handlerAddNewType}
      />
    </div>
  );
};

export default AddNewType;
