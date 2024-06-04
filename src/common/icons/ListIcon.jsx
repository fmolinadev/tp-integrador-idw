import React from "react";
import ListImage from "../../assets/icon/boton-listar.png";
import styles from "./icons.module.css";
const ListIcon = () => {
  return <img className={styles.icon_container} src={ListImage} alt="list" />;
};

export default ListIcon;
