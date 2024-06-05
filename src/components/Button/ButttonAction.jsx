import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const ButtonAction = ({ className, message, disabled, actionHandler }) => {
  return (
    <button
      className={
        disabled
          ? styles.button_action_container_disabled
          : styles.button_action_container
      }
      disabled={disabled}
      onClick={actionHandler}
    >
      {message}
    </button>
  );
};

ButtonAction.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  disabled: PropTypes.bool,
  actionHandler: PropTypes.func,
};

export default ButtonAction;
