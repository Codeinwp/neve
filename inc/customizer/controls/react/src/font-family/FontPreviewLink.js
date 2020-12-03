import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from '@wordpress/element';

const FontPreviewLink = ( { fontFace, onClick, label, delayLoad } ) => {
	const [ rendered, setRendered ] = useState( false );
	const style = { fontFamily: fontFace + ', sans-serif' };

	return (
		<a
			onClick={ ( e ) => {
				e.stopPropagation();
				onClick();
			} }
		>
			<span className="neve-font-family">{ label || fontFace }</span>
			<VisibilitySensor
				onChange={ ( isVisible ) => {
					if ( isVisible ) {
						setRendered( true );
					}
				} }
			>
				{ rendered || delayLoad === false ? (
					<span className="neve-font-preview" style={ style }>
						Abc
					</span>
				) : (
					<span className="neve-font-preview ">...</span>
				) }
			</VisibilitySensor>
		</a>
	);
};

FontPreviewLink.propTypes = {
	fontFace: PropTypes.string.isRequired,
	delayLoad: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string,
};

export default FontPreviewLink;
