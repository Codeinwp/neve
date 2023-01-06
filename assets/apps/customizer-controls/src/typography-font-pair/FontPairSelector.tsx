/* jshint esversion: 6 */
import { __ } from '@wordpress/i18n';
import { Tooltip } from '@wordpress/components';
import React from 'react';

export type FontPair = { bodyFont: string; headingFont: string };

type Props = {
	pairs: FontPair[];
	onSelect: (data: FontPair) => void;
};
const FontPairSelector: React.FC<Props> = ({ pairs, onSelect }) => {
	return (
		<div className="neve-font-pair-selector">
			{pairs.length > 0
				? pairs.map((preset, index) => {
						const { bodyFont, headingFont } = preset;
						const label = __('test label');
						return (
							<Tooltip key={index} text={label}>
								<button
									onClick={(e) => {
										e.preventDefault();
										onSelect(preset);
									}}
								>
									<span
										className="neve-font-preview"
										style={{
											fontFamily: `${headingFont}, sans-serif`,
										}}
									>
										The big brown fox
									</span>
									<span
										className="neve-font-preview"
										style={{
											fontFamily: `${bodyFont}, sans-serif`,
										}}
									>
										Jumps over the lazy dog
									</span>
								</button>
							</Tooltip>
						);
				  })
				: null}
		</div>
	);
};

export default FontPairSelector;
