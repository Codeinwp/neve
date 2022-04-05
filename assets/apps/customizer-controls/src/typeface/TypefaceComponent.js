/*eslint camelcase: ["error", {allow: ["text_transform","weight_default","refresh_on_reset","font_family_control","letter_spacing_default","line_height_units","disable_transform","size_default","size_units","line_height_default"]}]*/
import PropTypes from 'prop-types';
import { useState } from '@wordpress/element';

import Typeface from './Typeface';

const TypefaceComponent = ({ control }) => {
	let setVal = control.setting.get();
	let defaultParams = {
		size_units: ['em', 'px'],
		line_height_units: ['em', 'px', '—'],
		weight_default: 400,
		text_transform: 'none',
		size_default: {
			suffix: {
				mobile: 'px',
				tablet: 'px',
				desktop: 'px',
			},
			mobile: 15,
			tablet: 15,
			desktop: 15,
		},
		line_height_default: {
			suffix: {
				mobile: 'em',
				tablet: 'em',
				desktop: 'em',
			},
			mobile: 1.6,
			tablet: 1.6,
			desktop: 1.6,
		},
		letter_spacing_default: {
			mobile: 0,
			tablet: 0,
			desktop: 0,
		},
	};

	const emptyValue = {
		fontSize: {
			suffix: {
				mobile: 'px',
				tablet: 'px',
				desktop: 'px',
			},
			mobile: '',
			tablet: '',
			desktop: '',
		},
		lineHeight: {
			suffix: {
				mobile: 'em',
				tablet: 'em',
				desktop: 'em',
			},
			mobile: '',
			tablet: '',
			desktop: '',
		},
		letterSpacing: {
			mobile: '',
			tablet: '',
			desktop: '',
		},
		fontWeight: 'none',
		textTransform: 'none',
	};

	const emptyDefault = {
		size_units: ['em', 'px'],
		line_height_units: ['em', 'px', '-'],
		weight_default: 'none',
		text_transform: 'none',
		size_default: {
			suffix: {
				mobile: 'px',
				tablet: 'px',
				desktop: 'px',
			},
			mobile: '',
			tablet: '',
			desktop: '',
		},
		line_height_default: {
			suffix: {
				mobile: 'em',
				tablet: 'em',
				desktop: 'em',
			},
			mobile: '',
			tablet: '',
			desktop: '',
		},
		letter_spacing_default: {
			mobile: '',
			tablet: '',
			desktop: '',
		},
	};

	if (!setVal) {
		setVal = emptyValue;
	}

	const controlParams = control.params.input_attrs
		? {
				...defaultParams,
				...JSON.parse(control.params.input_attrs),
		  }
		: defaultParams;

	if (control.params.input_attrs.length) {
		const inputAttrs = JSON.parse(control.params.input_attrs);
		if (inputAttrs.default_is_empty) {
			defaultParams = emptyDefault;
		}
	}

	// Added Later. Make sure we have a default value if none is selected.
	setVal.lineHeight = setVal.lineHeight || defaultParams.line_height_default;
	setVal.lineHeight.suffix =
		setVal.lineHeight.suffix || defaultParams.line_height_default.suffix;

	// Added Later. Make sure we have a suffix for line height.
	controlParams.line_height_default.suffix =
		controlParams.line_height_default.suffix ||
		defaultParams.line_height_default.suffix;

	const [value, setValue] = useState({
		fontSize: setVal.fontSize,
		lineHeight: setVal.lineHeight,
		letterSpacing: setVal.letterSpacing,
		fontWeight: setVal.fontWeight,
		textTransform: setVal.textTransform,
		flag: false,
	});

	const updateValues = (nextValue) => {
		setValue({ ...value, ...nextValue });
		control.setting.set({
			...control.setting.get(),
			...nextValue,
			flag: !control.setting.get().flag,
		});
	};

	const { label, font_family_control, refresh_on_reset } = control.params;
	const {
		disable_transform,
		size_default,
		size_units,
		line_height_default,
		line_height_units,
		letter_spacing_default,
	} = controlParams;

	return (
		<Typeface
			label={label}
			value={value}
			fontFamilyControl={font_family_control}
			withTextTransform={disable_transform}
			defaultFS={size_default}
			fSUnit={size_units}
			onChange={updateValues}
			refreshAfterReset={refresh_on_reset}
			defaultLH={line_height_default}
			lHunit={line_height_units}
			defaultLS={letter_spacing_default}
		/>
	);
};

TypefaceComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default TypefaceComponent;
