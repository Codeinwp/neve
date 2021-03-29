import './style.css'
import 'cypress-storybook/react';
import '@wordpress/components/build-style/style.css'
import '@icon/dashicons/dashicons.css'
import {FONTS} from '../stories/utils/values'
import {BuildersData} from "./dummy-data";

export const parameters = {
	actions: {argTypesRegex: "^on[A-Z].*"},
}
window.NeveReactCustomize = {}
window.NeveReactCustomize.HFG = BuildersData
window.wp = {
	customize: {
		bind: () => {
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
			bind: () => {}
		}),
		previewer: {
			bind: (e) => {
				console.log( 'Event Bound:', e );
			},
			send: (e) => {
				console.log(e)
			},
			refresh: () => {
				console.log('REFRESH PREVIEW');
			}
		}
	}
}

const head = document.querySelector('#nv-google-fonts');
const families = FONTS.Google.join('|');
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('id', 'google-fonts-css');
link.setAttribute('href', `https://fonts.googleapis.com/css?family=${families}&text=Abc&display=swap&ver=2.9.5`);
link.setAttribute('media', 'all');
head.appendChild(link)

