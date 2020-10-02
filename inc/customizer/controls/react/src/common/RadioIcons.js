/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SVG from './svg';

import { Button } from '@wordpress/components';

const RadioIcons = ( { options, onChange, value, showLabels } ) => {
	const getButtons = () => {
		return Object.keys( options ).map( ( type, index ) => {
			if ( options[ type ].icon === 'text' ) {
				return (
					<Button
						key={ index }
						className={ classnames( [
							{ active: value === type },
							'is-text',
						] ) }
						onClick={ () => {
							onChange( type );
						} }
					>
						{ options[ type ].tooltip }
					</Button>
				);
			}
			const icon = SVG[ options[ type ].icon ] || options[ type ].icon;
			return (
				<span key={ index }>
					<Button
						aria-label={ options[ type ].tooltip }
						className={ classnames( { active: value === type } ) }
						icon={ icon }
						onClick={ () => {
							onChange( type );
						} }
					/>
					{ showLabels && <label>{ options[ type ].tooltip }</label> }
				</span>
			);
		} );
	};

	return <div className="neve-radio-icons">{ getButtons() }</div>;
};

RadioIcons.propTypes = {
	options: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	showLabels: PropTypes.bool,
};

export default RadioIcons;
