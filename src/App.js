import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Teams from "./Components/Teams"
import Footer from "./Components/Footer";
import { useState } from 'react';

function App() {

	// For Light Mode and Dark Mode in Website
	const [isDark,setIsDark]=useState(true);

	function changeMode()
	{
		setIsDark(preState=>!preState);
	}

	return (
		<div className={"App "+(isDark?"Dark":"Light")}>
			<button onClick={changeMode} className="Mode-Btn">{isDark?"L":"D"}</button>
			<NavBar />
			<Routes>
				{/* Default Landing Page is Home Page */}
				<Route path="*" element={<Home />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/Teams" element={<Teams />}/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;