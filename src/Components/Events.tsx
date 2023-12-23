import React from "react";
import { _Events } from "../assets/data/MoreInfo";
import InfoCard from "./InfoCard";

const Events : React.FC = ()=>
{
    return (
        <div className="min-h-[150vh] flex flex-col justify-evenly items-center">
            <h1 className="text-4xl text-theme font-bold uppercase">Resources</h1>
            {
                _Events.map(({imgURL, title, description})=>
                {
                    return <InfoCard imgURL={imgURL} title={title} description={description} />
                })
            }
        </div>
    )
}

export default Events;