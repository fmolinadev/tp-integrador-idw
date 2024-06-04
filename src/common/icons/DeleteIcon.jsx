import React from "react";
import DeleteImage from "../../assets/icon/boton_eliminar.png";
import styles from "./icons.module.css";

const DeleteIcon = () => {
  return (
    <img className={styles.icon_container} src={DeleteImage} alt="remove" />
  );
};

export default DeleteIcon;
