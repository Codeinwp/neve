import './style.css'
import 'cypress-storybook/react';
import '@wordpress/components/build-style/style.css'
import '@icon/dashicons/dashicons.css'
import {FONTS} from '../stories/utils/values'
import {BuildersData} from "./dummy-data";

export const parameters = {
	actions: {argTypesRegex: "^on[A-Z].*"},
}
window.HFG_Layout_Builder = BuildersData;
window.wp = {
	customize: {
		previewedDevice: (device) => {
			const wrap = document.querySelector('.mock-customize');

			if (wrap.classList.contains(`preview-${device}`)) {
				return false;
			}
			wrap.classList.remove('preview-desktop', 'preview-mobile', 'preview-tablet')
			wrap.classList.add(`preview-${device}`);
		},
		previewer : {
			refresh : () => {
				console.log('REFRESH');
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

