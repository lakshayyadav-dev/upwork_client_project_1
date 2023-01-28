import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

import robot from "../static/images/robot.png";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<>
			<Head>
				<title>Lorem ipsum</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Image src={robot} alt="robot" className={styles.robotImage}/>

			<Navbar />
			<Hero />

		</>
	);
}
