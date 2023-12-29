import React from 'react';
import { SupportList } from "./Partnership";
import { _JoinSupport, _JoinUsQuote } from '../assets/data/Connect';
import { _AboutUs } from '../assets/data/TeamInfo';

const Connect : React.FC = ()=>
{
    return (
        <div className="min-h-[100vh] flex flex-col justify-evenly items-center">
            <JoinUs />
            <AboutUs />
            <Contact />
        </div>
    )
}

const JoinUs : React.FC = ()=>
{
    return (
        <div className="w-[60%] min-h-[100vh] flex flex-col justify-evenly items-center text-justify pt-[5rem]">
            <h1 className="text-5xl text-theme uppercase font-bold tracking-widest">Join Our Team</h1>
            <div className="flex flex-col ">
                <p className="text-lg m-2">{_JoinUsQuote.phraseOne}</p>
                <p className="text-sm m-2 font-light">{_JoinUsQuote.phraseTwo}</p>
                <p className="text-lg m-2">{_JoinUsQuote.phraseThree}</p>
            </div>
            <div className="flex flex-row justify-evenly items-center h-[10rem]">
                {
                    _JoinSupport.map(({title, description})=>
                    {
                        return <SupportList title={title} description={description} />
                    })
                }
            </div>
            <hr className="border-theme w-[100%] border-2 rounded-xl" />
            <a href="//#" className="text-4xl text-theme font-extrabold border-2 border-theme hover:text-white hover:bg-theme shadow-sm px-24 p-6 transition-all duration-300">Apply Now !</a>
        </div>
    )
}

const AboutUs : React.FC = ()=>
{
    const logoPath = require("../assets/images/logo1.png");
    return (
        <div className="p-8 w-[100%] min-h-[50vh] flex flex-col justify-evenly items-center bg-theme-alt">
            <h1 className="text-4xl my-6 font-bold uppercase tracking-widest">About Us</h1>
            <img className="w-[10%]" src={logoPath} alt="logo"></img>
            <p className="font-light w-[70%] text-lg text-justify my-2 p-6">{_AboutUs.info}</p>
        </div>
    )
}

const Contact : React.FC = ()=>
{
    const inputFieldStyle = "flex flex-row justify-between items-center m-2";
    const inputFieldStyleIn = "border-2 border-transparent border-b-theme focus:border-theme transition-all duration-300 border-theme outline-none bg-transparent w-[70%] px-4 text-theme text-sm font-medium ";
    return (
        <form id="ContactUs" className="flex flex-col w-[100%] pt-[5rem] min-h-[60vh] justify-evenly items-center ">
            <h1 className="text-3xl font-bold m-4 text-theme tracking-widest uppercase">Contact Us</h1>
            <div className="flex flex-col w-[50%] p-8 px-16 text-lg font-bold">
                <div className={inputFieldStyle}><label>Name : </label><input type="text" placeholder="Enter your name here.." className={inputFieldStyleIn + "h-[4rem]"} /></div>
                <div className={inputFieldStyle}><label>Email : </label><input type="email" placeholder="Enter your email here.." className={inputFieldStyleIn + "h-[4rem]"} /></div>
                <div className={inputFieldStyle}><label>Message : </label><input type="text" placeholder="Enter your message here.." className={inputFieldStyleIn + "h-[10rem]"}/></div>
            </div>
            <button className="bg-theme text-bold text-xl px-4 p-2 rounded-md my-12 hover:scale-[105%]">Submit</button>
        </form>
    )
}

export default Connect;