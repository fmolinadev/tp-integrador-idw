import React from "react";
import imagePlaceholder from "../../../assets/img/placeholder_pictures.jpg";
import styles from "../details.module.css";

const ImageContainer = () => {
  return (
    <figure>
      <img
        className={styles.details_image}
        src={imagePlaceholder}
        alt="pictures"
      />
    </figure>
  );
};

export default ImageContainer;
