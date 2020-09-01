const {__} = wp.i18n;
const {useState} = wp.element;
const {Button, Dashicon, Popover} = wp.components;
const {withDispatch, withSelect} = wp.data;
const {compose} = wp.compose;

const EditorSelector = ({EDITOR_MAP, count, editor, setCurrentEditor, sites}) => {
    const [ open, setOpen ] = useState(false);
    const editorsOrderedFromAPI = Object.keys( sites );
    const toggleDropdown = () => setOpen(! open);
    return (
            <div className="ob-dropdown editor-selector">
                <Button
                    onClick={toggleDropdown}
                    className="select ob-dropdown">
                    <img
                        className='editor-icon'
                        src={neveDash.assets + 'editor-icons/' + EDITOR_MAP[editor].icon}
                        alt={__('Builder Logo', 'neve')}/>
                    <span>{EDITOR_MAP[editor].niceName}</span>
                    <span className="count">{count[editor]}</span>
                    <Dashicon size={14} icon={open ? 'arrow-up-alt2' : 'arrow-down-alt2'}/>
                    {open && (
                        <Popover position="bottom center" onClose={toggleDropdown} noArrow>
                            {open &&
                            <ul className="options">
                                {editorsOrderedFromAPI.map((key, index) => {
                                    if (key === editor) {
                                        return null;
                                    }
                                    return (
                                        <li key={index}>
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                setCurrentEditor(key);
                                                setOpen(false);
                                            }}>
                                                <img
                                                    className='editor-icon'
                                                    src={neveDash.assets + 'editor-icons/' + EDITOR_MAP[key].icon}
                                                    alt={__('Builder Logo', 'neve')}/>
                                                <span>{EDITOR_MAP[key].niceName}</span>
                                                <span className="count">{count[key]}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>}
                        </Popover>
                    )}
                </Button>
            </div>
    );
};

export default compose(
    withSelect((select) => {
        const {getCurrentEditor, getSites} = select('neve-onboarding');
        return {
            editor: getCurrentEditor(),
            sites: getSites().sites
        };
    }),
    withDispatch((dispatch) => {
        const {setCurrentEditor} = dispatch('neve-onboarding');
        return {
            setCurrentEditor: (editor) => setCurrentEditor(editor)
        };
    })
)(EditorSelector);
