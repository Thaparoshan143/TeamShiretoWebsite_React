import "../uni.css";
import "./Contribute.css";
import { FaPlus,FaMinus } from "react-icons/fa";
import { useState } from "react";

const supportTitles=["Financial Support","Material & Equipment Support","Mentorship Support","Logistics support"];
const supportDesc=["Our partners can provide critical financial support during various stages of the project to help us achieve our goals.",
                    "Shireto's team creates most of the components in-house, but our partners can assist us by providing the necessary materials and equipment for the fabrication of the electric car. This includes essential electrical components like batteries, motor controllers, and BMS.",
                    "Our partners can provide us with mentorship and guidance from experienced professionals in the industry, allowing us to learn and grow from their knowledge and expertise.",
                    "As a Formula One team participating in international events, we require a professional logistics company to manage transportation, distribution, and travel ar rangements for our team. This includes importing parts and materials for development and ensuring smooth race car transportation to and from competi tions. A reliable logistics partner is critical to our suc cess in achieving our goals."];

const whyUsTitles=["Global exposure through Formula Student Events.",
                    "Global exposure through Formula Student Events Promote motorsports culture & inspire STEM students.",
                    "Global exposure through Formula Student Events Directly engage with talented students.",
                    "Global exposure through Formula Student Events Access to a diverse talent pool for recruitment.",
                    "Global exposure through Formula Student Events Collaborate on R&D projects with expertise in simulation and engineering.",
                    "Foster relationship with educational institutions tobridge industry - academia gap.",
                    "Platform to showcase support for International college level project while fulfilling CSR objectives."];

const preSponerTitle=["GolchhaGroup","SolidWorks","Altair","Neoteric","Doro"];
const featuredTitle=["OnlineKhabar","DekhaPadi","Kantipur","MountainTelevision","NayaPatrika","NepalLive","RatoPati","RONB"];

function Contribute()
{
	return(
		<div className="page Contribute flex-c-se-c">
            <h1 className="page-title">Parternship With Us</h1>
            <SupportList />
            <WhyUs />
            <PreSponser />
            <Featured />
        </div>
	)
}

function Featured()
{
    const ImageExist = (name) =>
    {
        try {return require("../Images/Spon-Feat/Feat/"+name+".jpg")}
        catch{return null}
    }

    return (
        <>
            <h3 className="sub-title">Featured on</h3>
            <div className="Feat-Cont flex-r-se-c">
                {featuredTitle.map((title)=>{
                    return <img className="Contribute-Img" src={ImageExist(title)} alt="Feature Image" />
                })}
            </div>
        </>
    )
}

function PreSponser()
{
    const ImageExist = (name)=>
    {
        try{return require("../Images/Spon-Feat/Spon/"+name+".jpg");}
        catch{return null}
    }

    return (
        <>
            <h3 className="sub-title">OUR PREVIOUS SPONSORS</h3>
            <div className="Pre-Spon-Cont flex-r-se-c">
                {preSponerTitle.map((title)=>{
                    return <img className="Contribute-Img" src={ImageExist(title)} alt="Sponser Image" />
                })}
            </div>
        </>
    )
}

function WhyUs()
{
    return (
        <>
            <h3 className="sub-title">Why Partner with us?</h3>
            <ul className="Why-Us-List flex-c-se-c">
                {whyUsTitles.map((title)=>{
                return <li className="WhyUs-Item text">{title}</li>
                })}
            </ul>
        </>
    )
}

function SupportList()
{
    return (
        <>
            <h3 className="sub-title gray-text">HERE IS HOW YOU CAN SUPPORT US</h3>
            <ul className="Support-List flex-c-se-c">
                {supportTitles.map((title,ind)=>{
                return <SuppList key={title} title={title} ind={ind}/>
                })}
            </ul>
        </>
    )
}

function SuppList(props)
{
    const [isActive,setIsActive]=useState(false);

    function switchActive()
    {
        setIsActive(val=>!val);
    }
    
    return (
        <li className="Supp-Item">
            <div className="Supp-Title-Cont flex-r-sb-c"><span>{props.title}</span>{!isActive?<FaPlus onClick={switchActive} />:<FaMinus onClick={switchActive} />}</div>
            {isActive?<p className="Supp-Desc">{supportDesc[props.ind]}</p>:""}
        </li>
    )
}

export default Contribute