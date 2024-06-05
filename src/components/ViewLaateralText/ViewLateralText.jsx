import PropTypes from "prop-types";
import styles from "./text.module.css";

const ViewLateralText = ({ dataText, valueText }) => {
  return (
    <div className={styles.card_text_horizontal}>
      <b>{dataText}</b>
      <p>{valueText}</p>
    </div>
  );
};

ViewLateralText.propTypes = {
  dataText: PropTypes.string,
  valueText: PropTypes.string,
};

export default ViewLateralText;
