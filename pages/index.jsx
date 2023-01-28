import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

import robot from "../static/images/upscaled_robot.png";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";

export default function Home() {
	return (
		<>
			<Head>
				<title>Lorem ipsum</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<div className={styles.imgHolder}>
				<Image src={robot} alt="robot" className={styles.robotImage} />
			</div>

			<Navbar />

			<Hero />
			<Cards />
		</>
	);
}
