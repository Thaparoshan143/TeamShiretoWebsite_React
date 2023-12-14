import React from 'react';
import { _JoinUsQuote } from '../assets/data/Connect';
import { _AboutUs } from '../assets/data/TeamInfo';

const Connect : React.FC = ()=>
{
    return (
        <div className="min-h-[100vh] flex flex-col justify-evenly items-center py-24">
            <JoinUs />
            <AboutUs />
            <Contact />
        </div>
    )
}

const JoinUs : React.FC = ()=>
{
    return (
        <div className="w-[60%] flex flex-col justify-evenly items-center text-justify">
            <h1 className="text-6xl text-theme my-6">Join Our Team</h1>
            <p className="text-2xl m-4">{_JoinUsQuote.phraseOne}</p>
            <p className="text-2xl m-4 font-light">{_JoinUsQuote.phraseTwo}</p>
            <p className="text-2xl m-4">{_JoinUsQuote.phraseThree}</p>
            <a href="#" className="text-5xl my-12 text-theme font-extrabold border-2 border-theme hover:text-white hover:bg-theme shadow-sm px-24 p-6 transition-all duration-300">Apply Now !</a>
            <hr className="border-theme my-[5rem] w-[100%] border-2 rounded-xl" />
        </div>
    )
}

const AboutUs : React.FC = ()=>
{
    const logoPath = require("../assets/images/logo1.png");
    return (
        <div className=" p-8 w-[80%] flex flex-col justify-evenly items-center rounded-xl">
            <h1 className="text-6xl my-6 font-bold uppercase text-theme">About Us</h1>
            <img className="w-[30%]" src={logoPath}></img>
            <p className="font-light text-2xl text-justify my-8 p-6 bg-theme-alth">{_AboutUs.info}</p>
            <hr className="border-theme my-[5rem] w-[100%] border-2 border-dashed rounded-xl" />
        </div>
    )
}

const Contact : React.FC = ()=>
{
    return (
        <form className="flex flex-col w-[50%] justify-evenly items-center min-h-[35rem]">
            <h1 className="text-6xl font-bold mb-12">Contact Us</h1>
            <div className="flex flex-row justify-between items-center w-[100%]"><label className="text-2xl font-bold">Name : </label><input type="text" placeholder="Enter your name here.." className="border-b-transparent border-b-2 focus:border-theme outline-none bg-transparent w-[70%] h-[4rem] p-4 text-theme text-2xl"/></div>
            <div className="flex flex-row justify-between items-center w-[100%]"><label className="text-2xl font-bold">Email : </label><input type="email" placeholder="Enter your email here.." className="border-b-transparent border-b-2 focus:border-theme outline-none bg-transparent w-[70%] h-[4rem] p-4 text-theme text-2xl"/></div>
            <div className="flex flex-row justify-between items-center w-[100%]"><label className="text-2xl font-bold">Message : </label><input type="text" placeholder="Enter your message here.." className="border-b-transparent border-b-2 focus:border-theme outline-none bg-transparent w-[70%] h-[10rem] p-4 text-theme text-2xl"/></div>
            <button className="bg-theme text-bold text-xl px-4 p-2 rounded-md my-12 hover:scale-[105%]">Get In Touch</button>
        </form>
    )
}

export default Connect;