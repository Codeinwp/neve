import { TextareaControl } from "@wordpress/components";
import PropTypes from 'prop-types';

const Textarea = ({
    label,
    value,
    onChange,
	rows
}) => {
    return (
        <div className="neve-white-background-control">
			<div className="neve-control-header">
				{label && (
					<span className="customize-control-title">{label}</span>
				)}
			</div>
			<div className="textarea-wrap">
				<TextareaControl rows={rows} value={value} onChange={onChange} />
			</div>
		</div>
    )
}

Textarea.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	rows: PropTypes.number
}

export default Textarea;