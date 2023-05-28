import React from 'react';
import "./Resources.css";
import "../uni.css";
import GroupPhoto from "../Images/GroupPhoto.jpeg"

const newsTitle=["Vehicle Reveal","Team Introduction"];
const blogsTitle=["Frames","Motors and Powertrain"]

function Resources() {
  return (
    <div className="page Resources flex-r-se-c">
        <div className="Res-Part Gallery-Cont flex-c-se-c">
          <span className="sub-title">Gallery</span>
          <img src={GroupPhoto} alt="groupphoto" />
          <button className="btn">See More</button>
        </div>
        <div className="Res-Part News-Cont flex-c-se-c">
          <span className="sub-title">News</span>
          <News />
          <button className="btn">More News</button>
        </div>
        <div className="Res-Part Blog-Cont flex-c-se-c">
          <span className="sub-title">Blog</span>
          <Blogs />
          <button className="btn">More</button>
        </div>
    </div>
  )
}

function Blogs()
{
  return (
    <div className="Blog-Sec flex-c-se-c">
      {blogsTitle.map((title)=>{
        return <div className="Blog flex-r-se-c">{title}</div>
      })}
    </div> 
  )
}

function News()
{
  return (
    <div className="News-Sec flex-c-se-c">
      {newsTitle.map((title)=>{
        return <div className="News flex-r-se-c">{title}</div>
      })}
    </div>
  )
}

export default Resources