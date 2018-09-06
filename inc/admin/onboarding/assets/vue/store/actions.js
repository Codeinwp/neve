/* jshint esversion: 6 */
/* global themeisleSitesLibApi, console */
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use( VueResource );

const initialize = function ( { commit }, data ) {
	commit( 'setAjaxState', true );
	console.log( '%c Fetching sites.', 'color: #FADD6E' );
	Vue.http( {
		url: themeisleSitesLibApi.root + '/initialize_sites_library',
		method: 'GET',
		headers: { 'X-WP-Nonce': themeisleSitesLibApi.nonce },
		params: { 'req': data.req },
		body: data.data,
		responseType: 'json'
	} ).then( function ( response ) {
		if ( response.ok ) {
			commit( 'setAjaxState', false );
			commit( 'saveSitesData', response.body );
		}
	} );
};

const importSite = function ( { commit, state }, data ) {
	startImport( { commit, state }, data );
};

const startImport = function ( { commit, state }, data ) {
	commit( 'setImportingState', true );
	installPlugins( { commit, state }, data );
};

const doneImport = function ( { commit } ) {
	commit( 'updateSteps', 'done' );
	commit( 'setImportingState', false );
	console.log( '%c Import Done.', 'color: #64cd6d' );
};

const installPlugins = function ( { commit, state }, data ) {
	let result = false;
	for ( let i in state.importOptions.installablePlugins ) {
		if ( state.importOptions.installablePlugins[ i ] === true ) {
			result = true;
			break;
		}
	}
	if ( result === false ) {
		importContent( { commit, state }, data );
		return false;
	}
	commit( 'updateSteps', 'plugins' );
	Vue.http( {
		url: themeisleSitesLibApi.root + '/install_plugins',
		method: 'POST',
		headers: { 'X-WP-Nonce': themeisleSitesLibApi.nonce },
		params: {
			'req': data.req,
		},
		body: {
			'data': state.importOptions.installablePlugins,
		},
		responseType: 'json',
	} ).then( function ( response ) {
		if ( response.ok ) {
			console.log( '%c Installed Plugins.', 'color: #4B9BE7' );
			importContent( { commit, state }, data );
		} else {
			console.error( response );
		}
	} );
};

const importContent = function ( { commit, state }, data ) {
	if ( state.importOptions.content === false ) {
		importThemeMods( { commit, state }, data );
		return false;
	}
	commit( 'updateSteps', 'content' );
	Vue.http( {
		url: themeisleSitesLibApi.root + '/import_content',
		method: 'POST',
		headers: { 'X-WP-Nonce': themeisleSitesLibApi.nonce },
		params: {
			'req': data.req,
		},
		body: {
			'data': {
				'contentFile': data.content.content_file,
				'frontPage': data.content.front_page,
				'shopPages': data.content.shop_pages ? data.content.shop_pages : null,
				'source': data.source
			},
		},
		responseType: 'json',
	} ).then( function ( response ) {
		if ( response.ok ) {
			console.log( '%c Imported Content.', 'color: #4B9BE7' );
			importThemeMods( { commit, state }, data );
		} else {
			console.error( response );
		}
	} );
};

const importThemeMods = function ( { commit, state }, data ) {
	if ( state.importOptions.customizer === false ) {
		importWidgets( { commit, state }, data );
		return false;
	}
	commit( 'updateSteps', 'theme_mods' );
	Vue.http( {
		url: themeisleSitesLibApi.root + '/import_theme_mods',
		method: 'POST',
		headers: { 'X-WP-Nonce': themeisleSitesLibApi.nonce },
		params: {
			'req': data.req,
		},
		body: {
			'data': data.themeMods,
		},
		responseType: 'json',
	} ).then( function ( response ) {
		if ( response.ok ) {
			console.log( '%c Imported Customizer.', 'color: #4B9BE7' );
			importWidgets( { commit, state }, data );
		} else {
			console.error( response );
		}
	} );
};

const importWidgets = function ( { commit, state }, data ) {
	if ( state.importOptions.widgets === false ) {
		doneImport( { commit } );
		return false;
	}
	commit( 'updateSteps', 'widgets' );
	Vue.http( {
		url: themeisleSitesLibApi.root + '/import_widgets',
		method: 'POST',
		headers: { 'X-WP-Nonce': themeisleSitesLibApi.nonce },
		params: {
			'req': data.req,
		},
		body: {
			'data': data.widgets,
		},
		responseType: 'json',
	} ).then( function ( response ) {
		if ( response.ok ) {
			console.log( '%c Imported Widgets.', 'color: #4B9BE7' );
			doneImport( { commit } );
		} else {
			console.error( response );
		}
	} );
};

export default {
	initialize,
	importSite
};