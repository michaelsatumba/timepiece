import React, { useEffect, useState } from 'react';
import Main from '../components/Main';

const More = (props) => {
	// let down = (
	// 	<svg
	// 		xmlns="http://www.w3.org/2000/svg"
	// 		className="h-6 w-6"
	// 		viewBox="0 0 20 20"
	// 		fill="currentColor"
	// 	>
	// 		<path
	// 			fillRule="evenodd"
	// 			d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
	// 			clipRule="evenodd"
	// 		/>
	// 	</svg>
	// );
	// let up = (
	// 	<svg
	// 		xmlns="http://www.w3.org/2000/svg"
	// 		className="h-5 w-5"
	// 		viewBox="0 0 20 20"
	// 		fill="currentColor"
	// 	>
	// 		<path
	// 			fillRule="evenodd"
	// 			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
	// 			clipRule="evenodd"
	// 		/>
	// 	</svg>
	// );

	const place = props.place;
	const weekDay = props.weekDay;
	const weekNumber = props.weekNumber;
	const numberOfDays = props.numberOfDays;

	const [more, setMore] = useState(
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
				clipRule="evenodd"
			/>
		</svg>
	);

	const [showResults, setShowResults] = useState(null);
	const [word, setWord] = useState('More');
	const stats = (
		<div className="text-white text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col w-screen py-2 px-2 tracking-widest">
			<div className="flex justify-between">
				<p>CURRENT TIMEZONE</p>
				<p className="">{place}</p>
			</div>
			<div className="flex justify-between">
				<p>DAY OF THE YEAR</p>
				<p className="">{numberOfDays}</p>
			</div>
			<div className="flex justify-between">
				<p>DAY OF THE WEEK</p>
				<p className="">{weekDay}</p>
			</div>
			<div className="flex justify-between">
				<p>WEEK NUMBER</p>
				<p className="">{weekNumber}</p>
			</div>
		</div>
	);
	const upSvg = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);
	const downSvg = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
				clipRule="evenodd"
			/>
		</svg>
	);

	const activate = () => {
		if (showResults == null) {
			setShowResults(stats);
			setMore(upSvg);
			setWord('Less');
		} else {
			setShowResults(null);
			setMore(downSvg);
			setWord('More');
		}
	};

	return (
		<div className="">
			<div className="mb-5 ml-5">
				<button
					className="bg-white text-black rounded-full tracking-widest flex p-2"
					onClick={activate}
				>
					{word}
					{more}
				</button>
			</div>
			{showResults}
		</div>
	);
};

export default More;
