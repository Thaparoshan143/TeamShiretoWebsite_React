import "../uni.css";
import "./Partnership.css";
import { FaPlus,FaMinus } from "react-icons/fa";
import { useState } from "react";
import { _SupportInfo, _WhyUsInfo, _SponserInfo, _FeaturedInfo } from "../Data/PartnershipInfo";

function Partnership()
{
	return(
		<div className="page Partnership flex-c-se-c">
            <SupportList />
            <WhyUs />
            <PreSponser />
            <Featured />
            <div className="Part-Que">
                <h1 className="page-title Que-Text">Do you want to become a partner?</h1>
                <div className="Que-Btns flex-r-se-c">
                <a href={"https://teamshireto.com/wp-content/uploads/2023/05/Team-Shireto-Partnership-Proposal.pdf"} className="btn">Download Proposal</a>
                <a href="mailto:info@teamshireto.com" className="btn">Become a Sponsor!</a>
                </div>
            </div>
        </div>
	)
}

function SupportList()
{
    return (
        <>
            <h2 className="sub-title">Here is how you can support us</h2>
            <ul className="Support-List flex-c-se-c">
                {_SupportInfo.map(({title, description})=>{
                return <SuppList key={title} title={title} description={description} />
                })}
            </ul>
        </>
    )
}

function SuppList({title, description})
{
    const [isActive,setIsActive]=useState(false);

    function switchActive()
    {
        setIsActive(val=>!val);
    }
    
    return (
        <li className="Supp-Item">
            <div className="Supp-Title-Cont flex-r-sb-c"><span>{title}</span>{!isActive?<FaPlus onClick={switchActive} />:<FaMinus onClick={switchActive} />}</div>
            {isActive?<p className="Supp-Desc">{description}</p>:""}
        </li>
    )
}

function WhyUs()
{
    return (
        <>
            <h3 className="sub-title">Why Partner with us?</h3>
            <ul className="Why-Us-List flex-c-se-c">
                {_WhyUsInfo.map((item)=>{
                return <li className="Why-Us-Item text">{item}</li>
                })}
            </ul>
        </>
    )
}

function PreSponser()
{
    const ImageExist = (item)=>
    {
        try {return require("../Images/Spon-Feat/Spon/"+item+".jpg");}
        catch {return null}
    }

    return (
        <>
            <h3 className="sub-title gray-text">OUR PREVIOUS SPONSORS</h3>
            <div className="Pre-Spon-Cont flex-r-se-c">
                {_SponserInfo.map((item)=>{
                    return <img className="Partnership-Img" src={ImageExist(item)} alt="Sponser Image" />
                })}
            </div>
        </>
    )
}

function Featured()
{
    const ImageExist = (item) =>
    {
        try {return require("../Images/Spon-Feat/Feat/"+item+".jpg")}
        catch {return null}
    }

    return (
        <>
            <h3 className="sub-title gray-text">Featured on</h3>
            <div className="Feat-Cont flex-r-se-c">
                {_FeaturedInfo.map((item)=>{
                    return <img className="Partnership-Img" src={ImageExist(item)} alt="Feature Image" />
                })}
            </div>
        </>
    )
}

export default Partnership