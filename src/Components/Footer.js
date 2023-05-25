import "../uni.css"
import "./Footer.css"
import { Link } from "react-router-dom";

const socialLinksTitle=["Facebook","Linkedin","Youtube"];
const socialLinksURL=["https://www.facebook.com/teamshireto/","https://www.linkedin.com/company/team-shireto/","https://www.youtube.com/@teamshireto1629/featured"]
const quickLinksTitle=["Refrences","Events","Subscribe"];

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
		<span className="Footer-CR-Text">Copyright © 2023 <b style={{color:"red",fontWeight:"bodler"}}>TEAM SHIRETO</b> All Rights Reserved</span>
	)
}

function Socials()
{
	return (
		<ul className="Footer-Socials flex-c-se-c">
			<span className="Footer-Title">Follow us on :</span>
			{socialLinksTitle.map((link,ind)=>{
				return <Link key={link} to={socialLinksURL[ind]} target="_blank" className="item">{link}</Link>
			})}
		</ul>
	)
}

function QuickLinks()
{
	return (
		<div className="flex-c-se-c">
		<span className="Footer-Title">Quick Links :</span>
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
		<span className="flex-c-se-c Info">
			<span className="Footer-Title" style={{fontSize:'2rem'}}>Our Location</span>
			<span className="text">IOE Thapathali Campus</span>
			<span className="text">Kathmandu, Nepal</span>
		</span>
	)
}

export default Footer