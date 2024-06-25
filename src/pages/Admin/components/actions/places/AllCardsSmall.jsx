import React, { useState, useEffect } from 'react';
import CardSmall from './CardSmall';
import styles from './styles.module.css';
import { ButtonAction } from '../../../../../components';

const AllCardsSmall = ({ AllAccommodations, openModal,setselectedForDetails }) => {
  const elementsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredAccommodations, setFilteredAccommodations] = useState([]);

  useEffect(() => {
    if (AllAccommodations && AllAccommodations.length > 0) {
      const startIndex = (currentPage - 1) * elementsPerPage;
      const endIndex = startIndex + elementsPerPage;
      const slicedAccommodations = AllAccommodations.slice(startIndex, endIndex);
      setFilteredAccommodations(slicedAccommodations);
    } else {
      setFilteredAccommodations([]);
    }
  }, [AllAccommodations, currentPage]);

  const totalPages = Math.ceil(AllAccommodations.length / elementsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <section>
      <div className={styles.all_results_values}>
        <div className={styles.all_cardsmall_container}>
          {filteredAccommodations.length > 0 ? (
            filteredAccommodations.map((accommodation, index) => (
              <CardSmall key={index} dataCard={accommodation} openModal={openModal} setselectedForDetails={setselectedForDetails} />
            ))
          ) : (
            <p>No hay resultados para mostrar</p>
          )}
        </div>
        <div className={styles.paginate_container}>
          <ButtonAction actionHandler={handlePrevPage} disabled={currentPage === 1} message="< Atrás" />
          <span className={styles.currentPageStyles}>{currentPage}</span>
          <ButtonAction actionHandler={handleNextPage} disabled={currentPage === totalPages} message="Siguiente >" />
            
        </div>
      </div>
    </section>
  );
};

export default AllCardsSmall;
