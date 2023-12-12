import React, { useState } from 'react';
import { _FeaturedInfo, _SponserInfo, _SupportInfo, _WhyUsInfo } from '../assets/data/PartnershipInfo';
import { FaMinus, FaPlus } from "react-icons/fa";

interface ISupportList
{
    title : string,
    description : string,
};

const Partnership : React.FC = ()=>
{
    return (
        <div className="min-h-[100vh] flex flex-col justify-evenly items-center pt-[8rem]">
            <h1 className="text-4xl font-bold my-8">How you can Support us</h1>
            <SupportUs />
            <h1 className="text-4xl font-bold my-8">Why partner with Us</h1>
            <WhyUs />
            <h1 className="text-4xl font-bold my-8">Our Previous Partners</h1>
            <PreviousPartnerList />
            <h1 className="text-4xl font-bold my-8">Featured in</h1>
            <FeaturedList />
            <PartnerWithUs />
        </div>
    )
}

const SupportUs : React.FC = ()=>
{
    return (
        <div className="w-[80%] flex flex-col justify-evenly items-center p-2 bg-[#333] rounded-xl">
            {
                _SupportInfo.map(({title, description})=>
                {
                    return <SupportList title={title} description={description} />
                })
            }
        </div>
    )
}

const SupportList : React.FC<ISupportList> = ({title, description} : ISupportList)=>
{
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className="w-[100%] pt-4 px-8">
            <div className="flex flex-row justify-between items-center">
                <span className="text-2xl text-theme">{title}</span>
                <a className="hover:text-theme" onClick={()=>setIsActive(!isActive)}>{!isActive?<FaPlus />:<FaMinus />}</a>
            </div>
            <p className={isActive?"my-2 scale-y-100 transition-all duration-[500ms] ease-in-out":"my-0 scale-y-0 transition-all delay-300"}>{isActive?description:""}</p>
            <hr className="border-theme border-[0.1rem] rounded-xl my-3" />
        </div>
    )
}

const WhyUs : React.FC = () =>
{
    return (
        <div className="flex flex-col text-left bg-[#333] p-4 w-[80%] my-8 rounded-xl">
            {_WhyUsInfo.map((item)=>
            {
                return <li className="m-2">{item}<hr className="border-theme border-[0.1rem] border-dashed rounded-xl mt-3" /></li>
            })}
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
        <div className="bg-white rounded-xl flex flex-row justify-evenly items-center p-4 m-4 w-inherit">
            {
                _SponserInfo.map((sponser)=>
                    {
                        return <img src={getSponserURL(sponser)} className="h-[6rem] min-w-[6rem] m-6 hover:scale-[110%] transition duration-300" />
                    })
            }
        </div>
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
        <div className="bg-white rounded-xl flex flex-row justify-evenly items-center p-4 m-4 w-inherit">
            {
                _FeaturedInfo.map((feat)=>
                {
                    return <img src={getFeaturedURL(feat)} className="h-[6rem] min-w-[6rem] m-6 hover:scale-[110%] transition duration-300" />
                })
            }    
        </div>
    )
}

const PartnerWithUs : React.FC = () =>
{
    return (
        <div className="bg-theme w-[100%] min-h-[20rem] my-[5rem] flex flex-col justify-evenly items-center">
            <h1 className="text-6xl text-[#333] font-extrabold uppercase">Do you want to become a partner?</h1>
            <div className="flex flex-row w-[100%] justify-evenly">
                <button className="bg-[#333] rounded-sm text-xl p-6 px-12 border-2 border-[#333] hover:text-theme hover:scale-[105%] transition-all duration-300">Download Proposal</button>
                <button className="bg-[#333] rounded-sm text-xl p-6 px-12 border-2 border-[#333] hover:text-theme hover:scale-[105%] transition-all duration-300">Become a Sponser!</button>
            </div>
        </div>
    )
}

export default Partnership;