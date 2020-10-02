import PropTypes from 'prop-types';
import SingleSizingInput from '../common/SingleSizingInput.js';
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { Button, Tooltip } from '@wordpress/components';
import { Component } from '@wordpress/element';

class SizingControl extends Component {
	constructor( props ) {
		super( props );
		this.hasSetValues = this.hasSetValues.bind( this );
		this.linkButton = this.linkButton.bind( this );
	}

	linkButton() {
		if ( this.props.noLinking ) {
			return null;
		}
		return (
			<Tooltip
				key="tooltip-link"
				text={
					this.props.linked
						? __( 'Unlink Values', 'neve' )
						: __( 'Link Values', 'neve' )
				}
			>
				<Button
					key="link-icon"
					icon={ this.props.linked ? 'admin-links' : 'editor-unlink' }
					onClick={ () => this.props.onLinked() }
					className={ classnames( [
						{ active: this.props.linked },
						'link',
					] ) }
				/>
			</Tooltip>
		);
	}

	render() {
		const wrapClasses = classnames( [
			'neve-responsive-sizing',
			{ 'single-input': this.props.options.length === 1 },
		] );

		return (
			<div className={ wrapClasses }>
				{ this.linkButton() }
				{ this.props.options.map( ( i, n ) => {
					return (
						<SingleSizingInput
							key={ n }
							onChange={ ( type, value ) =>
								this.props.onChange( type, value )
							}
							value={ i.value }
							className={ i.type ? i.type + '-input' : '' }
							type={ i.type }
							max={ this.props.max }
							min={ this.props.min }
							step={ this.props.step }
						/>
					);
				} ) }
				{ this.hasSetValues() && (
					<Tooltip
						key="tooltip-reset"
						text={
							this.props.options.length > 1
								? __( 'Reset all Values', 'neve' )
								: __( 'Reset Value', 'neve' )
						}
					>
						<Button
							key="reset-icon"
							icon="image-rotate"
							className="reset"
							onClick={ () => this.props.onReset() }
						/>
					</Tooltip>
				) }
			</div>
		);
	}

	hasSetValues() {
		const { defaults, options } = this.props;
		if ( typeof defaults !== 'object' ) {
			// eslint-disable-next-line eqeqeq
			return parseFloat( defaults ) != parseFloat( options[ 0 ].value );
		}
		return (
			options.filter(
				// eslint-disable-next-line eqeqeq
				( option ) => option.value != defaults[ option.type ]
			).length > 0
		);
	}
}

SizingControl.propTypes = {
	options: PropTypes.array.isRequired,
	defaults: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
	] ),
	onLinked: PropTypes.func,
	onChange: PropTypes.func.isRequired,
	linked: PropTypes.bool,
	onReset: PropTypes.func,
	noLinking: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
};

export default SizingControl;
