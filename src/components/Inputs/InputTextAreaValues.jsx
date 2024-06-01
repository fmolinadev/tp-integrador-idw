import PropTypes from 'prop-types';


const InputTextAreaValues = ({ name, placeholder, className, required, cols, rows, value,changevalue }) => {

  const changeText = (e) => {
    changevalue(e.target.value)
  }

  return (
    <textarea
      
      name={name}
      placeholder={placeholder}
      className={className}
      required={required}
      cols={cols}
      rows={rows}   
      value={value}   
      onChange={(e) => changeText(e)}
    />
  );
};

InputTextAreaValues.propTypes = {
    
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    required: PropTypes.bool,
    cols:PropTypes.string,
    rows:PropTypes.string,
    value:PropTypes.string,
    changevalue:PropTypes.func,

  };
export default InputTextAreaValues;