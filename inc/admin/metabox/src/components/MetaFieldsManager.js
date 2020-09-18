/* global neveSidebarData */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import {
	PanelBody,
	Button,
	BaseControl,
	RadioControl,
	ButtonGroup,
	ToggleControl,
	RangeControl,
} from '@wordpress/components';
import SortableItems from './controls/SortableItems';
import {
	alignCenterIcon,
	alignLeftIcon,
	alignRightIcon,
} from '../helpers/icons.js';

const MetaFieldsManager = ( {
	defaults,
	getMetaValue,
	setMetaValue,
	template,
	postType,
} ) => {
	const metaSidebar = getMetaValue( 'neve_meta_sidebar' );
	const metaContainer = getMetaValue( 'neve_meta_container' );
	const metaContentWidth = getMetaValue( 'neve_meta_content_width' );
	const metaTitleAlignment = getMetaValue( 'neve_meta_title_alignment' );
	const metaAuthorAvatar = getMetaValue( 'neve_meta_author_avatar' );
	const metaReadingTime = getMetaValue( 'neve_meta_reading_time' );
	const metaElementsOrder = getMetaValue( 'neve_post_elements_order' );
	const metaDisableHeader = getMetaValue( 'neve_meta_disable_header' );
	const metaDisableFooter = getMetaValue( 'neve_meta_disable_footer' );
	const metaDisableTitle = getMetaValue( 'neve_meta_disable_title' );
	const metaEnableContentWidth = getMetaValue(
		'neve_meta_enable_content_width'
	);

	const updateBlockWidth = () => {
		const cssTag = document.getElementById( 'neve-meta-editor-style' );

		if ( cssTag ) {
			cssTag.remove();
		}

		let containerType = metaContainer;
		if ( 'default' === metaContainer ) {
			containerType = neveSidebarData.container;
		}

		let blockWidth = metaContentWidth + '%';
		if ( 'contained' === containerType ) {
			blockWidth =
				Math.round(
					( metaContentWidth / 100 ) * neveSidebarData.editor
				) + 'px';
		}

		const css =
			'.wp-block:not([data-align="full"]) { max-width: ' +
			blockWidth +
			'; }';
		const head = document.head;
		const style = document.createElement( 'style' );
		style.setAttribute( 'id', 'neve-meta-editor-style' );
		style.innerHTML = css;
		head.appendChild( style );
	};

	useEffect( updateBlockWidth, [
		metaContainer,
		metaEnableContentWidth,
		metaContentWidth,
	] );

	const resetAll = () => {
		const metas = { ...defaults };
		const contentWidth = postType === 'page' ? 100 : 0;
		Object.keys( metas ).forEach( ( slug ) => {
			if ( slug === 'neve_meta_enable_content_width' ) {
				setMetaValue( slug, 'on' );
				return false;
			}

			setMetaValue(
				slug,
				slug === 'neve_meta_content_width' ? contentWidth : ''
			);
		} );
	};

	const renderPageLayoutGroup = () => {
		if ( 'elementor_header_footer' === template ) {
			return false;
		}

		return (
			<div className="nv-option-category">
				<PanelBody
					title={ __( 'Page Layout', 'neve' ) }
					intialOpen={ true }
				>
					<BaseControl
						id="neve_meta_sidebar"
						label={ __( 'Sidebar', 'neve' ) }
						className="neve-meta-control neve-meta-radio-image neve_meta_sidebar"
					>
						<RadioControl
							selected={ metaSidebar }
							options={ [
								{
									label: (
										<>
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABXCAYAAAC9UeOHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN6SURBVHgB7ZrfThpREMZn1SgUWiwkFi6gtol3mnjhi/QJmj5C36SP1gsvTGir0Rb/Baop20UL3fJtugaH3QXKzlLj90s2G5Rlc37MmTNnFqfreW/9weCDiLMujxjHkSPx/TdO13UPfV82hUDKxyXKuMf6kpB7UIiCQhQUoqAQBYUoKERBIQoKUVCIgkIUFKKgEAWFKChEQSEKClFQiIJCFBSioBAFhSgoREEhCgpRUIiCQhQrsgAGg4F0Om3peZ54wwOvwerqqiwvL8uzUkmKxafB66zJVEi325Xzs9PgHMXt7W1wvr6+Ds7lclleVGuZinF+dF1fjEEEQMTl5aX8C9VqNRBjDX4jYi4E3/rR4ZdgasxDsViUzVevgyllBYSYJlVExudPzbllAEwzfFaYb6wwFdL69vUuL6QBxGLqWWImBKtIp9OZ6Zq1tTVZWUnO88hDcUk5DcyEnJ+dyazs7OzI9vb2xPdZRonJsovoSJoqiIJCoTD2dyy3GxsbsrW1Jc1mM/Z6RAgOJNq0MRHyPWGq1Ot1aTQakgSkXFxc3NUjUUD6gxESt6ogR0BGu92W09PxsK/ValKpVOTk5CRRBnCN8kjqQkZLcU34jUJG1IARGZBxfHwsk8CUxH3SrktSF5JUJ4QluOu6kf8fzRvIMyjdIe7m5ib2XmkLyXS3iwFggP1+f+J7MVAk19JwoxdHmjVOSKabOyRKHCHhShMVMblcLjjHRQewKONTj5Bpd6aQgZoDURAFkivo9Xoy771mIfUICXsaSbkklBFWpXt7e2PvwYqEaIqLkHw+bxIhJlMGDZ6kWmQ0hyCnRMmDiKTVJjcUYoGJkHK5kigEg93f35fd3d0gSg4ODmRWqkb9ERMhqDdwJG3CkEixzE7azEXxfLgcW3XRzJbdaTpcyBGtVktmpWrYPTMTggixaPtZ91hNCzP0QlFtpgVk4DMtMa9U642XqURKFjJAJpUqBoIwR2Nn1nIb10GqxVY/ikweQ4yCtuI0YgpDAaXSejDlLDvto2TyGCIO7+9TO8/7eVeYYeD5/JMgGhbx1G6hQv5HzJ/LPEQoREEhCgpRUIiCQhQUoqAQBYUoKERBIQoKUVCIgkIUFKKgEAWFKChEQSEKClFQiIJCFBSioBAFhSgoREEhCgi5EhLg+3K15P/23/viHMkjBzL6v/x3fwDAqWHdPm8hRQAAAABJRU5ErkJggg==" />
											<span className="option-label">
												{ __( 'Inherit', 'neve' ) }
											</span>
										</>
									),
									value: 'default',
								},
								{
									label: (
										<>
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABYCAYAAACjxTpsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFISURBVHgB7dWxSsNgGEbht6UEgnGpg3HrUGf1DrxTL0yFutXBToFAsK3WoYtnMIVgW84zZwiHl/8btW07i/bKslxMPtfrp2T0GP1ot9vZOPrFKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKGCSnpqmyevLc07JRVVlPr/98/cuBfReSvVd/e7+IefMpQCjAKMAowBPMnApwJMMXAowCjAKMArwJAOXAjzJwKUAowCjAKMATzJwKcCTDFwKMAowCuj9pnRdl9XqI0OYTq9SFEX+20FR3pfLDKGqLk8zyu6nr+s6QziGIDsHRanrm5wzH1pgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBQw2WzyNhpnEe19AbO4NutQ2DJ9AAAAAElFTkSuQmCC" />
											<span className="option-label">
												{ __( 'None', 'neve' ) }
											</span>
										</>
									),
									value: 'full-width',
								},
								{
									label: (
										<>
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABXCAYAAABSk4i5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFDSURBVHgB7dUtT8NQFIfxM0ouYkWwUBLMMEMAiu/v+A6AQLH5+jVr9qL3iCZNTrPl+emrnuSe/+zrb7uPET6fd3FN7uv57CZ0xijAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjgNhL8/nzH1B6bJprmadDblChd18XU+r4f/DYlytv7R0ytqqrBb1OilFLiknhogVGAUYCTDJxk4CQDJxl4aIFRgFGAkwycZOAkAycZeGiBUYBRgJMMnGTgJAMnGXhogVFAyvdp2zbGOH2/uq4jS0qUzfo/xpgfg6xWr5ElJcrDYhFjlHIXmVKiLJcvcUk8tMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAo4ABQ0jKnFSWXOgAAAABJRU5ErkJggg==" />
											<span className="option-label">
												{ __( 'Left', 'neve' ) }
											</span>
										</>
									),
									value: 'left',
								},
								{
									label: (
										<>
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABXCAYAAAC5pDO6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgB7dlBSsNQFEbhWyORSCDYFajYgboH9z9zDerAOrMYCQSCmo498MqjCW3PB9nAIbn/IIv489V+/8QReX4/jxxPq4vFWehfhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgHJ/zLbto2315eY2/XNbVRVFfu200/evu9jbsMwxBSSw9R1HfcPjzG3oihiCju9MWVZxqnw+ALDAMMA5xo418C5Bs418PgCwwDDAOcaONfAuQbONfD4AsMAwwDnGjjXwLkGzjXw+ALDgORPqeu67ZOjaZrJbkSu5DCbzWd8rNeRo7xbbY/4IUgOU1WXcbVcRo5DeVtGyWHGz2B8ToXHFxgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgG/AIdeUYQlOqQ4AAAAABJRU5ErkJggg==" />
											<span className="option-label">
												{ __( 'Right', 'neve' ) }
											</span>
										</>
									),
									value: 'right',
								},
							] }
							onChange={ ( value ) => {
								setMetaValue( 'neve_meta_sidebar', value );
							} }
						/>
					</BaseControl>

					<BaseControl
						label={ __( 'Container', 'neve' ) }
						id="neve_meta_container"
						className="neve-meta-control neve-meta-button-group neve_meta_container"
					>
						<ButtonGroup>
							<Button
								isPrimary={ 'default' === metaContainer }
								isSecondary={ 'default' !== metaContainer }
								onClick={ () => {
									setMetaValue(
										'neve_meta_container',
										'default'
									);
								} }
							>
								{ __( 'Default', 'neve' ) }
							</Button>
							<Button
								isPrimary={ 'contained' === metaContainer }
								isSecondary={ 'contained' !== metaContainer }
								onClick={ () => {
									setMetaValue(
										'neve_meta_container',
										'contained'
									);
								} }
							>
								{ __( 'Contained', 'neve' ) }
							</Button>
							<Button
								isPrimary={ 'full-width' === metaContainer }
								isSecondary={ 'full-width' !== metaContainer }
								onClick={ () => {
									setMetaValue(
										'neve_meta_container',
										'full-width'
									);
								} }
							>
								{ __( 'Full Width', 'neve' ) }
							</Button>
						</ButtonGroup>
					</BaseControl>

					<BaseControl
						id="neve_meta_enable_content_width"
						className="neve-meta-control neve-meta-checkbox neve_meta_enable_content_width"
					>
						<ToggleControl
							label={ __( 'Custom Content Width (%)', 'neve' ) }
							checked={ 'on' === metaEnableContentWidth }
							onChange={ ( value ) => {
								setMetaValue(
									'neve_meta_enable_content_width',
									value ? 'on' : 'off'
								);
								setMetaValue(
									'neve_meta_content_width',
									value === 'on'
										? defaults.neve_meta_content_width
										: 0
								);
							} }
						/>
					</BaseControl>

					{ 'on' === metaEnableContentWidth && (
						<BaseControl
							id="neve_meta_content_width"
							className="neve-meta-control neve-meta-range neve_meta_content_width"
						>
							<RangeControl
								step="1"
								min={ 0 }
								max={ 100 }
								value={ metaContentWidth }
								onChange={ ( value ) => {
									setMetaValue(
										'neve_meta_content_width',
										value
									);
								} }
							/>
						</BaseControl>
					) }
				</PanelBody>
			</div>
		);
	};

	const renderPageTitleGroup = () => {
		if ( 'elementor_header_footer' === template ) {
			return false;
		}
		const showMetaElements = JSON.parse( metaElementsOrder ).includes(
			'meta'
		);
		return (
			<div className="nv-option-category">
				<PanelBody
					title={ __( 'Page Title', 'neve' ) }
					intialOpen={ true }
				>
					<BaseControl
						label={ __( 'Title alignment', 'neve' ) }
						id="neve_meta_title_alignment"
						className="neve-meta-control neve-meta-button-group neve_meta_title_alignment"
					>
						<ButtonGroup>
							<Button
								icon={ alignLeftIcon }
								className="nv-align-left"
								isPrimary={ 'left' === metaTitleAlignment }
								isSecondary={ 'left' !== metaTitleAlignment }
								onClick={ () => {
									setMetaValue(
										'neve_meta_title_alignment',
										'left'
									);
								} }
							/>
							<Button
								icon={ alignCenterIcon }
								className="nv-align-center"
								isPrimary={ 'center' === metaTitleAlignment }
								isSecondary={ 'center' !== metaTitleAlignment }
								onClick={ () => {
									setMetaValue(
										'neve_meta_title_alignment',
										'center'
									);
								} }
							/>
							<Button
								icon={ alignRightIcon }
								className="nv-align-right"
								isPrimary={ 'right' === metaTitleAlignment }
								isSecondary={ 'right' !== metaTitleAlignment }
								onClick={ () => {
									setMetaValue(
										'neve_meta_title_alignment',
										'right'
									);
								} }
							/>
						</ButtonGroup>
					</BaseControl>

					{ showMetaElements && 'post' === postType && (
						<BaseControl
							id="neve_meta_author_avatar"
							className="neve-meta-control neve-meta-checkbox neve_meta_author_avatar"
						>
							<ToggleControl
								label={ __( 'Author Avatar', 'neve' ) }
								checked={ 'on' === metaAuthorAvatar }
								onChange={ ( value ) => {
									setMetaValue(
										'neve_meta_author_avatar',
										value ? 'on' : 'off'
									);
								} }
							/>
						</BaseControl>
					) }
					{ neveSidebarData.enable_pro && showMetaElements && (
						<BaseControl
							id="neve_meta_reading_time"
							className="neve-meta-control neve-meta-checkbox neve_meta_reading_time"
						>
							<ToggleControl
								label={ __( 'Reading Time', 'neve' ) }
								checked={ 'on' === metaReadingTime }
								onChange={ ( value ) => {
									setMetaValue(
										'neve_meta_reading_time',
										value ? 'on' : 'off'
									);
								} }
							/>
						</BaseControl>
					) }
				</PanelBody>
			</div>
		);
	};

	const renderElementsGroup = () => {
		const settings = {
			elements: {
				title: __( 'Post Title', 'neve' ),
				meta: __( 'Post Meta', 'neve' ),
				thumbnail: __( 'Featured Image', 'neve' ),
				content: __( 'Content', 'neve' ),
				tags: __( 'Tags', 'neve' ),
				comments: __( 'Comments', 'neve' ),
				'post-navigation': __( 'Post Navigation', 'neve' ),
			},
			defaults: JSON.stringify( [
				'title',
				'meta',
				'thumbnail',
				'content',
				'tags',
				'comments',
			] ),
		};

		if ( neveSidebarData.enable_pro ) {
			settings.elements[ 'author-biography' ] = __(
				'Author Biography',
				'neve'
			);
			settings.elements[ 'related-posts' ] = __(
				'Related Posts',
				'neve'
			);
			settings.elements[ 'sharing-icons' ] = __(
				'Sharing Icons',
				'neve'
			);
		}

		return (
			<div className="nv-option-category">
				<PanelBody
					intialOpen={ true }
					title={ __( 'Elements', 'neve' ) }
				>
					{ 'elementor_header_footer' !== template &&
						'post' === postType && (
							<BaseControl
								id="neve_post_elements_order"
								className="neve-meta-control neve-meta-sortable"
							>
								<SortableItems
									updateValue={ setMetaValue }
									id="neve_post_elements_order"
									data={ settings }
								/>
							</BaseControl>
						) }

					<BaseControl
						id="neve_meta_disable_header"
						className="neve-meta-control neve-meta-checkbox neve_meta_disable_header"
					>
						<ToggleControl
							label={ __( 'Disable Header', 'neve' ) }
							checked={ 'on' === metaDisableHeader }
							onChange={ ( value ) => {
								setMetaValue(
									'neve_meta_disable_header',
									value ? 'on' : 'off'
								);
							} }
						/>
					</BaseControl>

					<BaseControl
						id="neve_meta_disable_footer"
						className="neve-meta-control neve-meta-checkbox neve_meta_disable_footer"
					>
						<ToggleControl
							label={ __( 'Disable Footer', 'neve' ) }
							checked={ 'on' === metaDisableFooter }
							onChange={ ( value ) => {
								setMetaValue(
									'neve_meta_disable_footer',
									value ? 'on' : 'off'
								);
							} }
						/>
					</BaseControl>

					{ 'elementor_header_footer' !== template &&
						'page' === postType && (
							<BaseControl
								id="neve_meta_disable_title"
								className="neve-meta-control neve-meta-checkbox neve_meta_disable_title"
							>
								<ToggleControl
									label={ __( 'Disable Title', 'neve' ) }
									checked={ 'on' === metaDisableTitle }
									onChange={ ( value ) => {
										setMetaValue(
											'neve_meta_disable_title',
											value ? 'on' : 'off'
										);
									} }
								/>
							</BaseControl>
						) }
				</PanelBody>
			</div>
		);
	};

	const renderResetButton = () => {
		return (
			<BaseControl
				label={ __( 'Reset all options to default', 'neve' ) }
				id="neve_reset_all"
				className="nv-reset-all components-panel__body is-opened"
			>
				<Button
					icon="image-rotate"
					showTooltip={ true }
					onClick={ resetAll }
					className="nv-reset-meta"
					label={ __( 'Return to customizer settings', 'neve' ) }
				/>
			</BaseControl>
		);
	};

	return (
		<>
			{ renderPageLayoutGroup() }
			{ renderPageTitleGroup() }
			{ renderElementsGroup() }
			{ renderResetButton() }
		</>
	);
};

export default compose( [
	withDispatch( ( dispatch ) => {
		const { editPost } = dispatch( 'core/editor' );
		return {
			setMetaValue: ( id, value ) => {
				editPost( {
					meta: { [ id ]: value },
				} );
			},
		};
	} ),
	withSelect( ( select ) => {
		const { getEditedPostAttribute, getCurrentPostType } = select(
			'core/editor'
		);

		const getTemplate = () => getEditedPostAttribute( 'template' );
		const postType = getCurrentPostType();
		const defaults = {
			neve_meta_sidebar: postType === 'page' ? 'full-width' : 'default',
			neve_meta_container: 'default',
			neve_meta_enable_content_width: postType === 'page' ? 'on' : 'off',
			neve_meta_content_width: postType === 'page' ? 100 : 70,
			neve_meta_title_alignment: 'left',
			neve_meta_author_avatar: 'off',
			neve_meta_reading_time: 'off',
			neve_post_elements_order: JSON.stringify( [
				'title',
				'meta',
				'thumbnail',
				'content',
				'tags',
				'comments',
				'post-navigation',
			] ),
			neve_meta_disable_header: 'off',
			neve_meta_disable_footer: 'off',
			neve_meta_disable_title: 'off',
		};

		return {
			getMetaValue: ( id ) =>
				getEditedPostAttribute( 'meta' )[ id ] || defaults[ id ],
			template: getTemplate(),
			postType,
			defaults,
		};
	} ),
] )( MetaFieldsManager );
