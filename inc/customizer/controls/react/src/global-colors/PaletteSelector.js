import classnames from 'classnames';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const PaletteSelector = ( { palettes, setActivePalette, active } ) => {
	return (
		<div className="neve-palettes-wrap">
			{ Object.keys( palettes ).map( ( id ) => {
				const { colors, allowDeletion, name } = palettes[ id ];
				const paletteClasses = classnames( [
					'neve-global-color-palette',
					{
						active: active === id,
					},
				] );
				return (
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
							.map( ( color ) => (
								<div
									className="color"
									key={ color }
									style={ { backgroundColor: color } }
								/>
							) ) }
						<span className="title">{ name }</span>
					</button>
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
		const { setActivePalette } = dispatch( 'neve-global-colors' );

		return {
			setActivePalette: ( id ) => setActivePalette( id ),
		};
	} )
)( PaletteSelector );
