import PropTypes from "prop-types";
import styles from "../details.module.css";

const ViewLateraNumberLarge = ({ dataText, valueText }) => {
  return (
    <div className={styles.details_text_horizontal}>
      <b>{dataText}</b>
      <p>{valueText}</p>
    </div>
  );
};

ViewLateraNumberLarge.propTypes = {
  dataText: PropTypes.string,
  valueText: PropTypes.string,
};

export default ViewLateraNumberLarge;
