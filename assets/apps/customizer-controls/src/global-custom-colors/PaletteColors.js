import {
	ButtonGroup,
	Button,
	Dashicon,
	Icon,
	Modal,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { debounce } from 'lodash';
import { Accordion, ColorControl } from '@neve-wp/components';
import { useState } from '@wordpress/element';
import { cleanForSlug } from '@wordpress/url';
import EditColorLabel from './EditColorLabel';

const PaletteColors = ({ values, save }) => {
	const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
	const [willDelete, setWillDelete] = useState('');
	const [willEdit, setWillEdit] = useState('');
	const openDeleteModal = () => setDeleteModalOpen(true);
	const closeDeleteModal = () => setDeleteModalOpen(false);
	const addNewColor = () => {
		const nextValues = { ...values };

		const newId = newColorSlot();

		nextValues[`custom-${newId}`] = {
			label: `Custom ${newId}`,
			val: '#fff',
		};

		save(nextValues);
	};

	// Returns available slot number for new custom color (sorts slugs which starts with "custom-")
	const newColorSlot = () => {
		const slugs = Object.keys(values);
		if (slugs.length === 0) {
			return 1;
		}

		const customSlugs = slugs.filter((slug) => {
			return slug.substring(0, 7) === 'custom-';
		});

		const customSlugNumbers = customSlugs.map((slug) => {
			return parseInt(slug.substring(7));
		});

		customSlugNumbers.sort((a, b) => {
			return a - b;
		});

		return customSlugNumbers.at(-1) + 1;
	};

	const updateColorInPalette = (colorSlug, label, val) => {
		const nextValues = { ...values };
		if (nextValues[colorSlug].val === val) {
			return false;
		}
		nextValues[colorSlug].label = label;
		nextValues[colorSlug].val = val;
		save(nextValues);
	};

	const deleteColor = () => {
		if (!willDelete) {
			return;
		}

		const nextValues = { ...values };
		delete nextValues[willDelete];
		save(nextValues);
		closeDeleteModal();
	};

	// updates label&slug
	const editLabel = (slug, newLabel) => {
		const nextValues = { ...values };
		if (nextValues[slug].label === newLabel) {
			setWillEdit('');
			return false;
		}

		// TODO: duplicate check can be added.

		nextValues[cleanForSlug(newLabel)] = {
			label: newLabel,
			val: nextValues[slug].val,
		};

		delete nextValues[slug];

		save(nextValues);
		setWillEdit('');
	};

	const editLabelCancel = () => setWillEdit('');

	return (
		<>
			<Accordion label={__('Custom Colors', 'neve')}>
				<div className="color-array-wrap">
					{Object.keys(values).map((slug) => {
						if (slug === 'flag') {
							return null;
						}

						const isEditing = willEdit === slug;

						return (
							<ColorControl
								disableGlobal
								key={slug}
								label={!isEditing ? values[slug].label : null}
								selectedColor={values[slug].val}
								onChange={debounce((value) => {
									updateColorInPalette(
										slug,
										values[slug].label,
										value
									);
								}, 100)}
							>
								{isEditing && (
									<EditColorLabel
										currentLabel={values[slug].label}
										slug={slug}
										save={editLabel}
										cancel={editLabelCancel}
									/>
								)}
								{!isEditing && (
									<div className="action-icon-wrapper">
										<Icon
											onClick={() => {
												setWillEdit(slug);
											}}
											icon="edit"
										/>
									</div>
								)}
								<div className="action-icon-wrapper">
									<Icon
										onClick={() => {
											setWillDelete(slug);
											openDeleteModal();
										}}
										icon="trash"
									/>
								</div>
							</ColorControl>
						);
					})}
					<Button
						className="new-custom-color"
						onClick={() => {
							addNewColor();
						}}
						variant="secondary"
					>
						{__('Add Custom Color', 'neve')}
						<Dashicon icon="plus-alt2" />
					</Button>
					{isDeleteModalOpen && (
						<Modal
							onRequestClose={closeDeleteModal}
							title={__(
								'Are you sure you want to delete a Custom Color?',
								'neve'
							)}
						>
							<p>
								{__(
									'If this color is currently used anywhere on your site, it will be switched to a default color.',
									'neve'
								)}
							</p>
							<ButtonGroup className="remove-custom-color-btn-wrapper">
								<Button variant="primary" onClick={deleteColor}>
									{__('Delete', 'neve')}
								</Button>
								<Button
									variant="secondary"
									onClick={closeDeleteModal}
								>
									{__('Cancel', 'neve')}
								</Button>
							</ButtonGroup>
						</Modal>
					)}
				</div>
			</Accordion>
		</>
	);
};
export default PaletteColors;
