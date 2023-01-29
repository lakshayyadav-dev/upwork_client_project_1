import React from "react";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	return (
		<div className={styles.navbarContainer}>
			<nav className={styles.navbar}>
				<h1 className={styles.navbarHeading}>REILIY</h1>
				<div className={styles.navbarLinks}>
					<a href="#">lorem</a>
					<a href="#">lorem</a>
					<a href="#">lorem</a>
					<a href="#">lorem</a>
					<a href="#">lorem</a>
					<a href="#">lorem</a>
					<a href="#">lorem</a>
					<a href="#">lorem</a>
				</div>
				<div className={styles.burger} onClick={() => setShowLinks((prevValue) => !prevValue)}>
					<div style={{transform: showLinks ? "rotate(45deg) translateY(5px)" : "rotate(0deg)  translateY(0px)", transition: "all 0.2s ease-in-out"}}/>
					<div style={{transform: showLinks ? "rotate(-45deg)  translateY(-5px)" : "rotate(0deg)  translateY(0px)", transition: "all 0.2s ease-in-out"}}/>
				</div>

				{showLinks && (
					<div className={styles.mobileNavLinks}>
						<a href="#">lorem</a>
						<a href="#">lorem</a>
						<a href="#">lorem</a>
						<a href="#">lorem</a>
						<a href="#">lorem</a>
						<a href="#">lorem</a>
						<a href="#">lorem</a>
						<a href="#">lorem</a>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
