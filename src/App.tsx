import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Teams from "./Components/Teams";

const App : React.FC = ()=> {
	return (
		<>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/teams" element={<Teams />} />
		</Routes>
		<Footer />
		</>
	);
}

export default App;