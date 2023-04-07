/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const index = ({ data }) => {
	// const API_URL = "https://fakestoreapi.com/products";
	const [productItems, setProductItems] = useState(null);
	useEffect(() => {
		setProductItems(data);
	}, []);

	// useEffect(() => {
	// 	fetchData();
	// }, []);
	// const fetchData = async () => {
	// 	try {
	// 		const response = await fetch(API_URL);
	// 		const data = await response.json();
	// 		setProductItems(data);
	// 	} catch (error) {
	// 		console.log("Error fetching product", error);
	// 	}
	// };
	return (
		<>
			<div className="wrapper">
				<Navbar />
			</div>
			{/* Product Item */}
			<div className="wrapper mt-[5rem]">
				{productItems ? (
					<div className="contain ">
						<div className="grid grid-cols-1 gap-10 md:grid-cols-3 xl:grid-cols-4">
							{data.map((item, index) => (
								<div className="w-full" key={"Products are fetching" + index}>
									{/* Cards */}
									<Link
										href={`/`}
										className="w-full relative overflow-hidden h-[500px] shad hover:scale-105 transition-all duration-500 cursor-pointer rounded-lg flex justify-center items-center flex-col gap-5 px-6  ">
										<img
											className="h-[200px] mx-auto rounded-md"
											src={item.image}
											alt="Image not loaded yet"
										/>
										<div className="mt-[2rem]">
											<h1 className="text-xl font-medium text-center">
												{item.title.slice(0, 20)}
											</h1>
											<p className="text-sm opacity-50 font-normal mt-6 text-center">
												{item.description.slice(0, 60)}...
											</p>
										</div>
										<p className="text-sm absolute top-8 right-5 px-[10px] py-[2px] rounded-md bg-slate-300 inline-block">
											${item.price}/-
										</p>
										<div className="absolute cursor-pointer h-[3rem] left-0 bottom-[0px] bg-cyan-700 text-white w-full flex justify-center items-center">
											<p className="text-base font-medium">Buy Now</p>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				) : (
					<img src="/load.gif" alt="" />
				)}
			</div>
		</>
	);
};

export async function getStaticProps() {
	const response = await fetch("https://fakestoreapi.com/products");
	const data = await response.json();

	return {
		props: {
			data,
		},
	};
}

export default index;
