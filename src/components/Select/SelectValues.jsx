import PropTypes from "prop-types";
import styles from "./select.module.css";
const SelectValues = ({
  name,
  value,
  changevalue,
  options,
  defaultMessage,
  className,
}) => {
  return (
    <select
      name={name}
      className={className !== "" ? className : styles.select_container}
      value={value !== null ? value : ""}
      onChange={(e) => changevalue(e.target.value)}
    >
      <option value="" disabled>
        {defaultMessage}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

SelectValues.propTypes = {
  name: PropTypes.string,
  defaultMessage: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  changevalue: PropTypes.func,
  options: PropTypes.object,
};
export default SelectValues;
