import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlaceholderPicture from '../../../../../assets/img/placeholder_pictures.jpg';
import styles from '../places/styles.module.css';
import { getAllTypesAccommodations } from '../../../../../services/tiposDeAlojamientos/getAll.tiposDeAlojamientos.services';

const CardSmall = ({ dataCard, openModal, setselectedForDetails }) => {
  const [accomodationsOptions, setAccomodationsOptions] = useState([]);
  const [typeAccommodation, setTypeAccommodation] = useState("");


  const handleOpenModal = (id) => {
    setselectedForDetails(id)
    openModal()
  }


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
    const matchingOption = accomodationsOptions.find(
      (option) => option.value === dataCard.TipoAlojamiento
    );

    if (matchingOption) {
      setTypeAccommodation(matchingOption.label);
    }
  }, [accomodationsOptions, dataCard.TipoAlojamiento]);


  return (
    <div className={styles.cardsmall_container} onClick={()=>handleOpenModal(dataCard.idAlojamiento)}>
      <h3>{dataCard.Titulo}</h3>
      <div className={styles.display_text_horizontal}>
        <figure className={styles.cardsmall_cover_container}>
          <img
            className={styles.cardsmall_cover_image}
            src={PlaceholderPicture}
            alt="pictures"
          />
        </figure>
        <div>
          <p>{typeAccommodation}</p>
          <p>{dataCard.Estado}</p>
          <p>{dataCard.Descripcion}</p>
        </div>
      </div>
    </div>
  );
};

CardSmall.propTypes = {
  dataCard: PropTypes.shape({
    Titulo: PropTypes.string.isRequired,
    idAlojamiento: PropTypes.number.isRequired,
    Estado: PropTypes.string.isRequired,
    Descripcion: PropTypes.string.isRequired,
    TipoAlojamiento: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardSmall;
