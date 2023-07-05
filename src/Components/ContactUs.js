import "../uni.css";
import "./ContactUs.css";
import { _AboutUs } from "../Data/TeamInfo";
import { _SocialLinks } from "../Data/SocialLinks";

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
            <p className="About-Text">{_AboutUs.info}</p>
        </div>
    )
}

function SocialButton()
{
    return (
        <div className="Socials flex-r-se-c">
        {_SocialLinks.map(({media, url})=>{
            return <a target="_blank" key={media} href={url} className="btn">{media}</a>
        })}
        </div>
    )
}

export default ContactUs