import "../uni.css";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook,FaLinkedin,FaYoutube } from "react-icons/fa";
import { _SocialLinks } from "../Data/SocialLinks";
import { _AddressInfo } from "../Data/TeamInfo";

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
			<br /><hr width="80%" color="red"/>
			<CopyRight />
		</footer>
	)
}

function AddressInfo()
{
	return (
		<div className="flex-c-se-c Add-Info">
			<h2 className="pCase">{_AddressInfo.title}</h2>
			<span className="text">{_AddressInfo.college}</span>
			<span className="text">{_AddressInfo.location}</span>
		</div>
	)
}

function QuickLinks()
{
	return (
		<div className="flex-c-se-c">
		<h2 className="pCase">Quick Links</h2>
		<ul className="Links flex-r-se-c">
			{quickLinksTitle.map((qLink)=>{
				return <Link key={qLink} to={"/"+qLink} className="item">{qLink}</Link>
			})}
		</ul>
		</div>
	)
}

function Socials()
{
	return (
		<ul className="Footer-Socials flex-c-se-c">
			<h2 className="pCase">Follow us on</h2>
			{_SocialLinks.map(({media,url})=>{
				return <SocialIcon key={media} media={media} url={url} />
			})}
		</ul>
	)
}

function SocialIcon({media, url})
{
	return (
		<Link to={url} target="_blank" className="item flex-r-se-c">{media==="Facebook"?<FaFacebook />:media==="Linkedin"?<FaLinkedin />:<FaYoutube />}<span style={{margin:'0 1rem'}}>{media}</span></Link>
	)
}

function CopyRight()
{
	return (
		<h4 className="gray-text" style={{margin:'2rem',letterSpacing:'2px'}}>Copyright © 2023 <b style={{color:'red'}}>TEAM SHIRETO</b> All Rights Reserved</h4>
	)
}

export default Footer