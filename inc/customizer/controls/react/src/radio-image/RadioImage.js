import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ExternalLink } from '@wordpress/components';

const RadioImage = ({ choices, onClick, value, label, documentation }) => {
	const renderDocumentation = () => {
		if (typeof window.NeveProReactCustomize !== 'undefined') {
			const { whiteLabel } = window.NeveProReactCustomize;

			if (whiteLabel) {
				return null;
			}
		}

		if (!documentation) {
			return null;
		}

		if (!documentation.link || !documentation.label) {
			return null;
		}

		return (
			<ExternalLink
				href={documentation.link}
				style={{ float: 'right', marginTop: '5px' }}
			>
				{documentation.label}
			</ExternalLink>
		);
	};

	return (
		<>
			{label && (
				//eslint-disable-next-line jsx-a11y/label-has-for
				<label className="customize-control-title">{label}</label>
			)}
			<div className="neve-radio-image">
				{Object.keys(choices).map((choice, index) => {
					const { name, image, url } = choices[choice];
					const buttonClass = classnames([
						{ active: choice === value },
					]);
					return (
						<div className="option" key={index}>
							{/*eslint-disable-next-line jsx-a11y/label-has-for */}
							<label data-option={choice}>
								<button
									className={buttonClass}
									onClick={(e) => {
										e.preventDefault();
										onClick(choice);
									}}
								>
									<img
										src={image || url}
										alt={name || `Option ${choice}`}
									/>
								</button>
								{name && <span>{name}</span>}
							</label>
						</div>
					);
				})}
			</div>

			{renderDocumentation()}
		</>
	);
};

RadioImage.propTypes = {
	choices: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default RadioImage;
