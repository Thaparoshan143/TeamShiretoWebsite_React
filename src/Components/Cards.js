import React from 'react';
import "./Cards.css";
import {FaFacebookF,FaLinkedinIn} from "react-icons/fa";
import { _MemberInfo } from '../Data/TeamInfo';

function Cards() {
  return (
    <div className="Cards-Wrapper flex-r-se-c">
        {_MemberInfo.map(({name, position, email, socials})=>{
            return <Card key={name} name={name} position={position} email={email} socials={socials} />
        })}
    </div>
  )
}

// This card is for team member only, components are on that basis so..
export function Card({name, position, email, socials})
{
    const MemberImageExist= ()=>
    {
        try{return require("../Images/Team Members/"+name+".jpg");}
        catch{return null}
    }
    
    return (
        <div className="Card-Cont flex-c-se-c">
           {/* use tryRequire if not sure team member photo exists or not */}
           <img className="Mem-Photo" src={MemberImageExist()?MemberImageExist():""} alt="Member Photo" />
            <li className="text">{name}</li>
            <li className="sub-title Mem-Pos">{position}</li>
            <li className="text">{email}</li>
            <div className="Socials flex-row-evenly">
                {socials[0].media!==""?<a href={socials[0].url} target="_blank"><FaFacebookF className="Social-Icon" /></a>:<></>}
                {socials[1].media!==""?<a href={socials[1].url} target="_blank"><FaLinkedinIn className="Social-Icon"/></a>:<></>}
            </div>
        </div>
    )
}

export default Cards