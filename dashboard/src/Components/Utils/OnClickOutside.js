const {useRef, useEffect} = wp.element;

const useOutsideClick = (ref, callback) => {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && ! ref.current.contains(event.target)) {
				callback();
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ ref ]);
};

const OnClickOutside = ({children, action}) => {
	const wrapperRef = useRef(null);
	useOutsideClick(wrapperRef, action);

	return <div ref={wrapperRef}>{children}</div>;
};

export default OnClickOutside;
