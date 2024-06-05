import PropTypes from "prop-types";
import styles from "./text.module.css";

const ViewLateralNumber = ({ dataText, valueNumber }) => {
  return (
    <div className={styles.card_text_horizontal}>
      <b>{dataText}</b>
      <p>{valueNumber}</p>
    </div>
  );
};

ViewLateralNumber.propTypes = {
  dataText: PropTypes.string,
  valueNumber: PropTypes.number,
};

export default ViewLateralNumber;
