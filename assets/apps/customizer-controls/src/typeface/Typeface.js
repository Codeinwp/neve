/* global NeveReactCustomize */
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { InlineSelect, NumberControl } from '@neve-wp/components';
import PropTypes from 'prop-types';

const Typeface = (props) => {
	const [currentDevice, setCurrentDevice] = useState('desktop');

	const {
		label,
		fontFamilyControl,
		withTextTransform = true,
		value = {
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
		},
		onChange,
		refreshAfterReset = false,
		fSUnit = ['em', 'px'],
		lHunit = ['em', 'px', '—'],
		defaultFS = {
			suffix: {
				mobile: 'px',
				tablet: 'px',
				desktop: 'px',
			},
			mobile: '',
			tablet: '',
			desktop: '',
		},
		defaultLH = {
			suffix: {
				mobile: 'em',
				tablet: 'em',
				desktop: 'em',
			},
			mobile: '',
			tablet: '',
			desktop: '',
		},
		defaultLS = {
			mobile: '',
			tablet: '',
			desktop: '',
		},
	} = props;

	const [fontFamily, setFontFamily] = useState(
		wp.customize.control(fontFamilyControl)
			? wp.customize.control(fontFamilyControl).setting()
			: ''
	);

	useEffect(() => {
		window.wp.customize.bind('change', (setting) => {
			if (setting.id === fontFamilyControl) {
				setFontFamily(setting.get());
			}
		});
	}, []);

	const renderTextTransform = () => {
		if (!withTextTransform) {
			return;
		}
		return (
			<InlineSelect
				label={__('Transform', 'neve')}
				value={value.textTransform}
				options={[
					{ value: 'none', label: __('None', 'neve') },
					{
						value: 'capitalize',
						label: __('Capitalize', 'neve'),
					},
					{
						value: 'lowercase',
						label: __('Lowercase', 'neve'),
					},
					{
						value: 'uppercase',
						label: __('Uppercase', 'neve'),
					},
				]}
				onChange={(textTransform) => {
					onChange({ textTransform });
				}}
			/>
		);
	};

	const renderFontWeight = () => {
		let { fontWeight } = value;

		if (!fontWeight) {
			fontWeight = 'none';
		}

		const { fontVariants, systemFontVariants } = NeveReactCustomize;
		const allFontVariants = { ...fontVariants, ...systemFontVariants };
		const defaultOptions = [
			{ value: 'none', label: __('None', 'neve') },
			{ value: 100, label: '100' },
			{ value: 200, label: '200' },
			{ value: 300, label: '300' },
			{ value: 400, label: '400' },
			{ value: 500, label: '500' },
			{ value: 600, label: '600' },
			{ value: 700, label: '700' },
			{ value: 800, label: '800' },
			{ value: 900, label: '900' },
		];

		let options;
		if (allFontVariants[fontFamily] !== undefined) {
			options = allFontVariants[fontFamily]
				.filter((fv) => !fv.includes('italic'))
				.reduce(
					(acc, curr) => [
						...acc,
						{ value: parseInt(curr), label: curr },
					],
					[{ value: 'none', label: __('None', 'neve') }]
				);
		}

		return (
			<InlineSelect
				label={__('Weight', 'neve')}
				value={fontWeight}
				options={options ? options : defaultOptions}
				onChange={(nextValue) => {
					onChange({ fontWeight: nextValue });
					if (nextValue === 'none' && refreshAfterReset) {
						wp.customize.previewer.refresh();
					}
				}}
			/>
		);
	};

	const renderFontSize = () => {
		let { fontSize } = value;
		if (!fontSize) {
			fontSize = { ...defaultFS };
		}

		return (
			<NumberControl
				className="font-size"
				label={__('Font Size', 'neve')}
				default={defaultFS[currentDevice]}
				value={fontSize[currentDevice]}
				step={fontSize.suffix[currentDevice] === 'em' ? 0.1 : 1}
				units={fSUnit}
				activeUnit={fontSize.suffix[currentDevice]}
				hasResponsive
				onChange={(val) => {
					const nextVal = fontSize;
					nextVal[currentDevice] = val;
					onChange({ fontSize: nextVal });
				}}
				onUnitChange={(val) => {
					const nextVal = fontSize;
					nextVal.suffix[currentDevice] = val;
					onChange({ fontSize: nextVal });
				}}
				onReset={() => {
					onChange({ fontSize: defaultFS });
					if (refreshAfterReset) {
						wp.customize.previewer.refresh();
					}
				}}
				onChangedDevice={setCurrentDevice}
			/>
		);
	};

	const renderLineHeight = () => {
		let { lineHeight } = value;
		if (!lineHeight) {
			lineHeight = { ...defaultLH };
		}
		const lowerStepUnits = ['em', '—'];
		return (
			<NumberControl
				className="line-height"
				label={__('Line Height', 'neve')}
				step={
					lowerStepUnits.includes(lineHeight.suffix[currentDevice])
						? 0.1
						: 1
				}
				default={defaultLH[currentDevice]}
				value={lineHeight[currentDevice]}
				units={lHunit}
				activeUnit={lineHeight.suffix[currentDevice]}
				max={lineHeight.suffix[currentDevice] === 'em' ? 4 : 200}
				min={lineHeight.suffix[currentDevice] === 'em' ? 0.5 : 1}
				hasResponsive
				onChange={(val) => {
					const nextVal = lineHeight;
					nextVal[currentDevice] = val;
					onChange({ lineHeight: nextVal });
				}}
				onReset={() => {
					onChange({ lineHeight: defaultLH });
					if (refreshAfterReset) {
						wp.customize.previewer.refresh();
					}
				}}
				onUnitChange={(val) => {
					const nextVal = lineHeight;
					nextVal.suffix[currentDevice] = val;
					onChange({ lineHeight: nextVal });
				}}
				onChangedDevice={setCurrentDevice}
			/>
		);
	};

	const renderLetterSpacing = () => {
		let { letterSpacing } = value;
		if (!letterSpacing) {
			letterSpacing = { ...defaultLS };
		}
		return (
			<NumberControl
				className="letter-spacing"
				label={__('Letter Spacing', 'neve')}
				step={0.1}
				default={defaultLS[currentDevice]}
				value={
					letterSpacing && letterSpacing[currentDevice]
						? letterSpacing[currentDevice]
						: ''
				}
				max={20}
				min={-5}
				units={['px']}
				hasResponsive
				onChange={(val) => {
					const nextVal = letterSpacing;
					nextVal[currentDevice] = val;
					onChange({ letterSpacing: nextVal });
				}}
				onReset={() => {
					onChange({ letterSpacing: defaultLS });
					if (refreshAfterReset) {
						wp.customize.previewer.refresh();
					}
				}}
				onChangedDevice={setCurrentDevice}
			/>
		);
	};

	return (
		<>
			{label && <span className="customize-control-title">{label}</span>}
			<div className="neve-typeface-control neve-white-background-control">
				{renderTextTransform()}
				{renderFontWeight()}
				{renderFontSize()}
				{renderLineHeight()}
				{renderLetterSpacing()}
			</div>
		</>
	);
};

export default Typeface;

const responsiveShape = {
	mobile: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	tablet: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	desktop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Typeface.propTypes = {
	label: PropTypes.string,
	value: PropTypes.shape({
		fontSize: PropTypes.shape({
			suffix: PropTypes.shape(responsiveShape),
			...responsiveShape,
		}),
		lineHeight: PropTypes.shape({
			suffix: PropTypes.shape(responsiveShape),
			...responsiveShape,
		}),
		letterSpacing: PropTypes.shape(responsiveShape),
		fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		textTransform: PropTypes.string,
	}),
	withTextTransform: PropTypes.bool,
	refreshAfterReset: PropTypes.bool,
	fSUnit: PropTypes.array,
	lHunit: PropTypes.array,
	onChange: PropTypes.func.isRequired,
	defaultFS: PropTypes.shape({
		suffix: PropTypes.shape(responsiveShape),
		...responsiveShape,
	}),
	defaultLH: PropTypes.shape({
		suffix: PropTypes.shape(responsiveShape),
		...responsiveShape,
	}),
	defaultLS: PropTypes.shape(responsiveShape),
};
