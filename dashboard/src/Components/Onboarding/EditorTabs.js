import classnames from 'classnames';

const {__} = wp.i18n;
const {withDispatch, withSelect} = wp.data;
const {compose} = wp.compose;

const EditorTabs = ({EDITOR_MAP, count, onlyProSites, editor, setCurrentEditor}) => {

	return (
			<div className="editor-tabs">
				{
					Object.keys(EDITOR_MAP).map(key => {
						const classes = classnames( [ 'tab', key, {'active': key === editor} ] );
						return (
							<a
								href="#"
								className={classes}
								onClick={e => {
								e.preventDefault();
									setCurrentEditor(key);
							}}>
								<span className="icon-wrap">
									<img
										className='editor-icon'
										src={neveDash.assets + 'editor-icons/' + EDITOR_MAP[key].icon}
										alt={__('Builder Logo', 'neve')}/>
								</span>
								<span className="editor">{EDITOR_MAP[key].niceName}</span>
								<span className="count">{count[key]}</span>
								{onlyProSites.includes(key) && <span className='pro-badge'>PRO</span>}
							</a>
						);
					})
				}
			</div>
	);
};

export default compose(
	withSelect((select) => {
		const {getCurrentEditor} = select('neve-onboarding');
		return {
			editor: getCurrentEditor()
		};
	}),
	withDispatch((dispatch) => {
		const {setCurrentEditor} = dispatch('neve-onboarding');
		return {
			setCurrentEditor: (editor) => setCurrentEditor(editor)
		};
	})
)(EditorTabs);
