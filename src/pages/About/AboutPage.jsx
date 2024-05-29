import React from "react";
import ImageView from "./components/ImageView";
import MissionAndVision from "./components/MissionAndVision";
import History from "./components/History";
import Team from "./components/Team";

function AboutPage() {
  return <div>
    <MissionAndVision/>
    <ImageView />
    <History />
    <Team />
  </div>;
}

export default AboutPage;
