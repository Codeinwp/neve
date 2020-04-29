import {changeOption as changeSetting} from '../../utils/rest';

const {ToggleControl, Dashicon} = wp.components;
const {withSelect, withDispatch} = wp.data;
const {compose} = wp.compose;
const {useState} = wp.element;

const {__} = wp.i18n;

const Toggle = ({slug, label, getOption, changeOption, setToast}) => {
	const [ loading, setLoading ] = useState(false);
	return (
		<div className='module-option toggle'>
			<ToggleControl
				checked={getOption(slug)}
				label={label}
				onChange={(value) => {
					setLoading(true);
					changeSetting( slug, value ).then((r) => {
						if ( r.success ) {
							changeOption(slug, value);
							setToast( true );
							setLoading(false);
							return false;
						}
						setToast( false );
						setLoading(false);
					});
				}}
			/>
			{loading && <Dashicon size={18} icon="update" className="is-loading"/>}
		</div>
	);
};


export default compose(
	withSelect((select) => {
		const {
			getProOption
		} = select('neve-dashboard');
		return {
			getOption: (slug) => getProOption(slug)
		};
	}),
	withDispatch((dispatch) => {
		const {changeModuleOption, setToast} = dispatch('neve-dashboard');
		return {
			changeOption: (slug, value) => changeModuleOption(slug, value),
			setToast: (message) => setToast(message)
		};
	})
)(Toggle);

