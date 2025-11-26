import { useCallback, useRef, useEffect } from '@wordpress/element';

/**
 * Custom hook for keyboard-based sorting of list items.
 *
 * @param {number} index - Current item index in the list
 * @param {number} totalItems - Total number of items in the list
 * @param {Function} onMove - Callback function to move item (receives fromIndex, toIndex)
 * @param {boolean} isActive - External state for whether keyboard mode is active
 * @param {Function} setIsActive - Function to set the active state
 * @return {Object} Hook state and handlers
 */
const useKeyboardSorting = (
	index,
	totalItems,
	onMove,
	isActive,
	setIsActive
) => {
	const handleRef = useRef(null);
	const previousIndexRef = useRef(index);

	// Handle keyboard events
	const handleKeyDown = useCallback(
		(e) => {
			if (e.key === ' ' || e.key === 'Spacebar') {
				e.preventDefault();
				setIsActive(!isActive);
				return;
			}

			if (!isActive) {
				return;
			}

			if (e.key === 'ArrowUp' && index > 0) {
				e.preventDefault();
				const newIndex = index - 1;
				previousIndexRef.current = index;
				onMove(index, newIndex);
			}

			if (e.key === 'ArrowDown' && index < totalItems - 1) {
				e.preventDefault();
				const newIndex = index + 1;
				previousIndexRef.current = index;
				onMove(index, newIndex);
			}
			if (e.key === 'Escape') {
				e.preventDefault();
				setIsActive(false);
			}
		},
		[isActive, index, totalItems, onMove, setIsActive]
	);

	const handleBlur = useCallback(() => {
		setIsActive(false);
	}, [setIsActive]);

	useEffect(() => {
		if (
			isActive &&
			handleRef.current &&
			previousIndexRef.current !== index
		) {
			// Small delay to ensure DOM has updated
			window.requestAnimationFrame(() => {
				if (handleRef.current) {
					handleRef.current.focus();
				}
			});
		}
		previousIndexRef.current = index;
	}, [index, isActive]);

	return {
		handleRef,
		handleKeyDown,
		handleBlur,
	};
};

export default useKeyboardSorting;
