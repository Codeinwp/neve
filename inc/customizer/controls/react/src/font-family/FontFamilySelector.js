import FontPreviewLink from './FontPreviewLink.js';
import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types';

import { Popover, Button, TextControl, Icon } from '@wordpress/components';
import { update, close } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const FontFamilySelector = ({
	fonts,
	selected,
	onFontChoice,
	inheritDefault,
	maybeGetTypekit,
	systemFonts,
}) => {
	const [visible, setVisible] = useState(false);
	const [search, setSearch] = useState('');
	const [loadUntil, setLoadUntil] = useState(20);

	const getFonts = () => {
		const result = {};

		if (!search) {
			return fonts;
		}

		Object.keys(fonts).map((key) => {
			result[key] = fonts[key].filter((value) => {
				return value.toLowerCase().includes(search.toLowerCase());
			});
		});

		return result;
	};

	const getFontList = () => {
		const groups = getFonts();
		const options = [];

		if (!systemFonts) {
			options.push(
				<li
					key="default"
					className={'default-value ' + !selected ? 'selected' : ''}
				>
					<FontPreviewLink
						fontFace="default"
						onClick={() => {
							setVisible(false);
							setSearch('');
							onFontChoice('system', false);
						}}
						label={
							inheritDefault
								? __('Inherit', 'neve')
								: __('Default', 'neve')
						}
					/>
				</li>
			);
		}

		Object.keys(groups).map((key) => {
			if (systemFonts && key !== 'System') {
				return null;
			}

			if (groups[key].length > 0) {
				options.push(
					<li className="font-group-header" key={key}>
						{key}
					</li>
				);
			}
			groups[key].map((font, index) => {
				if (index < loadUntil) {
					options.push(
						<li
							key={font}
							className={font === selected ? 'selected' : ''}
						>
							<FontPreviewLink
								delayLoad={false}
								label={font}
								fontFace={maybeGetTypekit(font)}
								onClick={() => {
									onFontChoice(key, font);
									setVisible(false);
									setSearch('');
								}}
							/>
						</li>
					);
				}
			});
		});

		if (loadUntil < options.length) {
			options.push(
				<li className="load-more" key="load-more">
					<VisibilitySensor
						onChange={(isVisible) => {
							if (isVisible) {
								setLoadUntil(loadUntil + 30);
							}
						}}
					>
						<Icon icon={update} />
					</VisibilitySensor>
				</li>
			);
		}

		return (
			<>
				<div className="popover-content">
					<div className="popover-header">
						<div className="search">
							<TextControl
								placeholder={__('Search', 'neve') + '...'}
								value={search}
								onChange={(e) => {
									setSearch(e);
									setLoadUntil(20);
								}}
							/>
							<a
								className="close-font-selector"
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									setVisible(false);
									setSearch('');
								}}
							>
								<Icon size={21} icon={close} />
							</a>
						</div>
					</div>
					<ul className="neve-fonts-list">
						{options.length ? (
							options
						) : (
							<li className="no-result" key="no-results">
								{__('No results.', 'neve')}
							</li>
						)}
					</ul>
				</div>
			</>
		);
	};
	// eslint-disable-next-line max-len
	const defaultFontface =
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
	const font = maybeGetTypekit(selected);

	return (
		<div className="neve-font-family-control">
			<span className="customize-control-title">
				{__('Font Family', 'neve')}
			</span>
			<Button
				className="font-family-selector-toggle"
				isSecondary
				onClick={() => {
					setVisible(true);
				}}
			>
				<span className="ff-name">
					{selected ||
						(inheritDefault
							? __('Inherit', 'neve')
							: __('Default', 'neve'))}
				</span>
				<span
					className="ff-preview"
					style={{
						fontFamily: font || defaultFontface,
					}}
				>
					Abc
				</span>
				{visible && (
					<Popover
						position="bottom left"
						onFocusOutside={() => {
							setVisible(false);
							setSearch('');
						}}
					>
						{fonts ? getFontList() : __('Loading…', 'neve')}
					</Popover>
				)}
			</Button>
		</div>
	);
};

FontFamilySelector.propTypes = {
	onFontChoice: PropTypes.func.isRequired,
	maybeGetTypekit: PropTypes.func.isRequired,
	inheritDefault: PropTypes.bool.isRequired,
	selected: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default FontFamilySelector;
