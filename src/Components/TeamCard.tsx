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
        <div className="m-8 hover:shadow-md hover:shadow-theme transition-all duration-100 min-h-[20rem] min-w-[15rem] rounded-xl text-center overflow-hidden">
            <img src={memPath?memPath:"#"} loading="lazy" className="max-w-[100%] max-h-[70%] w-[100%] h-[70%] object-cover"/>
            <h1 className="font-medium text-2xl my-2">{name}</h1>
            <h2 className="font-bold text-theme">{position}</h2>
            <a className="font-light text-sm my-2" href={`mailto:${email}`}>{email}</a>
            <div className="flex flex-row my-4 w-[100%] justify-evenly items-center">
                {
                    socials ? socials.map(({media, url})=>
                    {
                        return <Social media={media} url={url} />
                    }) : null
                }
            </div>
        </div>
    )
}


export default TeamCard;