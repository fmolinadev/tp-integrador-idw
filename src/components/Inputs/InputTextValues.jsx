import PropTypes from 'prop-types';
import styles from './inputs.module.css'

const InputTextValues = ({ type, name,error,errorMessage, placeholder, className, required, minLength, maxLength, value,changevalue }) => {
  const changeinput = (e) => {
    changevalue(e.target.value)
  }
  return (
    <div className={styles.inputs_container}>
      <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      required={required}
      minLength={minLength}
      maxLength={maxLength}   
      value={value}   
      onChange={(e) => changeinput(e)}
      style={{
        borderColor: error? 'red' : '',
      }}
      />
      {error && <p>{errorMessage}</p>}
    </div>
  );
};

InputTextValues.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    required: PropTypes.bool,
    minLength:PropTypes.number,
    maxLength:PropTypes.number,
    value:PropTypes.string,
    changevalue:PropTypes.func,
    error:PropTypes.bool,
    errorMesagge:PropTypes.string,
  };
export default InputTextValues;