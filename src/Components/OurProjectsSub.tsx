import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { _PreviousProjects} from '../assets/data/MoreInfo';
import { Link } from 'react-router-dom';
import ProjectFormulaBharat from './ProjectFormulaBharat';

interface IInfoCard
{
    imgURL : string,
    title : string,
    description? : string,
    extraContent? : React.FunctionComponentElement<any> | null
};

const OurProjectsSub : React.FC = () => {
    const extURL = useParams();
    
  return (
    <div className="flex flex-col justify-evenly items-center min-h-[100vh] w-[100%]">
        {_PreviousProjects.map(({imgURL, title, description})=>
        {
            console.log(title==="Formula Bharat")
            return ((title===extURL.id)?<PageContent imgURL={imgURL} title={title} description={description} />:null)
        })}
    </div>
  )
}

const PageContent : React.FC<IInfoCard>  = ({imgURL, title, description, extraContent}:IInfoCard) =>
{
    const thumbnailExist= ()=>
    {
        try{return require(imgURL);}
        catch{return require("../assets/images/projects/pro-2.png");}
    }
    
    const thumbnailPath = thumbnailExist();

    return (
        <div className="flex flex-col justify-evenly items-center w-[100%] min-h-[100vh] h-[100vh]">
            <span className="text-6xl font-bold text-theme uppercase">{title}</span>
            <img src={thumbnailPath} className="max-h-[40%]" />
            <p className="text-justify w-[80%]">{description}</p>
            {
                (title==="Formula Bharat")?<ProjectFormulaBharat />:null
            }
            <Link className="p-2 px-6 hover:px-8 bg-theme-alt hover:bg-theme text-xl transition-all hover:rounded-sm duration-300" to={"/ourprojects"}>Other Projects</Link>
        </div>
    )
}

export default OurProjectsSub