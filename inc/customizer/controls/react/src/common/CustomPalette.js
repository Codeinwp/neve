import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

const CustomPalette = ( { title, colors, onChange } ) => {
	const handleChange = ( color ) => {
		onChange( color );
	};

	const focusGlobalColors = () => {
		wp.customize.control( 'neve_global_colors' ).focus();
	};

	return (
		<div className="nv-custom-palette-wrap">
			<div className="header">
				{ title && (
					<span className="customize-control-title">{ title }</span>
				) }
				<Button isLink onClick={ focusGlobalColors }>
					{ __( 'Edit', 'neve' ) }
				</Button>
			</div>
			<div className="nv-custom-palette-inner">
				{ Object.keys( colors ).map( ( slug ) => {
					const style = { backgroundColor: colors[ slug ] };

					return (
						<Button
							key={ slug }
							style={ style }
							className="nv-custom-palette-colors"
							onClick={ () => {
								handleChange( `var(--nv-${ slug })` );
							} }
						/>
					);
				} ) }
			</div>
		</div>
	);
};

export default CustomPalette;
