import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
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
            </nav>
		</div>
	);
};

export default Navbar;
