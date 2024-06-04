import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAllTypesAccommodations } from "../../../../services/tiposDeAlojamientos/getAll.tiposDeAlojamientos.services";
import {
  ButtonAction,
  InputTextValues,
  SelectValues,
} from "../../../../components";

import { putOneTypesAccommodations } from "../../../../services/tiposDeAlojamientos/put.tipoDeALojamiento";
import { capitalizeFirstLetter } from "../../../../utils/capitaaalizeFirstLetter";
import styles from "../components.module.css";

const PutOneType = () => {
  const [accomodationsOptions, setAccomodationsOptions] = useState([]);
  const [accommodationType, setAccommodationType] = useState(null);

  const [newNameType, setNewNameType] = useState("");

  const [isUniqueType, setIsUniqueType] = useState(true);

  const handleEditType = async () => {
    if (newNameType !== "" && isUniqueType) {
      const dataType = await putOneTypesAccommodations(accommodationType, {
        Descripcion: capitalizeFirstLetter(newNameType),
      });

      if (dataType.id !== null) {
        setNewNameType("");
        setAccommodationType(null);
        setIsUniqueType(true);
        Swal.fire({
          title: "Éxito",
          text: "El tipo se edito correctamente. ",
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
      (option) => option.label.toLowerCase() !== newNameType.toLowerCase()
    );
    setIsUniqueType(isUnique);
  }, [newNameType, accomodationsOptions]);

  const clearFilters = () => {
    setNewNameType("");
    setAccommodationType(null);
  };

  return (
    <div className={styles.container_placement}>
      <p className={styles.action_title}>
        Elige y edita el nombre de los tipos de alojamiento:{" "}
      </p>
      <br />
      <div className={styles.input_container_with}>
        <SelectValues
          key={"type"}
          name="type"
          value={accommodationType}
          changevalue={setAccommodationType}
          options={accomodationsOptions}
          defaultMessage="Selecciona el tipo a editar"
          className={
            styles[!isUniqueType ? "inputs_admins_error" : "inputs_admins"]
          }
        />
      </div>
      <div className={styles.input_container_with}>
        <InputTextValues
          value={newNameType}
          changevalue={setNewNameType}
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

      <div>
        <ButtonAction
          message={"Editar tipo "}
          disabled={(newNameType.length === 0) | !isUniqueType}
          actionHandler={handleEditType}
        />
        <ButtonAction message="Limpiar filtros" actionHandler={clearFilters} />
      </div>
    </div>
  );
};

export default PutOneType;
