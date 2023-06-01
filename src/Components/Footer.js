import "../uni.css";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook,FaLinkedin,FaYoutube } from "react-icons/fa";

const socialLinksTitle=["Facebook","Linkedin","Youtube"];
const socialLinksURL=["https://www.facebook.com/teamshireto/","https://www.linkedin.com/company/team-shireto/","https://www.youtube.com/@teamshireto1629/featured"];
const socialIcon=[FaFacebook,FaLinkedin,FaYoutube];
const quickLinksTitle=["References","Events","Contact Us"];

function Footer()
{
	return(
		<footer className="Footer flex-c-se-c">
			<div className="Footer-Content flex-r-se-c">
				<AddressInfo />
				<QuickLinks />
				<Socials />
			</div>
			<hr width="90%" color="red"/>
			<CopyRight />
		</footer>
	)
}

function CopyRight()
{
	return (
		<h4 className="gray-text" style={{margin:'2rem',letterSpacing:'2px'}}>Copyright © 2023 <b style={{color:'red'}}>TEAM SHIRETO</b> All Rights Reserved</h4>
	)
}

function Socials()
{
	return (
		<ul className="Footer-Socials flex-c-se-c">
			<h2>Follow us on :</h2>
			{socialLinksTitle.map((link,ind)=>{
				return <SocialIcon link={link} ind={ind}/>
			})}
		</ul>
	)
}

function SocialIcon({link,ind})
{
	return (
		<Link key={link} to={socialLinksURL[ind]} target="_blank" className="item flex-r-se-c">{ind==0?<FaFacebook />:ind==1?<FaLinkedin />:<FaYoutube />}<span style={{margin:'0 1rem'}}>{link}</span></Link>
	)
}

function QuickLinks()
{
	return (
		<div className="flex-c-se-c">
		<h2>Quick Links :</h2>
		<ul className="Links flex-r-se-c">
			{quickLinksTitle.map((qLink)=>{
				return <Link key={qLink} to={"/"+qLink} className="item">{qLink}</Link>
			})}
		</ul>
		</div>
	)
}

function AddressInfo()
{
	return (
		<div className="flex-c-se-c Info">
			<h2 className="sub-title">Our Location</h2>
			<span className="text">IOE Thapathali Campus</span>
			<span className="text">Kathmandu, Nepal</span>
		</div>
	)
}

export default Footer