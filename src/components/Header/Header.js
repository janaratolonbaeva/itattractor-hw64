import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
	return (
		<header className="Header mb-5">
			<nav className="nav navbar-expand-lg justify-content-between">
				<div>
					<NavLink className="navbar-brand" to="/posts">My Blog</NavLink>
				</div>
				<ul className="navbar-nav">
					<li className="nav-item me-3"><NavLink className="nav-link" to="/" exact>Home</NavLink></li>
					<li className="nav-item me-3"><NavLink className="nav-link" to="/posts/add">Add</NavLink></li>
					<li className="nav-item me-3"><NavLink className="nav-link" to="/about">About</NavLink></li>
					<li className="nav-item"><NavLink className="nav-link" to="/contacts">Contacts</NavLink></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;