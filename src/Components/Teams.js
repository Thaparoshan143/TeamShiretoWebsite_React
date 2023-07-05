import React from 'react';
import "./Teams.css";
import Cards from './Cards';

function Teams() {
  return (
    <div className="page Team-Members flex-c-se-c">
        <h1 className="sub-title">Meet Our Team Members</h1><br />
        <h1 className="gray-text">Team - 2023</h1>
        <Cards />
    </div>
  )
}

export default Teams