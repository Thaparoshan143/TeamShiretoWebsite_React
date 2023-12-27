import React from 'react';
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
        try{return require("../assets/images/"+imgURL)}
        catch{return require("../assets/images/logo1.png");}
    }
    
    const thumbnailPath = thumbnailExist();

    return (
        <div className="flex flex-col justify-evenly items-center w-[100%] min-h-[100vh] pt-[7rem]">
            <span className="text-6xl font-bold text-theme uppercase">{title}</span>
            <img src={thumbnailPath} alt="thumbnail" className="max-h-[30%] max-w-[50%] m-6" />
            {
                (title==="Formula Bharat")?<ProjectFormulaBharat />:<p className="text-justify w-[80%]">{description}</p>
            }
            <Link className="p-2 px-6 hover:px-8 bg-theme-alt hover:bg-theme text-xl transition-all hover:rounded-sm duration-300" to={"/ourprojects"}>Other Projects</Link>
        </div>
    )
}

export default OurProjectsSub