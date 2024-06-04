import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAllTypesAccommodations } from "../../../../services/tiposDeAlojamientos/getAll.tiposDeAlojamientos.services";
import { ButtonAction, SelectValues } from "../../../../components";
import styles from "../components.module.css";
import { deleteOneTypesAccommodations } from "../../../../services/tiposDeAlojamientos/delete.tipoDeALojamiento";

const DeleteOneType = () => {
  const [accomodationsOptions, setAccomodationsOptions] = useState([]);
  const [accommodationType, setAccommodationType] = useState(null);

  const clearFilters = () => {
    setAccommodationType(null);
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

  const handleDeleteType = async () => {
    if (accommodationType !== null) {
      const result = await Swal.fire({
        title: "Estás por eliminar un tipo de alojamiento",
        showCancelButton: true,
        confirmButtonText: "Sí, borrar",
        denyButtonText: "No, cancelar",
      });

      if (result.isConfirmed) {
        try {
          const dataType = await deleteOneTypesAccommodations(
            accommodationType
          );
          if (dataType.id !== null) {
            setAccommodationType(null);
            Swal.fire({
              title: "Éxito",
              text: "El tipo se eliminó correctamente.",
              icon: "success",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al eliminar el tipo de alojamiento.",
            icon: "error",
          });
        }
      } else if (result.isDenied) {
        Swal.fire("Cambios no guardados", "", "info");
      }
    }
  };

  useEffect(() => {
    handleGetAllAcommodationsOptions();
  }, []);

  return (
    <div className={styles.container_placement}>
      <p className={styles.action_title}>
        Seleccionaa ay elimina un tipo de alojamiento:
      </p>
      <br />
      <div className={styles.display_inpui_horizontal}>
        <div className={styles.input_container_with}>
          <SelectValues
            key={"type"}
            name="type"
            value={accommodationType}
            changevalue={setAccommodationType}
            options={accomodationsOptions}
            defaultMessage="Selecciona el tipo a eliminar"
            className={styles["inputs_admins"]}
          />
        </div>
        <div>
          <ButtonAction
            message="Limpiar filtros"
            actionHandler={clearFilters}
          />
        </div>
      </div>

      <ButtonAction
        message={"Eliminar tipo "}
        disabled={accommodationType === null}
        actionHandler={handleDeleteType}
      />
    </div>
  );
};

export default DeleteOneType;
