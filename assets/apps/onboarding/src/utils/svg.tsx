import React from 'react';

interface SVGType {
	logo: JSX.Element;
	close: JSX.Element;
	search: JSX.Element;
}

const SVG: SVGType = {
	logo: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			fill="none"
		>
			<path
				fill="#0366D5"
				fillRule="evenodd"
				d="M0 1.972C0 .883.895 0 2 0h36c1.105 0 2 .883 2 1.972v35.5c0 1.09-.895 1.972-2 1.972H2c-1.105 0-2-.883-2-1.972v-35.5zm16.219 17.76v9.36h-4.79V10.068c0-.092.028-.157.084-.194.056-.036.159.01.308.138l11.96 9.72v-9.416h4.79V29.37c0 .11-.027.18-.083.207-.056.028-.159-.023-.308-.152l-11.961-9.692zm12.353 12.446H11.429v1.557h17.143v-1.557z"
				clipRule="evenodd"
			></path>
		</svg>
	),
	close: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			className="components-external-link__icon css-rvs7bx esh4a730"
			viewBox="0 0 24 24"
		>
			<path d="M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"></path>
		</svg>
	),
	search: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			fill="none"
		>
			<path
				fill="#848484"
				fillRule="evenodd"
				d="M20 8.259a8.259 8.259 0 01-13.323 6.524L1.46 20 0 18.54l5.217-5.217A8.259 8.259 0 1120 8.259zm-2.065 0a6.194 6.194 0 11-12.388 0 6.194 6.194 0 0112.388 0z"
				clipRule="evenodd"
			></path>
		</svg>
	),
};

export default SVG;
