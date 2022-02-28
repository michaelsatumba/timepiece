import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className="bg-[url('https://i.pinimg.com/736x/f7/88/da/f788dad2284dd81a9bbff228edcd9dfa.jpg')] h-screen bg-cover">
			{/* Header */}
			<Head>
				<title>Timepiece</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			{/* Main */}
			{/* More */}
		</div>
	);
}
