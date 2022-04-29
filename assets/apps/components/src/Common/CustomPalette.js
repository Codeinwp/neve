import { __ } from '@wordpress/i18n';
import { Button, ExternalLink } from '@wordpress/components';
import classnames from 'classnames';
import { globalPaletteColors } from './common';

const CustomPalette = ({ title, onChange, activeColor }) => {
	const focusGlobalColors = () => {
		wp.customize.control('neve_global_colors').focus();
	};

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
					return (
						<ul key={index}>
							{Object.keys(group).map((slug) => {
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
									<li title={group[slug]} key={slug}>
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
											<span>{group[slug]}</span>
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
