import "../uni.css"
import "./ContactUs.css"

const aboutUs=["Team Shireto is a dynamic student-led group of motorsport enthusiasts from various disciplines within the Thapathali Campus. Our ambitious goal is to conceptualise, fabricate, and compete with Nepal’s first Formula E car. Our primary objective is to establish ourselves as a prominent competitor in the global motorsport scene while concurrently promoting and nurturing the motorsport culture in Nepal. Follow us on our journey as we bring our Formula E car to life and compete on the world stage in Formula Bharat.Shireto indicates the cold autumn breeze, implying the beginning of the new season. Likewise, we as a team symbolize a humble beginning of technological innovation in the EV industry of Nepal. "];

const socialButtonTitles=["Facebook","Linkedin","Youtube"];
const socialLinksURL=["https://www.facebook.com/teamshireto/","https://www.linkedin.com/company/team-shireto/","https://www.youtube.com/@teamshireto1629/featured"];

function ContactUs()
{
	return(
		<div className="page Resources flex-c-se-c">
        <div className="Contact flex-c-se-c">
            <span className="sub-title">Team Shireto</span>
            <span className="Contact-Title">Get In Touch with us at:</span>
            <span className="Contact-Text">Email : shiretoioe@gmail.com</span>
            <span className="Contact-Text flex-c-se-c">
                TEAM MANAGER - ROHIT PATI
                <span className="sub-title" style={{color:'gray'}}>9843369553</span>
                PARTNERSHIP MANAGER - BIBEK SHARMA
                <span className="sub-title" style={{color:'gray'}}>9868990797</span>
            </span>
            
            <SocialButton />
        </div>
        <div className="About-Us flex-c-se-c">
            <span className="page-title">About Us</span>
            <span className="About-Text">{aboutUs}</span>
        </div>
    </div>
	)
}

function SocialButton()
{
    return (
        <div className="Socials flex-r-se-c">
        {socialButtonTitles.map((title,ind)=>{
            return <a target="_blank" rel="noreferrer" href={socialLinksURL[ind]} className="Social-Icon">{title}</a>
        })}
        </div>
    )
}

export default ContactUs