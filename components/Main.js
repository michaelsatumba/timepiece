import React, { useEffect, useState } from 'react';
import More from '../components/More';

function Main() {
	const [icon, setIcon] = useState(null);
	const [hours, setHours] = useState(null);
	const [minutes, setMinutes] = useState(null);
	const [greeting, setGreeting] = useState('');
	const [city, setCity] = useState('');
	// const [countryCode, setcountryCode] = useState('');
	const [place, setPlace] = useState('');
	const [weekDay, setWeekDay] = useState('');
	const [weekNumber, setWeekNumber] = useState('');
	const [numberOfDays, setNumberOfDays] = useState('');
	const [timeZone, setTimeZone] = useState('');

	const showTime = () => {
		const date1 = new Date();
		const hours = date1.getHours();
		const minutes = date1.getMinutes();
		const weekDay = date1.getDay();

		// number of week
		const oneJan = new Date(date1.getFullYear(), 0, 1);
		const numberOfDays = Math.floor((date1 - oneJan) / (24 * 60 * 60 * 1000));
		const weekNumber = Math.ceil((date1.getDay() + 1 + numberOfDays) / 7);
		// console.log(oneJan);
		// console.log(numberOfDays);
		// console.log(`The week number is ${weekNumber}`);

		const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		// console.log(timezone); // Asia/Karachi

		setTimeZone(timezone);

		setNumberOfDays(numberOfDays);

		setWeekNumber(weekNumber);

		setWeekDay(weekDay);

		setHours(hours);
		if (minutes < 10) {
			setMinutes('0' + minutes);
		} else {
			setMinutes(minutes);
		}

		if (hours < 18 && hours > 0) {
			// console.log('Good Morning');
			setGreeting('GOOD MORNING');
			setIcon(
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
						clipRule="evenodd"
					/>
				</svg>
			);
		} else {
			// console.log('Good Evening');
			setGreeting('GOOD EVENING');
			setIcon(
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
				</svg>
			);
		}
	};

	const findMe = () => {
		// const status = document.querySelector('.place');

		const success = (position) => {
			// console.log(position);
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			// alert(latitude + ' ' + longitude);
			const geoURL =
				'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en';

			fetch(geoURL)
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					// console.log(data.city);
					// status.textContent = `In ${data.city}, ${data.countryName}`;
					// document.querySelector('.currentPlace').textContent = `${data.city}`;
					setCity('In ' + data.city + ', ' + data.countryCode);
					// setPlace(data.city);
					// console.log(data.postcode);
					// setPlace(data.postcode);
				});
		};

		const error = (showError) => {
			// status.textContent = `I'm going to find you`;
			// document.querySelector(
			// 	'.currentPlace'
			// ).textContent = `I'm still going to find you`;
			setCity('I will find you');
			setPlace('Watch your back');
		};

		navigator.geolocation.getCurrentPosition(success, error);
	};

	// const showTime = () => {
	// 	// console.log('Show time');
	// 	const date1 = new Date();
	// 	const hours = date1.getHours();
	// 	const minutes = date1.getMinutes();
	// 	console.log(date1);
	// 	console.log(hours);
	// 	console.log(minutes);
	// 	// setHours(date1.getHours);
	// 	// setMinutes(date1.getMinutes);
	// };

	useEffect(() => {
		showTime();
		findMe();
	}, []);
	return (
		<div className=" absolute bottom-0">
			<div className="text-white space-y-2 ml-5">
				<div className="flex flex-row space-x-1">
					{/* icon */}
					<div>{icon}</div>
					{/* good morning */}
					<p className="tracking-widest">{greeting}</p>
				</div>
				<div className="flex space-y-20">
					{/* time */}
					<p className="text-9xl">
						{hours}:<span>{minutes}</span>
					</p>

					{/* timezone */}
					{/* <p>BST</p> */}
				</div>
				<div>
					{/* place */}
					<p className="tracking-widest">{city}</p>
				</div>
			</div>
			<More
				place={timeZone}
				weekDay={weekDay}
				weekNumber={weekNumber}
				numberOfDays={numberOfDays}
			/>
		</div>
	);
}

export default Main;
