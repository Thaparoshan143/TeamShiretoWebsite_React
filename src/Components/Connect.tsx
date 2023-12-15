import React from 'react';
import { _JoinUsQuote } from '../assets/data/Connect';
import { _AboutUs } from '../assets/data/TeamInfo';

const Connect : React.FC = ()=>
{
    return (
        <div className="min-h-[100vh] flex flex-col justify-evenly items-center py-24 ">
            <JoinUs />
            <AboutUs />
            <Contact />
        </div>
    )
}

const JoinUs : React.FC = ()=>
{
    return (
        <div className="w-[60%] min-h-[100vh] flex flex-col justify-evenly items-center text-justify">
            <h1 className="text-6xl text-theme uppercase font-bold tracking-widest">Join Our Team</h1>
            <div className="flex flex-col ">
                <p className="text-xl m-4">{_JoinUsQuote.phraseOne}</p>
                <p className="text-md m-4 font-light">{_JoinUsQuote.phraseTwo}</p>
                <p className="text-xl m-4">{_JoinUsQuote.phraseThree}</p>
            </div>
            <a href="#" className="text-5xl text-theme font-extrabold border-2 border-theme hover:text-white hover:bg-theme shadow-sm px-24 p-6 transition-all duration-300">Apply Now !</a>
            <hr className="border-theme mb-[5rem] w-[100%] border-2 rounded-xl" />
        </div>
    )
}

const AboutUs : React.FC = ()=>
{
    const logoPath = require("../assets/images/logo1.png");
    return (
        <div className="p-8 w-[100%] min-h-[80vh] flex flex-col justify-evenly items-center bg-theme">
            <h1 className="text-6xl my-6 font-bold uppercase tracking-widest">About Us</h1>
            <img className="w-[20%]" src={logoPath} alt="logo"></img>
            <p className="font-light w-[70%] text-xl text-justify my-8 p-6">{_AboutUs.info}</p>
        </div>
    )
}

const Contact : React.FC = ()=>
{
    const inputFieldStyle = "flex flex-row justify-between items-center";
    const inputFieldStyleIn = "border-b-transparent border-b-2 focus:border-theme outline-none bg-transparent w-[70%] px-4 text-theme text-md font-medium ";
    return (
        <form id="ContactUs" className="flex flex-col w-[100%] pt-[10rem] min-h-[100vh] justify-evenly items-center ">
            <h1 className="text-6xl font-bold m-4 text-theme tracking-widest uppercase">Contact Us</h1>
            <div className="flex flex-col w-[50%] p-8 px-16 text-xl font-bold">
                <div className={inputFieldStyle}><label>Name : </label><input type="text" placeholder="Enter your name here.." className={inputFieldStyleIn + "h-[4rem]"} /></div>
                <div className={inputFieldStyle}><label>Email : </label><input type="email" placeholder="Enter your email here.." className={inputFieldStyleIn + "h-[4rem]"} /></div>
                <div className={inputFieldStyle}><label>Message : </label><input type="text" placeholder="Enter your message here.." className={inputFieldStyleIn + "h-[10rem]"}/></div>
            </div>
            <button className="bg-theme text-bold text-xl px-4 p-2 rounded-md my-12 hover:scale-[105%]">Get In Touch</button>
        </form>
    )
}

export default Connect;