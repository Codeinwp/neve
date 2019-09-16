/**
 * WordPress dependencies
 */
/*global NeveReactCustomize*/

import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

const {
	Component
} = wp.element;

class FontPreviewLink extends Component {
	constructor(props) {
		super( props );

		this.state = {
			previewWasRendered: false
		};
	}

	render() {
		self = this;
		let style = { fontFamily: this.props.fontFace + ', sans-serif' };
		return (
				<a onClick={(e) => {
					e.stopPropagation();
					this.props.onClick();
				}}>
					<span className="neve-font-family">{this.props.fontFace}</span>
					<VisibilitySensor onChange={(isVisible) => {
						if ( isVisible ) {
							this.setState( { previewWasRendered: true } );
						}
					}}>
						{
							this.state.previewWasRendered &&
							<span className="neve-font-preview" style={style}>Abc</span> ||
							<span className="neve-font-preview ">...</span>
						}
					</VisibilitySensor>
				</a>
		);
	}
}

FontPreviewLink.propTypes = {
	fontFace: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default FontPreviewLink;
