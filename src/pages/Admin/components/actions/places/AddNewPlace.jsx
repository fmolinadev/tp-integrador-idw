import React, { useEffect, useState } from "react";
import swal from "sweetalert2";
import { ButtonAction, InputTextAreaValues, InputTextValues, SelectValues } from "../../../../../components/index.js";
import InputNumberValues from "../../../../../components/Inputs/InputNumberValues.jsx";
import { postNewLodgings } from "../../../../../services/alojamientos/postAlojamiento.services.js";
import { getAllLodgings } from "../../../../../services/alojamientos/getAll.alojamientos.services.js";
import { getAllTypesAccommodations } from "../../../../../services/tiposDeAlojamientos/getAll.tiposDeAlojamientos.services.js";
import styles from "./../../components.module.css";

const AddNewPlace = () => {
  const [allTitlesLodgins, setAllTitlesLodgings] = useState([]);
  const [accomodationsOptions, setAccomodationsOptions] = useState([]);
  const [addNewTitle, setAddNewTitle] = useState("");
  const [addNewDescription, setAddNewDescription] = useState("");
  const [accommodationType, setAccommodationType] = useState(null);
  const [addNewLat, setAddNewLat] = useState(null);
  const [addNewLong, setAddNewLong] = useState(null);
  const [addNewPrice, setAddNewPrice] = useState(null);
  const [addNewRooms, setAddNewRooms] = useState(null);
  const [addNewBath, setAddNewBath] = useState(null);

  const [isUniqueType, setIsUniqueType] = useState(true);




  const dataForNewLodgin = {
    Titulo: addNewTitle,
    Descripcion: addNewDescription,
    TipoAlojamiento: Number(accommodationType),
    Latitud: Number(addNewLat),
    Longitud:  Number(addNewLong),
    PrecioPorDia: Number(addNewPrice),
    CantidadDormitorios: Number(addNewRooms),
    CantidadBanios: Number(addNewBath),
    Estado: "Disponible"
  }

  const handlerAddNewType = async () => {
    if (addNewTitle !== "" && isUniqueType) {
       const dataReponse = await postNewLodgings(dataForNewLodgin);
       if (dataReponse.id !== null) {
        setAddNewTitle("")
        setAddNewDescription("")
        setAccommodationType(null)
        setAddNewLat(null)
        setAddNewLong(null)
        setAddNewPrice(null)
        setAddNewRooms(null)
        setAddNewBath(null)
        setIsUniqueType(null)
        swal.fire({
          title: "Éxito",
          text: "El nuevo alojamiento se creo correctamente. ",
          icon: "success",
        });
      } 
    }
  };

  const handleGetAllTitlesOptions = async () => {
    try {
      const allLoadgins = await getAllLodgings();
      if (allLoadgins) {
        const accommodationsOptions = allLoadgins.map((accommodation) => ({
          name: accommodation.Titulo,
        }));

        setAllTitlesLodgings(accommodationsOptions);
      }
    } catch (error) {
      console.error("Error al cargar los tipos de alojamiento: ", error);
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
    handleGetAllTitlesOptions();
  }, []);
  

  useEffect(() => {
    const isUnique = allTitlesLodgins.every(
      (option) => option.name.toLowerCase() !== addNewTitle.toLowerCase()
    );
    setIsUniqueType(isUnique);
  }, [addNewTitle, allTitlesLodgins]);

  return (
    <div className={styles.container_placement}>
      <p className={styles.action_title}>
        Crear nuevo alojamiento:
      </p>
      <br />
      <div className={styles.input_container_with_create}>
       
          <InputTextValues
          value={addNewTitle}
          changevalue={setAddNewTitle}
          error={!isUniqueType}
          errorMessage={
            "Ya existe este nombre de alojamiento. Intenta con otro nombre."
          }
          type={"text"}
          name={"new-name"}
          placeholder={"Inserta un nuevo titulo"}
          required={true}
          className={
            styles[!isUniqueType ? "inputs_admins_error" : "inputs_admins"]
          }
        />
        <br />
        <InputTextAreaValues
          value={addNewDescription}
          changevalue={setAddNewDescription}
          type={"text"}
          name={"new-description"}
          placeholder={"Inserta una descripcion"}
          required={true}
          className={
            styles[!isUniqueType ? "inputs_admins_error" : "inputs_admins"]
          }
        />
        <div className={styles.input_container_with_create_placement}>
            <SelectValues
            key={"type"}
            name="type"
            value={accommodationType}
            changevalue={setAccommodationType}
            options={accomodationsOptions}
            defaultMessage="Seleccionar tipo"
            className={styles["inputs_admins"]}
          />
          <InputNumberValues
          value={addNewLat}
          changeValue={setAddNewLat}
          type={"number"}
          name={"new-lat"}
          placeholder={"Define una latitud"}
          required={true}
          className={
            styles[!isUniqueType ? "inputs_admins_error" : "inputs_admins"]
          }
        />
        <InputNumberValues
          value={addNewLong}
          changeValue={setAddNewLong}
          type={"number"}
          name={"new-long"}
          placeholder={"Define una longitud"}
          required={true}
          className={
            styles[!isUniqueType ? "inputs_admins_error" : "inputs_admins"]
          }
        />
        </div>
        <div className={styles.input_container_with_create_placement}>
           <InputNumberValues
          value={addNewPrice}
          changeValue={setAddNewPrice}
          type={"number"}
          name={"new-long"}
          placeholder={"Precio"}
          required={true}
          className={
            styles[!isUniqueType ? "inputs_admins_error" : "inputs_admins"]
          }
        />
         <InputNumberValues
          value={addNewBath}
          changeValue={setAddNewBath}
          type={"number"}
          name={"new-long"}
          placeholder={"Cantidad de baños"}
          required={true}
          className={
            styles[!isUniqueType ? "inputs_admins_error" : "inputs_admins"]
          }
        />
         <InputNumberValues
          value={addNewRooms}
          changeValue={setAddNewRooms}
          type={"number"}
          name={"new-long"}
          placeholder={"Inserta cantidad de habitaciones"}
          required={true}
          className={
            styles[!isUniqueType ? "inputs_admins_error" : "inputs_admins"]
          }
        />
        </div>


        
      </div>
      <ButtonAction
        message={"Crear"}
        disabled={(addNewTitle.length === 0) | !isUniqueType}
        actionHandler={handlerAddNewType}
      />
    </div>
  );
};

export default AddNewPlace;
