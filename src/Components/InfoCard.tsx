import React from 'react'
import { Link } from 'react-router-dom';

interface IInfoCard
{
    imgURL : string,
    title : string,
    description? : string 
};

const InfoCard : React.FC<IInfoCard> = ({imgURL, title, description} : IInfoCard) => {
    const thumbnailExist= ()=>
    {
        try{return require(imgURL);}
        catch{return require("../assets/images/logo1.png");}
    }
    
    const thumbnailPath = thumbnailExist();
    const currURL = window.location.href;
  return (
    <div className="flex flex-row border-theme-var border-2 justify-evenly items-center w-[70%] p-4 text-center min-h-[20rem] h-[20rem]">
        <div className="h-[100%] w-[40%] overflow-hidden ">
            <img src={thumbnailPath} className="h-[100%] w-[70%] hover:scale-[105%] transition-all duration-300" />
        </div>
        <div className="h-[100%] flex flex-col justify-evenly items-center w-[50%]">
            <span className="text-5xl text-theme font-medium uppercase">{title}</span>
            <p className="text-justify">{description?.substring(0,40) + "..."}</p>
            <Link className="p-2 px-6 hover:px-8 bg-theme-alt hover:bg-theme text-xl transition-all hover:rounded-sm duration-300" to={currURL + "/" + title}>Read More</Link>
        </div>
    </div>
  )
}

export default InfoCard;
