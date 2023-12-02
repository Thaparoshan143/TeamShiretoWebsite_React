import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App : React.FC = ()=> {
	return (
		<>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
		</Routes>
		<Footer />
		</>
	);
}

export default App;