import React from "react";
import styles from "../components.module.css";

const DEfaultAction = () => {
  return (
    <div className={styles.text_default_container}>
      <h2 className={styles.default_title}>Bienvenido/a a tu panel de admin</h2>
      <p className={styles.default_subtitle}>
        Selecciona una accion del panel de la izquierda para continuar
      </p>
    </div>
  );
};

export default DEfaultAction;
