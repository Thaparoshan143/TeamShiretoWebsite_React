import "../uni.css";
import "./OurProjects.css";
import FrontLook from "../Images/DesignImage/FrontView.jpg";
import TopLook from "../Images/DesignImage/AlmostTop.jpg";
import { _FormulaBharat } from "../Data/OurProjects";

function OurProjects()
{
	return(
		<div className="page OurProjects flex-c-se-c">
			<h1 className="page-title">Project - Formula Bharat</h1><br />
			<TimeLine />
			<RenderedImage />
    	</div>
	)
}

function TimeLine()
{
	return (
		<div className="Timeline-Cont flex-c-se-c">
			<h3 className="sub-title gray-text">Our Estimated Timeline</h3><br />
			<Stages />
		</div>
	)
}

function RenderedImage()
{
	return (
		<>
			<h3 className="sub-title">Few Desgin Renders</h3><br />
			<span className="gray-text">Front View</span><img className="Design-Img" src={FrontLook} />	
			<span className="gray-text">Almost Top View</span><img className="Design-Img" src={TopLook} />	
		</>
	)
}

function Stages()
{
	return (
		<>
			{_FormulaBharat.map(({stage, duration, work})=>{
				return <><Stage key={stage} stage={stage} duration={duration} work={work} /><br /></>
			})}
		</>
	)
}

function Stage({stage, duration, work})
{
	return (
		<div className="Stage-Cont flex-c-se-c">
			<span className="theme-title">Stage : {stage}</span>
			<h3 className="sub-title">[ {duration} ]</h3>
			<span className="theme-text">"{work}"</span>
		</div>
	)
}

export default OurProjects
