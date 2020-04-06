import OnClickOutside from '../Utils/OnClickOutside';

const {__} = wp.i18n;
const {useState} = wp.element;
const {Button, Dashicon} = wp.components;


const EditorSelector = ({onChange, onSearch, selected}) => {
	const map = {
		'elementor': {
			icon: 'elementor.png',
			niceName: __('Elementor')
		},
		'brizy': {
			icon: 'brizy.svg',
			niceName: __('Brizy')
		},
		'beaver builder': {
			icon: 'beaver.png',
			niceName: __('Beaver Builder')
		},
		'thrive architect': {
			icon: 'thrive.png',
			niceName: __('Thrive Architect')
		},
		'divi builder': {
			icon: 'divi.svg',
			niceName: __('Divi Builder')
		},
		'gutenberg': {
			icon: 'gutenberg.png',
			niceName: __('Gutenberg')
		}
	};

	const [ open, setOpen ] = useState(false);

	return (
		<div className="header-form">
			<OnClickOutside action={() => {
				setOpen(false);
			}}>
				<div className="ob-dropdown">
					<Button
						onClick={() => {
							setOpen(true);
						}}
						className="select">
						<img
							className='editor-icon'
							src={neveDash.assets + 'editor-icons/' + map[selected].icon}
							alt={__('Builder Logo', 'neve')}/>
						<span>{map[selected].niceName}</span>
						<Dashicon size={14} icon={open ? 'arrow-up-alt2' : 'arrow-down-alt2'}/>
					</Button>
					{open && <div className="options">
						<ul>
							{Object.keys(map).map((key) => {
								if (key === selected) {
									return null;
								}
								return (
									<li>
										<a onClick={() => {
											onChange(key);
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
						</ul>
					</div>}
				</div>
			</OnClickOutside>
			<div className="search">
				<input
					onChange={(e) => {
						onSearch(e.target.value);
					}}
					type="search"
					placeholder={__('Search for a starter site', 'neve') + '...'}/>
				<img src={neveDash.assets + '/search.svg'} alt={__('Search Icon')}/>
			</div>
		</div>
	);
};

export default EditorSelector;
