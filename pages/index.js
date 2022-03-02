import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
	const [isMorning, setIsMorning] = useState(null);
	const backgroundImage = () => {
		const date1 = new Date();
		const hours = date1.getHours();

		if (hours < 18 && hours > 0) {
			// console.log('Good Morning');
			setIsMorning(true);
		} else {
			// console.log('Good Evening');
			setIsMorning(false);
		}
	};

	useEffect(() => {
		backgroundImage();
	}, []);

	return (
		<div
			className={`h-screen bg-cover ${
				isMorning
					? "bg-[url('https://i.pinimg.com/736x/f7/88/da/f788dad2284dd81a9bbff228edcd9dfa.jpg')]"
					: "bg-[url('https://i.pinimg.com/originals/a9/7f/1b/a97f1b40e23f5fbbb4915f4ab0119d7a.jpg')]"
			}`}
		>
			{/* {`h-screen bg-cover  */}
			<Head>
				<title>Timepiece</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			<Main />
		</div>
	);
}
