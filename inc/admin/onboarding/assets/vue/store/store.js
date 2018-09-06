// jshint ignore: start
/* global themeisleSitesLibApi */
/* exported themeisleSitesLibApi */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use( Vuex );

export default new Vuex.Store( {
	state: {
		ajaxLoader: false,
		sitesData: null,
		previewOpen: false,
		importModalState: false,
		importing: false,
		previewData: {},
		strings: themeisleSitesLibApi.i18ln,
		homeUrl: themeisleSitesLibApi.homeUrl,
		currentStep: 'inactive',
		onboard: themeisleSitesLibApi.onboarding,
		importOptions: {
			content: true,
			customizer: true,
			widgets: true,
			installablePlugins: {},
		}
	},
	actions,
	mutations
} )
