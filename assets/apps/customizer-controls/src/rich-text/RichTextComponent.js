import { useState, useEffect, useCallback } from '@wordpress/element';
import PropTypes from 'prop-types';

import RichText from './RichText';

const RichTextComponent = ({ control }) => {
	const [value, setValue] = useState(control.setting.get());
	const { id: controlId, params } = control;
	const { label, section } = params;
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
	 *
	 * @return {(function(): void)} There is no return.
	 */
	const initEditor = () => {
		// We also hook here to listen for changes of the dynamic settings change to also trigger the editor content update.
		const input = document.querySelector(
			`[data-customize-setting-link="${controlId}"]`
		);
		input.addEventListener('change', () => {
			setEditorContent(input.value);
		});

		correctEditor().initialize(editorId, {
			quicktags: true,
			mediaButtons: true,

			tinymce: {
				toolbar1:
					'formatselect,styleselect,bold,italic,bullist,numlist,link,alignleft,aligncenter,alignright,wp_adv',
				toolbar2:
					'strikethrough,hr,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help',
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
							toolbar1:
								'formatselect,styleselect,bold,italic,bullist,numlist,link,alignleft,aligncenter,alignright,wp_adv',
							toolbar2:
								'strikethrough,hr,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help',
							style_formats_merge: true,
							style_formats: [],
						},
					});

					setTimeout(addEditorChangeListener, 0);
				}, 300);
			}, 1000);
		}

		return () => {
			if (!window.tinymce.editors[editorId]) return;

			setTimeout(() => {
				window.tinymce.editors[editorId].off('change', listener);
				correctEditor().remove(editorId);
			}, 300);
		};
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

					if (expandedSection.id === section) {
						initEditor();
					}
				});
		});
	}, [section]);

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
