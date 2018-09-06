/*jshint esversion: 6 */

import Vue from 'vue';
import App from './components/main.vue';
import store from './store/store.js';
import ToggleButton from 'vue-js-toggle-button';
import VShowSlide from 'v-show-slide';

Vue.use( ToggleButton );
Vue.use( VShowSlide );

window.onload = function () {
	new Vue( {
		el: '#ti-sites-library',
		store,
		components: {
			App
		},
		created() {
			store.dispatch( 'initialize', { req: 'Init Sites Library', data: {} } );
		}
	} );
};
