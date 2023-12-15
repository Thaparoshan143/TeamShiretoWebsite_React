import React from "react";

const OurProjects : React.FC = ()=>
{

    return (
        <div className="min-h-[150vh] flex flex-col justify-evenly items-center">
            <h1 className="text-theme text-4xl font-bold uppercase">Formula Bharat</h1>
            <div className="flex flex-col justify-evenly items-center">
                <h2 className="text-2xl font-light m-8">Our prototype</h2>
                <div className="flex flex-row justify-evenly items-center w-[100%] flex-nowrap">
                    <ImageCar />
                    <ImageCar />
                    <ImageCar />
                </div>
            </div>
        </div>
    )
}

const ImageCar : React.FC = () =>
{
    const img1Path = require("../assets/images/design1.png");

    return (
        <div className="m-[5rem] min-w-[20rem] my-24 min-h-[20rem] hover:rotate-0 rotate-45 hover:scale-[110%] border-4 border-theme-alth bg-transparent transition-all duration-300 ">
            <img alt="vehicle design" className="opacity-5 w-[100%] hover:opacity-100 transition-all duration-300" src={img1Path} />
        </div>
    )
}

export default OurProjects;