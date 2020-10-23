import { Dropdown, Button, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import CustomPalette from './CustomPalette';
import classnames from 'classnames';

const GlobalColorsPicker = ( { onChange, activeColor, isGlobal } ) => {
	const buttonClasses = classnames( [
		'global-color-picker',
		{ active: isGlobal },
	] );

	return (
		<Dropdown
			renderToggle={ ( { isOpen, onToggle } ) => (
				<Button
					onClick={ onToggle }
					aria-expanded={ isOpen }
					role="button"
					className={ buttonClasses }
				>
					<Icon size={ 16 } icon="admin-site-alt3" />
				</Button>
			) }
			renderContent={ () => (
				<>
					<CustomPalette
						onChange={ onChange }
						title={ __( 'Global Colors', 'neve' ) }
						activeColor={ activeColor }
					/>
				</>
			) }
		/>
	);
};
export default GlobalColorsPicker;
