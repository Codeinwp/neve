/* jshint esversion: 6 */
import React, { CSSProperties } from 'react';
import { __ } from '@wordpress/i18n';
import { Tooltip } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

type Font = {
	font: string;
	fontSource: 'Google' | 'System';
	previewSize?: string;
};

export type FontPair = {
	bodyFont: Font;
	headingFont: Font;
	selected?: boolean;
};

type Props = {
	description: {
		text: string;
		link: string;
	};
	pairs: FontPair[];
	onSelect: (data: FontPair) => void;
};
const FontPairSelector: React.FC<Props> = ({
	description,
	pairs,
	onSelect,
}) => {
	const [selected, setSelected] = useState(-1);
	const [prevBody, setPrevBody] = useState({
		font: '',
		fontSource: 'System',
	});
	const [prevHead, setPrevHead] = useState({
		font: '',
		fontSource: 'System',
	});

	const resetFonts = () => {
		window.document.dispatchEvent(
			new window.CustomEvent('neve-changed-customizer-value', {
				detail: {
					value:
						prevBody.font !== ''
							? prevBody
							: { font: false, fontSource: 'System' },
					id: 'neve_body_font_family',
				},
			})
		);
		window.document.dispatchEvent(
			new window.CustomEvent('neve-changed-customizer-value', {
				detail: {
					value:
						prevHead.font !== ''
							? prevHead
							: { font: false, fontSource: 'System' },
					id: 'neve_headings_font_family',
				},
			})
		);
	};

	const getFont = (font: string) => {
		const result = { font: '', fontSource: 'System' };
		if (!font) {
			return result;
		}
		// @ts-ignore
		const availableFonts = NeveReactCustomize.fonts;
		Object.keys(availableFonts).map((key) => {
			const hasResults = availableFonts[key].filter((value: string) => {
				return value.toLowerCase().includes(font.toLowerCase());
			});
			if (hasResults.length > 0) {
				result.font = hasResults[0];
				result.fontSource = key;
			}
			return key;
		});
		return result;
	};

	const checkSelectedFont = () => {
		const bodyFont = window.wp.customize
			.control('neve_body_font_family')
			.setting.get();
		const headingFont = window.wp.customize
			.control('neve_headings_font_family')
			.setting.get();

		if (selected === -1) {
			const selectedBody = getFont(bodyFont);
			setPrevBody(selectedBody);
			console.log(selectedBody);
		}

		if (selected === -1) {
			const selectedHeading = getFont(headingFont);
			setPrevHead(selectedHeading);
			console.log(selectedHeading);
		}

		return { bodyFont, headingFont };
	};

	const updateSelected = () => {
		window.wp.customize.bind('ready', () => {
			const { bodyFont, headingFont } = checkSelectedFont();

			const index = pairs.findIndex(
				(item: FontPair) =>
					item.headingFont.font === headingFont &&
					item.bodyFont.font === bodyFont
			);
			setSelected(index);
		});
	};

	useEffect(() => {
		updateSelected();
	}, []);

	return (
		<div className="neve-font-pair-selector">
			{description && description.text && description.link && (
				<span
					className="description"
					dangerouslySetInnerHTML={{
						__html: `${description.text} ${description.link}`,
					}}
				/>
			)}
			{pairs.length > 0
				? pairs.map((preset, index) => {
						const { bodyFont, headingFont } = preset;
						const label = `${headingFont.font} & ${bodyFont.font}`;
						const headingStyle: CSSProperties = {
							fontFamily: `${headingFont.font}, sans-serif`,
						};
						const bodyStyle: CSSProperties = {
							fontFamily: `${bodyFont.font}, sans-serif`,
						};

						if (headingFont.previewSize) {
							if (
								parseInt(
									headingFont.previewSize.replace('px', '')
								) > 27
							) {
								headingStyle.textOverflow = 'ellipsis';
							}
							headingStyle.fontSize = headingFont.previewSize;
						}
						if (bodyFont.previewSize) {
							if (
								parseInt(
									bodyFont.previewSize.replace('px', '')
								) > 24
							) {
								bodyStyle.textOverflow = 'ellipsis';
							}
							bodyStyle.fontSize = bodyFont.previewSize;
						}
						return (
							<Tooltip key={index} text={label}>
								<button
									className={
										selected === index
											? 'active dashicons-before dashicons-yes'
											: undefined
									}
									onClick={(e) => {
										e.preventDefault();
										// if already selected do a reset to default.
										if (selected === index) {
											resetFonts();
											setSelected(-1);
											return;
										}
										checkSelectedFont();
										onSelect(preset);
										setSelected(index);
									}}
								>
									<span
										className="neve-font-preview"
										style={headingStyle}
									>
										The big brown fox
									</span>
									<span
										className="neve-font-preview"
										style={bodyStyle}
									>
										Jumps over the lazy dog
									</span>
								</button>
							</Tooltip>
						);
				  })
				: null}
			{pairs.length > 0 && (
				<button
					className="reset"
					onClick={(e) => {
						e.preventDefault();
						resetFonts();
						setSelected(-1);
					}}
				>
					<span className="dashicons dashicons-image-rotate" />
					{__('Reset all to default', 'neve')}
				</button>
			)}
		</div>
	);
};

export default FontPairSelector;
