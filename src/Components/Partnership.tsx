import React, { useState } from 'react';
import { _SupportInfo, _WhyUsInfo } from '../assets/data/PartnershipInfo';
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
            <p className="my-2">{isActive?description:""}</p>
            <hr className="border-theme border-[0.1rem] rounded-xl my-3" />
        </div>
    )
}

const WhyUs : React.FC = () =>
{
    return (
        <div className="flex flex-col text-left bg-[#333] p-4 w-[80%] my-8">
            {_WhyUsInfo.map((item)=>
            {
                return <li className="m-2">{item}<hr className="border-theme border-[0.1rem] border-dashed rounded-xl mt-3" /></li>
            })}
        </div>
    )
}

export default Partnership;