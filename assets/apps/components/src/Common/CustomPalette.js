import { __ } from '@wordpress/i18n';
import { Button, ExternalLink } from '@wordpress/components';
import classnames from 'classnames';
import { globalPaletteColors } from './common';

/**
 * Function that gets the color from the global custom colors control and convert them to the Global colors format.
 *
 * @return {Object} customColors - An object with color keys and label values.
 */
const getCustomColors = () => {
	let customColorsValue = {};

	if (wp.customize) {
		customColorsValue = wp.customize
			.control('neve_global_custom_colors')
			.setting.get();
	} else if (window.nvMegaMenu && window.nvMegaMenu.globalCustomColors) {
		customColorsValue = window.nvMegaMenu.globalCustomColors;
	}

	const customColors = {};
	for (const key in customColorsValue) {
		const data = customColorsValue[key];
		if (key === 'flag') {
			continue;
		}
		customColors[key] = data.label;
	}
	return customColors;
};

const CustomPalette = ({ title, onChange, activeColor }) => {
	const focusGlobalColors = () => {
		wp.customize.control('neve_global_colors').focus();
	};

	const customColors = getCustomColors();

	return (
		<div className="nv-custom-palette-wrap">
			<div className="header">
				{title && (
					<span className="customize-control-title">{title}</span>
				)}
				{window.wp.customize ? (
					<Button
						className="edit-gc-link"
						isLink
						onClick={focusGlobalColors}
					>
						{__('Edit', 'neve')}
					</Button>
				) : (
					<ExternalLink
						className="edit-gc-link"
						href={`${window.nvComponents.customizerURL}?autofocus[section]=neve_colors_background_section`}
						target="_blank"
					>
						{__('Edit', 'neve')}
					</ExternalLink>
				)}
			</div>
			<div className="nv-custom-palette-inner">
				{globalPaletteColors.map((group, index) => {
					const colors = { ...group, ...customColors };
					return (
						<ul key={index}>
							{Object.keys(colors).map((slug) => {
								const style = {
									background: `var(--${slug})`,
								};
								const buttonClasses = classnames([
									'nv-custom-palette-color',
									{
										active:
											activeColor === `var(--${slug})`,
									},
								]);

								return (
									<li title={colors[slug]} key={slug}>
										<a
											href="#global-select"
											onClick={(e) => {
												e.preventDefault();
												onChange(`var(--${slug})`);
											}}
										>
											<span
												style={style}
												className={buttonClasses}
											/>
											<span>{colors[slug]}</span>
										</a>
									</li>
								);
							})}
						</ul>
					);
				})}
			</div>
		</div>
	);
};

export default CustomPalette;
