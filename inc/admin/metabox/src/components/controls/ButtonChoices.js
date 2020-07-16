const { Button, ButtonGroup } = wp.components;
const {compose} = wp.compose;
const {withDispatch, withSelect} = wp.data;

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
			metaValue: select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data.default
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

		const options = getOptions(props);
		const { label } = props.data;
		const { id, metaValue } = props;

		return (
			<div className="neve-meta-control neve-meta-button-group">
				{label && <p className="post-attributes-label-wrapper"><span className="post-attributes-label">{label}</span></p>}
				<ButtonGroup>
					{
						Object.keys(options).map((choice) => {
							return (
								<Button
									key={options[choice].value}
									isPrimary={ metaValue === options[choice].value }
									isSecondary={ metaValue !== options[choice].value }
									onClick={ () => {
										props.setMetaValue( options[choice].value );
										props.stateUpdate( id, options[choice].value );
									} }
								> {options[choice].label} </Button>
							);
						})
					}
				</ButtonGroup>
			</div>
		);
	}
);
