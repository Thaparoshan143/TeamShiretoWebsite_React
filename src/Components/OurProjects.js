import "../uni.css";
import "./OurProjects.css";
import FrontLook from "../Images/DesignImage/FrontView.jpg";
import TimeLineImg from "../Images/DesignImage/Timeline.jpg";

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

const stage1=new Progress(1,"Nov-Dec","Preliminary Research");
const stage2=new Progress(2,"Jan-Mar","Preliminary Vehicle Design, Cosf Estimation & Sponsorhip");
const stage3=new Progress(3,"Apr-May","Final Design Approval & Material Procurement");
const stage4=new Progress(4,"May-June","Event Registration & Quix");
const stage5=new Progress(5,"Apr-Aug","Race Car Manufacturing & Assembly");
const stage6=new Progress(6,"Aug-Nov","Track Testing & Vehicle Tuning");
const stage7=new Progress(7,"Dec-Jan","Pass the Technical Inspection & Participate in Dynamic Event");

const stagesInfo=[stage1,stage2,stage3,stage4,stage5,stage6,stage7];

function OurProjects()
{
	return(
		<div className="page OurProjects flex-c-se-c">
        <span className="page-title">Our Project - Formula Bharat</span>

		<TimeLine />
		<br />
		<span className="sub-title">Front Rendered Image</span>
		<img className="Design-Img" src={FrontLook} />


    	</div>
	)
}

function TimeLine()
{
	return (
		<div className="Timeline-Cont flex-c-se-c">
			<span className="sub-title" style={{margin:'2rem 0',color:'gray'}}>Our Timeline</span>
			{/* <img className="Design-Img" src={TimeLineImg} alt="Timeline Image"/> */}
			<Stages />
		</div>
	)
}

function Stages()
{
	return (
		<div className="Stages-Wrapper flex-c-se-c">
			{stagesInfo.map((stageInfo)=>{
				return <><Stage key={stageInfo.stageNum} stageInfo={stageInfo} /> &#8595;</>
			})}
		</div>
	)
}

function Stage({stageInfo})
{
	return (
		<div className="Stage-Cont flex-c-se-c">
			<span className="theme-title">Stage : {stageInfo.stageNum}</span>
			<span className="sub-title">[{stageInfo.timeDuration}]</span>
			<span className="theme-text">"{stageInfo.mainWork}"</span>
		</div>
	)
}

export default OurProjects
