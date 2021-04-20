import React, { ReactComponentElement } from 'react';
import PropTypes from 'prop-types';

import { Modal } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

type Props = {
	children: ReactComponentElement<any>;
	openAttr: string;
	title?: string;
};

const NeveModal: React.FC<Props> = ({ children, openAttr, title }) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		window.wp.customize.bind('ready', () => {
			if (!openAttr) return false;
			const outsideTrigger = document.querySelectorAll(
				`[data-open-nv-modal=${openAttr}]`
			);

			if (outsideTrigger.length < 1) return false;

			outsideTrigger.forEach((item) => {
				item.addEventListener('click', (e) => {
					e.preventDefault();
					setOpen(true);
				});
			});
		});
	}, []);

	const dismiss = () => {
		setOpen(false);
	};

	if (!open) {
		return null;
	}

	return (
		<>
			<Modal
				className="neve-ui-modal-wrap"
				title={title || ''}
				onRequestClose={dismiss}
				shouldCloseOnClickOutside
				isDismissible
			>
				{children}
			</Modal>
		</>
	);
};

NeveModal.propTypes = {
	children: PropTypes.element.isRequired,
	openAttr: PropTypes.string.isRequired,
	title: PropTypes.string,
};

export default NeveModal;
