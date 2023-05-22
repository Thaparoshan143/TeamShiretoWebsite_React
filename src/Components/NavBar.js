import "../uni.css";
import "./NavBar.css";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";

const navItemList=["Home","Teams","Resources","Our Projects","Contribute","Contact Us"];

function NavBar()
{
	return(
		<nav className="NavBar">
			<NavItems />
		</nav>
	)
}

function NavItems()
{
	return (
		<ul className="Nav-Items flex-r-se-c">
			<div className="Logo-Cont"><img alt="logo" src={logo} /></div>
			{
				navItemList.map((iName)=>
				{
					return <NavItem key={iName} itemName={iName}/>
				})
			}
		</ul>
	)
}

function NavItem(props)
{
	return (
		<NavLink to={props.itemName} className="Nav-Item pse-ul-theme">{props.itemName}</NavLink>
	)
		
}

export default NavBar