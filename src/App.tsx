import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Teams from "./Components/Teams";
import Partnership from "./Components/Partnership";
import Connect from "./Components/Connect";
import OurProjects from "./Components/OurProjects";
import Resources from "./Components/Resources";
import References from "./Components/References";
import Events from "./Components/Events";
import Error404 from "./Components/Error404";

const App : React.FC = ()=> {
	return (
		<>
		<Navbar />
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/teams" element={<Teams />} />
			<Route path="/ourprojects" element={<OurProjects />} />
			<Route path="/partnership" element={<Partnership />} />
			<Route path="/resources" element={<Resources />} />
			<Route path="/connect" element={<Connect />} />

			<Route path="/references" element={<References />} />
			<Route path="/events" element={<Events />} />
			<Route path="/*" element={<Error404 />} />
		</Routes>
		<Footer />
		</>
	);
}

export default App;