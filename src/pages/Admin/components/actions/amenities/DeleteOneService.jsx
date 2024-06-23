import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ButtonAction, SelectValues } from "../../../../../components";
import styles from "../../components.module.css";
import { getAllServices } from "../../../../../services/amenities/getAll.ameneties.services";
import { deleteService } from "../../../../../services/amenities/delete.ameneties.services";

const DeleteOneService = () => {
 const [allServicesCurrently, setAllServicesCurrently] = useState([]);
 const [selectedService, setOneService] = useState(null);

  const clearFilters = () => {
    setOneService(null);
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

  const handleDeleteType = async () => {
    if (selectedService !== null) {
      const result = await Swal.fire({
        title: "Estás por eliminar un servicio",
        showCancelButton: true,
        confirmButtonText: "Sí, borrar",
        denyButtonText: "No, cancelar",
      });

      if (result.isConfirmed) {
        try {
          const dataService = await deleteService(
            selectedService
          );
          if (dataService.id !== null) {
            setOneService(null);
            Swal.fire({
              title: "Éxito",
              text: "El servicio se eliminó correctamente.",
              icon: "success",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al eliminar el servicio.",
            icon: "error",
          });
        }
      } else if (result.isDenied) {
        Swal.fire("Cambios no guardados", "", "info");
      }
    }
  };

  

  return (
    <div className={styles.container_placement}>
      <p className={styles.action_title}>
        Seleccionaa y elimina un servicio:
      </p>
      <br />
      <div className={styles.display_inpui_horizontal}>
        <div className={styles.input_container_with}>
          <SelectValues
            key={"service"}
            name="service"
            value={selectedService}
            changevalue={setOneService}
            options={allServicesCurrently}
            defaultMessage="Selecciona el servicio a eliminar"
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
        message={"Eliminar servicio "}
        disabled={selectedService === null}
        actionHandler={handleDeleteType}
      />
    </div>
  );
};

export default DeleteOneService;
