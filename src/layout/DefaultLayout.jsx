import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
