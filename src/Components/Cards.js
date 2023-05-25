import React from 'react';
import "./Cards.css";
import {FaFacebookF,FaLinkedinIn} from "react-icons/fa";


function Cards(props) {

    const cardObjects=props.cardObjects;
  return (
    <div className="Cards-Wrapper flex-r-se-c">
        {
            cardObjects.map((obj,ind)=>{
                return <Card key={ind} obj={obj} />
            })
        }
    </div>
  )
}

// This card is for team member only, components are on that basis so..
function Card(props)
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
            <span className="Member-Name text">{cardObject[0]}</span>
            <span className="Member-Depart theme-text">{cardObject[1]}</span>
            <span className="Member-Email text">{cardObject[2]}</span>
            <div className="Socials flex-row-evenly">
                <a href={cardObject[3]} target="_blank"><FaLinkedinIn className="Social-Icon"/></a>
                <a href={cardObject[4]} target="_blank"><FaFacebookF className="Social-Icon" /></a>
            </div>
        </div>
    )
}

export default Cards