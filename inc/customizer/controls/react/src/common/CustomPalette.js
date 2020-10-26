import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import classnames from 'classnames';
import { globalPaletteColors } from '../common/common';

const CustomPalette = ( { title, onChange, activeColor } ) => {
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
				{ globalPaletteColors.map( ( group, index ) => {
					return (
						<div className="row" key={ index }>
							{ Object.keys( group ).map( ( slug ) => {
								const style = {
									backgroundColor: `var(--${ slug })`,
								};
								const buttonClasses = classnames( [
									'nv-custom-palette-color',
									{
										active:
											activeColor === `var(--${ slug })`,
									},
								] );

								return (
									<Button
										title={ group[ slug ] }
										key={ slug }
										style={ style }
										className={ buttonClasses }
										onClick={ () => {
											handleChange( `var(--${ slug })` );
										} }
									/>
								);
							} ) }
						</div>
					);
				} ) }
			</div>
		</div>
	);
};

export default CustomPalette;
