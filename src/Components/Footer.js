import "../uni.css"
import "./Footer.css"

const socialLinks=["Facebook","Linkedin"];

function Footer()
{
	return(
		<footer className="Footer flex-c-se-c">
			<div className="Footer-Content flex-r-se-c">
				<Info />
				<Links />
				<Socials />
			</div>
			<br /><hr width="90%" color="red"/><br />
			<CopyRight />
		</footer>
	)
}

function CopyRight()
{
	return (
		<span className="Footer-Text">Copyright © 2023 <b style={{color:"red"}}>Team Shireto</b> All Rights Reserved</span>
	)
}

function Socials()
{
	return (
		<ul className="Socials flex-c-se-c">
			<span className="text" style={{color:"red",textTransform:"uppercase"}}>Follow us on:</span>
			{socialLinks.map((link)=>{
				return <li className="item">{link}</li>
			})}
		</ul>
	)
}

function Links()
{
	return (
		<div className="flex-c-se-c">
		<span className="text" style={{color:"red",textTransform:"uppercase"}}>Quick Links:</span>
		<ul className="Links flex-r-se-c">
			<li className="item">Refrences</li>
			<li className="item">Events</li>
			<li className="item">Subscribe</li>
		</ul>
		</div>
	)
}

function Info()
{
	return (
		<span className="flex-c-se-c Info">
					<b className="text" style={{fontSize:"2rem",color:"red",textTransform:"uppercase"}}>Our Location</b>
					<span className="text">IOE Thapathali Campus</span>
					<span className="text">Kathmandu, Nepal</span>
		</span>
	)
}

export default Footer