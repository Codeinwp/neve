import './style.css'
import '@wordpress/components/build-style/style.css'
import '@icon/dashicons/dashicons.css'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

window.wp = {
	customize: {
		previewedDevice: (device) => {
			const wrap = document.querySelector('.mock-customize');

			if( wrap.classList.contains( `preview-${device}` ) ) {
				return false;
			}
			wrap.classList.remove('preview-desktop', 'preview-mobile', 'preview-tablet')
			wrap.classList.add(`preview-${device}`);
		}
	}
}

