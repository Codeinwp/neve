/* global NeveReactCustomize */

import DynamicFieldInserter from './dynamic-field-inserter.js';
import { render } from '@wordpress/element';

/**
 * Initialize the dynamic tag buttons.
 *
 * @return {boolean}|{void}
 */
export const init = () => {
	const controls = NeveReactCustomize?.dynamicTags?.controls || false;
	if (!controls) {
		return false;
	}
	NeveReactCustomize.fieldSelection = {};
	Object.keys(controls).forEach((controlId, index) => {
		const control = wp.customize.control(controlId);
		if (typeof control === 'undefined') {
			return false;
		}
		const container = control.container[0];
		const dynamicControlWrap = document.createElement('div');

		dynamicControlWrap.setAttribute('id', `dynamic-${controlId}`);
		dynamicControlWrap.classList.add('neve-dynamic-tag-selector');
		container.classList.add('neve-has-dynamic-tag-selector');
		container.appendChild(dynamicControlWrap);

		const input = document.querySelector(
			`[data-customize-setting-link="${control.id}"]`
		);

		input.addEventListener('focusout', function (e) {
			NeveReactCustomize.fieldSelection[controlId] = {
				start: e.target.selectionStart,
				end: e.target.selectionEnd,
			};
		});
		render(
			<DynamicFieldInserter
				options={NeveReactCustomize?.dynamicTags?.options || []}
				allowedOptionsTypes={controls[controlId]}
				onSelect={(magicTag, group) =>
					addToField(magicTag, control, group)
				}
			/>,
			dynamicControlWrap
		);
	});
};

/**
 * Add dynamic tag to input field.
 *
 * @param magicTag
 * @param control
 * @param optionType
 */
const addToField = function (magicTag, control, optionType) {
	let tag;
	const input = document.querySelector(
		`[data-customize-setting-link="${control.id}"]`
	);

	if (optionType === 'url' && control.params.type === 'textarea') {
		tag = `<a href="{${magicTag}}">Link</a>`;
	} else {
		tag = `{${magicTag}}`;
	}

	if (optionType === 'url' && input.value === '#') {
		input.value = tag;
	} else if (NeveReactCustomize.fieldSelection[control.id]) {
		const { start, end } = NeveReactCustomize.fieldSelection[control.id];
		const length = input.value.length;
		input.value =
			input.value.substring(0, start) +
			tag +
			input.value.substring(end, length);
	} else {
		input.value += tag;
	}
	NeveReactCustomize.fieldSelection[control.id] = false;
	input.focus();
	input.dispatchEvent(new Event('change'));
};
