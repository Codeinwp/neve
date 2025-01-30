/* global NeveReactCustomize fetch ajaxurl */

import { render, useState } from '@wordpress/element';

const NoticeWrapper = () => {
	const [error, setError] = useState(null);
	const [dismissed, setDismissed] = useState(false);

	const handleKeep = () => {
		setError(null);
		wp.customize.previewer.save();
		if (wp.customize.previewer) {
			wp.customize.previewer.refresh();
		}
		setDismissed(true);
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
				setDismissed(true);
				window.location.reload();
			})
			.catch((err) => {
				setError(
					err.message ||
						NeveReactCustomize.starterContent.labels.error
				);
			});
	};

	const { labels } = window.NeveReactCustomize.starterContent;

	if (dismissed) {
		return null;
	}

	return (
		<div id="nv-starter-content-notice">
			<div className="nv-notice">
				<h3>{labels.title}</h3>
				<p>{labels.description}</p>
				<button
					type="button"
					className="button button-primary"
					onClick={handleKeep}
				>
					{labels.save}
				</button>
				<button
					type="button"
					className="button secondary"
					onClick={handleRemove}
				>
					{labels.dismiss}
				</button>
				{error && <div className="nv-notice-error">{error}</div>}
				<span className="nv-subtitle">{labels.info}</span>
			</div>
		</div>
	);
};

export const initStarterContentNotice = () => {
	if (!NeveReactCustomize.starterContent.active) {
		return;
	}

	const renderNotice = () => {
		const titleSection = document.getElementById('customize-info');
		const targetNode = document.createElement('div');

		titleSection.append(targetNode);

		render(<NoticeWrapper />, targetNode);
	};

	wp.customize.bind('ready', renderNotice);
};
