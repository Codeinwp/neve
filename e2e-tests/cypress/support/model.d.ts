interface HTMLElement {
	href;
}
declare namespace Cypress {
	interface WP {
		customize;
		data: {
			select;
			dispatch;
		};
	}
	interface Window {
		wp: WP;
		appReady: boolean;
	}

	interface Chainable {
		get<K extends keyof HTMLElementTagNameMap>(
			selector: K | JQuery<HTMLElement>,
			options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
		): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

		/**
		 * Inserts a cover block
		 *
		 * @example
		 *  cy.insertCoverBlock()
		 */

		insertCoverBlock(): void;

		/**
		 * Capture and compare the fullpage snapshots.
		 *
		 * @param generalMaskAndClip
		 * @param screenShotName
		 * @example
		 *  cy.captureDocument(false, true)
		 */
		captureDocument(generalMaskAndClip?: boolean, screenShotName?: boolean | string): void;

		/**
		 * Adds Mask and Clip to a percy screenshot
		 *
		 * @param maskSelectors
		 * @param clipSelectors
		 * @param hideElements
		 * @example
		 *  cy.maskAndClip('#mask', '#clip')
		 */
		maskAndClip(maskSelectors: string, clipSelectors: string, hideElements?: string);
	}
}
