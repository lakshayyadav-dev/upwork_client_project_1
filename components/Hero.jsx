import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import robot from "../static/images/upscaled_robot.png";

const Hero = () => {
	return (
		<div className={styles.container}>
			{/* <Image src={robot} alt="robot" className={styles.robotImage} /> */}

			<div className={styles.content}>
				<h1>PUIT ARCK</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus nihil quo illo ipsum placeat corrupti ut dolorem nesciunt, aspernatur a est reprehenderit ex nemo? Expedita laboriosam cupiditate voluptatum autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro corporis vel odio labore ratione quis doloremque temporibus nostrum. Perferendis nulla minima temporibus tempora, voluptas porro quibusdam ullam? Labore, porro!</p>
			</div>
			<div className={styles.CTA}>
				<input type="text" placeholder="lorem ipsum dolor"/>
				<button className="btn">Lorem</button>
			</div>
		</div>
	);
};

export default Hero;
