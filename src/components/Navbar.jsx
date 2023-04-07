import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
	return (
		<header className="wrapper body-font shadow-lg p-5 bg-black bg-opacity-5">
			<div className="contain  flex-col md:flex-row justify-between items-center">
				<a className="flex title-font font-medium items-center  mb-4 md:mb-0">
					<img className="w-[4rem]"  src="/logo.png" alt="" />
				</a>
				<nav className="md:ml-auto md:mr-auto flex flex-wrap gap-14 items-center text-base justify-center">
					<Link className="text-xl font-medium" href={"/"}>Home</Link>
					<Link className="text-xl font-medium" href={"/products"}>Products</Link>
					<Link className="text-xl font-medium" href={"/cart"}>Cart</Link>
				</nav>
				<button className="relative">
					<IoCartOutline size={34} />
					<div className="absolute top-[-.6rem] right-[-.5rem] w-6 h-6 flex justify-center items-center rounded-full bg-red-600 text-white font-medium">
						0
					</div>
				</button>
			</div>
		</header>
	);
};

export default Navbar;
