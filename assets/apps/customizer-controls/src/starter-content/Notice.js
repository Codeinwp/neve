/* global NeveReactCustomize fetch ajaxurl */

import StarterContentNotice from './StarterContentNotice.js';
import { render, useState } from '@wordpress/element';

const noticeId = 'neve-starter-content';

const NoticeWrapper = () => {
	const [error, setError] = useState(null);

	const handleKeep = () => {
		setError(null);
		wp.customize.previewer.save();
		if (wp.customize.previewer) {
			wp.customize.previewer.refresh();
		}
		wp.customize.notifications.remove(noticeId);
	};

	const handleRemove = () => {
		setError(null);
		fetch(ajaxurl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams({
				action: 'neve_dismiss_starter_content',
				nonce: NeveReactCustomize.starterContent.nonce,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				if (!response.success) {
					setError(response.data.message);
					return;
				}
				wp.customize.notifications.remove(noticeId);
				window.location.reload();
			})
			.catch((err) => {
				setError(
					err.message ||
						NeveReactCustomize.starterContent.labels.error
				);
			});
	};

	return (
		<StarterContentNotice
			onKeep={handleKeep}
			onRemove={handleRemove}
			error={error}
			labels={window.NeveReactCustomize.starterContent.labels}
		/>
	);
};

export const initStarterContentNotice = () => {
	if (!NeveReactCustomize.starterContent.active) {
		return;
	}

	const renderNotice = () => {
		const root = document.querySelector('#nv-starter-content-notice');
		if (!root) {
			return;
		}
		render(<NoticeWrapper />, root);
	};

	const notice = new wp.customize.Notification(noticeId, {
		type: 'info',
		message: '<div id="nv-starter-content-notice"></div>',
		dismissible: true,
	});

	wp.customize.notifications.add(noticeId, notice);

	wp.customize.notifications.bind('add', renderNotice);
	wp.customize.notifications.bind('remove', renderNotice);
	wp.customize.bind('pane-contents-reflowed', renderNotice);
};
