import React from 'react';
import "./Cards.css";
import {FaFacebookF,FaLinkedinIn} from "react-icons/fa";

function Cards(props) {
    const cardObjects=props.cardObjects;

  return (
    <div className="Cards-Wrapper flex-r-se-c">
        {cardObjects.map((obj,ind)=>{
            return <Card key={ind} obj={obj} />
        })}
    </div>
  )
}

// This card is for team member only, components are on that basis so..
export function Card(props)
{
    const MemberImageExist= ()=>
    {
        try{return require("../Images/Team Members/"+cardObject[0]+".jpg");}
        catch{return null}
    }
    
    const cardObject=props.obj;

    return (
        <div className="Card-Cont flex-c-se-c">
           {/* use tryRequire if not sure team member photo exists or not */}
           <img className="Member-Photo" src={MemberImageExist()?MemberImageExist():""} alt="Member Photo" />
            <li className="text">{cardObject[0]}</li>
            <li className="sub-title Member-Depart">{cardObject[1]}</li>
            <li className="text">{cardObject[2]}</li>
            <div className="Socials flex-row-evenly">
                {(cardObject[3])!=""|| cardObject[3]==undefined?<a href={cardObject[3]} target="_blank"><FaLinkedinIn className="Social-Icon"/></a>:<></>}
                {(cardObject[4])!=""|| cardObject[4]==undefined?<a href={cardObject[4]} target="_blank"><FaFacebookF className="Social-Icon" /></a>:<></>}
            </div>
        </div>
    )
}

export default Cards