import PropTypes from "prop-types";
import styles from "./cards.module.css";

const ViewText = ({ dataText, valueText }) => {
  return (
    <div className={styles.card_text_horizontal}>
      <b>{dataText}</b>
      <p>{valueText}</p>
    </div>
  );
};

ViewText.propTypes = {
  dataText: PropTypes.string,
  valueText: PropTypes.string | PropTypes.number,
};

export default ViewText;
