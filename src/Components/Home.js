import React from 'react';
import "./Home.css";
import GroupPhoto from "../Images/GroupPhoto.jpeg";
import { _TeamInfo } from '../Data/TeamInfo';

function Home() {
  return (
    <div className="page Home-Page flex-c-se-c">
        <div className="Home-Gallary-Cont">
            <img src={GroupPhoto} alt="Team Member Photo"/>
        </div>
        <h1 className="page-title">{_TeamInfo.name}</h1>
        <h3 className="sub-title pCase">{_TeamInfo.theme}</h3>
        <p className="Desc-Text">{_TeamInfo.description}</p>
    </div>
  )
}

export default Home