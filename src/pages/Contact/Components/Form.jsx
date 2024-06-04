import React, { useEffect, useState } from "react";
import {
  ButtonSubmit,
  InputTextAreaValues,
  InputTextValues,
} from "../../../components";
import useFormSubmit from "../../../utils/useFormSubmit.js";
import isValidEmail from "../../../utils/validateEmail.js";
import styles from "../contact.module.css";

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [activeSubmit, setActiveSubmit] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");

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
    setActiveSubmit(
      fullname !== "" && email !== "" && subject !== "" && message !== ""
    );
  }, [fullname, email, subject, message]);

  useFormSubmit(); // Esto asegura que useFormSubmit se ejecute

  return (
    <section id="contacto">
      <div className={styles["contenedor-form"]}>
        <form
          action="https://formspree.io/f/xzblnbkg"
          method="POST"
          id="sendForm"
        >
          <div className={styles.dividido}>
            <InputTextValues
              type="text"
              value={fullname}
              changevalue={setFullname}
              name="nombre"
              error={false}
              placeholder="Nombre Completo *"
              className={styles["input-full"]}
              required={true}
              minLength={3}
              maxLength={20}
            />
            <InputTextValues
              type="email"
              value={email}
              error={!isEmailValid}
              errorMessage={errorEmailMessage}
              changevalue={setEmail}
              name="email"
              placeholder="Dirección de Email"
              className={
                styles[!isEmailValid ? "contenedor-form-error" : "input-full"]
              }
              required={true}
            />
          </div>
          <div className={styles.fila}>
            <InputTextValues
              type="text"
              value={subject}
              changevalue={setSubject}
              name="tema"
              placeholder="Tema..."
              className={styles["input-full"]}
              required={true}
              minLength={4}
            />
          </div>
          <div className={styles.fila}>
            <InputTextAreaValues
              name="mensaje"
              value={message}
              changevalue={setMessage}
              cols="30"
              rows="10"
              placeholder="Tu Mensaje..."
              required={true}
              className={styles["input-full"]}
            />
          </div>
          <div>
            <ButtonSubmit
              value="Enviar Mensaje"
              className={
                styles[activeSubmit ? "btn-enviar" : "btn-enviar-disabled"]
              }
              disabled={!activeSubmit}
              actionHandler={handleSubmit}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
