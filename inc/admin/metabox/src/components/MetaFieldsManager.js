/* global metaSidebar */
import { RadioImage } from './controls/RadioImage';
import { CheckBox } from './controls/CheckBox';
import { Range } from './controls/Range';
import { ButtonChoices } from './controls/ButtonChoices';
import SortableItems from './controls/SortableItems';

const { Component } = wp.element;
const { PanelBody } = wp.components;
const { __ } = wp.i18n;

class MetaFieldsManager extends Component {

	constructor(props) {
		super(props);
		this.state = Object.assign( {}, wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' ) );
		this.componentsGroup = [
			{
				'title': __( 'Page Layout', 'neve' ),
				'controls': [ 'neve_meta_sidebar', 'neve_meta_container', 'neve_meta_enable_content_width', 'neve_meta_content_width' ]
			},
			{
				'title': __( 'Page Title', 'neve' ),
				'controls': [ 'neve_meta_header_elements_order', 'neve_meta_title_alignment', 'neve_meta_author_avatar', 'neve_meta_reading_time' ]
			},
			{
				'title': __( 'Elements', 'neve' ),
				'controls': [ 'neve_meta_disable_header', 'neve_meta_disable_footer', 'neve_meta_disable_title', 'neve_meta_comments', 'neve_meta_tags', 'neve_meta_social_icons' ]
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
		if ( 'button-group' === type ) {
			return (
				<ButtonChoices stateUpdate={this.updateValues} key={index} id={id} data={settings}/>
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

		if ( 'sortable-list' === type ) {
			return (
				<SortableItems stateUpdate={this.updateValues} key={index} id={id} data={settings}/>
			);
		}
	}

	updateBlockWidth() {
		const elements = document.querySelectorAll('.wp-block:not([data-align="full"])');
		if ( 'on' !== this.state['neve_meta_enable_content_width'] ) {
			elements.forEach(function( element ) {
				element.style.removeProperty('max-width');
			});
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
								intialOpen={ true }
							>
								{
									controls.map( (control, index) => {
										let controlData = metaSidebar.controls.find(obj => obj.id === control);
										const currentPostType = wp.data.select('core/editor').getCurrentPostType();
										if ( controlData.hasOwnProperty('post_type') && currentPostType !== controlData['post_type'] ) {
											return false;
										}
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
