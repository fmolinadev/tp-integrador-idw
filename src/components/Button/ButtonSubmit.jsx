import React from 'react';
import PropTypes from 'prop-types';

const ButtonSubmit = ({ className, value, disabled, actionHandler }) => {
  return <input type='submit'  className={className} value={value} disabled={disabled} onClick={actionHandler}/>;
};

ButtonSubmit.propTypes = {
  
  className: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  actionHandler: PropTypes.func,
};

export default ButtonSubmit;
