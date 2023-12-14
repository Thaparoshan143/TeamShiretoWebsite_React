import React from "react";
import { _TeamInfo, _AboutUs } from "../assets/data/TeamInfo";

const Home : React.FC = () =>
{
	const groupphotopath = require("../assets/images/groupphoto.png");
	const homeVideoPath = require("../assets/video/home.mp4");
	return (
		<>
		<div className="min-h-[100vh] pt-[100vh] w-[100vw] flex flex-col justify-evenly items-center">
			<video src={homeVideoPath} loop={true} autoPlay={true} className="absolute top-[10vh] left-0 w-[100vw] -z-10 h-[90vh]" />
			<div id="bottom" className="min-h-[120vh] w-[100vw] flex flex-col justify-evenly items-center bg-theme-alt">
				<div className="flex flex-row justify-between w-[100%] items-center px-12">
					<img className="bg-cover bg-center w-[60rem] shadow-[-15px_15px_1px_8px_#fff_,15px_-15px_1px_8px_#fff]" src={groupphotopath} alt="Group photo"/>
					<p className="h-[100%] p-12 text-justify text-xl border-r-2 border-t-2">{_TeamInfo.description}</p>
				</div>
				<div className="w-[100%] flex flex-col justify-evenly items-center">
					<h1 className="font-extrabold text-9xl text-theme font-roboto text-transparent bg-clip-text bg-gradient-to-r from-theme-alth via-theme to-theme-alth bg-300% animate-gradient drop-shadow-xl">{_TeamInfo.name}</h1> 
					<span className="mx-[10vw] flex-1 font-bold text-2xl mt-24 tracking-widest ">{_TeamInfo.theme}</span>
				</div>
			</div>
		</div>
		</>
	)
}

export default Home;