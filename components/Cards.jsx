import React from "react";
import styles from "../styles/Cards.module.css";
import Image from "next/image";
import placeholder from "../static/images/placeholder.png";

const Cards = () => {
	return (
		<div className={styles.container}>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	)
};

const Card = () => (
	<div className={styles.card}>
		<Image src={placeholder} alt="placeholder" className={styles.cardImage}/>
		<div className={styles.cardContent}>
			<h3>Lorem ipsum</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, nam? Lorem ipsum dolor sit amet.
			</p>
		</div>
	</div>
);

export default Cards;
