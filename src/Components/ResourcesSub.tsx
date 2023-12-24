import React from 'react';
import { useParams } from 'react-router-dom';
import { _Resources } from '../assets/data/MoreInfo';
import { Link } from 'react-router-dom';

interface IInfoCard
{
    imgURL : string,
    title : string,
    description? : string 
};

const ResourcesSub : React.FC = () => {
    const extURL = useParams();

  return (
    <div className="flex flex-col justify-evenly items-center min-h-[100vh] w-[100%]">
        {_Resources.map(({imgURL, title, description})=>
        {
            return ((title===extURL.id)?<PageContent imgURL={imgURL} title={title} description={description}/>:null)
        })}
    </div>
  )
}

const PageContent : React.FC<IInfoCard>  = ({imgURL, title, description}) =>
{
    const thumbnailExist= ()=>
    {
        try{return require(imgURL);}
        catch{return require("../assets/images/groupphoto.png");}
    }
    
    const thumbnailPath = thumbnailExist();

    return (
        <div className="flex flex-col justify-evenly items-center w-[100%] min-h-[100vh] h-[100vh]">
            <span className="text-6xl font-bold text-theme uppercase">{title}</span>
            <img src={thumbnailPath} className="max-h-[40%]" />
            <p className="text-justify w-[80%]">{description}</p>
            <Link className="p-2 px-6 hover:px-8 bg-theme-alt hover:bg-theme text-xl transition-all hover:rounded-sm duration-300" to={"/resources"}>Find More</Link>
        </div>
    )
}

export default ResourcesSub