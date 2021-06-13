/* global _ */

const directions = ['top', 'right', 'bottom', 'left'];
const devices = ['mobile', 'tablet', 'desktop'];
const mediaQueries = {
	mobile: false,
	tablet: 'min-width: 576px',
	desktop: 'min-width: 961px',
};

export class CSSVariablesHandler {
	run(id, settingType, value, params) {
		const {
			selector,
			vars,
			responsive = false,
			suffix = '',
			fallback = 'inherit',
		} = params;

		//Bail if no selectors or variables.
		if (!selector || !vars) {
			return false;
		}

		this.id = id;
		this.settingType = settingType;
		this.value = value;
		this.vars = vars;
		this.selector = `body ${selector}`;
		this.suffix = suffix;
		this.responsive = responsive;
		this.fallback = fallback;

		const css = this.getStyle();

		addCSS(id, css);
	}

	getStyle() {
		const { vars, responsive } = this;

		//We have a simple (non-composed) responsive control.
		if (responsive) {
			return this.getResponsiveVarCSS();
		}

		if (Array.isArray(vars)) {
			let style = '';
			vars.forEach((variable) => {
				this.vars = variable;
				style += this.getStringVarCSS();
			});

			return style;
		}

		switch (typeof vars) {
			case 'string':
				return this.getStringVarCSS();
			case 'object':
				return this.getComposedVarCSS();
			default:
				break;
		}
	}

	getResponsiveVarCSS() {
		const { selector, vars, value, suffix, fallback } = this;
		const parsedValue = this.maybeParseJson(value);

		let style = '';
		devices.forEach((device) => {
			let useFallback = false;

			const finalSuffix = value[`${device}-unit`] || suffix;

			if (!parsedValue[device]) {
				useFallback = true;
			}

			let singularValue = parsedValue[device];
			singularValue = useFallback
				? fallback
				: this.parseDirectionalValue(singularValue, finalSuffix);

			if (mediaQueries[device]) {
				style += `@media(${mediaQueries[device]}) {`;
			}
			style += `${selector}{`;
			style += `${vars}:${singularValue};`;
			style += '}';
			if (mediaQueries[device]) {
				style += '}';
			}
		});

		return style;
	}

	getStringVarCSS() {
		const { selector, vars, value, suffix, fallback } = this;
		if (typeof selector)
			if (!value) {
				return `${selector} {${vars}:${fallback};}`;
			}
		return `${selector} {${vars}:${value}${suffix};}`;
	}

	getComposedVarCSS() {
		const { selector, vars, settingType, value, suffix, fallback } = this;

		const isButton = this.isButtonSetting(settingType);

		let style = `${selector} {`;

		Object.keys(vars).forEach((cssVar) => {
			let currentSuffix = suffix;
			let settingKey = vars[cssVar];

			if (typeof settingKey === 'object') {
				if (settingKey.suffix) {
					currentSuffix = settingKey.suffix;
				}
				settingKey = settingKey.key;
			}

			let newValue = value[settingKey] || null;

			//Account for the button [don't add border width if no need]
			if (cssVar.toLowerCase().includes('borderwidth') && isButton) {
				if (value.type !== 'outline') {
					style += `${cssVar}: 0;`;
					return;
				}
			}

			if (newValue) {
				newValue = this.parseDirectionalValue(newValue, currentSuffix);
			} else {
				newValue = fallback;
			}
			style += `${cssVar}:${newValue};`;
		});

		style += '}';

		return style;
	}

	isButtonSetting(settingId) {
		return [
			'\\Neve\\Customizer\\Controls\\React\\Button_Appearance',
			'neve_button_appearance',
		].includes(settingId);
	}

	parseDirectionalValue(value, suffix) {
		if (typeof value !== 'object') {
			return value + suffix;
		}

		if (!this.isDirectionalValue(value)) {
			return value;
		}

		let directionalValue = '';

		directions.forEach((direction) => {
			directionalValue += `${value[direction]}${suffix} `;
		});

		directionalValue = directionalValue.trim();

		return directionalValue;
	}

	isDirectionalValue(value) {
		return (
			typeof value.top !== 'undefined' &&
			typeof value.right !== 'undefined' &&
			typeof value.bottom !== 'undefined' &&
			typeof value.left !== 'undefined'
		);
	}

	getSuffix() {
		if (this.suffix) {
			return this.suffix;
		}

		return '';
	}

	maybeParseJson(input) {
		if (typeof input !== 'string') {
			return input;
		}
		try {
			JSON.parse(input);
		} catch (error) {
			return input;
		}
		return JSON.parse(input);
	}
}

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
