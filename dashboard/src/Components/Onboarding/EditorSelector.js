const {__} = wp.i18n;
const {useState} = wp.element;
const {Button, Dashicon, Popover} = wp.components;
const {withDispatch, withSelect} = wp.data;
const {compose} = wp.compose;

const EditorSelector = ({onSearch, editor, setCurrentEditor, query}) => {
	const map = {
		'elementor': {
			icon: 'elementor.png',
			niceName: 'Elementor'
		},
		'brizy': {
			icon: 'brizy.svg',
			niceName: 'Brizy'
		},
		'beaver builder': {
			icon: 'beaver.png',
			niceName: 'Beaver Builder'
		},
		'thrive architect': {
			icon: 'thrive.png',
			niceName: 'Thrive Architect'
		},
		'divi builder': {
			icon: 'divi.svg',
			niceName: 'Divi Builder'
		},
		'gutenberg': {
			icon: 'gutenberg.png',
			niceName: 'Gutenberg'
		}
	};

	const [ open, setOpen ] = useState(false);
	const toggleDropdown = () => setOpen(! open);
	return (
		<div className="header-form">
			<div className="ob-dropdown">
				<Button
					onClick={toggleDropdown}
					className="select ob-dropdown">
					<img
						className='editor-icon'
						src={neveDash.assets + 'editor-icons/' + map[editor].icon}
						alt={__('Builder Logo', 'neve')}/>
					<span>{map[editor].niceName}</span>
					<Dashicon size={14} icon={open ? 'arrow-up-alt2' : 'arrow-down-alt2'}/>
					{open && (
						<Popover position="bottom right" onClose={toggleDropdown} noArrow>
							{open &&
							<ul className="options">
								{Object.keys(map).map((key) => {
									if (key === editor) {
										return null;
									}
									return (
										<li>
											<a href="#" onClick={(e) => {
												e.preventDefault();
												setCurrentEditor(key);
												setOpen(false);
											}}>
												<img
													className='editor-icon'
													src={neveDash.assets + 'editor-icons/' + map[key].icon}
													alt={__('Builder Logo', 'neve')}/>
												<span>{map[key].niceName}</span>
											</a>
										</li>
									);
								})}
							</ul>}
						</Popover>
					)}
				</Button>
			</div>
			<div className="search">
				<input
					onChange={(e) => {
						onSearch(e.target.value);
					}}
					type="search"
					value={query}
					placeholder={__('Search for a starter site', 'neve') + '...'}/>
				<img src={neveDash.assets + '/search.svg'} alt={__('Search Icon')}/>
			</div>
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
)(EditorSelector);
