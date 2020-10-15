import classnames from 'classnames';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components';

const Accordion = ( { children } ) => {
	const [ expanded, setExpanded ] = useState( true );

	const toggle = ( e ) => {
		e.preventDefault();
		setExpanded( ! expanded );
	};
	const classes = classnames( [ 'nv-accordion', { expanded } ] );
	return (
		<>
			<button className={ classes } onClick={ toggle }>
				<h4>
					{ __( 'Palette Colors', 'neve' ) }
					<Icon
						size={ 16 }
						icon={ expanded ? 'arrow-up-alt2' : 'arrow-down-alt2' }
					/>
				</h4>
			</button>
			{ expanded && children }
		</>
	);
};

export default Accordion;
