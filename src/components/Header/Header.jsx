import React, { useState } from "react";
import { Link } from "react-router-dom";
import ROUTES_PATHS from "../../routes/routesPath";
import styles from "./header.module.css";

const {
  header_container_main,
  header_container_section,
  header_branding,
  header_navbar_container,
} = styles;

const Header = () => {
  const [IsAdmin] = useState(false);

  return (
    <header className={header_container_main}>
      <div className={header_container_section}>
        <span className={header_branding}>BookingIDW</span>
        <nav className={header_navbar_container}>
          <ul>
            <Link to={ROUTES_PATHS.home}>
              <li>Inicio</li>
            </Link>
            {IsAdmin ? (
              <Link to={ROUTES_PATHS.admin}>
                <li>Panel</li>
              </Link>
            ) : null}

            <Link to={ROUTES_PATHS.contact}>
              <li>Contacto</li>
            </Link>
            <Link to={ROUTES_PATHS.about}>
              <li>Sobre nosotros</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
