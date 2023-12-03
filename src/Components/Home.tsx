import React from "react";
import { _TeamInfo, _AboutUs } from "../assets/data/TeamInfo";

const Home : React.FC = () =>
{
	const groupphotopath = require("../assets/images/groupphoto.png");
	return (
		<>
		<div className="h-[100vh] w-[100vw] flex flex-col justify-evenly items-center">
			<img className="absolute top-10rem left-0 bg-cover bg-center -z-10 brightness-50" src={groupphotopath} alt="Group photo"/>
			<h1 className="font-bold text-8xl text-theme font-roboto">{_TeamInfo.name}</h1>
			<p className="mx-[4rem] p-4 bg-theme-alth text-justify rounded-md">{_TeamInfo.description}</p>
		</div>
		</>
	)
}

export default Home;