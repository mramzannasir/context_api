import Navbar from "@/components/Navbar";
import React from "react";
import Home from "./Home";

const Layout = () => {
	return (
		<div className="wrapper">
			<Navbar />
			<Home/>
		</div>
		
	);
};

export default Layout;
