import React from 'react';
import "./Resources.css";
import "../uni.css";
import GroupPhoto from "../Images/GroupPhoto.jpeg";

const newsTitle=["Vehicle Reveal","Team Introduction"];
const blogsTitle=["Frames","Motors and Powertrain"];

function Resources() {
  return (
    <div className="page Resources flex-r-se-c">
        <div className="Res-Part Gallery-Cont flex-c-se-c">
          <h3 className="sub-title">Gallery</h3>
          <img src={GroupPhoto} alt="groupphoto" />
          <button className="btn">See More</button>
        </div>
        <News />
        <Blogs />
    </div>
  )
}

function Blogs()
{
  return (
    <div className="Res-Part Blog-Cont">
      <div className="Blog-Sec flex-c-se-c">
        <h3 className="sub-title">Blog</h3>
        {blogsTitle.map((title)=>{
          return <li className="Blog">{title}</li>
        })}
        <button className="btn">More Blog</button>
      </div> 
    </div>
  )
}

function News()
{
  return (
    <div className="Res-Part News-Cont">
      <div className="News-Sec flex-c-se-c">
        <h3 className="sub-title">News</h3>
        {newsTitle.map((title)=>{
          return <li className="News">{title}</li>
        })}
        <button className="btn">More News</button>
      </div>
    </div>
  )
}

export default Resources