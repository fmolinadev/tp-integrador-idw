import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import styles from "./layout.module.css";
function DefaultLayout() {
  return (
    <div className={styles.body_container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
