import React from "react";

const OurProjects : React.FC = ()=>
{
    const img1Path = require("../assets/images/pro-bharat/side-1.png");
    const img2Path = require("../assets/images/pro-bharat/side-2.png");

    return (
        <div className="min-h-[100vh] flex flex-col justify-evenly items-center">
            <img alt="vehicle design" className="absolute -z-10 top-[10vh] left-0 opacity-30 w-[100%]" src={img1Path} />
            <img alt="vehicle design" className="absolute bg-scroll top-[100vh] left-0 -z-10 opacity-30 w-[100%]" src={img2Path} />
            
            <div className="flex flex-col justify-evenly items-center w-[80%] h-[100vh]">
                <h1 className="text-theme text-left min-h-[80%] w-[100%] text-10xl font-bold uppercase"><span className="text-4xl text-white">Project<br /></span>Formula<br /> Bharat</h1>
                <a href={"#"} className="p-2 px-4 font-serif border-2 self-end hover:bg-white hover:text-theme cursor-pointer text-xl transition-all duration-300">Explore </a>
            </div>

            <div className="flex flex-col justify-evenly items-center min-h-[200vh]">
                <h1 className="font-bold text-2xl uppercase text-theme">Our Timeline</h1>
            </div>
        </div>
    )
}

const ImageCard : React.FC = ()=>
{
    const img1Path = require("../assets/images/pro-bharat/front-2.png");

    return (
        <div className="flex flex-row justify-between items-center max-h-[30rem] p-2 m-8">
            <img alt="vehicle design" className="w-[30%] h-[100%] transition-all duration-300" src={img1Path} />
        </div>
    )
}

// const ImageCar : React.FC = () =>
// {
//     const img1Path = require("../assets/images/pro-bharat/design1.png");

//     return (
//         <div className="m-[5rem] min-w-[20rem] my-24 min-h-[20rem] hover:rotate-0 rotate-45 hover:scale-[110%] border-4 border-theme-alth bg-transparent transition-all duration-300 ">
//             <img alt="vehicle design" className="opacity-5 w-[100%] hover:opacity-100 transition-all duration-300" src={img1Path} />
//         </div>
//     )
// }

export default OurProjects;