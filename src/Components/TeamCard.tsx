import React from "react";
import { Social } from "./Footer";

interface IMemberInfo
{
    name : string,
    position : string,
    email : string,
    socials : {
        media : string,
        url : string
    }[]
};

const TeamCard : React.FC<IMemberInfo> = ({name, position, email, socials}: IMemberInfo) =>
{

    const memImgExist= ()=>
    {
        try{return require("../assets/images/team-member/" + name + ".jpg");}
        catch{return null}
    }

    const memPath = memImgExist();

    return (
        <div className="relative m-12  hover:scale-[105%] transition-all duration-300 min-h-[10rem] min-w-[15rem] text-center overflow-hidden">
            <div className="max-h-[30rem] h-[30rem] max-w-[20rem] w-[20rem] overflow-hidden"><img alt="team-member" src={memPath} className="w-[100%] h-[100%] object-cover"/></div>
            <div className="absolute z-10 opacity-0 hover:opacity-100 top-0 left-0 w-[100%] h-[100%] flex flex-col justify-evenly items-center p-4 bg-theme">
                <span className="text-2xl">{name}</span>
                <span className="text-3xl text-[#333] font-extrabold uppercase">{position}</span>
                <a href={`mailto:${email}`} className="text-xl font-light">{email}</a>
                <div className="flex flex-row justify-evenly items-center m-2">
                    {
                        socials.map(({media, url})=>
                        {
                            return <Social media={media} url={url} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default TeamCard;