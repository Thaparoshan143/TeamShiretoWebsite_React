import React from "react";
import { _MemberInfo } from "../assets/data/TeamInfo";
import TeamCard from "./TeamCard";


const Teams : React.FC = () =>
{
    return (
        <div className="min-h-[100vh] flex flex-col justify-evenly items-center pt-[6rem]">
            <h1 className="font-bold text-3xl text-theme uppercase">Meet out Team Members</h1>
            <div className="grid grid-cols-5 p-2 my-4">
                {
                    _MemberInfo.map(({name, position, email, socials})=>
                    {
                        return <TeamCard name={name} position={position} email={email} socials={socials} />
                    })
                }
            </div>
        </div>
    )
}

export default Teams;