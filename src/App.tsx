import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Teams from "./Components/Teams";
import Partnership from "./Components/Partnership";
import Connect from "./Components/Connect";
import OurProjects from "./Components/OurProjects";

const App : React.FC = ()=> {
	return (
		<>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/teams" element={<Teams />} />
			<Route path="/ourprojects" element={<OurProjects />} />
			<Route path="/partnership" element={<Partnership />} />
			<Route path="/connect" element={<Connect />} />
		</Routes>
		<Footer />
		</>
	);
}

export default App;