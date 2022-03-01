import React, { useState } from 'react';
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
	const stats = (
		<div className="text-white">
			<div class="currentTimezone">
				<p>CURRENT TIMEZONE</p>
				<p class="currentPlace stats">{place}</p>
			</div>
			<div class="dayYear">
				<p>DAY OF THE YEAR</p>
				<p class="currentDayYear stats"></p>
			</div>
			<div class="dayWeek">
				<p>DAY OF THE WEEK</p>
				<p class="currentDayWeek stats">{weekDay}</p>
			</div>
			<div class="weekNumber">
				<p>WEEK NUMBER</p>
				<p class="currentWeekNumber stats"></p>
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
		} else {
			setShowResults(null);
			setMore(downSvg);
		}
	};

	return (
		<div>
			<div>
				<button
					className="bg-white text-black rounded-full tracking-widest flex p-2"
					onClick={activate}
				>
					More
					{more}
				</button>
			</div>
			{showResults}
		</div>
	);
};

export default More;
