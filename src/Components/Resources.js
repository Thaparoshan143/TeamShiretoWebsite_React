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
          <a className="btn" href={'./Gallary'}>See More</a>
        </div>
        <News />
        <Blogs />
    </div>
  )
}

function Blogs()
{
  return (
    <div className="Res-Part Blog-Cont flex-c-se-c">
        <h3 className="sub-title">Blog</h3>
        {blogsTitle.map((title)=>{
          return <li className="Blog">{title}</li>
        })}
        <a className="btn" href={"./References"}>More Blog</a>
    </div>
  )
}

function News()
{
  return (
    <div className="Res-Part News-Cont flex-c-se-c">
        <h3 className="sub-title">News</h3>
        {newsTitle.map((title)=>{
          return <li className="News">{title}</li>
        })}
        <a className="btn" href={"./References"}>More News</a>
    </div>
  )
}

export default Resources