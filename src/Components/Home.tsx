import React from "react";
import { _TeamInfo, _AboutUs } from "../assets/data/TeamInfo";

const Home : React.FC = () =>
{
	const groupphotopath = require("../assets/images/groupphoto.png");
	return (
		<>
		<div className="h-[100vh] w-[100vw] flex flex-col justify-evenly items-center">
			<img className="absolute top-10rem left-0 bg-cover bg-center -z-10 brightness-50" src={groupphotopath} alt="Group photo"/>
			<h1 className="font-extrabold text-9xl text-theme font-roboto text-transparent bg-clip-text bg-gradient-to-r from-theme-alth via-theme to-theme-alth bg-300% animate-gradient drop-shadow-xl">{_TeamInfo.name}</h1>
			<p className="mx-[4rem] p-4 bg-theme-alth text-justify rounded-md text-xl">{_TeamInfo.description}</p>
		</div>
		</>
	)
}

export default Home;