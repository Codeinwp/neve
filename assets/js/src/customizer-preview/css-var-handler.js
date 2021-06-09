/* global _ */
export const replaceCSSVar = (
	id,
	selector,
	variable,
	value,
	responsive = false,
	directional = false
) => {
	const content = `body ${selector} {${variable}: ${value};}`;

	addCSS(id, content);
};

export const addCSS = (id, content = '') => {
	let style = document.querySelector('#' + id + '-css-style');

	if (!style) {
		style = document.createElement('style');
		style.setAttribute('id', id + '-css-style');
		style.setAttribute('type', 'text/css');
		document.querySelector('head').appendChild(style);
	}
	style.innerHTML = content;
};

export const addTemplateCSS = (settingType, id, newValue, args) => {
	const map = {
		mobile: 'max-width: 576px',
		tablet: 'min-width: 576px',
		desktop: 'min-width: 960px',
	};

	let style = '';
	if (args.directional) {
		if (args.responsive) {
			for (const device in map) {
				let deviceStyle = args.template;
				const suffix = newValue[device + '-unit'];
				_.each(newValue[device], function (value, direction) {
					const directionRegex = new RegExp(
						`{{value.${direction}}}`,
						'g'
					);
					deviceStyle = deviceStyle.replace(
						directionRegex,
						value + suffix
					);
				});
				style += `@media (${map[device]}) {${deviceStyle}}`;
			}
		} else {
			const directions = ['top', 'right', 'bottom', 'left'];
			style = args.template;
			_.each(directions, function (dir) {
				const directionRegex = new RegExp(`{{value.${dir}}}`, 'g');
				style = style.replace(
					directionRegex,
					newValue[dir] + newValue.unit
				);
			});
		}
		addCSS(id, style);
		return false;
	}

	const regex = new RegExp('{{value}}', 'g');
	if (args.responsive) {
		const template = args.template;
		const value = JSON.parse(newValue);
		for (const device in map) {
			const suffix = value[device + '-unit'] || '';
			if (value[device] === 0 || value[device] === '0') {
				style += `@media (${map[device]}) {${template.replace(
					regex,
					'0'
				)}${suffix}}`;
			} else {
				style += `@media (${map[device]}) {${template.replace(
					regex,
					value[device] || 'inherit'
				)}${suffix}}`;
			}
		}
	} else if (newValue === 0 || newValue === '0') {
		style += args.template.replace(regex, '0');
	} else {
		const value = newValue || args.fallback || 'inherit';
		style += args.template.replace(regex, value.toString());
	}
	addCSS(id, style);
};
