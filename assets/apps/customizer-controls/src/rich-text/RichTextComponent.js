import { useState, useEffect, useCallback } from '@wordpress/element';
import PropTypes from 'prop-types';

import RichText from './RichText';

const RichTextComponent = ({ control }) => {
	const [value, setValue] = useState(control.setting.get());
	let isInit = false;
	const { id: controlId, params } = control;
	const { label, section, toolbars } = params;
	const toolbarOneDefaults =
		'formatselect,bold,italic,bullist,numlist,link,wp_adv';
	const toolbarTwoDefaults =
		'strikethrough,hr,forecolor,pastetext,removeformat';
	const {
		toolbar1 = toolbarOneDefaults,
		toolbar2 = toolbarTwoDefaults,
	} = toolbars;
	const editorId = `${controlId}-editor`;
	/**
	 * Get the editor to be used based on the available version that WP loads.
	 *
	 * @return {*} The editor that is currently available.
	 */
	const correctEditor = () => wp.oldEditor || wp.editor;

	/**
	 * A listener to trigger the update state on change.
	 */
	const listener = useCallback(
		() => updateValues(correctEditor().getContent(editorId)),
		[editorId]
	);

	/**
	 * Method to add a change listener for the current editor.
	 */
	const addEditorChangeListener = () => {
		if (window.tinymce.editors[editorId]) {
			window.tinymce.editors[editorId].on('change', listener);
		}
	};

	/**
	 * Method to remove a change listener for the current editor.
	 */
	const removeEditorChangeListener = () => {
		if (window.tinymce.editors[editorId]) {
			window.tinymce.editors[editorId].off('change', listener);
		}
	};

	/**
	 * Initialise the editor.
	 */
	const initEditor = () => {
		// We also hook here to listen for changes of the dynamic settings change to also trigger the editor content update.
		const input = document.querySelector(
			`[data-customize-setting-link="${controlId}"]`
		);
		input.addEventListener('change', () => {
			setEditorContent(input.value);
		});

		// this replaces the default line breaks for old textarea content
		let content = document.getElementById(editorId).value;
		content = content.replace(/(?<!>)\n/g, '<br/>');
		document.getElementById(editorId).value = content;

		correctEditor().initialize(editorId, {
			quicktags: true,
			mediaButtons: true,

			tinymce: {
				toolbar1,
				toolbar2,
				style_formats_merge: true,
				style_formats: [],
			},
		});

		setTimeout(addEditorChangeListener, 0);

		if (wp.oldEditor) {
			setTimeout(() => {
				setTimeout(() => {
					removeEditorChangeListener();

					correctEditor().remove(editorId);

					correctEditor().initialize(editorId, {
						quicktags: true,
						mediaButtons: true,

						tinymce: {
							toolbar1,
							toolbar2,
							style_formats_merge: true,
							style_formats: [],
						},
					});

					setTimeout(addEditorChangeListener, 0);
				}, 300);
			}, 1000);
		}
	};

	/**
	 * Method to update the editor content and state.
	 *
	 * @param {string} content The new content.
	 */
	const setEditorContent = (content) => {
		updateValues(content);
		window.tinymce.editors[editorId].setContent(content);
	};

	/**
	 * Method to update state and trigger control setting change.
	 *
	 * @param {string} nextVal The next value for the control.
	 */
	const updateValues = (nextVal) => {
		setValue(nextVal);
		control.setting.set(nextVal);
	};

	/**
	 * We check here that the section is visible so that we trigger the editor load and initialisation
	 */
	useEffect(() => {
		// Update value from events passed by the conditional header
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) return false;
			if (e.detail.id !== controlId) return false;
			updateValues(e.detail.value);
		});

		window.wp.customize.bind('ready', () => {
			window.wp.customize
				.state('expandedSection')
				.bind((expandedSection) => {
					if (!expandedSection) {
						return;
					}

					if (!expandedSection.id) {
						return;
					}

					if (expandedSection.id === section && isInit === false) {
						initEditor();
						isInit = true;
					}
				});
		});
	}, []);

	return (
		<RichText
			id={controlId}
			label={label}
			onChange={updateValues}
			editorId={editorId}
			currentValue={value}
		/>
	);
};

RichTextComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default RichTextComponent;
