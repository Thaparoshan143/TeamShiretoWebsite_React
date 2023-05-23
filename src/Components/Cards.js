import React from 'react';
import "./Cards.css";

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
    
    const cardObject=props.obj;

    return (
        <div className="Card-Cont flex-c-se-c">
            <img className="Member-Photo" src={cardObject[0]} alt="Member Photo" />
            <span className="Member-Name text">{cardObject[1]}</span>
            <span className="Member-Depart text">{cardObject[2]}</span>
            <span className="Member-Email text">{cardObject[3]}</span>
            <div className="Socials flex-row-evenly">
                <span className="Facebook">F</span>
                <a href={cardObject[4]} className="Linkedin">L</a>
            </div>

        </div>
    )
}

export default Cards