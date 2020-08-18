const { Button, ButtonGroup } = wp.components;
const {compose} = wp.compose;
const {withDispatch, withSelect} = wp.data;

import { alignCenterIcon, alignLeftIcon, alignRightIcon } from '../../helpers/icons.js';

export const ButtonChoices = compose(
	withDispatch((dispatch, props) => {
		return {
			setMetaValue: (value) => {
				dispatch('core/editor').editPost({meta: {[props.id]: value}});
			}
		};
	} ),
	withSelect((select, props) => {
		return {
			metaValue: select('core/editor').getEditedPostAttribute('meta')[props.id]
		};
	} ) )( function( props ) {

		const getOptions = function(props) {
			const {choices} = props.data;
			let controlChoices = [];
			Object.keys(choices).map((choice) => {
				controlChoices.push( {label: <>{choices[choice]}</>, value: choice } );
			});
			return controlChoices;
		};

		const getIcon = function (value) {
			let icon;
			switch (value) {
				case 'left':
					icon = alignLeftIcon;
					break;
				case 'right':
					icon = alignRightIcon;
					break;
				case 'center':
					icon = alignCenterIcon;
					break;
				default:
					icon = false;
			}
			return icon;
		};

		const options = getOptions(props);
		const { label } = props.data;
		const hasIcons = props.data['has_icons'];
		const { id, metaValue } = props;
		return (
			<div className="neve-meta-control neve-meta-button-group">
				{label && <p className="post-attributes-label-wrapper"><span className="post-attributes-label">{label}</span></p>}
				<ButtonGroup>
					{
						Object.keys(options).map((choice) => {
							let icon = getIcon(options[choice].value);
							return (
								<Button
									icon={icon}
									key={options[choice].value}
									isPrimary={ metaValue === options[choice].value }
									isSecondary={ metaValue !== options[choice].value }
									onClick={ () => {
										props.setMetaValue( options[choice].value );
										props.stateUpdate( id, options[choice].value );
									} }
								> { ! hasIcons ? options[choice].label : '' } </Button>
							);
						})
					}
				</ButtonGroup>
			</div>
		);
	}
);
