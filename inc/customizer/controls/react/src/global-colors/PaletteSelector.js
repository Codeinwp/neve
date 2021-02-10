import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { trash } from '@wordpress/icons';
import classnames from 'classnames';

const PaletteSelector = ({ values, save }) => {
	const { palettes, activePalette } = values;

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [willDelete, setWillDelete] = useState('');

	const PREVIEW_COLORS = [
		'nv-primary-accent',
		'nv-dark-bg',
		'nv-light-bg',
		'nv-site-bg',
	];

	const deletePalette = () => {
		const nextValues = { ...values };
		if (activePalette === willDelete) {
			nextValues.activePalette = 'base';
		}
		delete nextValues.palettes[willDelete];
		setIsOpenModal(false);
		setWillDelete('');
		save(nextValues);
	};

	const setActivePalette = (id) => {
		const nextValues = { ...values };
		nextValues.activePalette = id;

		save(nextValues);
	};

	// Reorder the palette keys so we always have first positions used by defaults.
	const orderedPaletteKeys = [
		...Object.keys(values.palettes).filter(
			(paletteSlug) => !palettes[paletteSlug].allowDeletion
		),
		...Object.keys(values.palettes).filter(
			(paletteSlug) => palettes[paletteSlug].allowDeletion
		),
	];

	return (
		<div className="neve-palettes-wrap">
			{orderedPaletteKeys.map((id) => {
				const { colors, allowDeletion, name } = palettes[id];
				const paletteClasses = classnames([
					'neve-global-color-palette-inner',
					{
						active: activePalette === id,
					},
				]);
				return (
					<div key={id} className="neve-global-color-palette">
						{allowDeletion && (
							<>
								<Button
									isLink
									icon={trash}
									iconSize={21}
									className="delete-palette"
									title={__('Remove Palette', 'neve')}
									onClick={() => {
										setWillDelete(id);
										setIsOpenModal(true);
									}}
								/>
								{isOpenModal && (
									<Modal
										isDismissible={false}
										className="neve-global-colors-confirm-delete-modal"
										title={sprintf(
											// translators: %s - name of palette that will be deleted.
											__(
												'Are you sure you want to delete the %s palette?',
												'neve'
											),
											palettes[willDelete].name
										)}
									>
										<p>
											{__(
												'If this is the currently active palette, the current palette will be switched to the Base one.',
												'neve'
											)}
										</p>
										<div className="actions">
											<Button
												isPrimary
												icon="trash"
												onClick={deletePalette}
											>
												{__('Delete', 'neve')}
											</Button>
											<Button
												isSecondary
												onClick={() => {
													setIsOpenModal(false);
													setWillDelete('');
												}}
											>
												{__('Cancel', 'neve')}
											</Button>
										</div>
									</Modal>
								)}
							</>
						)}
						<button
							className={paletteClasses}
							onClick={(e) => {
								e.preventDefault();
								setActivePalette(id);
							}}
							key={name.toLowerCase()}
						>
							{PREVIEW_COLORS.map((color, index) => {
								return (
									<div
										className="color"
										key={index}
										style={{
											backgroundColor: colors[color],
										}}
									/>
								);
							})}
							<span className="title">{name}</span>
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default PaletteSelector;
