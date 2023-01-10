/* jshint esversion: 6 */
import React from 'react';
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

type FontStyle = {
	fontFamily: string;
	fontSize?: string;
};

type Props = {
	description: {
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

	const resetFonts = () => {
		window.document.dispatchEvent(
			new window.CustomEvent('neve-changed-customizer-value', {
				detail: {
					value: { font: false, fontSource: 'System' },
					id: 'neve_body_font_family',
				},
			})
		);
		window.document.dispatchEvent(
			new window.CustomEvent('neve-changed-customizer-value', {
				detail: {
					value: { font: false, fontSource: 'System' },
					id: 'neve_headings_font_family',
				},
			})
		);
	};
	const updateSelected = () => {
		window.wp.customize.bind('ready', () => {
			const bodyFont = window.wp.customize
				.control('neve_body_font_family')
				.setting.get();
			const headingFont = window.wp.customize
				.control('neve_headings_font_family')
				.setting.get();

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
			{description && (
				<span
					className="description"
					dangerouslySetInnerHTML={{
						__html: `${description}`,
					}}
				/>
			)}
			{pairs.length > 0
				? pairs.map((preset, index) => {
						const { bodyFont, headingFont } = preset;
						const label = `${headingFont.font} & ${bodyFont.font}`;
						const headingStyle: FontStyle = {
							fontFamily: `${headingFont.font}, sans-serif`,
						};
						const bodyStyle: FontStyle = {
							fontFamily: `${bodyFont.font}, sans-serif`,
						};

						if (headingFont.previewSize) {
							headingStyle.fontSize = headingFont.previewSize;
						}
						if (bodyFont.previewSize) {
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
					<span className="dashicons dashicons-image-rotate"></span>
					{__('Reset all to default', 'neve')}
				</button>
			)}
		</div>
	);
};

export default FontPairSelector;
