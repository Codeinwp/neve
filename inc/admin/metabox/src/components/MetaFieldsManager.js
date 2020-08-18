/* global metaSidebar */
import { RadioImage } from './controls/RadioImage';
import { CheckBox } from './controls/CheckBox';
import { Range } from './controls/Range';
import { ButtonChoices } from './controls/ButtonChoices';
import SortableItems from './controls/SortableItems';

const { Component } = wp.element;
const { PanelBody, Button } = wp.components;
const { __ } = wp.i18n;

class MetaFieldsManager extends Component {

	constructor(props) {
		super(props);
		this.state = Object.assign( {}, wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' ) );
		this.componentsGroup = metaSidebar.component_groups;
		this.updateValues = this.updateValues.bind( this );
	}

	updateValues(id, value) {
		let state = this.state;
		state[id] = value;
		this.setState( state );
	}

	renderControl( data, index ) {
		const {type, id, settings} = data;

		let shouldShow  = true;
		const dependsOn = settings['depends_on'];
		const not_in_template = settings['not_in_template'];

		if ( 'undefined' !== typeof dependsOn ) {
			const dependentControlType = metaSidebar.controls.find( obj => dependsOn === obj.id ).type;
			if ( 'sortable-list' === dependentControlType ) {
				shouldShow = false;
				const dependentControlDefault = metaSidebar.controls.find(obj => dependsOn === obj.id ).settings.default;
				const defaultData = JSON.parse( dependentControlDefault );
				const elementsState = '' !== this.state[dependsOn] ? JSON.parse( this.state[dependsOn] ) : false;
				if ( ( '' === this.state[dependsOn] && true === defaultData.meta ) || ( elementsState.hasOwnProperty('meta') && true === elementsState.meta ) ) {
					shouldShow = true;
				}
			}
			if ( 'checkbox' === dependentControlType ) {
				shouldShow = 'on' === this.state[dependsOn];
			}
		}

		if ( 'undefined' !== typeof not_in_template ) {
			let template = wp.data.select('core/editor').getEditedPostAttribute('template');
			if ( not_in_template === template ) {
				shouldShow = false;
			}
		}

		if ( 'radio' === type && shouldShow ) {
			return (
				<RadioImage stateUpdate={this.updateValues} key={index} id={id} data={settings}/>
			);
		}
		if ( 'button-group' === type && shouldShow ) {
			return (
				<ButtonChoices stateUpdate={this.updateValues} key={index} id={id} data={settings}/>
			);
		}

		if ( 'checkbox' === type && shouldShow ) {
			return (
				<CheckBox stateUpdate={this.updateValues} key={index} id={id} data={settings}/>
			);
		}

		if ( 'range' === type  && shouldShow ) {
			return (
				<Range stateUpdate={this.updateValues} key={index} id={id} data={settings}/>
			);
		}

		if ( 'sortable-list' === type && shouldShow ) {
			return (
				<SortableItems stateUpdate={this.updateValues} key={index} id={id} data={settings}/>
			);
		}
	}

	updateBlockWidth() {
		const elements = document.querySelectorAll('.wp-block:not([data-align="full"])');

		const isCustomContentWidth = this.state['neve_meta_enable_content_width'];
		if ( ! isCustomContentWidth ) {
			elements.forEach(function( element ) {
				element.style.removeProperty('max-width');
			});
			return false;
		}

		const containerType = this.state['neve_meta_container'];
		const contentWidth = this.state['neve_meta_content_width'];

		let blocKWidth;
		if ( 'contained' === containerType ) {
			blocKWidth = Math.round( ( contentWidth / 100 ) * metaSidebar.actions['neve_meta_content_width'].editor ) + 'px';
		} else {
			blocKWidth = contentWidth + '%';
		}

		if (document.contains(document.getElementById('neve-meta-editor-style'))) {
			document.getElementById('neve-meta-editor-style').remove();
		}

		let css = '.wp-block:not([data-align="full"]) { max-width: ' + blocKWidth + '; }';
		const head = document.head;
		const style = document.createElement('style');
		style.setAttribute('id', 'neve-meta-editor-style' );
		style.innerHTML = css;
		head.appendChild(style);
	}

	render() {
		return (
			<>
				{this.updateBlockWidth()}
				{
					Object.keys( this.componentsGroup ).map( ( group, index ) => {
						const { title, controls, not_in_template } = this.componentsGroup[group];

						let template = wp.data.select('core/editor').getEditedPostAttribute('template');
						if ( not_in_template === template ) {
							return false;
						}

						return (
							<div key={index} className="nv-option-category">
								<PanelBody
									title={title}
									intialOpen={ true }
								>
									{
										controls.map( (control, index) => {
											let controlData = metaSidebar.controls.find(obj => obj.id === control);
											if ( ! controlData ) {
												return false;
											}
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
							</div>
						);
					})
				}
				<div className="nv-reset-all components-panel__body is-opened">
					<p>
						{ __('Reset all options to default', 'neve') }
					</p>
					<Button
						icon="image-rotate"
						className="nv-reset-meta"
						onClick={ () => {
							const {editPost} = wp.data.dispatch('core/editor');
							Object.keys( this.componentsGroup ).map( ( group, index ) => {
								const { controls } = this.componentsGroup[group];
								controls.map( (control, index) => {
									let resetValue = '';
									if ( 'neve_meta_content_width' === control ) {
										resetValue = 0;
									}
									editPost({meta: {[control]: resetValue }});
									this.updateValues(control, resetValue);
								});
							});
						} }
						label={ __( 'Return to customizer settings', 'neve' ) }
						showTooltip={ true }
					/>
				</div>
			</>
		);
	}
}

export { MetaFieldsManager };
