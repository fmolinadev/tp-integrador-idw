import React from "react";
import ImageView from "./components/ImageView";
import MissionAndVision from "./components/MissionAndVision";
import History from "./components/History";
import Team from "./components/Team";
import teamCover from "../../assets/img/team.png"
import historyCover from "../../assets/img/history_company.jpg"
import styles from "./about.module.css";
const {main_container} =styles;


function AboutPage() {
  return <div className={main_container}>
    <MissionAndVision/>
    <ImageView placeImage={teamCover} 
    legend={"Nuestro Equipo Corporativo en reunión de balance anual."}/>
    <History />
    <ImageView  placeImage={historyCover} legend={"Nuestro punto de inicios en 1980."}/>
    <Team />
  </div>;
}

export default AboutPage;
