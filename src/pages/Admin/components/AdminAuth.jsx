import React, { useEffect, useState } from "react";
import isValidEmail from "../../../utils/validateEmail";
import { ButtonAction, InputTextValues } from "../../../components";
import coverAuth from "../../../assets/img/landing_init.jpeg";
import styles from "../admin.module.css";

const AdminAuth = ({ actionState }) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isUserValid, setIsUserValid] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorUserMessage, setErrorUserMessage] = useState("");

  useEffect(() => {
    if (email !== "") {
      const isValid = isValidEmail(email);
      if (isValid) {
        setIsEmailValid(true);
        setErrorEmailMessage("");
      } else {
        setIsEmailValid(false);
        setErrorEmailMessage("Debes Ingresar un E-mail válido");
      }
    }
  }, [email]);

  useEffect(() => {
    if (user !== "" && user.length < 4) {
      setIsUserValid(false);
      setErrorUserMessage("Debes Ingresar un usuario válido");
    } else {
      setIsUserValid(true);
      setErrorUserMessage("");
    }
  }, [user]);

  return (
    <div className={styles.auth_panel_login}>
      <figure>
        <img
          className={styles.image_auth_container}
          src={coverAuth}
          alt="auths"
        />
      </figure>
      <div className={styles.inputs_container_auth}>
        <h3 className={styles.title_auth}>Accseso de Admins</h3>

        <p className={styles.title_auth_describe}>
          Ingresa tus credenciales para gestionar la plataforma.
        </p>
        <InputTextValues
          type="text"
          value={user}
          error={!isUserValid}
          errorMessage={errorUserMessage}
          changevalue={setUser}
          name="user"
          placeholder="Usuario"
          className={styles[!isUserValid ? "inputs_auth_error" : "inputs_auth"]}
          required={true}
        />
        <br />
        <InputTextValues
          type="email"
          value={email}
          error={!isEmailValid}
          errorMessage={errorEmailMessage}
          changevalue={setEmail}
          name="email"
          placeholder="Email"
          className={
            styles[!isEmailValid ? "inputs_auth_error" : "inputs_auth"]
          }
          required={true}
        />
        <br />
        <ButtonAction
          message={"Iniciar Sesión"}
          disabled={!isEmailValid || !isUserValid}
          actionHandler={() => actionState()}
        />
      </div>
    </div>
  );
};

export default AdminAuth;
