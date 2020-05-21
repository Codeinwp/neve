/* global metaSidebar */
import { RadioImage } from './controls/RadioImage';
import { CheckBox } from './controls/CheckBox';
import { Range } from './controls/Range';

const { Component } = wp.element;
const { PanelBody } = wp.components;
const { __ } = wp.i18n;

class MetaFieldsManager extends Component {

	constructor(props) {
		super(props);
		this.state = Object.assign( {}, wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' ) );
		this.componentsGroup = [
			{
				'title': __( 'Layout', 'neve' ),
				'controls': [ 'neve_meta_container', 'neve_meta_sidebar' ]
			},
			{
				'title': __( 'Components', 'neve' ),
				'controls': [ 'neve_meta_disable_header', 'neve_meta_disable_title', 'neve_meta_disable_featured_image', 'neve_meta_disable_footer' ]
			},
			{
				'title': __( 'Content width', 'neve' ),
				'controls': [ 'neve_meta_enable_content_width', 'neve_meta_content_width' ]
			}
		];
		this.updateValues = this.updateValues.bind( this );
	}

	updateValues(id, value) {
		let state = this.state;
		state[id] = value;
		this.setState( state );
	}

	renderControl( data, index ) {
		const {type, id, settings} = data;

		if ( 'radio' === type ) {
			return (
				<RadioImage stateUpdate={this.updateValues} key={index} id={id} data={settings}/>
			);
		}
		if ( 'checkbox' === type ) {
			return (
				<CheckBox stateUpdate={this.updateValues} key={index} id={id} data={settings}/>
			);
		}
		if ( 'range' === type ) {
			const dependsOn = settings['depends_on'];
			if ( 'on' === this.state[dependsOn] ) {
				return (
					<Range stateUpdate={this.updateValues} key={index} id={id} data={settings}/>
				);
			}
		}
	}

	updateBlockWidth() {
		if ( 'on' !== this.state['neve_meta_enable_content_width'] ) {
			return false;
		}
		const containerDefault = metaSidebar.controls.find(obj => 'neve_meta_container' === obj.id ).settings.default;
		let containerType = this.state['neve_meta_container'] ? this.state['neve_meta_container'] : containerDefault;
		containerType = 'default' !== containerType ? containerType : metaSidebar.actions['neve_meta_content_width'].container;

		const contentWidthDefault = metaSidebar.controls.find( obj => 'neve_meta_content_width' === obj.id ).settings.default;
		const contentWidth = this.state['neve_meta_content_width'] ? this.state['neve_meta_content_width'] : contentWidthDefault;

		let blocKWidth;
		if ( 'contained' === containerType ) {
			blocKWidth = Math.round( ( contentWidth / 100 ) * metaSidebar.actions['neve_meta_content_width'].editor ) + 'px';
		} else {
			blocKWidth = contentWidth + '%';
		}

		const elements = document.querySelectorAll('.wp-block:not([data-align="full"])');
		elements.forEach(function( element ) {
			element.style.maxWidth = blocKWidth;
		});
	}

	render() {
		return (
			<>
				{this.updateBlockWidth()}
				{
					this.componentsGroup.map( ( group, index ) => {
						const { title, controls } = group;
						return (
							<PanelBody
								key={index}
								title={title}
								icon="admin-post"
								intialOpen={ true }
							>
								{
									controls.map( (control, index) => {
										let controlData = metaSidebar.controls.find(obj => obj.id === control);
										return (
											this.renderControl( controlData, index )
										);
									})
								}
							</PanelBody>
						);
					})
				}
			</>
		);
	}
}

export { MetaFieldsManager };
