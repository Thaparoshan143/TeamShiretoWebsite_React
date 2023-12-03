import React from "react";
import { _MemberInfo } from "../assets/data/TeamInfo";
import TeamCard from "./TeamCard";


const Teams : React.FC = () =>
{
    return (
        <div className="min-h-[100vh] flex flex-col justify-evenly items-center">
            <h1 className="mt-[8rem] font-bold text-2xl text-theme">Meet out Team Members</h1>
            <div className="grid grid-cols-4 p-4 my-12">
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