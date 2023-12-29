import React, { useState } from 'react';
import { _FeaturedInfo, _PromotionPlans, _SponserInfo, _SupportInfo, _WhyUsInfo } from '../assets/data/PartnershipInfo';
import PlansCard from './PlansCard';
import {IoIosFlash} from "react-icons/io";

interface ISupportList
{
    title : string,
    description : string,
};

const Partnership : React.FC = ()=>
{
    return (
        <div className="min-h-[100vh] flex flex-col justify-evenly items-center pt-[5rem]">
            <SupportUs />
            <PromotionPlans />
            <WhyUs />
            <div className="bg-theme-var w-[100%] flex flex-col items-center justify-evenly p-4">
                <PreviousPartnerList />
                <FeaturedList />
            </div>
            <PartnerWithUs />
        </div>
    )
}

const SupportUs : React.FC = ()=>
{
    return (
        <div className="w-[100%] min-h-[50vh] flex flex-col justify-evenly items-center p-2">
            <h1 className="text-3xl font-bold uppercase text-theme">How you can Support us</h1>
            <div className="flex flex-row w-[90%] justify-evenly items-center">
                {
                    _SupportInfo.map(({title, description})=>
                    {
                        return <SupportList title={title} description={description} />
                    })
                }
            </div>
        </div>
    )
}

const PromotionPlans : React.FC = ()=>
{
    return (
        <div className="w-[100%] min-h-[60vh] flex flex-col justify-evenly items-center">
        <h1 className="text-3xl font-bold text-theme uppercase my-4">Promotion Plans</h1>
        <div className="flex w-[100%] justify-evenly items-center flex-wrap flex-col md:flex-row">
            {
                _PromotionPlans.map(({rank, value, benefits})=>
                {
                    return <PlansCard rank={rank} value={value} benefits={benefits} />
                })
            }
        </div>
    </div>
    )
}

const SupportList : React.FC<ISupportList> = ({title, description} : ISupportList)=>
{
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className={"flex flex-col w-[25rem] h-[15rem] justify-evenly hover:translate-y-[-1rem] hover:scale-[102%] hover:bg-theme items-center bg-[#3337] mx-4 text-center p-4 transition-all duration-300"} onMouseOver={()=>setIsActive(true)} onMouseLeave={()=>setIsActive(false)} >
            <span className="text-xl font-bold transition-all duration-300">{title}</span>
            {isActive && <p className={"my-2 font-light text-justify text-sm"}>{description}</p>  }         
        </div>
    )
}

const WhyUs : React.FC = () =>
{
    const whyUsPath = require("../assets/images/whyus.png");

    return (
        <div className="flex flex-row w-[100%] my-8 min-h-[60vh] rounded-xl justify-around items-center">
            <img className="w-[25%]" src={whyUsPath} alt="why-us-img"></img>
            <div className="flex h-[65%] flex-col bg-[#3333] rounded-xl justify-evenly p-2">
                <h1 className="text-4xl text-center text-theme font-bold my-8">Partner with shireto</h1>
                <ul className="flex flex-col justify-evenly items-center w-[100%]">
                    {_WhyUsInfo.map((item)=>
                    {
                        return <li className="m-2 w-[100%] text-sm font-light"><IoIosFlash className="text-2xl mx-2 inline-block text-theme" />{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

const PreviousPartnerList : React.FC = () =>
{
    function getSponserURL(name : string)
    {
        try{return require("../assets/images/spon-feat/Spon/" + name + ".jpg");}
        catch{return null}
    }

    return (
        <>
        <h1 className="text-3xl font-bold">Our Previous Partners</h1>
        <div className="flex flex-row justify-evenly items-center m-4 w-inherit">
            {
                _SponserInfo.map((sponser)=>
                    {
                        return <img alt={sponser} src={getSponserURL(sponser)} className="bg-white rounded-xl p-4 h-[5rem] min-w-[5rem] mx-4 hover:scale-[110%] transition duration-300" />
                    })
            }
        </div>
        </>
    )
}

const FeaturedList : React.FC = () => 
{
    function getFeaturedURL(name : string)
    {
        try{return require("../assets/images/spon-feat/Feat/" + name + ".jpg");}
        catch{return null}
    }

    return (
        <>
        <h1 className="text-3xl font-bold mt-4">Featured in</h1>
        <div className="flex flex-row justify-evenly items-center m-4 w-[80%]">
            {
                _FeaturedInfo.map((feat)=>
                {
                    return <img alt={feat} src={getFeaturedURL(feat)} className="p-2 rounded-xl bg-white h-[5rem] min-w-[5rem] m-2 hover:scale-[110%] transition duration-300" />
                })
            }    
        </div>
        </>
    )
}

const PartnerWithUs : React.FC = () =>
{
    return (
        <div className=" w-[100%] min-h-[15rem] my-[3rem] flex flex-col justify-evenly items-center">
            <h1 className="text-4xl font-extrabold text-theme uppercase">Do you want to become a partner?</h1>
            <div className="flex flex-row w-[100%] justify-evenly">
                <button className="bg-[#333] rounded-sm text-lg p-4 px-6 hover:bg-theme hover:text-white text-white hover:scale-[105%] transition-all duration-300">Download Proposal</button>
                <button className="bg-[#333] rounded-sm text-lg p-4 px-6 hover:bg-theme hover:text-white text-white hover:scale-[105%] transition-all duration-300">Become a Sponser!</button>
            </div>
        </div>
    )
}

export default Partnership;
export { SupportList };