import React from "react";
import InfoCard from "./InfoCard";
import { _PreviousProjects, _PreviousProjectsDesc } from "../assets/data/MoreInfo";
import { Link } from "react-router-dom";

const OurProjects : React.FC = ()=>
{
    const img1Path = require("../assets/images/pro-bharat/side-1.png");

    return (
        <div className="min-h-[100vh] flex flex-col justify-evenly items-center">
            <img alt="vehicle design" className="absolute -z-10 top-[0vh] left-0 opacity-30 w-[100%]" src={img1Path} />
            
            <div className="flex flex-col justify-evenly items-center w-[80%] h-[100vh] min-h-[100vh]">
                <h1 className="text-left min-h-[80%] w-[100%] text-10xl font-bold uppercase text-theme-var "><span className="text-4xl text-white">Project<br /></span>Formula<br /> Bharat</h1>
                <Link to={encodeURI("/ourprojects/Formula Bharat")} className="p-2 px-4 font-serif border-2 self-end hover:bg-white hover:text-theme cursor-pointer text-xl transition-all duration-300">Explore </Link>
            </div>

            <div className="flex flex-col justify-evenly items-center min-h-[120vh] w-[100%]">
                <h1 className="text-4xl text-theme-var font-bold my-8">Our previous projects</h1>
                <p className="w-[60%] my-8 text-justify">{_PreviousProjectsDesc}</p>
                {
                    _PreviousProjects.map(({imgURL, title, description})=>
                    {
                        return (title!=="Formula Bharat"?<InfoCard imgURL={imgURL} title={title} description={description}/>:null)
                    })
                }
            </div>
        </div>
    )
}

export default OurProjects;