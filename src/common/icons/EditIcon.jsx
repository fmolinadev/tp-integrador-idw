import React from "react";
import EditImage from "../../assets/icon/boton-editar.png";
import styles from "./icons.module.css";
const EditIcon = () => {
  return <img className={styles.icon_container} src={EditImage} alt="edit" />;
};

export default EditIcon;
