/* jshint esversion: 6 */

import PropTypes from 'prop-types';
import RadioIcons from '../common/RadioIcons';
import SVG from '../common/svg.js';
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';

const RadioButtonsComponent = ({ control }) => {
	const [value, setValue] = useState(control.setting.get());

	useEffect(() => {
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) return false;
			if (e.detail.id !== control.id) return false;
			updateValue(e.detail.value);
		});
	}, []);

	const updateValue = (newVal) => {
		setValue(newVal);
		control.setting.set(newVal);
	};

	const getChoices = () => {
		const { is_for, choices } = control.params;

		if (!is_for) {
			return choices;
		}

		switch (is_for) {
			case 'logo':
				return {
					default: {
						tooltip: __('Logo Only', 'neve'),
						icon: SVG.logoOnly,
					},
					logoTitle: {
						tooltip: __('Logo - Title & Tagline', 'neve'),
						icon: SVG.logoTitle,
					},
					titleLogo: {
						tooltip: __('Title & Tagline - Logo', 'neve'),
						icon: SVG.titleLogo,
					},
					logoTopTitle: {
						tooltip: __('Logo on Top', 'neve'),
						icon: SVG.logoTopTitle,
					},
				};
			case 'menu':
				return {
					'style-plain': {
						tooltip: __('Plain', 'neve'),
						icon: SVG.menuPlain,
					},
					'style-full-height': {
						tooltip: __('Background', 'neve'),
						icon: SVG.menuFilled,
					},
					'style-border-bottom': {
						tooltip: __('Bottom Border', 'neve'),
						icon: SVG.menuUnderline,
					},
					'style-border-top': {
						tooltip: __('Top Border', 'neve'),
						icon: SVG.menuOverline,
					},
				};
			case 'account_component':
				return {
					user_icon_style1: {
						tooltip: __('Icon Style 2', 'neve'),
						icon: SVG.myAccountUserSolid,
					},
					user_icon_style2: {
						tooltip: __('Icon Style 1', 'neve'),
						icon: SVG.myAccountUserRegular,
					},
					user_icon_style3: {
						tooltip: __('Icon Style 3', 'neve'),
						icon: SVG.myAccountUserTagSolid,
					},
					user_icon_style4: {
						tooltip: __('Icon Style 4', 'neve'),
						icon: SVG.myAccountUserAltSolid,
					},
					user_icon_style5: {
						tooltip: __('Icon Style 5', 'neve'),
						icon: SVG.myAccountUsersSolid,
					},
					user_icon_style6: {
						tooltip: __('Icon Style 6', 'neve'),
						icon: SVG.myAccountUsersFirendsSolid,
					},
					user_avatar: {
						tooltip: __('WordPress Avatar', 'neve'),
						icon: SVG.myAccountUserAvatar,
					},
					none: {
						tooltip: __('No Icon', 'neve'),
						icon: SVG.myAccountNone,
					},
				};
			case 'cart_component':
				return {
					'cart-icon-style1': {
						tooltip: __('Style 1', 'neve'),
						icon: SVG.cartIconStyle1,
					},
					'cart-icon-style2': {
						tooltip: __('Style 2', 'neve'),
						icon: SVG.cartIconStyle2,
					},
					'cart-icon-style3': {
						tooltip: __('Style 3', 'neve'),
						icon: SVG.cartIconStyle3,
					},
					'cart-icon-style4': {
						tooltip: __('Style 4', 'neve'),
						icon: SVG.cartIconStyle4,
					},
					'cart-icon-style5': {
						tooltip: __('Style 5', 'neve'),
						icon: SVG.cartIconStyle5,
					},
					'cart-icon-style6': {
						tooltip: __('Style 6', 'neve'),
						icon: SVG.cartIconStyle6,
					},
				};
		}
	};
	const { label, large_buttons, showLabels } = control.params;

	return (
		<div className="neve-white-background-control">
			{label && <span className="customize-control-title">{label}</span>}
			<RadioIcons
				largeButtons={large_buttons}
				showLabels={showLabels}
				value={value}
				options={getChoices()}
				onChange={updateValue}
			/>
		</div>
	);
};

RadioButtonsComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default RadioButtonsComponent;
