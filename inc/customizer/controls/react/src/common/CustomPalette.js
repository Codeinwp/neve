import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';

const CustomPalette = ( { title, colors, onChange, activeColor } ) => {
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
				{ Object.keys( colors ).map( ( slug, index ) => {
					const style = { backgroundColor: colors[ slug ] };
					const buttonClasses = classnames( [
						'nv-custom-palette-color',
						{ active: activeColor === `var(--nv-${ slug })` },
					] );
					return (
						<Fragment key={ slug }>
							<Button
								style={ style }
								className={ buttonClasses }
								onClick={ () => {
									handleChange( `var(--nv-${ slug })` );
								} }
							/>
						</Fragment>
					);
				} ) }
			</div>
		</div>
	);
};

export default CustomPalette;
