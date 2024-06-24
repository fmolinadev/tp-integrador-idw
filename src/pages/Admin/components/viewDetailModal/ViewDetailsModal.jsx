import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import Swal from 'sweetalert2';
import { getAllTypesAccommodations } from '../../../../services/tiposDeAlojamientos/getAll.tiposDeAlojamientos.services';
import { ButtonAction, InputTextValues, SelectValues } from '../../../../components';
import { deleteOneAccommodation } from '../../../../services/alojamientos/delete.alojamiento.services';
import { putAccommodation } from '../../../../services/alojamientos/put.alojamiento.services';
import PlaceholderPicture from "../../../../assets/img/placeholder_pictures.jpg"
import styles from "../components.module.css"
import { validateUrl } from '../../../../utils/validateURL';
import { createNewImage } from '../../../../services/imagenes/add.images.services';
import { deleteImage } from '../../../../services/imagenes/delete.imagens.services';
import { getAllServices } from '../../../../services/amenities/getAll.ameneties.services';
import { deleteServiceLodgings } from '../../../../services/alojamientoServicios/delete.servicesAlojamiento.services';
import { createNewServiceLodging } from '../../../../services/alojamientoServicios/add.servicesAlojamiento.services';


const ViewDetailsModal = ({ details, idSelected,setselectedForDetails, closeModal, refreshDetails }) => {
  const [accomodationsOptions, setAccomodationsOptions] = useState([]);
  const [servicesOptions, setServicesOptions] = useState([]);
  const [typeAccommodation, setTypeAccommodation] = useState("");
  const [haveEdited, setHaveEdited] = useState(false);
  const [newTitle, setNewTitle] = useState(details.Titulo);
  const [newPrice, setNewPrice] = useState(details.PrecioPorDia);
  const [newStatus, setNewStatus] = useState(details.Estado);
  const [viewInputImage, setViewInputImage] = useState(false)
  const [serviceToAdd, setServiceToAdd] = useState(null)

 const [urlImage, setUrlImage] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);


const [imageFromRespoonse, setImageFromResponse] = useState();


  const newImageAdd = {
    idAlojamiento: details.idAlojamiento,
    RutaArchivo: urlImage
}

  useEffect(() => {
    if (urlImage !== "") {
      setIsValidUrl(validateUrl(urlImage));
    } else {
      setIsValidUrl(true);
    }
  }, [urlImage]);


  const handleViewAddImage = () => {
    setViewInputImage(!viewInputImage)
  }

  const handleSubmitImage = async () => {
      if (urlImage !== "" && isValidUrl) {
       const dataReponse = await createNewImage(newImageAdd);
       if (dataReponse !== null) {
        setIsValidUrl(true)
        setUrlImage("")
        setImageFromResponse(dataReponse.RutaArchivo)
        setViewInputImage(!viewInputImage)
        Swal.fire({
          title: "Éxito",
          text: "Imagen guardada correctaamente.",
          icon: "success",
        });
      }  else {
          Swal.fire({
          title: "Error",
          text: "Error al guardar la imagen.",
          icon: "success",
        });
      }
    }
  }

  
  const handleAddService = async  () => {
    if(serviceToAdd !== null){
      const newService = {
      idAlojamiento: Number(details.idAlojamiento),
      idServicio: Number(serviceToAdd),
    }
      const addService = await createNewServiceLodging(newService)
       if (addService) {
       setServiceToAdd(null)
       refreshDetails()
        
        Swal.fire({
          title: "Éxito",
          text: "El servicio se agrego correctamente. ",
          icon: "success",
        });
      }
    } else {
      Swal.fire({
            title: "Error",
            text: "Hubo un problema al eliminar la imagen.",
            icon: "error",
          });
    }
  } 

    const handleDeleteImage = async () => {
     const result = await Swal.fire({
        title: "¿Deseas eliminar la imagen?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        denyButtonText: "No, cancelar",
      });

      if (result.isConfirmed) {
        try {
          const dataType = await deleteImage(
            details.idAlojamiento
          );
          if (dataType) {
            refreshDetails()
            Swal.fire({
              title: "Éxito",
              text: "La imagen eliminó correctamente.",
              icon: "success",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al eliminar la imagen.",
            icon: "error",
          });
        }
      } else if (result.isDenied) {
        Swal.fire("Cambios no guardados", "", "info");
      }
      
  }

  const handleDeleteService = async (srv) => {
     const result = await Swal.fire({
        title: "¿Deseas eliminar el servicio?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        denyButtonText: "No, cancelar",
      });

      if (result.isConfirmed) {
        try {
          const dataServices = await deleteServiceLodgings(
           srv.idAlojamientoServicio
          );
          if (dataServices !== null) {
            refreshDetails()
            Swal.fire({
              title: "Éxito",
              text: "Servicio eliominado correctamente.",
              icon: "success",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al eliminar lel servicio.",
            icon: "error",
          });
        }
      } else if (result.isDenied) {
        Swal.fire("Cambios no guardados", "", "info");
      }
      
  }

  

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


  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };


  const handlePriceChange = (e) => {
    setNewPrice(e.target.value); 
  };


  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
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

  const valuesEdited = {
    Titulo: newTitle,
    PrecioPorDia: newPrice,
    Estado: newStatus
}


  const handleEditValues = () => {
    setHaveEdited(true)
  }

  const handleSubmitEdit = async ()  =>{

    const putResponse = await putAccommodation( details.idAlojamiento, valuesEdited)

    if (putResponse.message !== null) {
       setHaveEdited(false)
       refreshDetails()
        closeModal()
        Swal.fire({
          title: "Éxito",
          text: "El alojamiento se edito correctamente. ",
          icon: "success",
        });
      }
    
    
  }

  useEffect(() => {
    handleGetAllAcommodationsOptions();
    handleGetAllServices();
    
  }, []);

  useEffect(() => {
    const matchingOption = accomodationsOptions.find(
      (option) => option.value === details.TipoAlojamiento
    );

    if (matchingOption) {
      setTypeAccommodation(matchingOption.label);
    }
  }, [accomodationsOptions, details.TipoAlojamiento]);


  const handlerDelete = async () => {
    if (idSelected !== null) {
      const result = await Swal.fire({
        title: "Estás por eliminar un alojamiento",
        showCancelButton: true,
        confirmButtonText: "Sí, borrar",
        denyButtonText: "No, cancelar",
      });

      if (result.isConfirmed) {
        try {
          const dataType = await deleteOneAccommodation(
            details.idAlojamiento
          );
          if (dataType.message.includes("correctamente")) {
            setselectedForDetails(null);
            closeModal()
            Swal.fire({
              title: "Éxito",
              text: "El alojamiento se eliminó correctamente.",
              icon: "success",
            });
          }
          
        } catch (error) {
          closeModal()
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al eliminar el alojamiento.",
            icon: "error",
          });
        }
      } else if (result.isDenied) {
        Swal.fire("Cambios no guardados", "", "info");
      }
    }
  };

   return (
    <div>
      {details !== null ? (
        <article>
            <div >
              <div className={styles.details_placement_card}>
                  
                 <div className={styles.action_picture_container}>
                   <img
                      className={styles.image_details_card}
                      src={ details.Imagen !== null? details.Imagen : imageFromRespoonse !== ""?imageFromRespoonse  : PlaceholderPicture}
                      alt="pictures"
                      /> 
                  {viewInputImage ? (
                  null
                ) :  <div className={styles.button_containers}>
                      <button  disabled={haveEdited === true} onClick={handleViewAddImage} className={ haveEdited === true ? styles.button_action_disabled_images : styles.button_action_images}>{details.Imagen !== null? "Editar imagen": "Agregar imagen"}</button>
                      <button disabled={details.Imagen === null || haveEdited === true}  className={ details.Imagen === null || haveEdited === true ?styles.button_action_disabled_images: styles.button_action_images} onClick={handleDeleteImage}>Quitar imagen </button>
                    </div>}
                    
                 </div>
                 
            <div className={styles.action_picture_container}>
                <div className={styles.describe_values_container}>
                    <b>Titulo:</b>
                     <input
                        type="text"
                        name='title'
                        value={newTitle}
                        onChange={handleTitleChange}
                        readOnly={!haveEdited}
                        style={{
                            border: 'none',
                            outline: 'none',
                            background: 'transparent',
                            fontWeight: 'bold',
                            borderBottom: haveEdited ? '1px solid black' : 'none',
                            borderColor: 'black',
                            width: '100%',
                        }}
                    />
                
                </div>
                <div className={styles.describe_values_container}>
                    <b>Descripción:</b>
                    {details.Descripcion}
                </div>
                <div className={styles.describe_values_container}>
                    <b>Tipo:</b>
                    {typeAccommodation}
                </div>
                 <div className={styles.describe_values_container}>
                    <b>Servicios:</b>
                  {details.Servicios !== null ? (
                  details.Servicios.map((servicio, index) => {
                    const service = servicesOptions.find(srv => srv.value === servicio.idServicio);
                    console.log("SERVICE", service);
                    return (
                      <div className={styles.container_result_service}>
                        {service ? (
                          <React.Fragment>
                            <p key={index}>{service.label}</p>
                            <button className={styles.btn_result_service} onClick={() => handleDeleteService(servicio)}>x</button>
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
                <div >
                  <br />
                  <b>Agregar servicios:</b>
                  <div className={styles.button_containers}>
                    <SelectValues
                    key={"service"}
                    name="service"
                    value={serviceToAdd}
                    changevalue={setServiceToAdd}
                    options={servicesOptions}
                    defaultMessage="Selecciona el servicio"
                     className={
                      styles.input_select_service
                    } 
                    />
                    
                    <ButtonAction
                    message={"Agregar "}
                    disabled={serviceToAdd === null}
                    actionHandler={handleAddService}
        />
                  </div>

                </div>
                <div className={styles.describe_values_container}>
                    {viewInputImage ? (
                  <div className={styles.add_image_container_url}>
                      <InputTextValues
                      type={"url"}
                      name="url"
                      placeholder="Inserta la URL de la imagen"
                      className={styles[!isValidUrl ? "inputs_image_error" : "inputs_image"]}
                      required={true}
                      error={!isValidUrl}
                      errorMesagge={"Debes ingresar una url válida."}
                      value={urlImage}
                      changevalue={setUrlImage}
                    />
                    <ButtonAction message={"Guardar imagen"} disabled={urlImage.length<6} actionHandler={()=>handleSubmitImage()} />
                  </div>
                ) : null}
                </div>
            </div>
            
            </div>
            <div className={ styles.describe_values_iinputs }>
              
                <div className={styles.describe_values_iinputs }>
                    <b>Dormitorios:</b>
                    {details.CantidadDormitorios}
            </div>
            <div className={styles.describe_values_container}>
                <b>Cant. de Baños:</b>
                {details.CantidadBanios}
            </div>
            <div className={styles.describe_values_container}>
                <b>Precio:</b>
                <input
                        type="number"
                        name='price'
                        value={newPrice}
                        onChange={handlePriceChange}
                        readOnly={!haveEdited}
                        style={{
                            border: 'none',
                            outline: 'none',
                            background: 'transparent',
                            fontWeight: 'bold',
                            borderBottom: haveEdited ? '1px solid black' : 'none',
                            borderColor: 'black',
                            width: '120px',
                        }}
                    />
            </div>
            <div  className={styles.describe_values_container}>
                <b>Estado:</b>
                {haveEdited ? (
                <div >
                  <select
                    value={newStatus}
                    onChange={handleStatusChange}
                    style={{
                    fontWeight: 'bold',
                    borderBottom: haveEdited ? '1px solid black' : 'none',
                    borderColor: 'black',
                    width: '120px',
                    marginBottom: '10px', 
                    }}
                >
                    <option value="Disponible">Disponible</option>
                    <option value="Reservado">Reservado</option>
                </select>
                </div>
                ) : (
                <input
                    type="text"
                    value={details.Estado === 'Disponible' ? 'Disponible' : 'Reservado'}
                    readOnly
                    style={{
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontWeight: 'bold',
                    borderBottom: haveEdited ? '1px solid black' : 'none',
                    borderColor: 'black',
                    width: '100%',
                    }}
                />
                )}
            </div>
            </div>
            </div>
            <br />
            <div>
                <ButtonAction message={haveEdited? "Guardar cambios": "Editar"} disabled={false} actionHandler={haveEdited?()=>handleSubmitEdit()  :()=>handleEditValues()} />
                <ButtonAction message="Eliminar" secondary={true} disabled={haveEdited === true} actionHandler={()=>handlerDelete()}  />
            </div>
        </article>
      ) : (
        <p>Sin detalles para mostrar</p>
      )}
    </div>
  );
};

ViewDetailsModal.propTypes = {
  details: PropTypes.object.isRequired,
  idSelected: PropTypes.number,
  setselectedForDetails: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  refreshDetails: PropTypes.func.isRequired
};

export default ViewDetailsModal;