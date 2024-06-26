import React from "react";
import imagePlaceholder from "../../../assets/img/placeholder_pictures.jpg";
import styles from "../details.module.css";

const ImageContainer = ({image}) => {
  return (
    <figure>
      <img
        className={styles.details_image}
        src={image !== null? image: imagePlaceholder}
        alt="pictures"
      />
    </figure>
  );
};

export default ImageContainer;
