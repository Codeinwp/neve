/* jshint esversion: 6 */
import { useState } from '@wordpress/element';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React from 'react';

type Preset = { image: string; label: string; setup: string };

type Props = {
	presets: Preset[];
	onSelect: (data: string) => void;
};

const PresetsSelector: React.FC<Props> = ({ presets, onSelect }) => {
	const [search, setSearch] = useState('');
	/**
	 * You can get the value in the console with this command:
	 *
	 * copy(HFG.getSettings());
	 *
	 * @return {*}
	 */
	const filtered = presets.filter((preset) =>
		preset.label.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="neve-preset-selector">
			<div className="search">
				<input
					type="search"
					placeholder={__('Search Header Presets…', 'neve')}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
			</div>
			{filtered.length > 0 ? (
				filtered.map((preset, index) => {
					const { image, label, setup } = preset;
					return (
						<Tooltip key={index} text={label}>
							<button
								onClick={(e) => {
									e.preventDefault();
									onSelect(setup);
								}}
							>
								<img src={image} alt={label} />
							</button>
						</Tooltip>
					);
				})
			) : (
				<p>{__('No header presets found', 'neve')}</p>
			)}
		</div>
	);
};

export default PresetsSelector;
