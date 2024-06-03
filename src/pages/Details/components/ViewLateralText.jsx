import PropTypes from "prop-types";
import styles from "../details.module.css";

const ViewLateralTextLarge = ({ dataText, valueText }) => {
  return (
    <div className={styles.details_text_horizontal}>
      <p>{valueText}</p>
    </div>
  );
};

ViewLateralTextLarge.propTypes = {
  dataText: PropTypes.string,
  valueText: PropTypes.string,
};

export default ViewLateralTextLarge;
