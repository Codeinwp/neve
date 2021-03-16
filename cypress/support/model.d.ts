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
		 * Login through request
		 *
		 * @param nextRoute - the url you want to visit after logging in
		 * @example
		 *   cy.loginWithRequest('/shop')
		 */
		loginWithRequest(nextRout?: string): void;

		/**
		 * Login through UI once and verify if the user is already logged in
		 *
		 * @param nextRoute - the url you want to visit after logging in
		 * @example
		 *   cy.login('/shop')
		 */
		login(nextRoute?: string): void;

		/**
		 * Clear the welcome message
		 *
		 * @example cy.clearWelcome()
		 */
		clearWelcome(): void;

		/**
		 * Inserts a cover block
		 *
		 * @example
		 *  cy.insertCoverBlock()
		 */

		insertCoverBlock(): void;

		/**
		 * Insert a new post
		 *
		 * @param title
		 * @param content
		 * @param type
		 * @param featured
		 * @param tags
		 * @example
		 *  cy.insertPost('Title', 'Content', 'post', false, false)
		 */
		insertPost(
			title: string,
			content: string,
			type: string,
			featured?: boolean,
			tags?: boolean,
		): void;

		/**
		 * Click on update button on a published post
		 *
		 * @example
		 *  cy.updatePost()
		 */
		updatePost(): void;

		/**
		 * Gets the selector from Customizer Control
		 *
		 * @param slug
		 * @example
		 *  cy.getCustomizerControl('neve_global')
		 */
		getCustomizerControl(slug: string): Chainable<unknown>;

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

		/**
		 * Sets Customizer Settings using UI
		 *
		 * @param to
		 * @example
		 *  cy.setCustomizeSettings({ hfg_header_layout: withSearch })
		 */
		setCustomizeSettings(to: unknown): Chainable;

		/**
		 * Navigates to the customizer UI
		 *
		 * @example
		 *  cy.goToCustomizer()
		 */
		goToCustomizer(): void;

		/**
		 * Alias POST route to /wp-admin/admin-ajax.php as customizerSave
		 *
		 * @example
		 *  cy.aliasRestRoutes()
		 */
		aliasRestRoutes(): void;

		/**
		 * Toggle elements on or off
		 *
		 * @param show
		 * @example
		 *  cy.toggleElements(false)
		 */
		toggleElements(show: boolean): void;

		/**
		 * Selector for a control
		 *
		 * @param control
		 * @example
		 *  cy.getControl('neve_sidebar')
		 */
		getControl(control: string): Chainable<unknown>;

		/**
		 * Activates a checkbox
		 *
		 * @param checkboxSelector
		 * @param checkboxText
		 * @example
		 *	cy.activateCheckbox('#neve', 'check text')
		 */
		activateCheckbox(checkboxSelector: string, checkboxText: string): void;

		/**
		 * Opens sidebar on Neve Options
		 *
		 * @example
		 *  cy.openNeveSidebar()
		 */
		openNeveSidebar(): Chainable<unknown>;

		/**
		 * Activates Classic editor plugin
		 *
		 * @example
		 *  cy.activateClassicEditorPlugin()
		 */
		activateClassicEditorPlugin(): void;

		/**
		 * Deactivates Classic editor plugin
		 *
		 * @example
		 *  cy.deactivateClassicEditorPlugin()
		 */
		deactivateClassicEditorPlugin(): void;

		/**
		 * Get a JWT token to send request to Wordpress REST API
		 *
		 * @example cy.getJWT()
		 */
		getJWT(): void;

		/**
		 * Updates a post or page by request to WP Rest API.
		 * Needs a valid JWT set on local storage.
		 *
		 * @param postId
		 * @param body
		 * @example cy.updatePageByRequest('12', { size: '20px' })
		 */
		updatePageByRequest(postId: string, body): Chainable;
	}
}
