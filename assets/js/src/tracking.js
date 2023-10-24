/* global fetch */
import hash from 'object-hash';

import { __ } from '@wordpress/i18n';

/**
 * @typedef {Object} TrackingData
 * @property {string} [block] - The block identifier. (E.g: 'core/paragraph', 'core/image')
 * @property {string} [env] - The environment. (E.g: 'customizer', 'site-editor', 'widgets', 'post-editor')
 * @property {('block-created'|'block-updated'|'block-deleted')} [action] - The action performed.
 * @property {string} [feature] - The feature identifier. (E.g: 'webhooks', 'form-file')
 * @property {string} [groupID] - The group identifier. Used for tracking the evolution of the features in a group (it can be a block, a component, etc.)
 * @property {string} [featureComponent] - The component of the feature. (E.g: 'file-size', 'file-number')
 * @property {string} [featureValue] - The value of the feature.
 * @property {boolean} [hasOpenAIKey] - Indicates whether an OpenAI key is present.
 * @property {string} [usedTheme] - The theme used.
 */

/**
 * @typedef {Object} TrackingPayload
 * @property {string} slug - The slug identifier, always 'neve'.
 * @property {string} site - The site identifier.
 * @property {string} license - The license identifier.
 * @property {TrackingData} data - The tracking data.
 * @property {string} createdAt - The creation timestamp.
 */

/**
 * @typedef {Object} EventResponse
 * @property {string} [error] - Description of the error, if any.
 * @property {boolean} [success] - Indicates whether the operation was successful.
 * @property {*} [response] - The response data.
 */

/**
 * @typedef {Object} EventOptions
 * @property {boolean} [directSave] - If true, the data will be saved without any modification from the accumulator. Check the `trkMetadata` function for more details.
 * @property {boolean} [consent] - Bypass the consent check. Use this for data that does not need consent.
 * @property {boolean} [refreshTimer] - Refresh the timer to send the events automatically.
 * @property {boolean} [sendNow] - Send the events immediately.
 * @property {boolean} [ignoreLimit] - Ignore the limit of the events to be send.
 */

/**
 * Return the value of pair [condition, value] which has the first true condition.
 *
 * @param {Array} arr - Array of pairs [condition, value].
 * @return {*} - The value of the first pair with a true condition.
 */
const getChoice = (arr) => {
	const r = arr?.filter((x) => x?.[0])?.[0];
	return r?.[1] ?? r?.[0];
};

export class EventTrackingAccumulator {
	constructor() {
		/**
		 * @type {Map<string, TrackingData>} - The events to be sent.
		 */
		this.events = new Map();

		/**
		 * @type {number} - The maximum number of events to be sent at once.
		 * @private
		 * @readonly
		 * @constant
		 */
		this.eventsLimit = 50;

		/**
		 * @type {Array} - The listeners to be notified when the events are sent.
		 * @private
		 * @readonly
		 */
		this.listeners = [];

		/**
		 * @type {number|null} - The interval to send the events automatically.
		 * @private
		 */
		this.interval = null;

		/**
		 * @type {number} - The interval to send the events automatically.
		 * @type {*|{}}
		 */
		this.trackData =
			window?.neveDash?.tracker ||
			window?.NeveReactCustomize?.tracker ||
			{};

		// When tab is closed, send all events.
		window.addEventListener('beforeunload', async () => {
			await this.sendAll();
		});
	}

	/**
	 * Set tracking data to the accumulator. If the key already exists, it will overwrite the existing data.
	 *
	 * @param {string} key - The key to store the data under. With the same key, the data will be overwritten.
	 * @param {TrackingData} data - Tracking data to be sent.
	 * @param {EventOptions} [options] - Options to be passed to the accumulator.
	 */
	set(key, data, options) {
		if (options?.consent || this.hasConsent()) {
			const enhancedData = options?.directSave
				? data
				: this.trkMetadata(data);
			this.events.set(key, enhancedData);
		}

		if (options?.refreshTimer) {
			this.refreshTimer();
		}

		if (options?.sendNow) {
			this.sendAll();
		} else if (!options?.ignoreLimit) {
			this.sendIfLimitReached();
		}
	}

	/**
	 * Add tracking data to the accumulator. If the hash of the data already exists, it will overwrite the existing data.
	 *
	 * @param {TrackingData} data - Tracking data to be sent.
	 * @param {EventOptions} [options] - Options to be passed to the accumulator.
	 * @return {string} - Hash of the data.
	 */
	add(data, options) {
		const h = hash(data);
		this.set(h.toString(), data, options);
		return h.toString();
	}

	/**
	 * Send all the events in the accumulator. Clears the accumulator after sending. All the listeners will be notified.
	 */
	async sendAll() {
		try {
			const events = Array.from(this.events.values());
			this.events.clear();
			const response = await this.sendBulkTracking(
				events.map((event) => ({
					slug: 'neve',
					site: this.trackData?.rootUrl ?? window.location.hostname,
					license: this.trackData?.trackHash,
					data: event,
				}))
			);

			if (!response.ok) {
				this.listeners.forEach((listener) =>
					listener({
						success: false,
						error: __('Failed to send tracking events'),
					})
				);
			}

			const body = await response.json();
			this.listeners.forEach((listener) =>
				listener({ success: true, response: body })
			);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error);
		}
	}

	/**
	 * Automatically send all the events if the limit is reached.
	 *
	 * @return {Promise<void>} - Promise that resolves when the events are sent.
	 */
	sendIfLimitReached() {
		if (this.events.size >= this.eventsLimit) {
			return this.sendAll();
		}
	}

	/**
	 * Subscribe to the event when the events are sent.
	 *
	 * @param {Function} callback - Callback to be called when the events are sent.
	 * @return {Function} - Function to unsubscribe from the event.
	 */
	subscribe(callback) {
		this.listeners.push(callback);
		return () => {
			this.listeners = this.listeners.filter(
				(listener) => listener !== callback
			);
		};
	}

	/**
	 * Check if the user has given consent to send the events.
	 *
	 * @return {boolean} - True if the user has given consent.
	 */
	hasConsent() {
		return (
			Boolean('1' === this.trackData?.canTrack) ||
			Boolean(true === this.trackData?.canTrack)
		);
	}

	/**
	 * Send the tracking data to the server.
	 *
	 * @param {Array<TrackingData>} payload - Tracking data to be sent.
	 * @return {Promise<Response>} - Response from the server.
	 */
	sendBulkTracking(payload) {
		return fetch(this.trackData?.trackAPI, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});
	}

	/**
	 * Add common metadata to the tracking data. Metadata includes the environment, etc. It does not overwrite the given data.
	 *
	 * @param {TrackingData} data - Tracking data to be sent.
	 * @return {TrackingData} - Tracking data with the common metadata.
	 */
	trkMetadata(data) {
		return {
			env: getChoice([
				[window.location.href.includes('customize.php'), 'customizer'],
				[
					window.location.href.includes('site-editor.php'),
					'site-editor',
				],
				[window.location.href.includes('widgets.php'), 'widgets'],
				['post-editor'],
			]),
			...(data ?? {}),
		};
	}

	/**
	 * Start the interval to send the events automatically.
	 */
	start() {
		if (this.interval) {
			return;
		}

		this.interval = window.setInterval(() => {
			this.sendAll();
		}, 5 * 60 * 1000); // 5 minutes
	}

	/**
	 * Stop the interval to send the events automatically.
	 */
	stop() {
		if (this.interval) {
			window.clearInterval(this.interval);
			this.interval = null;
		}
	}

	/**
	 * Refresh the interval to send the events automatically.
	 */
	refreshTimer() {
		this.stop();
		this.start();
	}
}

window.nTrk = new EventTrackingAccumulator();

export default EventTrackingAccumulator;
