// @ts-nocheck
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useRef, useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Popover } from '@wordpress/components';

function useObservableState(initialState, onStateChange) {
	const [state, setState] = useState(initialState);
	return [
		state,
		(value) => {
			setState(value);
			if (onStateChange) {
				onStateChange(value);
			}
		},
	];
}

/**
 * This monitors all events across opened popver components
 */
function useOutsideClickHook(ref, callback) {
	useEffect(() => {
		function handleClickOutside(event) {
			const popovers =
				document.getElementsByClassName('components-popover');
			let shouldClose = true;
			for (const popover of popovers) {
				if (popover.contains(event.target)) {
					shouldClose = false;
					break;
				}
			}
			if (
				shouldClose &&
				(typeof event.target.className === 'string' ||
					event.target.className instanceof String) &&
				!event.target.className.match(/\bangle-picker[^\s]*/) &&
				!event.target.className.match(/\bgradient-picker[^\s]*/)
			) {
				callback();
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}

export default function Dropdown(props) {
	const {
		renderContent,
		renderToggle,
		position = 'bottom right',
		className,
		contentClassName,
		expandOnMobile,
		headerTitle,
		focusOnMount,
		popoverProps,
		onClose,
		onToggle,
	} = props;
	const containerRef = useRef();
	const [isOpen, setIsOpen] = useObservableState(false, onToggle);

	useEffect(
		() => () => {
			if (onToggle) {
				onToggle(false);
			}
		},
		[]
	);

	function toggle() {
		setIsOpen(!isOpen);
	}

	/**
	 * Closes the popover when focus leaves it unless the toggle was pressed or
	 * focus has moved to a separate dialog. The former is to let the toggle
	 * handle closing the popover and the latter is to preserve presence in
	 * case a dialog has opened, allowing focus to return when it's dismissed.
	 */
	function closeIfFocusOutside() {
		const { ownerDocument } = containerRef.current;
		const dialog = ownerDocument.activeElement.closest('[role="dialog"]');
		if (
			!containerRef.current.contains(ownerDocument.activeElement) &&
			(!dialog || dialog.contains(containerRef.current)) &&
			document.body.style.cursor !== 'grabbing'
		) {
			close();
		}
	}

	function close() {
		if (onClose) {
			onClose();
		}
		setIsOpen(false);
	}

	useOutsideClickHook(containerRef, close);

	const args = { isOpen, onToggle: toggle, onClose: close };

	return (
		<div
			className={classnames('components-dropdown', className)}
			ref={containerRef}
			// Some UAs focus the closest focusable parent when the toggle is
			// clicked. Making this div focusable ensures such UAs will focus
			// it and `closeIfFocusOutside` can tell if the toggle was clicked.
			tabIndex="-1"
		>
			{renderToggle(args)}
			{isOpen && (
				<Popover
					position={position}
					onClose={close}
					onFocusOutside={closeIfFocusOutside}
					expandOnMobile={expandOnMobile}
					headerTitle={headerTitle}
					focusOnMount={focusOnMount}
					{...popoverProps}
					anchorRef={popoverProps?.anchorRef ?? containerRef.current}
					className={classnames(
						'components-dropdown__content',
						popoverProps ? popoverProps.className : undefined,
						contentClassName
					)}
				>
					{renderContent(args)}
				</Popover>
			)}
		</div>
	);
}
