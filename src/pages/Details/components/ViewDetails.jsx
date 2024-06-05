import PropTypes from "prop-types";
import ImageContainer from "./ImageContainer";
import TextDetailsContainer from "./TextDetailsContainer";

import styles from "../details.module.css";

const ViewDetails = ({ details }) => {
  return (
    <div className={styles.details_view_container}>
      {details !== null ? (
        <>
          <ImageContainer />
          <TextDetailsContainer details={details} />
        </>
      ) : (
        <p>Sin detalles para mostrar</p>
      )}
    </div>
  );
};

ViewDetails.propTypes = {
  details: PropTypes.object,
};

export default ViewDetails;
