import React from "react";
import styles from "./footer.module.css";

const { footer_container_section } = styles;

const Footer = () => {
  return (
    <footer>
      <div className={footer_container_section}>
        <span>Trabajo Integrador IDW</span>
      </div>
    </footer>
  );
};

export default Footer;
