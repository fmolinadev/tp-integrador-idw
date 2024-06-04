import React from "react";
import AddImage from "../../assets/icon/boton-crear.png";
import styles from "./icons.module.css";
const AddIcon = () => {
  return <img className={styles.icon_container} src={AddImage} alt="add" />;
};

export default AddIcon;
