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
		<span className="Footer-Text">Copyright © 2023 <b>Team Shireto</b> All Rights Reserved</span>
	)
}

function Socials()
{
	return (
		<ul className="Socials flex-c-se-c">
			{socialLinks.map((link)=>{
				return <li className="item">{link}</li>
			})}
		</ul>
	)
}

function Links()
{
	return (
		<ul className="Links flex-r-se-c">
			<li className="item">Contact</li>
			<li className="item">Events</li>
			<li className="item">Join Us</li>
		</ul>
	)
}

function Info()
{
	return (
		<span className="flex-c-se-c Info">
					<b className="text" style={{fontSize:"2rem",color:"red",textTransform:"uppercase"}}>Team Shireto</b>
					<span className="text">IOE Thapathali Campus</span>
					<span className="text">Kathmandu, Nepal</span>
		</span>
	)
}

export default Footer