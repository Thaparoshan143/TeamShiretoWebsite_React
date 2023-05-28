import "../uni.css";
import "./Contribute.css";
import { FaPlus } from "react-icons/fa";
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

function Contribute()
{
	return(
		<div className="page Contribute flex-c-se-c">
        <span className="page-title">Support Us</span>
        <div className="Support-Cont flex-c-se-c">
            <span className="sub-title">HERE IS HOW YOU CAN SUPPORT US</span>
            <SupportList />
        </div>
        <div className="Why-Us-Cont flex-c-se-c">
            <span className="sub-title">Why Partner with us?</span>
            <WhyUs />
        </div>
    </div>
	)
}

function WhyUs()
{
    return (
        <ul className="Why-Us-List">
            {whyUsTitles.map((title)=>{
            return <li className="text">{title}</li>
            })}
        </ul>
    )
}

function SupportList()
{
    return (
        <ul className="Support-List flex-c-se-c">
            {supportTitles.map((title,ind)=>{
            return <List key={title} title={title} ind={ind}/>
            })}
        </ul>
    )
}

function List(props)
{
    const [isActive,setIsActive]=useState(false);

    function showMore()
    {
        setIsActive(val=>!val);
    }
    return (
        <li className="Supp-Item">
            <div className="Supp-Title-Cont flex-r-sb-c"><span className="Supp-Title">{props.title}</span><FaPlus style={{color:'red',fontSize:'1rem'}} onClick={showMore} /></div>
            {isActive?<span className="Supp-Desc">{supportDesc[props.ind]}</span>:""}
        </li>
    )
}

export default Contribute