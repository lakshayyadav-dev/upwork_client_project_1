import React from "react";
import styles from "../styles/Cards.module.css";
import Image from "next/image";
import data from "./cards_data";

const Cards = () => {
	return (
		<div className={styles.container}>
			{data.map((card, index) => (
				<Card key={card.title + index} imageUrl={card.imageUrl} title={card.title} description={card.description}/>
			))}
		</div>
	);
};

const Card = ({ imageUrl, title, description }) => (
	<div className={styles.card}>
		<Image src={imageUrl} alt="placeholder" className={styles.cardImage} />
		<div className={styles.cardContent}>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	</div>
);

export default Cards;
