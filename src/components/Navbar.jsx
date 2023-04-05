import React from 'react'

const Navbar = () => {
  return (
    <header className=" w-[90%] body-font shadow-lg">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a className="flex title-font font-medium items-center  mb-4 md:mb-0">
						<span className="ml-3 text-xl">Logo</span>
					</a>
					<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
						<a className="mr-5 hover:text-white">First Link</a>
						<a className="mr-5 hover:text-white">Second Link</a>
						<a className="mr-5 hover:text-white">Third Link</a>
						<a className="mr-5 hover:text-white">Fourth Link</a>
					</nav>
					<button
					
						className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
						Mode
					</button>
				</div>
			</header>
  )
}

export default Navbar