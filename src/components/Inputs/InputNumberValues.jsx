import PropTypes from 'prop-types';
import styles from './inputs.module.css';

export const InputNumberValues = ({ 
  name, 
  error, 
  errorMessage, 
  placeholder, 
  className, 
  required, 
  min, 
  max, 
  step, 
  value, 
  changeValue 
}) => {
  const changeinput = (e) => {
    changeValue(e.target.value)
  }
  return (
    <div className={styles.inputs_container}>
      <input
        type="number"
        name={name}
        placeholder={placeholder}
        className={className}
        required={required}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => changeinput(e)}
        style={{
          borderColor: error ? 'red' : '',
        }}
      />
      {error && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  );
};

InputNumberValues.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  changeValue: PropTypes.func.isRequired,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

InputNumberValues.defaultProps = {
  placeholder: '',
  className: '',
  required: false,
  min: undefined,
  max: undefined,
  step: 1,
  error: false,
  errorMessage: '',
};

export default InputNumberValues;
