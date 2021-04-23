import {Icon} from '@wordpress/components';
import classnames from 'classnames';
import {useState, useEffect} from '@wordpress/element';
import IconField from "../icon-picker/IconField";
import IconColor from "../icon-color/IconColor";

const Repeater = ({value, fields, fieldsValue}) => {
	const [isVisible, setVisibility] = useState();
	const [isToggle, toggle] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [linkValue, setLinkValue] = useState("");

	useEffect(() => {
		if (value.visibility === "yes") {
			setVisibility(true);
		}
	}, []);

	const visibilityHandler = () => {
		setVisibility(!isVisible);
	};

	const toggleHandler = () => {
		toggle(!isToggle);
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

				<div
					className="nv-repeater--item-title"
					onClick={() => toggleHandler()}
				>
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

			{isToggle && (
				fieldsValue.map(val => {
					console.log(val)
					return (
						<div className="nv-repeater-item--content">
							<div className="nv-repeater--field">
								<label>{fields[val].label}</label>
								<input
									type={fields[val].type}
									className="nv-repeater-text-field"
									value={value[val]} // --> state
									onChange={(e) => changeInputValue(e)}/>
							</div>
							<div className="nv-repeater--field">
								{/*<IconField selectedIcon={selectedIcon} label={fields[val].label} type={fields[val].type}/>*/}
							</div>
							<div className="nv-repeater--field">
								<label>{fields[val].label}</label>
								<input
									type={fields[val].type}
									className="nv-repeater-text-field"
									value={value[val]} // --> state
									onChange={(e) => addLink(e)}
								/>
							</div>
							<div className="nv-repeater--field">
								<IconColor label={fields[val].label}/>
							</div>
							<div className="nv-repeater--field">
								<IconColor label={fields[val].label}/>
							</div>
						</div>
					)
				})
			)}
		</div>
	)
}
;

export default Repeater;
