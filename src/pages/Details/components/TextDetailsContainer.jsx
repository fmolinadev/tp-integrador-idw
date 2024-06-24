import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ViewLateralTextLarge from "./ViewLateralText";
import {
  ViewLateralText,
  ViewLateralNumber,
  ButtonAction,
} from "../../../components";
import { getAllTypesAccommodations } from "../../../services/tiposDeAlojamientos/getAll.tiposDeAlojamientos.services";
import styles from "../details.module.css";
import { getAllServices } from "../../../services/amenities/getAll.ameneties.services";

const TextDetailsContainer = ({ details }) => {
  const [accomodationsOptions, setAccomodationsOptions] = useState([]);
  const [typeAccommodation, setTypeAccommodation] = useState("");

  const [servicesOptions, setServicesOptions] = useState([]);

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

  const handleGetAllServices = async () => {
    try {
      const allServices = await getAllServices();
      if(allServices){
        const serviceOptions = allServices.map((srv) => ({
          value: srv.idServicio,
          label: srv.Nombre,
        }));

        setServicesOptions(serviceOptions);
      }
      
    } catch (error) {
      console.error("Error al cargar los tipos de alojamiento: ", error);
    }
  };

  useEffect(() => {
    handleGetAllAcommodationsOptions();
    handleGetAllServices()
  }, []);

  useEffect(() => {
    const matchingOption = accomodationsOptions.find(
      (option) => option.value === details.TipoAlojamiento
    );

    if (matchingOption) {
      setTypeAccommodation(matchingOption.label);
    }
  }, [accomodationsOptions, details.TipoAlojamiento]);

    

  return (
    <section className={styles.details_text_all}>
      <h2 className={styles.details_title}>{details.Titulo}</h2>
      <ViewLateralTextLarge valueText={details.Descripcion} />

      <p className={styles.details_section_text}>
        Detalles de esta oportunidad:{" "}
      </p>

      <div className={styles.details_text_container_placement}>
        <ViewLateralText
          dataText="Precio por dia: "
          valueText={"$" + details.PrecioPorDia}
        />
        <ViewLateralNumber
          dataText="Habitaciones: "
          valueNumber={details.CantidadDormitorios}
        />
        <ViewLateralNumber
          dataText="Cantidad de baños: "
          valueNumber={details.CantidadBanios}
        />
        <ViewLateralText
          dataText="Tipo de alojamiento: "
          valueText={typeAccommodation}
        />
      </div>
      <br />
       <div className={styles.details_text_container_placement}>
         <p className={styles.details_section_text}>
        Servicios:{" "}
         </p>
        {details.Servicios !== null ? (
                  details.Servicios.map((servicio, index) => {
                    console.log(servicio)
                    const service = servicesOptions.find(srv => srv.value === servicio);
                    
                    return (
                      <div className={styles.container_result}>
                        {service ? (
                          <React.Fragment>
                            <p className={styles.text_service} key={index}>{service.label}</p>
                          </React.Fragment>
                        ) : (
                          <p>Servicio desconocido</p>
                        )}
                      </div>
                    );
                  })
                ) : (
        <p>No se informaron servicios para este alojamiento.</p>
      )}
      </div>
      <div className={styles.details_text_container_placement}>
        {" "}
        <p className={styles.details_section_text}>Estado del alojamiento: </p>
        <ViewLateralText
          dataText="Disponibilidad: "
          valueText={details.Estado}
        />
      </div>
      <br />

      <div>
        <ButtonAction
          message="Reservar"
          actionHandler={() => alert("Va a la reserva")}
        />
      </div>
    </section>
  );
};

TextDetailsContainer.propTypes = {
  details: PropTypes.object,
};

export default TextDetailsContainer;
