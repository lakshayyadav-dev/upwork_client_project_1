import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

import head from "../static/images/head_upscaled.png";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards.jsx";

export default function Home() {
	return (
		<>
			<Head>
				<title>Lorem ipsum</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>


			<div className={styles.contentContainer}>
				<div>
					<Navbar />
					<Hero />
					<Cards />
				</div>
				<Image src={head} alt="robot" className={styles.headImg} priority/>
			</div>

		</>
	);
}
