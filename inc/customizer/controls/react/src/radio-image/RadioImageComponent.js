/* jshint esversion: 6 */

import PropTypes from "prop-types";
import classnames from "classnames";

import { useState } from "@wordpress/element";

const RadioImageComponent = ({ control }) => {
	const [value, setValue] = useState(control.setting.get());
	const { choices, label } = control.params;

	const updateValue = (newVal) => {
		setValue(newVal);
		control.setting.set(newVal);
	};

	const renderOptions = () =>
		Object.keys(choices).map((choice, index) => {
			const { name, image, url } = choices[choice];
			const buttonClass = classnames([{ active: choice === value }]);
			return (
				<div className="option" key={index}>
					<label data-option={choice}>
						<button
							className={buttonClass}
							onClick={(e) => {
								e.preventDefault();
								updateValue(choice);
							}}
						>
							<img src={image || url} alt={name || `Option ${choice}`} />
						</button>
						{name && <span>{name}</span>}
					</label>
				</div>
			);
		});

	return (
		<>
			{label && <label className="customize-control-title">{label}</label>}
			<div className="neve-radio-image">{renderOptions()}</div>
		</>
	);
};

RadioImageComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default RadioImageComponent;
