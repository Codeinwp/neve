/* jshint esversion: 6 */
import PropTypes from 'prop-types';

import { useState } from '@wordpress/element';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PresetsSelector = ({ presets, onSelect }) => {
	const [search, setSearch] = useState('');

	/**
	 * You can get the value in the console with this command:
	 *
	 * copy(HFG.getSettings());
	 *
	 * @return {*}
	 */
	const filteredPresets = presets.filter((preset) =>
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
			{filteredPresets.length > 0 ? (
				filteredPresets.map((preset, index) => {
					return (
						<Tooltip key={index} text={preset.label}>
							<button
								onClick={(e) => {
									e.preventDefault();
									onSelect(preset.setup);
								}}
							>
								<img src={preset.image} alt={preset.label} />
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

PresetsSelector.propTypes = {
	presets: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
};

export default PresetsSelector;
