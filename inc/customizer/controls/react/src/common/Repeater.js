import {Icon} from '@wordpress/components';
import classnames from 'classnames';
import {useState} from '@wordpress/element';
import IconField from "../icon-picker/IconField";
import IconColor from "../icon-color/IconColor";

const Repeater = ({title, icon}) => {
	const [isVisible, setVisibility] = useState(true);
	const [isToggle, toggle] = useState(false);
	const [inputValue, setInputValue] = useState(title);
	const [linkValue, setLinkValue] = useState("#");

	const visibilityHandler = () => {
		setVisibility(!isVisible);
	};

	const toggleHandler = () => {
		toggle(!isToggle)
	};

	const changeInputValue = (e) => {
		setInputValue(e.target.value);
	};

	const addLink = (e) => {
		setLinkValue(e.target.value);
	}

	return (
		<div className={classnames(["nv-repeater--item", {expanded: isToggle}])}>
			<div className="nv-repeater--header">
				<span
					onClick={() => visibilityHandler()}
					className={classnames(['nv-repeater--toggle', 'has-value'])}
				>
					<Icon
						size={18}
						icon={isVisible ? 'visibility' : 'hidden'}
					/>
				</span>

				<div className="nv-repeater--item-title">
					<span className="nv-repeater--title-text">{inputValue}</span>
					<span
						onClick={() => toggleHandler()}
						className={classnames([
							'dashicons',
							{'opened dashicons-arrow-up': isToggle},
							{'closed dashicons-arrow-down': !isToggle},
						])}
					/>
				</div>
			</div>

			{
				isToggle && (
					<div className="nv-repeater-item--content">
						<div className="nv-repeater--field">
							<label>Title</label>
							<input
								type="text"
								className="nv-repeater-text-field"
								value={inputValue}
								onChange={(e) => changeInputValue(e)}/>
						</div>
						<div className="nv-repeater--field">
							<IconField/>
						</div>
						<div className="nv-repeater--field">
							<label>Link</label>
							<input
								type="text"
								className="nv-repeater-text-field"
								value={linkValue}
								onChange={(e) => addLink(e)}
							/>
						</div>
						<div className="nv-repeater--field">
							<IconColor label={"Icon Color"}/>
						</div>
						<div className="nv-repeater--field">
							<IconColor label={"Background Color"}/>
						</div>
					</div>
				)
			}
		</div>
	);
};

export default Repeater;
