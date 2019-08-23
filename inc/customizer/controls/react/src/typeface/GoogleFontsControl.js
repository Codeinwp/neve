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
	Button
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
			selected: null,
			isVisible: false,
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
		let controls = [],
				self = this;
		this.state.fonts && Object.keys( this.state.fonts ).forEach( function(key) {
			// console.log( key, self.state.fonts[key] );
			controls.push( {
				name: key,
				variants: self.state.fonts[key].variants || null

			} );
		} );

		return controls;
	}

	getFontList() {
		let controls = this.getFonts(),
				options = [];

		controls.map( (item) => {
			let style = {
				fontFamily: item.name
			};
			options.push( <li>
				<a
						style={style}
						onClick={() => {
							self.setState(
									{ selected: item, dropdownOpen: false } );
						}}>
					{item.name}
				</a></li> );
		} );

		return <ul>{options}</ul>;
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
