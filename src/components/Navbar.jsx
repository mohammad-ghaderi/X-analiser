import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({menuIdx, setMenuIdx}) => {

	const menuContent = [
		[
			{ name: "Dashboard", icon: "fas fa-home", link: "/", id: 0 },
			{
				name: "Analysis",
				icon: "fa-solid fa-chart-line",
				link: "/analysis",
				id: 1,
			},
			{ name: "History", icon: "fa-solid fa-history", link: "/history", id: 2 },
			{
				name: "Diagram",
				icon: "fa-solid fa-diagram-project",
				link: "/diagram",
				id: 3,
			},
			{ name: "Chart", icon: "fa-solid fa-chart-bar", link: "/chart", id: 4 },
			{
				name: "About us",
				icon: "fa-solid fa-circle-info",
				link: "/about",
				id: 5,
			},
		],
		[
			{ name: "Settings", icon: "fa-solid fa-cog", link: "/setting", id: 6 },
			{ name: "Profile", icon: "fa-solid fa-user", link: "/profile", id: 7 },
		],
	];

	const menuHandler = (idx) => {
		if (idx == menuIdx) return;
		setMenuIdx(idx);
	}


	return (
		<div id="navbar-wrapper">
			{menuContent.map((menu, idx) => (
				<ul key={idx}>
					{menu.map((menuItem, index) => (
						<Link
							to={menuItem.link}
							className={menuItem.id === menuIdx ? "active" : ""}
							key={index}
							onClick={() => menuHandler(menuItem.id)}
						>
							<i className={menuItem.icon}></i>
							<span>{menuItem.name}</span>
						</Link>
					))}
				</ul>
			))}
		</div>
	);
};

export default Navbar;
