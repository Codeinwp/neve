import { useState } from '@wordpress/element';

export default ({ text, children }) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div
			className="relative inline-block z-max"
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
		>
			{children}
			{isVisible && (
				<div className="absolute font-medium text-sm w-48 px-2 py-1 text-center text-white bg-gray-900 rounded shadow-lg right-0 bottom-full">
					{text}
				</div>
			)}
		</div>
	);
};
