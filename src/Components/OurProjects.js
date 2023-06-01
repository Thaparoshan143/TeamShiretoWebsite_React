import "../uni.css";
import "./OurProjects.css";
import FrontLook from "../Images/DesignImage/FrontView.jpg";

class Progress
{
	stageNum;
	timeDuration;
	mainWork;
	
	constructor(num,duration,workinfo)
	{
		this.stageNum=num;
		this.timeDuration=duration;
		this.mainWork=workinfo
	}
};

const stage1=new Progress(1,"Nov - Dec","Preliminary Research");
const stage2=new Progress(2,"Jan - Mar","Preliminary Vehicle Design, Cosf Estimation & Sponsorhip");
const stage3=new Progress(3,"Apr - May","Final Design Approval & Material Procurement");
const stage4=new Progress(4,"May - June","Event Registration & Quix");
const stage5=new Progress(5,"Apr - Aug","Race Car Manufacturing & Assembly");
const stage6=new Progress(6,"Aug - Nov","Track Testing & Vehicle Tuning");
const stage7=new Progress(7,"Dec - Jan","Pass the Technical Inspection & Participate in Dynamic Event");

const stagesInfo=[stage1,stage2,stage3,stage4,stage5,stage6,stage7];

function OurProjects()
{
	return(
		<div className="page OurProjects flex-c-se-c">
			<h1 className="page-title">Our Project - Formula Bharat</h1>
			<TimeLine />
			<RenderedImage />
    	</div>
	)
}

function RenderedImage()
{
	return (
		<>
			<h3 className="sub-title">Front Rendered Image</h3>
			<img className="Design-Img" src={FrontLook} />	
		</>
	)
}

function TimeLine()
{
	return (
		<div className="Timeline-Cont flex-c-se-c">
			<h3 className="sub-title gray-text" style={{margin:'1rem'}}>Our Timeline</h3>
			<Stages />
		</div>
	)
}

function Stages()
{
	return (
		<>
			{stagesInfo.map((stageInfo,ind)=>{
				return <><Stage key={ind} stageInfo={stageInfo} /> &#8595;</>
			})}
		</>
	)
}

function Stage({stageInfo})
{
	return (
		<div className="Stage-Cont flex-c-se-c">
			<span className="theme-title">Stage : {stageInfo.stageNum}</span>
			<h3 className="sub-title">[ {stageInfo.timeDuration} ]</h3>
			<span className="theme-text">"{stageInfo.mainWork}"</span>
		</div>
	)
}

export default OurProjects
