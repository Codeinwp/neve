/**
 * WordPress dependencies
 */
/*global NeveReactCustomize*/
const {
	startCase,
	toLower
} = lodash;

const { __ } = wp.i18n;

const { withInstanceId } = wp.compose;

const {
	Popover,
	Button,
	TextControl
} = wp.components;

const {
	Component,
	Fragment
} = wp.element;

class GoogleFontsControl extends Component {
	constructor(props) {
		super( props );

		this.state = {
			fonts: null,
			value: '',
			isVisible: false,
			filteredFonts: [],
			search: ''
		};
	}

	componentDidMount() {
		let self = this;
		window.addEventListener( 'load', async function() {
			fetch( NeveReactCustomize.fontsJson ).
					then( blob => blob.json() ).
					then( fonts => {
						self.setState( { fonts } );
					} ).finally( () => {
			} );
		} );
	}

	getFonts() {
		console.log(this.state.fonts);
		let controls = [],
				self = this;
		this.state.fonts && Object.keys( this.state.fonts ).forEach( function(key) {
			if ( !self.state.search || key.toLowerCase().
					includes( self.state.search.toLowerCase() ) ) {
				controls.push( {
					name: key,
					variants: self.state.fonts[key].variants
				} );
			}
		} );

		return controls || [];
	}

	getFontList() {
		let controls = this.getFonts(),
				options = [],
				self = this;

		controls.map( (item) => {
			let style = {
				fontFamily: item.name + ', sans-serif'
			};
			console.log(item);
			let link = document.createElement( 'link' );
			link.setAttribute( 'rel', 'https://fonts.googleapis.com/css?family='+ item.name +'&text=' + item.name );
			link.setAttribute( 'id', item.name );

			console.log(link);
			options.push( <li>
				<a
						style={style}
						onClick={(e) => {
							e.stopPropagation();
							self.setState(
									{ selected: item, dropdownOpen: false } );
						}}>
					{item.name}
				</a></li> );
		} );

		return (
				<Fragment>
					<TextControl
							value={this.state.search}
							onChange={e => this.setState( { search: e } )}
					/>
					<ul>
						{options.length && options ||
						<li>{__( 'No fonts found for your search.' )}</li>}
					</ul>
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
										noArrow
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

export default withInstanceId( GoogleFontsControl );
