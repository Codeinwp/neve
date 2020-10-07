import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

import { Component } from '@wordpress/element';

class FontPreviewLink extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			previewWasRendered: false,
		};
	}

	render() {
		const style = { fontFamily: this.props.fontFace + ', sans-serif' };
		return (
			<a
				onClick={ ( e ) => {
					e.stopPropagation();
					this.props.onClick();
				} }
			>
				<span className="neve-font-family">
					{ this.props.label || this.props.fontFace }
				</span>
				<VisibilitySensor
					onChange={ ( isVisible ) => {
						if ( isVisible ) {
							this.setState( { previewWasRendered: true } );
						}
					} }
				>
					{ this.state.previewWasRendered ||
					this.props.delayLoad === false ? (
						<span className="neve-font-preview" style={ style }>
							Abc
						</span>
					) : (
						<span className="neve-font-preview ">...</span>
					) }
				</VisibilitySensor>
			</a>
		);
	}
}

FontPreviewLink.propTypes = {
	fontFace: PropTypes.string.isRequired,
	delayLoad: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string,
};

export default FontPreviewLink;
