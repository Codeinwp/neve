/**
 * WordPress dependencies
 */
/*global NeveReactCustomize*/

import FontPreviewLink from './FontPreviewLink.js';

const { __ } = wp.i18n;

const {
	Popover,
	Button,
	TextControl,
	Dashicon,
	ButtonGroup
} = wp.components;

const {
	Component,
	Fragment
} = wp.element;

class GoogleFontsControl extends Component {
	constructor(props) {
		super( props );

		this.state = {
			fonts: NeveReactCustomize.fonts,
			value: '',
			isVisible: false,
			filteredFonts: [],
			search: '',
			loadUntil: 20,
			fontTypeSelected: Object.keys( NeveReactCustomize.fonts )[0]
		};
	}

	getButtons() {
		let types = Object.keys( NeveReactCustomize.fonts ),
				buttons = [],
				self = this;
		types.map( function(type) {
			buttons.push(
					<Button
							isPrimary={self.state.fontTypeSelected === type}
							isDefault={self.state.fontTypeSelected !== type}
							onClick={() => {
								self.setState( { fontTypeSelected: type } );
							}}
					>
						{type}
					</Button> );
		} );

		return ( <ButtonGroup className="neve-font-types">{buttons}</ButtonGroup> );
	}

	getFonts() {
		let controls = [],
				self = this;
		this.state.fonts[this.state.fontTypeSelected] &&
		this.state.fonts[this.state.fontTypeSelected].forEach( function(item) {
			if ( !self.state.search || item.toLowerCase().
					includes( self.state.search.toLowerCase() ) ) {
				controls.push( item );
			}
		} );

		return controls || [];
	}

	getFontList() {
		let controls = this.getFonts(),
				options = [],
				self = this;

		controls.map( (item, key) => {
			if ( key < self.state.loadUntil ) {
				options.push(
						<li>
							<FontPreviewLink fontFace={item} onClick={() => {
								console.log( item );
							}}/>
						</li>
				);
			}
		} );

		if ( this.state.loadUntil < controls.length && this.state.search === '' ) {
			options.push(
					<li className="load-more">
						<Button isPrimary onClick={() => {
							self.setState( { loadUntil: self.state.loadUntil += 20 } );
						}}>
							{__( 'Load more', 'neve' )}
						</Button>
					</li>
			);
		}

		return (
				<Fragment>
					<div className="popover-content">
						<div className="popover-header">
							{this.getButtons()}
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
							<li>{__( 'No results.', 'neve' )}</li>}
						</ul>
					</div>
				</Fragment>
		);
	}

	render() {
		self = this;
		return (
				<Fragment>
					<Button
							isDefault
							onClick={() => {
								this.setState( { isVisible: true } );
							}}>
						{__( 'Font Family' )}
						{this.state.isVisible && (
								<Popover
										position="bottom right"
										onClickOutside={() => this.setState( { isVisible: false } )}
								>
									{this.state.fonts && this.getFontList() || __( 'Loading...' )}
								</Popover>
						)}
					</Button>
				</Fragment>
		);
	}
}

export default GoogleFontsControl;
