/**
 * WordPress dependencies
 */
/*global NeveReactCustomize*/

import FontPreviewLink from './FontPreviewLink.js';
import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types';

const { __ } = wp.i18n;

const {
	Popover,
	Button,
	TextControl,
	Dashicon
} = wp.components;

const {
	Component,
	Fragment
} = wp.element;

class FontFamilySelector extends Component {
	constructor(props) {
		super( props );

		this.state = {
			fonts: NeveReactCustomize.fonts,
			isVisible: false,
			search: '',
			loadUntil: 20,
			delayFontInclusion: true
		};
	}

	getFonts() {
		let fontGroups = this.state.fonts,
				self = this,
				result = {};

		Object.keys( fontGroups ).map( (key) => {
			result[key] = fontGroups[key].filter( value => value.toLowerCase().
					includes( self.state.search.toLowerCase() ) );
		} );
		return result;
	}

	getFontList() {
		let fontGroups = this.getFonts(),
				options = [],
				self = this,
				defaultFontface = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

		options.push(
				<li className="default-value">
					<FontPreviewLink
							fontFace={defaultFontface}
							delayLoad={false}
							label={__( 'Default', 'neve' )}
							onClick={() => {
								this.setState( { isVisible: false } );
								this.props.onFontChoice( 'system', defaultFontface );
							}}/>
				</li>
		);

		Object.keys( fontGroups ).map( (key) => {
			fontGroups[key].length > 0 && options.push(
					<li class="font-group-header">
						{key}
					</li>
			);
			console.log( fontGroups );
			fontGroups[key].map( (font, index) => {
				if ( index < self.state.loadUntil ) {
					options.push(
							<li className={
								(
										key === this.props.selectedType &&
										font === this.props.selected
								) ? 'selected' : ''}>
								<FontPreviewLink delayLoad={this.state.delayFontInclusion}
										fontFace={font} onClick={() => {
									this.setState( { isVisible: false } );
									this.props.onFontChoice( key, font );
								}}/>
							</li>
					);
				}
			} );
		} );
		if ( this.state.loadUntil < options.length && this.state.search === '' ) {
			options.push(
					<li className="load-more">
						<VisibilitySensor
								onChange={(isVisible) => {
									if ( isVisible ) {
										this.setState( {
											loadUntil: ( self.state.loadUntil + 5 ),
											delayFontInclusion: false
										} );
									}
								}}>
							<Dashicon icon="image-filter"/>
						</VisibilitySensor>
					</li>
			);
		}

		return (
				<Fragment>
					<div className="popover-content">
						<div className="popover-header">
							<div className="search">
								<TextControl
										placeholder={__( 'Search', 'neve' ) + '...'}
										value={this.state.search}
										onChange={e => {
											this.setState( {
												search: e,
												loadUntil: 20
											} );
										}
										}
								/>
								<Button onClick={() => this.setState( { search: '' } )} isLink
										isDestructive><Dashicon icon="no"/></Button>
							</div>
						</div>
						<ul className="neve-fonts-list">
							{options.length && options ||
							<li className="no-result">{__( 'No results.', 'neve' )}</li>}
						</ul>
					</div>
				</Fragment>
		);
	}

	render() {
		self = this;
		return (
				<div className="neve-font-family-control">
					<span className="customize-control-title">
						{__( 'Font family', 'neve' )}
					</span>
					<Button
							className="font-family-selector-toggle"
							isDefault
							onClick={() => {
								this.setState( { isVisible: true } );
							}}>

						<span className="ff-name">{this.props.selected}</span>
						{this.props.selected &&
						<span className="ff-preview"
								style={{ fontFamily: this.props.selected }}>Abc</span>}
						{this.state.isVisible && (
								<Popover
										position="bottom left"
										onClickOutside={() => this.setState( { isVisible: false } )}
								>
									{this.state.fonts && this.getFontList() ||
									__( 'Loading...', 'neve' )}
								</Popover>
						)}
					</Button>
				</div>
		);
	}
}

FontFamilySelector.propTypes = {
	onFontChoice: PropTypes.func.isRequired,
	selected: PropTypes.string,
	selectedType: PropTypes.string
};

export default FontFamilySelector;
