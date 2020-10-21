import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import classnames from 'classnames';

const CustomPalette = ( {
	title,
	colors,
	onChange,
	activeColor,
	disableShortcut,
} ) => {
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
				{ ! disableShortcut && (
					<Button isLink onClick={ focusGlobalColors }>
						{ __( 'Edit', 'neve' ) }
					</Button>
				) }
			</div>
			<div className="nv-custom-palette-inner">
				{ Object.keys( colors ).map( ( slug ) => {
					const style = { backgroundColor: colors[ slug ] };
					const buttonClasses = classnames( [
						'nv-custom-palette-colors',
						{ active: activeColor },
					] );
					return (
						<Button
							key={ slug }
							style={ style }
							className={ buttonClasses }
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
