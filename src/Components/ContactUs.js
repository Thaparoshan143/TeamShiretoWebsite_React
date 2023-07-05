import "../uni.css";
import "./ContactUs.css";
import { Card } from "./Cards";
import { _AboutUs } from "../Data/TeamInfo";
import { _PartnersContact } from "../Data/TeamInfo";
import { _SocialLinks } from "../Data/SocialLinks";

function ContactUs()
{
	return(
		<div className="page Contact-Wrapper flex-c-se-c">
            <div className="Contact flex-c-se-c">
                <h1 className="page-title gray-text">Get In Touch with us </h1><br />
                <p className="text">Feel free to reach out through email or give us a call if you have any questions</p>
                <h2 className="Contact-Text">Email : <a className="Email" href="mailto:shiretoioe@gmail.com">shiretoioe@gmail.com</a></h2>
                <div className="flex-r-se-c Contact-People">
                    {_PartnersContact.map(({name, position, email, socials})=>
                    {
                        return <Card key={name} name={name} position={position} email={email} socials={socials} />
                    })}
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