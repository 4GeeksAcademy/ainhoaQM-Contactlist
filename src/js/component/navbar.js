import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai'; 

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-primary m-0 b-0">
			<Link to="/" style={{ textDecoration: 'none' }}>
				<span className="navbar-brand p-2 h1"><i className="fas fa-address-book text-white mx-2" /> Contact List</span>
			</Link>
			<div className="ml-auto">
				<Link to="/form">
					<button className="btn me-2 btn-primary">
						<AiOutlinePlus/>
					</button>
				</Link>
			</div>
		</nav>
	);
};







