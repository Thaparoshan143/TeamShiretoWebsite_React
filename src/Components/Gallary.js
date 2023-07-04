import React from 'react';
import "./Gallary.css";
import Image from "../Images/DesignImage/AlmostTop.jpg";

const GallaryCount = [0,1,2,3,4,5,6,7,8,9,10,11];

function Gallary() {
  return (
    <div className="Gallary page flex-c-se-c">
        <h1 className="page-title gray-text">Temporary Gallary</h1>
        <div className="Gallary-Cont">
            {GallaryCount.map((num)=>{
                return <Img addClass={(num%3==0)?"More-Space":""} key={num} />
            })}
        </div>
    </div>
  )
}

function Img(props)
{
    return (
        <img className={"Gallary-Photo "+props.addClass} src={Image} alt="Images here..."/>
    )
}

export default Gallary