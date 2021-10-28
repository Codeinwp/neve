import PropTypes from 'prop-types';

const RichText = ({ onChange, currentValue, label, id, editorId }) => {
	return (
		<div className="neve-white-background-control neve-rich-text">
			<span className="customize-control-title">{label}</span>
			<textarea
				id={editorId}
				data-customize-setting-link={id}
				className="neve-custom-html-control-tinymce-editor mce-tinymce"
				value={currentValue}
				style={{ width: '100%' }}
				onChange={({ target: { value } }) => onChange(value)}
			/>
		</div>
	);
};

RichText.propTypes = {
	id: PropTypes.string.isRequired,
	editorId: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	currentValue: PropTypes.string.isRequired,
};

export default RichText;
