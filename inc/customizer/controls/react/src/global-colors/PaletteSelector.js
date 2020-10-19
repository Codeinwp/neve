import { withSelect, withDispatch } from '@wordpress/data';
import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __, sprintf } from '@wordpress/i18n';
import classnames from 'classnames';

const PaletteSelector = ( {
	palettes,
	updatePalettes,
	active,
	setActivePalette,
} ) => {
	const [ isOpenModal, setIsOpenModal ] = useState( false );
	const [ willDelete, setWillDelete ] = useState( '' );

	const deletePalette = () => {
		if ( active === willDelete ) {
			setActivePalette( 'base' );
		}

		const newPalettes = { ...palettes };
		delete newPalettes[ willDelete ];
		setIsOpenModal( false );
		setWillDelete( '' );
		updatePalettes( newPalettes );
	};

	return (
		<div className="neve-palettes-wrap">
			{ Object.keys( palettes ).map( ( id ) => {
				const { colors, allowDeletion, name } = palettes[ id ];
				const paletteClasses = classnames( [
					'neve-global-color-palette-inner',
					{
						active: active === id,
					},
				] );
				return (
					<div key={ id } className="neve-global-color-palette">
						{ allowDeletion && (
							<>
								<Button
									isLink
									icon="trash"
									className="delete-palette"
									title={ __( 'Remove Palette', 'neve' ) }
									onClick={ () => {
										setWillDelete( id );
										setIsOpenModal( true );
									} }
								/>
								{ isOpenModal && (
									<Modal
										isDismissible={ false }
										className="neve-global-colors-confirm-delete-modal"
										title={ sprintf(
											// translators: %s - name of palette that will be deleted.
											__(
												'Are you sure you want to delete the %s palette?',
												'neve'
											),
											palettes[ willDelete ].name
										) }
									>
										<p>
											{ __(
												'If this is the currently active palette, the current palette will be switched to the Base one.',
												'neve'
											) }
										</p>
										<div className="actions">
											<Button
												isPrimary
												icon="trash"
												onClick={ deletePalette }
											>
												{ __( 'Delete', 'neve' ) }
											</Button>
											<Button
												isSecondary
												onClick={ () => {
													setIsOpenModal( false );
													setWillDelete( '' );
												} }
											>
												{ __( 'Cancel', 'neve' ) }
											</Button>
										</div>
									</Modal>
								) }
							</>
						) }
						<button
							className={ paletteClasses }
							onClick={ ( e ) => {
								e.preventDefault();
								setActivePalette( id );
							} }
							key={ name.toLowerCase() }
						>
							{ Object.values( colors )
								.splice( 0, 4 )
								.map( ( color, index ) => (
									<div
										className="color"
										key={ index }
										style={ { backgroundColor: color } }
									/>
								) ) }
							<span className="title">{ name }</span>
						</button>
					</div>
				);
			} ) }
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getPalettes, getActivePalette } = select(
			'neve-global-colors'
		);

		return {
			palettes: getPalettes(),
			active: getActivePalette(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setActivePalette, updatePalettes } = dispatch(
			'neve-global-colors'
		);

		return {
			setActivePalette: ( id ) => setActivePalette( id ),
			updatePalettes,
		};
	} )
)( PaletteSelector );
