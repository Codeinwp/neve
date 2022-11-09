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
    loginWithRequest(nextRoute?: string): Chainable;

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
     * Inserts a new post by request
     *
     * @param title
     * @param content
     * @param type
     * @param featured the id of the image you want to feature
     */
    insertPostWithRequest(title: string, content: string, type: string, featured?: number);

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
    getCustomizerControl(slug: string): Chainable;

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
    getControl(control: string): Chainable;

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
    openNeveSidebar(): Chainable;

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
     * Updates a post or page by request to WP Rest API.
     * Needs a valid JWT set on local storage.
     *
     * @param postId
     * @param type
     * @param body
     * @example cy.updatePageOrPostByRequest('12', { size: '20px' })
     */
    updatePageOrPostByRequest(postId: string, type: string, body): Chainable;

    /**
     * Creates a new tag with the desired name, and set the ID on local storage.
     *
     * @param tagName
     * @example cy.createTagWithRequest('test-tag')
     */
    createTagWithRequest(tagName: string): Chainable;

    /**
     * Updates settings through WP Rest API
     *
     * @param body
     *
     * @example cy.updateSettingWithRequest({"setting": "value"})
     */
    updateSettingWithRequest(body);

    /**
     * Get a random attachment from media
     */

    getRandomAttachment();

    /**
     * Changes a plugin status through WP Rest API
     *
     * @param pluginSlug
     * @param status
     * @example cy.changePluginStatus('classic-editor/classic-editor', 'active')
     */
    changePluginStatus(pluginSlug: string, status: string);
  }
}
