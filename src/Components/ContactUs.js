import "../uni.css";
import "./ContactUs.css";
import {Card} from "./Cards";

const aboutUsDesc=["Team Shireto is a dynamic student-led group of motorsport enthusiasts from various disciplines within the Thapathali Campus. Our ambitious goal is to conceptualise, fabricate, and compete with Nepal’s first Formula E car. Our primary objective is to establish ourselves as a prominent competitor in the global motorsport scene while concurrently promoting and nurturing the motorsport culture in Nepal. Follow us on our journey as we bring our Formula E car to life and compete on the world stage in Formula Bharat.Shireto indicates the cold autumn breeze, implying the beginning of the new season. Likewise, we as a team symbolize a humble beginning of technological innovation in the EV industry of Nepal. "];

const socialButtonTitles=["Facebook","Linkedin","Youtube"];
const socialLinksURL=["https://www.facebook.com/teamshireto/","https://www.linkedin.com/company/team-shireto/","https://www.youtube.com/@teamshireto1629/featured"];

function ContactUs()
{
	return(
		<div className="page Contact-Wrapper flex-c-se-c">
            <div className="Contact flex-c-se-c">
                <h1 className="page-title gray-text">Get In Touch with us </h1>
                <h2 className="Contact-Text">Email : <a className="Email" href="mailto:shiretoioe@gmail.com">shiretoioe@gmail.com</a></h2>
                <div className="flex-r-se-c Contact-People">
                    <Card obj={["Rohit Pati","9843369553","TEAM MANAGER","",""]} />
                    <Card obj={["Bibek Sharma","9868990797","PARTNERSHIP MANAGER","",""]} />
                </div>
            <SocialButton />
            </div>
            <AboutUs />
        </div>
	)
}

function AboutUs()
{
    return (
        <div className="About-Us flex-c-se-c">
            <h1 className="page-title">About Us</h1>
            <p className="About-Text">{aboutUsDesc}</p>
        </div>
    )
}

function SocialButton()
{
    return (
        <div className="Socials flex-r-se-c">
        {socialButtonTitles.map((title,ind)=>{
            return <a target="_blank" key={title} rel="noreferrer" href={socialLinksURL[ind]} className="btn">{title}</a>
        })}
        </div>
    )
}

export default ContactUs