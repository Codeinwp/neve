const {useRef, useEffect} = wp.element;

const useOutsideClick = (ref, callback, block = false) => {
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (block) {
				return false;
			}
			if (ref.current && ! ref.current.contains(event.target)) {
				callback();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ ref ]);
};

const OnClickOutside = ({children, action, block}) => {
	const wrapperRef = useRef(null);
	useOutsideClick(wrapperRef, action, block);

	return <div ref={wrapperRef}>{children}</div>;
};

export default OnClickOutside;
