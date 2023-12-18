import React from "react";
import { RiShieldFlashFill } from "react-icons/ri";
import {IoIosFlash} from "react-icons/io";

interface IPlansCard
{
    rank : string,
    value : string,
    benefits : string[],
};

const PlansCard : React.FC<IPlansCard> = ({rank, value, benefits} : IPlansCard)=>
{
    const bgColor = String(rank==="Platinum"?"#a0b2c6":rank==="Gold"?"#FFD700":rank==="Silver"?"#808080":"#CD7F32");

    return (
        <div className={'w-[100%] hover:scale-[105%] md:w-[40%] min-h-[25rem] h-[25rem] flex flex-row justify-evenly items-center transition-all duration-300'} style={{color: `${bgColor}`}}>
            <div className={"h-[100%] w-[25%] mx-2 text-center flex flex-col justify-center items-center font-extrabold"}>
                <RiShieldFlashFill className="text-8xl"  />
                <h1 className="text-3xl uppercase my-4">{rank}</h1>
                <h1 className="font-medium text-2xl my-2">{value}</h1>
            </div>
            <ul className="flex flex-col justify-evenly items-center py-4 h-[80%] w-[75%]">
                {
                    benefits.map((item)=>
                    {
                        return <li className="font-medium flex flex-row justify-between items-center w-[80%]"><IoIosFlash className="text-2xl w-[10%]" /><span className="text-white w-[80%] text-left block">{item}</span></li>
                    })
                }
            </ul>
        </div>
    )
}

export default PlansCard;