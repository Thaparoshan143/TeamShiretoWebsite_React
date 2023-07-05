import "../uni.css";
import "./NavBar.css";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import { MenuItems } from "../Data/MenuItems";

function NavBar()
{
	return(
		<NavItems />
	)
}

function NavItems()
{
	return (
		<nav className="Nav-Items flex-r-sb-c">
			<div className="Logo-Cont"><NavLink to="/Home"><img alt="logo" src={logo} /></NavLink></div>
			<ul className="flex-r-se-c Menu-Items">
			{
				MenuItems.map(({item, url})=>
				{
					return <NavItem key={item} item={item} url={url}/>
				})
			}
			</ul>
		</nav>
	)
}

function NavItem({item, url})
{
	return (
		<NavLink to={url} className="Nav-Item pse-ul-theme">{item}</NavLink>
	)
		
}

export default NavBar