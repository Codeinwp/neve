/* jshint esversion: 6 */
/* global neveGutenbergHelper*/

export let store = {
  state: {
    integrationStatus: neveGutenbergHelper.integrationStatus,
    titleMeta: neveGutenbergHelper.neve_meta_disable_title,
    postMeta: neveGutenbergHelper.metaStatus,
    sidebarPosition: neveGutenbergHelper.neve_meta_sidebar || neveGutenbergHelper.sidebarSetup,
    containerSetup: neveGutenbergHelper.neve_meta_container || neveGutenbergHelper.containerSetup
  },
  setState: function (stateItem, value) {
    this.state[stateItem] = value;
  },
  getState: function (key) {
    return this.state[key] || null;
  },
  toggleState: function (key) {
    this.state[key] = this.state[key] === 'enabled' ? 'disabled' : 'enabled';
  }
};