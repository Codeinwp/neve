import classnames from 'classnames';
import PropTypes from 'prop-types';

const RadioImage = ({ choices, onClick, value }) => {
	return (
		<div className="neve-radio-image">
			{Object.keys(choices).map((choice, index) => {
				const { name, image } = choices[choice];
				const buttonClass = classnames([{ active: choice === value }]);
				return (
					<div className="option" key={index}>
						<label>
							<button
								className={buttonClass}
								onClick={(e) => {
									e.preventDefault();
									onClick(choice);
								}}
							>
								<img
									src={image}
									alt={name || `Option ${choice}`}
								/>
							</button>
							{name && <span>{name}</span>}
						</label>
					</div>
				);
			})}
		</div>
	);
};

RadioImage.propTypes = {
	choices: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default RadioImage;
