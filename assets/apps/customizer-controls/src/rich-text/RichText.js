/* global NeveReactCustomize, Event */
import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef } from '@wordpress/element';
import DynamicFieldInserter from '../dynamic-fields/dynamic-field-inserter';

const RichText = ({
	onChange,
	currentValue,
	label,
	id,
	toolbars,
	allowedDynamicFields,
}) => {
	const textArea = useRef(null);
	const useDynamicFields = Boolean(
		Array.isArray(allowedDynamicFields) && allowedDynamicFields.length
	);
	const toolbarOneDefaults =
		'formatselect,bold,italic,bullist,numlist,link,wp_adv';
	const toolbarTwoDefaults =
		'strikethrough,hr,forecolor,pastetext,removeformat';
	const { toolbar1 = toolbarOneDefaults, toolbar2 = toolbarTwoDefaults } =
		toolbars;
	const editorId = `${id}-editor`;
	NeveReactCustomize.fieldSelection = {};

	/**
	 * Get the editor to be used based on the available version that WP loads.
	 */
	const correctEditor = wp.oldEditor || wp.editor;

	/**
	 * A listener to trigger the update state on change.
	 */
	const listener = useCallback(
		() => onChange(correctEditor.getContent(editorId)),
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
		correctEditor.initialize(editorId, {
			quicktags: true,
			mediaButtons: true,

			tinymce: {
				toolbar1,
				toolbar2,
				style_formats_merge: true,
				style_formats: [],
				verify_html: false,
			},
		});

		setTimeout(addEditorChangeListener, 0);

		if (wp.oldEditor) {
			setTimeout(() => {
				removeEditorChangeListener();

				correctEditor.remove(editorId);

				correctEditor.initialize(editorId, {
					quicktags: true,
					mediaButtons: true,

					tinymce: {
						toolbar1,
						toolbar2,
						style_formats_merge: true,
						style_formats: [],
						verify_html: false,
					},
				});

				setTimeout(addEditorChangeListener, 0);
			}, 300);
		}
	};

	/**
	 * Method to update the editor content and state.
	 *
	 * @param {string} content The new content.
	 */
	const setEditorContent = (content) => {
		onChange(content);
		window.tinymce.editors[editorId].setContent(content);
	};

	/**
	 * Add dynamic tag to input field.
	 *
	 * @param {string} magicTag
	 * @param {string} optionType
	 */
	const addToField = function (magicTag, optionType) {
		let tag;
		const codeEditor = textArea.current;
		const isVisualEditor = !window.tinymce.editors[editorId].hidden;

		if (optionType === 'url') {
			tag = `<a href="{${magicTag}}">Link</a>`;
		} else {
			tag = `{${magicTag}}`;
		}

		if (isVisualEditor) {
			window.tinymce.editors[editorId].editorCommands.execCommand(
				'mceInsertContent',
				false,
				tag
			);
			window.tinymce.editors[editorId].focus();
		} else {
			if (NeveReactCustomize.fieldSelection[id]) {
				const { start, end } = NeveReactCustomize.fieldSelection[id];
				const length = codeEditor.value.length;
				codeEditor.value =
					codeEditor.value.substring(0, start) +
					tag +
					codeEditor.value.substring(end, length);
			} else {
				codeEditor.value += tag;
			}
			codeEditor.focus();
		}
		codeEditor.dispatchEvent(new Event('change'));
	};

	const controlWrapperStyle = {
		position: 'relative',
	};
	const dynamicFieldStyle = {
		position: 'absolute',
		top: 0,
		right: '8px',
	};

	const textAreaStyle = {
		width: '100%',
	};

	useEffect(() => {
		// We also hook here to listen for changes of the dynamic settings change to also trigger the editor content update.
		if (textArea && textArea.current) {
			textArea.current.addEventListener('change', () => {
				setEditorContent(textArea.current.value);
			});

			textArea.current.addEventListener('focusout', function (e) {
				NeveReactCustomize.fieldSelection[id] = {
					start: e.target.selectionStart,
					end: e.target.selectionEnd,
				};
			});
		}
		initEditor();
	}, []);

	// Re-init text editor content on conditional changes.
	useEffect(() => {
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) return false;
			if (e.detail.id !== id) return false;
			setEditorContent(e.detail.value);
		});
	}, []);

	return (
		<div
			className="neve-white-background-control neve-rich-text"
			style={controlWrapperStyle}
		>
			<span className="customize-control-title">{label}</span>
			{useDynamicFields && (
				<span style={dynamicFieldStyle}>
					<DynamicFieldInserter
						options={NeveReactCustomize?.dynamicTags?.options || []}
						allowedOptionsTypes={allowedDynamicFields}
						onSelect={(magicTag, group) =>
							addToField(magicTag, group)
						}
					/>
				</span>
			)}
			<textarea
				ref={textArea}
				id={editorId}
				className="neve-custom-html-control-tinymce-editor mce-tinymce"
				value={currentValue}
				style={textAreaStyle}
				onChange={({ target: { value } }) => onChange(value)}
			/>
		</div>
	);
};

RichText.propTypes = {
	id: PropTypes.string.isRequired,
	toolbars: PropTypes.object,
	allowedDynamicFields: PropTypes.array,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	currentValue: PropTypes.string.isRequired,
};

export default RichText;
