/**
 * The Themeisle SDK "Connect your AI agent" notice on the dashboard.
 *
 * The SDK prints a regular admin notice (`[data-ti-ai-notice]`) with the
 * invitation, a link that opens its modal and the dismiss button that records
 * the dismissal. The dashboard hides every admin notice and shows its own
 * notifications instead, so the invitation is handed over to the dashboard's
 * notification list while the SDK's node stays in the DOM, never shown, for
 * its click handlers: opening the modal and recording a dismissal both go
 * through it, so the SDK's rules (per-user dismissal, rotation, Enable) keep
 * working unchanged.
 */

export const AI_CONNECT_SLUG = 'ai-connect';

const NOTICE = '[data-ti-ai-notice]';

/**
 * Return the dashboard notifications with the SDK notice folded in first.
 * The map comes back untouched when the SDK printed no notice on this page.
 *
 * @param {Object} notifications `neveDash.notifications`.
 * @return {Object} The notifications the store starts with.
 */
export const withAiConnectNotice = (notifications) => {
	const notice = document.querySelector(NOTICE);
	if (!notice) {
		return notifications;
	}

	const paragraph = notice.querySelector('p');
	const opener = notice.querySelector('[data-ti-ai-connect]');
	if (!paragraph || !opener) {
		return notifications;
	}

	// Ours now: the SDK stops repositioning it and it never becomes visible.
	notice.dataset.tiAiGone = '1';
	notice.hidden = true;

	return {
		[AI_CONNECT_SLUG]: {
			text: paragraph.innerHTML,
			cta: opener.textContent.trim(),
			type: 'info',
			aiConnect: true,
		},
		...notifications,
	};
};

/** Open the SDK modal, the same way the notice's own link does. */
export const openAiConnect = () => {
	const opener = document.querySelector(`${NOTICE} [data-ti-ai-connect]`);
	if (opener) {
		opener.click();
	}
};

/** Record the dismissal with the SDK (its handler listens on the notice's X). */
export const dismissAiConnect = () => {
	const dismiss = document.querySelector(`${NOTICE} .notice-dismiss`);
	if (dismiss) {
		dismiss.click();
	}
};
