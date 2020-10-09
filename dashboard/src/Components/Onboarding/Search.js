import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button, Dashicon, Popover } from '@wordpress/components';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const Search = ( {
	count,
	categories,
	onSearch,
	category,
	setCurrentCategory,
	query,
} ) => {
	const [ open, setOpen ] = useState( false );
	const toggleDropdown = () => setOpen( ! open );
	const renderCategoriesDropdown = () => {
		return (
			<div className="ob-dropdown categories-selector">
				<Button
					onClick={ toggleDropdown }
					className="select ob-dropdown"
				>
					{ categories[ category ] }
					<Dashicon
						size={ 14 }
						icon={ open ? 'arrow-up-alt2' : 'arrow-down-alt2' }
					/>
					{ open && (
						<Popover
							position="bottom center"
							onClose={ toggleDropdown }
							noArrow
						>
							{ open && (
								<ul className="options">
									{ Object.keys( categories ).map(
										( key, index ) => {
											if ( key === category ) {
												return null;
											}
											if (
												'free' === key &&
												count.all === count[ key ]
											) {
												return null;
											}
											return (
												<li key={ index }>
													<a
														href="#"
														onClick={ ( e ) => {
															e.preventDefault();
															setCurrentCategory(
																key
															);
															setOpen( false );
														} }
													>
														<span>
															{
																categories[
																	key
																]
															}
														</span>
														<span className="count">
															{ count[ key ] }
														</span>
													</a>
												</li>
											);
										}
									) }
								</ul>
							) }
						</Popover>
					) }
				</Button>
			</div>
		);
	};

	return (
		<div className="header-form">
			<div className="search">
				<img
					src={ neveDash.assets + '/search.svg' }
					alt={ __( 'Search Icon' ) }
				/>
				<input
					onChange={ ( e ) => {
						onSearch( e.target.value );
					} }
					type="search"
					value={ query }
					placeholder={
						__( 'Search for a starter site', 'neve' ) + '...'
					}
				/>
				{ renderCategoriesDropdown() }
			</div>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getCurrentCategory } = select( 'neve-onboarding' );
		return {
			category: getCurrentCategory(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setCurrentCategory } = dispatch( 'neve-onboarding' );
		return {
			setCurrentCategory: ( category ) => setCurrentCategory( category ),
		};
	} )
)( Search );
