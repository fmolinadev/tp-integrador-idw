import React from "react";
import styles from "./cards.module.css";

const NoResult = () => {
  return (
    <div className={styles.card_no_result_container}>
      <p>
        Sin resultados para mostrar en esta búsqueda. Selecciona nuevamente los
        filtros para ver otros resultados posibles.
      </p>
    </div>
  );
};

export default NoResult;
