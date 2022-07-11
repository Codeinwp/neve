/* global metaSidebar */
import SortableItems from './controls/SortableItems';
import {
	alignCenterIcon,
	alignLeftIcon,
	alignRightIcon,
} from '../helpers/icons.js';

import { compose } from '@wordpress/compose';

import { withDispatch, withSelect, select } from '@wordpress/data';
import { Component } from '@wordpress/element';
import {
	PanelBody,
	Button,
	BaseControl,
	RadioControl,
	ButtonGroup,
	ToggleControl,
	RangeControl,
	Notice,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { maybeParseJson } from '@neve-wp/components';

class MetaFieldsManager extends Component {
	constructor(props) {
		super(props);

		this.defaultState = {
			neve_meta_sidebar: 'default',
			neve_meta_container: 'default',
			neve_meta_enable_content_width: 'off',
			neve_meta_content_width: 70,
			neve_meta_title_alignment: 'left',
			neve_meta_author_avatar: metaSidebar.avatarDefaultState
				? 'on'
				: 'off',
			neve_meta_reading_time: 'off',
			neve_post_elements_order: JSON.stringify([
				'title',
				'meta',
				'thumbnail',
				'content',
				'tags',
				'comments',
				'post-navigation',
			]),
			neve_meta_disable_header: 'off',
			neve_meta_disable_footer: 'off',
			neve_meta_disable_title: 'off',
		};

		this.defaultSortables = JSON.stringify([
			'title',
			'meta',
			'thumbnail',
			'content',
			'tags',
			'comments',
			'post-navigation',
		]);

		this.updateValues = this.updateValues.bind(this);
		this.resetAll = this.resetAll.bind(this);
		this.updateBlockWidth = this.updateBlockWidth.bind(this);
	}

	componentDidUpdate() {
		const metaData = select('core/editor').getEditedPostAttribute('meta');

		const omitEmpty = (obj) => {
			Object.keys(obj)
				.filter((k) => '' === obj[k] || 0 === obj[k])
				.forEach((k) => delete obj[k]);
			return obj;
		};

		const result = {
			...omitEmpty(this.defaultState),
			...omitEmpty(metaData),
		};

		// Do not use any keys that are not in the sidebar for meta.
		for (const k in result) {
			if (!Object.keys(this.defaultState).includes(k)) {
				delete result[k];
			}
		}

		this.updateBlockWidth();
	}

	updateValues(id, value) {
		this.props.setMetaValue(id, value);
	}

	resetAll() {
		const allMeta = { ...this.props.allMeta };
		const emptiedMeta = {};

		Object.keys(this.defaultState).map((control) => {
			let emptyValue = '';
			if ('neve_meta_content_width' === control) {
				emptyValue = 0;
			}
			emptiedMeta[control] = emptyValue;
			return control;
		});

		// Don't send meta that wasn't there already.
		for (const k in emptiedMeta) {
			if (!Object.keys(allMeta).includes(k)) {
				delete emptiedMeta[k];
			}
		}

		// Merge old meta with the empty meta.
		this.props.setAllMetas({
			...allMeta,
			...emptiedMeta,
		});
	}

	updateBlockWidth() {
		const isCustomContentWidth = this.props.metaValue(
			'neve_meta_enable_content_width'
		);
		let containerType = this.props.metaValue('neve_meta_container');
		if ('default' === containerType || '' === containerType) {
			containerType =
				metaSidebar.actions.neve_meta_content_width.container;
		}

		const contentWidth = this.props.metaValue('neve_meta_content_width');
		const contentWidthDefault =
			metaSidebar.actions.neve_meta_content_width.content;
		let blockWidthDefault = contentWidthDefault + '%';
		let blocKWidth = contentWidth + '%';
		if ('contained' === containerType) {
			blockWidthDefault =
				Math.round(
					(contentWidthDefault / 100) *
						metaSidebar.actions.neve_meta_content_width.editor
				) + 'px';
			blocKWidth =
				Math.round(
					(contentWidth / 100) *
						metaSidebar.actions.neve_meta_content_width.editor
				) + 'px';
		}

		if (
			document.contains(document.getElementById('neve-meta-editor-style'))
		) {
			document.getElementById('neve-meta-editor-style').remove();
		}
		const css =
			'.wp-block:not([data-align="full"]) { max-width: ' +
			('on' === isCustomContentWidth ? blocKWidth : blockWidthDefault) +
			'; }';

		const head = document.head;
		const style = document.createElement('style');
		style.setAttribute('id', 'neve-meta-editor-style');
		style.innerHTML = css;
		head.appendChild(style);
	}

	renderPageLayoutGroup() {
		const template =
			select('core/editor').getEditedPostAttribute('template');
		if ('elementor_header_footer' === template) {
			return false;
		}

		return (
			<div className="nv-option-category">
				<PanelBody
					title={
						`${metaSidebar.postTypeLabel} ` + __('Layout', 'neve')
					}
					intialOpen={true}
				>
					<BaseControl
						id="neve_meta_sidebar"
						label={__('Sidebar', 'neve')}
						className="neve-meta-control neve-meta-radio-image neve_meta_sidebar"
					>
						<RadioControl
							selected={
								this.props.metaValue('neve_meta_sidebar') ||
								'default'
							}
							options={[
								{
									label: (
										<>
											<img
												alt={__('Inherit', 'neve')}
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABXCAYAAAC9UeOHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN6SURBVHgB7ZrfThpREMZn1SgUWiwkFi6gtol3mnjhi/QJmj5C36SP1gsvTGir0Rb/Baop20UL3fJtugaH3QXKzlLj90s2G5Rlc37MmTNnFqfreW/9weCDiLMujxjHkSPx/TdO13UPfV82hUDKxyXKuMf6kpB7UIiCQhQUoqAQBYUoKERBIQoKUVCIgkIUFKKgEAWFKChEQSEKClFQiIJCFBSioBAFhSgoREEhCgpRUIiCQhQrsgAGg4F0Om3peZ54wwOvwerqqiwvL8uzUkmKxafB66zJVEi325Xzs9PgHMXt7W1wvr6+Ds7lclleVGuZinF+dF1fjEEEQMTl5aX8C9VqNRBjDX4jYi4E3/rR4ZdgasxDsViUzVevgyllBYSYJlVExudPzbllAEwzfFaYb6wwFdL69vUuL6QBxGLqWWImBKtIp9OZ6Zq1tTVZWUnO88hDcUk5DcyEnJ+dyazs7OzI9vb2xPdZRonJsovoSJoqiIJCoTD2dyy3GxsbsrW1Jc1mM/Z6RAgOJNq0MRHyPWGq1Ot1aTQakgSkXFxc3NUjUUD6gxESt6ogR0BGu92W09PxsK/ValKpVOTk5CRRBnCN8kjqQkZLcU34jUJG1IARGZBxfHwsk8CUxH3SrktSF5JUJ4QluOu6kf8fzRvIMyjdIe7m5ib2XmkLyXS3iwFggP1+f+J7MVAk19JwoxdHmjVOSKabOyRKHCHhShMVMblcLjjHRQewKONTj5Bpd6aQgZoDURAFkivo9Xoy771mIfUICXsaSbkklBFWpXt7e2PvwYqEaIqLkHw+bxIhJlMGDZ6kWmQ0hyCnRMmDiKTVJjcUYoGJkHK5kigEg93f35fd3d0gSg4ODmRWqkb9ERMhqDdwJG3CkEixzE7azEXxfLgcW3XRzJbdaTpcyBGtVktmpWrYPTMTggixaPtZ91hNCzP0QlFtpgVk4DMtMa9U642XqURKFjJAJpUqBoIwR2Nn1nIb10GqxVY/ikweQ4yCtuI0YgpDAaXSejDlLDvto2TyGCIO7+9TO8/7eVeYYeD5/JMgGhbx1G6hQv5HzJ/LPEQoREEhCgpRUIiCQhQUoqAQBYUoKERBIQoKUVCIgkIUFKKgEAWFKChEQSEKClFQiIJCFBSioBAFhSgoREEhCgi5EhLg+3K15P/23/viHMkjBzL6v/x3fwDAqWHdPm8hRQAAAABJRU5ErkJggg=="
											/>
											<span className="option-label">
												{__('Inherit', 'neve')}
											</span>
										</>
									),
									value: 'default',
								},
								{
									label: (
										<>
											<img
												alt={__('None', 'neve')}
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABYCAYAAACjxTpsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFISURBVHgB7dWxSsNgGEbht6UEgnGpg3HrUGf1DrxTL0yFutXBToFAsK3WoYtnMIVgW84zZwiHl/8btW07i/bKslxMPtfrp2T0GP1ot9vZOPrFKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKGCSnpqmyevLc07JRVVlPr/98/cuBfReSvVd/e7+IefMpQCjAKMAowBPMnApwJMMXAowCjAKMArwJAOXAjzJwKUAowCjAKMATzJwKcCTDFwKMAowCuj9pnRdl9XqI0OYTq9SFEX+20FR3pfLDKGqLk8zyu6nr+s6QziGIDsHRanrm5wzH1pgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBQw2WzyNhpnEe19AbO4NutQ2DJ9AAAAAElFTkSuQmCC"
											/>
											<span className="option-label">
												{__('None', 'neve')}
											</span>
										</>
									),
									value: 'full-width',
								},
								{
									label: (
										<>
											<img
												alt={__('Left', 'neve')}
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABXCAYAAABSk4i5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFDSURBVHgB7dUtT8NQFIfxM0ouYkWwUBLMMEMAiu/v+A6AQLH5+jVr9qL3iCZNTrPl+emrnuSe/+zrb7uPET6fd3FN7uv57CZ0xijAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjgNhL8/nzH1B6bJprmadDblChd18XU+r4f/DYlytv7R0ytqqrBb1OilFLiknhogVGAUYCTDJxk4CQDJxl4aIFRgFGAkwycZOAkAycZeGiBUYBRgJMMnGTgJAMnGXhogVFAyvdp2zbGOH2/uq4jS0qUzfo/xpgfg6xWr5ElJcrDYhFjlHIXmVKiLJcvcUk8tMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAo4ABQ0jKnFSWXOgAAAABJRU5ErkJggg=="
											/>
											<span className="option-label">
												{__('Left', 'neve')}
											</span>
										</>
									),
									value: 'left',
								},
								{
									label: (
										<>
											<img
												alt={__('Right', 'neve')}
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABXCAYAAAC5pDO6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgB7dlBSsNQFEbhWyORSCDYFajYgboH9z9zDerAOrMYCQSCmo498MqjCW3PB9nAIbn/IIv489V+/8QReX4/jxxPq4vFWehfhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgHJ/zLbto2315eY2/XNbVRVFfu200/evu9jbsMwxBSSw9R1HfcPjzG3oihiCju9MWVZxqnw+ALDAMMA5xo418C5Bs418PgCwwDDAOcaONfAuQbONfD4AsMAwwDnGjjXwLkGzjXw+ALDgORPqeu67ZOjaZrJbkSu5DCbzWd8rNeRo7xbbY/4IUgOU1WXcbVcRo5DeVtGyWHGz2B8ToXHFxgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgG/AIdeUYQlOqQ4AAAAABJRU5ErkJggg=="
											/>
											<span className="option-label">
												{__('Right', 'neve')}
											</span>
										</>
									),
									value: 'right',
								},
							]}
							onChange={(value) => {
								this.updateValues('neve_meta_sidebar', value);
								if (value === 'left' || value === 'right') {
									this.updateValues(
										'neve_meta_content_width',
										this.defaultState
											.neve_meta_content_width
									);
								}
							}}
						/>
					</BaseControl>

					<BaseControl
						label={__('Container', 'neve')}
						id="neve_meta_container"
						className="neve-meta-control neve-meta-button-group neve_meta_container"
					>
						<ButtonGroup>
							<Button
								isPrimary={
									'default' ===
									(this.props.metaValue(
										'neve_meta_container'
									) || 'default')
								}
								isSecondary={
									'default' !==
									(this.props.metaValue(
										'neve_meta_container'
									) || 'default')
								}
								onClick={() => {
									this.updateValues(
										'neve_meta_container',
										'default'
									);
								}}
							>
								{' '}
								{__('Default', 'neve')}{' '}
							</Button>
							<Button
								isPrimary={
									'contained' ===
									this.props.metaValue('neve_meta_container')
								}
								isSecondary={
									'contained' !==
									this.props.metaValue('neve_meta_container')
								}
								onClick={() => {
									this.updateValues(
										'neve_meta_container',
										'contained'
									);
								}}
							>
								{' '}
								{__('Contained', 'neve')}{' '}
							</Button>
							<Button
								isPrimary={
									'full-width' ===
									this.props.metaValue('neve_meta_container')
								}
								isSecondary={
									'full-width' !==
									this.props.metaValue('neve_meta_container')
								}
								onClick={() => {
									this.updateValues(
										'neve_meta_container',
										'full-width'
									);
								}}
							>
								{' '}
								{__('Full Width', 'neve')}{' '}
							</Button>
						</ButtonGroup>
					</BaseControl>

					<BaseControl
						id="neve_meta_enable_content_width"
						className="neve-meta-control neve-meta-checkbox neve_meta_enable_content_width"
					>
						<ToggleControl
							label={__('Custom Content Width (%)', 'neve')}
							checked={
								'on' ===
								this.props.metaValue(
									'neve_meta_enable_content_width'
								)
							}
							onChange={(value) => {
								this.updateValues(
									'neve_meta_enable_content_width',
									value ? 'on' : 'off'
								);
								this.updateValues(
									'neve_meta_content_width',
									this.props.metaValue(
										'neve_meta_content_width'
									) || 70
								);
							}}
						/>
					</BaseControl>

					{'on' ===
					this.props.metaValue('neve_meta_enable_content_width') ? (
						<BaseControl
							id="neve_meta_content_width"
							className="neve-meta-control neve-meta-range neve_meta_content_width"
						>
							<RangeControl
								value={this.props.metaValue(
									'neve_meta_content_width'
								)}
								onChange={(value) => {
									this.updateValues(
										'neve_meta_content_width',
										value
									);
								}}
								min={0}
								max={100}
								step="1"
							/>
							{this.props.metaValue('neve_meta_content_width') &&
								this.props.metaValue(
									'neve_meta_content_width'
								) > 80 &&
								(this.props.metaValue('neve_meta_sidebar') ===
									'left' ||
									this.props.metaValue(
										'neve_meta_sidebar'
									) === 'right') && (
									<Notice isDismissible={false}>
										<small>
											{__(
												'Note: Setting the content width over 80% might affect the sidebar width. Sidebar will ultimately disappear at 95%.',
												'neve'
											)}
										</small>
									</Notice>
								)}
						</BaseControl>
					) : (
						''
					)}
				</PanelBody>
			</div>
		);
	}

	renderPageTitleGroup() {
		const template =
			select('core/editor').getEditedPostAttribute('template');
		if ('elementor_header_footer' === template) {
			return false;
		}
		const showMetaElements = JSON.parse(
			this.props.metaValue('neve_post_elements_order') ||
				this.defaultSortables
		).includes('meta');
		const postType = select('core/editor').getCurrentPostType();
		return (
			<div className="nv-option-category">
				<PanelBody
					title={
						`${metaSidebar.postTypeLabel} ` + __('Title', 'neve')
					}
					intialOpen={true}
				>
					<BaseControl
						label={__('Title alignment', 'neve')}
						id="neve_meta_title_alignment"
						className="neve-meta-control neve-meta-button-group neve_meta_title_alignment"
					>
						<ButtonGroup>
							<Button
								icon={alignLeftIcon}
								className="nv-align-left"
								isPrimary={
									'left' ===
									(this.props.metaValue(
										'neve_meta_title_alignment'
									) || 'left')
								}
								isSecondary={
									'left' !==
									(this.props.metaValue(
										'neve_meta_title_alignment'
									) || 'left')
								}
								onClick={() => {
									this.updateValues(
										'neve_meta_title_alignment',
										'left'
									);
								}}
							/>
							<Button
								icon={alignCenterIcon}
								className="nv-align-center"
								isPrimary={
									'center' ===
									this.props.metaValue(
										'neve_meta_title_alignment'
									)
								}
								isSecondary={
									'center' !==
									this.props.metaValue(
										'neve_meta_title_alignment'
									)
								}
								onClick={() => {
									this.updateValues(
										'neve_meta_title_alignment',
										'center'
									);
								}}
							/>
							<Button
								icon={alignRightIcon}
								className="nv-align-right"
								isPrimary={
									'right' ===
									this.props.metaValue(
										'neve_meta_title_alignment'
									)
								}
								isSecondary={
									'right' !==
									this.props.metaValue(
										'neve_meta_title_alignment'
									)
								}
								onClick={() => {
									this.updateValues(
										'neve_meta_title_alignment',
										'right'
									);
								}}
							/>
						</ButtonGroup>
					</BaseControl>

					{showMetaElements && 'page' !== postType ? (
						<BaseControl
							id="neve_meta_author_avatar"
							className="neve-meta-control neve-meta-checkbox neve_meta_author_avatar"
						>
							<ToggleControl
								label={__('Author Avatar', 'neve')}
								checked={
									this.props.metaValue(
										'neve_meta_author_avatar'
									)
										? this.props.metaValue(
												'neve_meta_author_avatar'
										  ) === 'on'
										: metaSidebar.avatarDefaultState
								}
								onChange={(value) => {
									this.updateValues(
										'neve_meta_author_avatar',
										value ? 'on' : 'off'
									);
								}}
							/>
						</BaseControl>
					) : (
						''
					)}
					{metaSidebar.enable_pro &&
					showMetaElements &&
					('post' === postType ||
						(metaSidebar.supported_types &&
							metaSidebar.supported_types.includes(postType))) ? (
						<BaseControl
							id="neve_meta_reading_time"
							className="neve-meta-control neve-meta-checkbox neve_meta_reading_time"
						>
							<ToggleControl
								label={__('Reading Time', 'neve')}
								checked={
									'on' ===
									this.props.metaValue(
										'neve_meta_reading_time'
									)
								}
								onChange={(value) => {
									this.updateValues(
										'neve_meta_reading_time',
										value ? 'on' : 'off'
									);
								}}
							/>
						</BaseControl>
					) : (
						''
					)}
				</PanelBody>
			</div>
		);
	}

	renderElementsGroup() {
		const metaElements = metaSidebar.isCoverLayout
			? {
					content: __('Content', 'neve'),
					tags: __('Tags', 'neve'),
					comments: __('Comments', 'neve'),
					'post-navigation': __('Post Navigation', 'neve'),
			  }
			: {
					title: __('Post Title', 'neve'),
					meta: __('Post Meta', 'neve'),
					thumbnail: __('Featured Image', 'neve'),
					content: __('Content', 'neve'),
					tags: __('Tags', 'neve'),
					comments: __('Comments', 'neve'),
					'post-navigation': __('Post Navigation', 'neve'),
			  };

		const elements = metaElements;

		if (metaSidebar.enable_pro) {
			elements['author-biography'] = __('Author Biography', 'neve');
			elements['related-posts'] = __('Related Posts', 'neve');
			elements['sharing-icons'] = __('Sharing Icons', 'neve');
		}

		const template =
			select('core/editor').getEditedPostAttribute('template');
		const postType = select('core/editor').getCurrentPostType();
		const orderingValue =
			select('core/editor').getEditedPostAttribute('meta')
				.neve_post_elements_order || metaSidebar.elementsDefaultOrder;

		const maybeNormalizeValue = (val) => {
			const enabledItems = val
				.filter((element) => {
					return elements.hasOwnProperty(element);
				})
				.map((element) => {
					return { id: element, visible: true };
				});

			const disabledItems = Object.keys(metaElements)
				.filter((componentSlug) => !val.includes(componentSlug))
				.map((id) => ({ id, visible: false }));

			return [...enabledItems, ...disabledItems];
		};
		return (
			<div className="nv-option-category">
				<PanelBody title={__('Elements', 'neve')} intialOpen={true}>
					{'elementor_header_footer' !== template &&
					'page' !== postType ? (
						<BaseControl
							id="neve_post_elements_order"
							className="neve-meta-control neve-meta-sortable"
						>
							<SortableItems
								stateUpdate={this.updateValues}
								id="neve_post_elements_order"
								elements={metaElements}
								value={maybeNormalizeValue(
									maybeParseJson(orderingValue)
								)}
							/>
						</BaseControl>
					) : (
						''
					)}

					<BaseControl
						id="neve_meta_disable_header"
						className="neve-meta-control neve-meta-checkbox neve_meta_disable_header"
					>
						<ToggleControl
							label={__('Disable Header', 'neve')}
							checked={
								'on' ===
								this.props.metaValue('neve_meta_disable_header')
							}
							onChange={(value) => {
								this.updateValues(
									'neve_meta_disable_header',
									value ? 'on' : 'off'
								);
							}}
						/>
					</BaseControl>

					<BaseControl
						id="neve_meta_disable_footer"
						className="neve-meta-control neve-meta-checkbox neve_meta_disable_footer"
					>
						<ToggleControl
							label={__('Disable Footer', 'neve')}
							checked={
								'on' ===
								this.props.metaValue('neve_meta_disable_footer')
							}
							onChange={(value) => {
								this.updateValues(
									'neve_meta_disable_footer',
									value ? 'on' : 'off'
								);
							}}
						/>
					</BaseControl>

					{'elementor_header_footer' !== template &&
					'page' === postType ? (
						<BaseControl
							id="neve_meta_disable_title"
							className="neve-meta-control neve-meta-checkbox neve_meta_disable_title"
						>
							<ToggleControl
								label={__('Disable Title', 'neve')}
								checked={
									'on' ===
									this.props.metaValue(
										'neve_meta_disable_title'
									)
								}
								onChange={(value) => {
									this.updateValues(
										'neve_meta_disable_title',
										value ? 'on' : 'off'
									);
								}}
							/>
						</BaseControl>
					) : (
						''
					)}
				</PanelBody>
			</div>
		);
	}

	renderResetButton() {
		return (
			<BaseControl
				label={__('Reset all options to default', 'neve')}
				id="neve_reset_all"
				className="nv-reset-all components-panel__body is-opened"
			>
				<Button
					icon="image-rotate"
					className="nv-reset-meta"
					onClick={() => {
						this.resetAll();
					}}
					label={__('Return to customizer settings', 'neve')}
					showTooltip={true}
				/>
			</BaseControl>
		);
	}

	render() {
		return (
			<>
				{this.renderPageLayoutGroup()}
				{this.renderPageTitleGroup()}
				{this.renderElementsGroup()}
				{this.renderResetButton()}
			</>
		);
	}
}

export default compose([
	withDispatch((dispatch) => {
		return {
			setMetaValue: (id, value) => {
				dispatch('core/editor').editPost({ meta: { [id]: value } });
			},
			setAllMetas: (value) => {
				dispatch('core/editor').editPost({ meta: value });
			},
		};
	}),
	withSelect((selectHandler) => {
		return {
			metaValue: (id) => {
				return selectHandler('core/editor').getEditedPostAttribute(
					'meta'
				)[id];
			},
			allMeta:
				selectHandler('core/editor').getEditedPostAttribute('meta'),
		};
	}),
])(MetaFieldsManager);
