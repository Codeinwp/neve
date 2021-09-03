import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { plusCircleFilled } from '@wordpress/icons';
import { camelCase } from 'lodash';

const PaletteForm = ({ values, save, disabled }) => {
	const { palettes } = values;
	const [isAdding, setIsAdding] = useState(false);
	const [newPaletteName, setNewPaletteName] = useState('');
	const [paletteFrom, setPaletteFrom] = useState('base');

	const toggleAdding = () => {
		setIsAdding(!isAdding);
		setNewPaletteName('');
	};

	const setBasePalette = (e) => {
		setPaletteFrom(e.target.value);
	};

	const paletteExists = () =>
		Object.keys(palettes).filter(
			(item) => camelCase(newPaletteName) === item
		).length > 0;

	const addNewPalette = (e) => {
		e.preventDefault();
		const nextValue = { ...values };
		const paletteSlug = camelCase(newPaletteName);
		nextValue.palettes[paletteSlug] = {
			name: newPaletteName,
			allowDeletion: true,
			colors: { ...nextValue.palettes[paletteFrom].colors },
		};
		nextValue.activePalette = paletteSlug;
		save(nextValue);
		toggleAdding();
	};

	if (!isAdding) {
		return (
			<div className="add-palette-form">
				<Button
					disabled={disabled}
					style={{ alignSelf: 'flex-start' }}
					isSmall
					isSecondary
					icon={plusCircleFilled}
					iconSize={16}
					onClick={toggleAdding}
				>
					{__('Add Custom Palette')}
				</Button>
			</div>
		);
	}

	return (
		<div className="add-palette-form">
			<input
				type="text"
				placeholder={__('Palette Title', 'neve')}
				onChange={(e) => {
					setNewPaletteName(e.target.value);
				}}
			/>
			<span className="customize-control-title">
				{__('Extend from:', 'neve')}
			</span>
			<select
				value={paletteFrom}
				onChange={setBasePalette}
				onBlur={setBasePalette}
			>
				{Object.keys(palettes).map((palette, index) => {
					return (
						<option key={index} value={palette}>
							{palettes[palette].name}
						</option>
					);
				})}
			</select>
			<div className="actions">
				<Button
					isSmall
					isSecondary
					isDestructive
					onClick={toggleAdding}
				>
					{__('Cancel', 'neve')}
				</Button>
				<Button
					isSmall
					icon={plusCircleFilled}
					iconSize={16}
					isPrimary
					onClick={addNewPalette}
					disabled={paletteExists() || newPaletteName.length < 1}
				>
					{__('Add', 'neve')}
				</Button>
			</div>
		</div>
	);
};

export default PaletteForm;
