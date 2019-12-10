/* global NeveReactCustomize */
import DynamicFieldInserter from './dynamic-field-inserter.js';

/**
 * Initialize the dynamic tag buttons.
 *
 * @returns {boolean}|{void}
 */
export const init = function() {
	if ( !NeveReactCustomize.dynamicTags ) {
		return false;
	}
	const controls = NeveReactCustomize.dynamicTags.controls;
	Object.keys( controls ).forEach( function(controlId, index) {
		let control = wp.customize.control( controlId ),
				container = control.container[0],
				dynamicControlWrap = document.createElement( 'div' );

		dynamicControlWrap.setAttribute( 'id', `dynamic-${controlId}` );
		dynamicControlWrap.classList.add( 'neve-dynamic-tag-selector' );
		container.classList.add( 'neve-has-dynamic-tag-selector' );
		container.appendChild( dynamicControlWrap );

		ReactDOM.render(
				<DynamicFieldInserter
						availableOptions={controls[controlId]}
						onSelect={(magicTag, group) => addToField( magicTag, control,
								group )}
				/>,
				dynamicControlWrap
		);
	} );
};

/**
 * Add dynamic tag to input field.
 * @param magicTag
 * @param control
 * @param optionGroup
 */
const addToField = function(magicTag, control, optionGroup) {
	let tag;
	const input = document.querySelector(
			`[data-customize-setting-link="${control.id}"]` );

	if ( optionGroup === 'urls' && control.params.type === 'textarea' ) {
		tag = `<a href="{${magicTag}}">Link</a>`;
	} else {
		tag = `{${magicTag}}`;
	}

	input.value = ( input.value === '#' && optionGroup === 'urls' ) ?
			tag :
			input.value + tag;
	input.focus();
	input.dispatchEvent( new Event( 'change' ) );
};
