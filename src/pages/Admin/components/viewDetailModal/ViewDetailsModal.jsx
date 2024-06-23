import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { getAllTypesAccommodations } from '../../../../services/tiposDeAlojamientos/getAll.tiposDeAlojamientos.services';
import { ButtonAction } from '../../../../components';
import Swal from 'sweetalert2';
import { deleteOneAccommodation } from '../../../../services/alojamientos/delete.alojamiento.services';
import { putAccommodation } from '../../../../services/alojamientos/put.alojamiento.services';



const ViewDetailsModal = ({ details, idSelected,setselectedForDetails, closeModal }) => {
  const [accomodationsOptions, setAccomodationsOptions] = useState([]);
  const [typeAccommodation, setTypeAccommodation] = useState("");


  const [haveEdited, setHaveEdited] = useState(false);
  const [newTitle, setNewTitle] = useState(details.Titulo);
  const [newPrice, setNewPrice] = useState(details.PrecioPorDia);
  const [newStatus, setNewStatus] = useState(details.Estado);

    // Handler para el cambio de título
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  // Handler para el cambio de precio
  const handlePriceChange = (e) => {
    setNewPrice(e.target.value); // Puedes necesitar convertir el valor a número según tus necesidades
  };

  // Handler para el cambio de estado
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

    console.log(putResponse)

    if (putResponse.message !== null) {
       setHaveEdited(false)
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
            <div>
                <div>
                <figure>
                {/* <img
                    className={styles.card_cover_image}
                    src={PlaceholderPicture}
                    alt="pictures"
                    /> */}
            </figure>
            <div>
                <div>
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
                            width: '80%',
                        }}
                    />
                
                </div>
                <div>
                    <b>Descripción:</b>
                    {details.Descripcion}
                </div>
                <div>
                    <b>Tipo:</b>
                    {typeAccommodation}
                </div>
            </div>
            </div>
            <div>
                <div>
                    <b>Dormitorios:</b>
                    {details.CantidadDormitorios}
            </div>
            <div>
                <b>Cant. de Baños:</b>
                {details.CantidadBanios}
            </div>
            <div>
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
            <div>
                <b>Estado:</b>
                {haveEdited ? (
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
  details: PropTypes.object,
};

export default ViewDetailsModal