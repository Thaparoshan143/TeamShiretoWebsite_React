import { Routes,Route, useAsyncError } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Teams from "./Components/Teams";
import Resources from './Components/Resources';
import OurProjects from "./Components/OurProjects";
import Contribute from "./Components/Contribute";
import ContactUs from "./Components/ContactUs";
import References from "./Components/References";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import { useEffect, useState } from 'react';
import {FaMoon,FaLightbulb} from 'react-icons/fa';

function App() {

	// For Light Mode and Dark Mode in Website
	const [isDark,setIsDark]=useState(true);
	const [NavStyle,setNavStyle]=useState('block');

	function changeMode()
	{
		setIsDark(preState=>!preState);
	}

	return (
		<div className={"App "+(isDark?"Dark":"Light")}>
			<button onClick={changeMode} className="Mode-Btn">{isDark?<FaLightbulb className="Mode-Icon"/>:<FaMoon className="Mode-Icon" />}</button>
			<NavBar/>
			<Routes>
				{/* Default Landing Page is Home Page */}
				<Route path="*" element={<Home />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/Teams" element={<Teams />}/>
				<Route path="/Resources" element={<Resources />} />
				<Route path="/Our Projects" element={<OurProjects />} />
				<Route path="/Contribute" element={<Contribute />} />
				<Route path="/Contact Us" element={<ContactUs />} />
				<Route path="/References" element={<References />} />
				<Route path="/Events" element={<Events />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;