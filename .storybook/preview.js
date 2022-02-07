import './style.css'

try {
	require('../e2e-tests/node_modules/cypress-storybook/react');
} catch (ex) {
	console.log(ex);
}
import '@wordpress/components/build-style/style.css'
import '@icon/dashicons/dashicons.css'
import {FONTS} from '../stories/utils/values'
import {BuildersData} from "./dummy-data";

window.NeveReactCustomize = {}
window.nvComponents = {}
window.NeveReactCustomize.HFG = BuildersData

const wpObject = {
	customize: {
		bind: (event, callback) => {
		},
		previewedDevice: (device) => {
			const wrap = document.querySelector('.mock-customize');

			if (wrap.classList.contains(`preview-${device}`)) {
				return false;
			}
			wrap.classList.remove('preview-desktop', 'preview-mobile', 'preview-tablet')
			wrap.classList.add(`preview-${device}`);
		},
		section: (slug) => ({
			focus: () => console.log(`Focusing Section ${slug}.`),
			expanded: (value) => console.log(`Set Expanded for ${slug} to ${value}.`),
			params: {
				title: `Title: ${slug}`,
			}
		}),
		state: (slug) => ({
			get: () => {
				return 'title_tagline'
			},
			bind: (a) => {
				console.log('State Bounded and returns:', a());
			},
			unbind: (a) => {
				console.log('State Unbounded and returns:', a());

			}
		}),
		previewer: {
			bind: (e) => {
				console.log('Event Bound:', e);
			},
			send: (e) => {
				console.log(e)
			},
			refresh: () => {
				console.log('REFRESH PREVIEW');
			}
		},
		control: (slug, callback) => {
			if (callback) {
				callback(window.wp.customize.control(slug))
			}

			if (slug.indexOf('_columns_layout') > -1) {
				return {
					setting: {
						value: 'left-third',
						get: () => window.wp.customize.control(slug).setting.value,
						set: (value) => {
						},
						bind: (value) => window.wp.customize.control(slug).setting.value
					}
				}
			}
			if (slug.indexOf('_columns_number') > -1) {
				return {
					setting: {
						value: 2,
						get: () => window.wp.customize.control(slug).setting.value,
						set: (value) => {
						},
						bind: (value) => window.wp.customize.control(slug).setting.value
					}
				}
			}
		}
	}
};

window.wp = wpObject;

const head = document.querySelector('#nv-google-fonts');

const createChunks = (arr, size) =>
Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
arr.slice(i * size, i * size + size)
); 

const chunks = createChunks(FONTS.Google, 60);

for( let i = 0; i < chunks.length; i++ ){

	let families = chunks[i].join('&family=');
	families = families.replace(/\s/g, '+');

	const link = document.createElement('link');
	link.setAttribute('rel', 'stylesheet');
	link.setAttribute('id', 'google-fonts-css-' + i);
	link.setAttribute('href', `https://fonts.googleapis.com/css2?family=${families}&text=Abc&display=swap`);
	link.setAttribute('media', 'all');
	head.appendChild(link)

}