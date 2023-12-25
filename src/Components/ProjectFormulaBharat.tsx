import React, { useEffect } from 'react';
import { _ProjectBharatDesc, _ProBharatTimeLine, _ProBharatCostBreakdown } from '../assets/data/MoreInfo';
import { useState } from 'react';
import { IoIosFlash } from 'react-icons/io';

interface ITimeLineItem 
{
  stage : string,
  duration : string,
  work : string,
};

interface ICostBreakDownItem 
{
  department : string,
  parts : {
    title : string,
    cost : string,
  }[]
}

const ProjectFormulaBharat = () => {


  return (
    <div className="text-3xl font-bold text-theme min-h-[100vh] w-[100%] flex flex-col justify-evenly items-center">
      <p className="w-[60%] text-xl font-medium text-justify text-white">{_ProjectBharatDesc.what}</p>
      <Timeline />
      <CostBreakDown />
      <DesignRenders />
    </div>
  )
}

const Timeline : React.FC = () =>
{

  return (
    <div className="flex flex-col justify-evenly items-center m-8 w-[100%]">
      <h1 className="text-5xl font-bold uppercase" >{_ProBharatTimeLine.title}</h1>
      <div className="flex flex-row flex-wrap items-center justify-evenly my-8 w-[90%]">
        {
          _ProBharatTimeLine.items.map(({stage, duration, work})=>
          {
            return <TimeLineItem stage={stage} duration={duration} work={work} />
          })
        }
      </div>
    </div>
  )
}

const TimeLineItem : React.FC<ITimeLineItem> = ({stage, duration, work} : ITimeLineItem)=>
{
  return (
    <div className="flex flex-col justify-evenly items-center text-[#fff] m-4 p-4 max-w-[50%] min-w-[30%] min-h-[10rem] hover:scale-[105%] transition duration-300 border-2 border-theme-alth hover:border-theme hover:rounded-md text-justify">
      <h4 className=" text-xl">Stage : {stage}</h4>
      <hr className="w-[30%] border-2 border-theme" />
      <span className="text-sm block">[ {duration} ]</span>
      <span className="text-sm block">{work}</span>
    </div>
  )
}

const CostBreakDown : React.FC = ()=>
{
  const [totalCost, setTotalCost] = useState<number>(0);
  const disassembledPath1 = require("../assets/images/pro-bharat/side-expo.png");
  const disassembledPath2 = require("../assets/images/pro-bharat/top-expo.png");

  useEffect(()=>
  {
    getCost();
  },[])

  function getCost()
  {
    let cost = 0;
    for(let i=0;i<_ProBharatCostBreakdown.items.length;i++)
    {
      for(let j=0;j<_ProBharatCostBreakdown.items[i].parts.length;j++)
      {
        console.log(_ProBharatCostBreakdown.items[i].parts[j].cost)
        cost += Number(_ProBharatCostBreakdown.items[i].parts[j].cost);
      }
    }
    setTotalCost(cost);
  }

  return (
    <div className="flex flex-col justify-evenly bg-theme-var items-center m-4 p-4 w-[100%] min-h-[120vh]">
      <h1 className="text-5xl font-bold uppercase text-white" >{_ProBharatCostBreakdown.title}</h1>
      <div className="flex flex-row flex-wrap items-center justify-evenly my-4 w-[90%]">
        {
          _ProBharatCostBreakdown.items.map(({department, parts})=>
          {
            return <CostBreakDownItem department={department} parts={parts} />
          })
        }
      </div>
      <div className="flex flex-row justify-evenly items-center w-[80%]">
        <img src={disassembledPath1} alt="disassembled render images" className="w-[45%] my-8 hover:scale-[110%]"/>
        <img src={disassembledPath2} alt="disassembled render images" className="w-[45%] my-8 hover:scale-[110%]"/>
      </div>
      <div className="flex flex-row justify-evenly items-center w-[100%]">
        <div className="flex flex-col justify-evenly items-cente text-white">
          <hr className="w-[120%] my-2" />
          <span className="block text-4xl"><IoIosFlash className="inline-block text-4xl mx-4" />Estimated Total Cost - {totalCost>100?((totalCost/100) + "L"):((totalCost) + "K")}<IoIosFlash className="inline-block text-4xl mx-4" /></span>
          <hr className="w-[120%] my-2" />
        </div>
      </div>
    </div>
  )
}

const CostBreakDownItem : React.FC<ICostBreakDownItem> = ({department, parts})=>
{
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-[12rem] bg-theme text-[#fff] rounded-md p-4 m-4 min-w-[20rem] hover:scale-[105%] transition-all duration-300" onMouseOver={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
      <h2 className="text-2xl uppercase mb-4">{department}</h2>
      {  
        isHover?parts.map(({title, cost})=>
          {
            return <div className="text-sm text-[1rem] font-medium"><IoIosFlash className="inline-block mx-2 text-[150%]" /><span>{title}</span><span> : {cost}k</span></div>
          }):null
      }
    </div>
  )
}

const DesignRenders : React.FC = ()=>
{
  const temp1 = require("../assets/images/pro-bharat/front-2.png");
  const temp2 = require("../assets/images/pro-bharat/front-1.png");
  const temp3 = require("../assets/images/pro-bharat/side-1.png");
  const temp4 = require("../assets/images/pro-bharat/side-2.png");
  const temp5 = require("../assets/images/pro-bharat/back-1.png");

  return (
    <div className="w-[100%] flex flex-col justify-evenly items-center min-h-[80vh] my-2">
    <h1 className="text-5xl uppercase ">Our Design Renders</h1>
      <div className="grid grid-cols-3 gap-4 w-[80%] m-4 overflow-hidden items-center">
          <img src={temp1} alt="render images" className=""/>
          <img src={temp4} alt="render images" className="col-span-1 row-span-2"/>
          <img src={temp2} alt="render images" className=""/>
          <img src={temp3} alt="render images" className=""/>
          <img src={temp5} alt="render images" className=""/>
      </div>
    </div>
  )
}

export default ProjectFormulaBharat