import React from 'react';
import "./Home.css";
import GroupPhoto from "../Images/GroupPhoto.jpeg";

const teamDesc=["We are a dynamic student-led group of motorsport enthusiasts from various disciplines within the Thapathali Campus. We aim to conceptualise, fabricate, and compete in Formula International events with Nepal’s first Formula E car. Our primary objective is to establish ourselves as a prominent competitor in the global motorsport scene while concurrently promoting and nurturing the motorsport culture in Nepal."]

function Home() {
  return (
    <div className="page Home-Page flex-c-se-c">
        <div className="Gallary-Cont">
            <img src={GroupPhoto} alt="Group Photo"/>
        </div>
        <span className="page-title">Team Shireto</span>
        <span className="Desc-Text">{teamDesc}</span>
    </div>
  )
}

export default Home