/* jshint esversion: 6 */
/* global NeveReactCustomize */
import PropTypes from 'prop-types';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { DropdownMenu } = wp.components;

class DynamicFieldInserter extends Component {
	constructor(props) {
		super( props );
		this.getOptions = this.getOptions.bind( this );
	}

	getOptions() {
		const allOptions = NeveReactCustomize.dynamicTags.options;
		let options = [];
		this.props.availableOptions.forEach( (optionGroup, index) => {
			Object.keys( allOptions[optionGroup] ).forEach( (optionId, index) => {
				options.push( {
					title: allOptions[optionGroup][optionId],
					onClick: () => this.props.onSelect( optionId, optionGroup )
				} );
			} );
		} );
		return options;
	}

	render() {
		return (
				<DropdownMenu
						icon="image-filter"
						label={__( 'Insert Dynamic Tag', 'neve' )}
						controls={this.getOptions()}
				/>
		);
	}

	toggleDropdown() {
		this.setState( prevState => ( {
			opened: !prevState.opened
		} ) );
	}
}

DynamicFieldInserter.propTypes = {
	availableOptions: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired
};

export default DynamicFieldInserter;
