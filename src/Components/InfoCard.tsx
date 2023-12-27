import React from 'react'
import { Link } from 'react-router-dom';

interface IInfoCard
{
    imgURL : string,
    title : string,
    description? : string,
};

const InfoCard : React.FC<IInfoCard> = ({imgURL, title, description} : IInfoCard) => {
    const thumbnailExist= ()=>
    {
        try{return require("../assets/images/"+imgURL);}
        catch{return require("../assets/images/logo1.png");}
    }
    
    const thumbnailPath = thumbnailExist();
    const currURL = window.location.href;
  return (
    <div className="flex flex-row justify-evenly items-center w-[70%] p-4 text-center min-h-[20rem] h-[20rem]">
        <div className="h-[100%] w-[40%] overflow-hidden">
            <img src={thumbnailPath} alt="thumbnail" className="h-[100%] w-[100%] object-cover hover:scale-[105%] transition-all duration-300" />
        </div>
        <div className="h-[100%] flex flex-col justify-evenly items-center w-[50%]">
            <span className="text-5xl text-theme-alt font-medium uppercase">{title}</span>
            <p className="text-justify">{description?.substring(0,40) + "..."}</p>
            <Link className="p-2 px-6 hover:px-8 bg-[#000] text-theme text-xl transition-all hover:border-theme border-2 border-transparent duration-300" to={currURL + "/" + title}>Read More</Link>
        </div>
    </div>
  )
}

export default InfoCard;
