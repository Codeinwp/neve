<?php
/**
 * The upsell customize control for Scroll To Top extends the WP_Customize_Control class.
 *
 * @package    Neve\Customizer\Controls
 * @since      3.8.0
 * @copyright  Copyright (c) 2017, Themeisle
 * @link       http://themeisle.com/
 * @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace Neve\Customizer\Controls\Upsells;

use Neve\Core\Dynamic_Css;

/**
 * Scroll to top upsell customize control.
 */
class Scroll_To_Top_Control extends \WP_Customize_Control {
	/**
	 * The type of customize control being rendered.
	 *
	 * @since 2.3.10
	 * @var   string
	 */
	public $type = 'neve-scroll-to-top-upsell';

	/**
	 * Underscore JS template to handle the control's output.
	 *
	 * @return void
	 */
	public function content_template() {

		$css        = <<<CSS
.upsell-control-spacing {
				margin-bottom: 10px;
			}
			.upsell-accordion-header:hover {
				cursor: pointer;
				color: #0073aa;
				background: #f3f3f5;
				border-left-color: #0073aa;
			}
			.upsell-accordion-content {
				position: relative;
				height: 0;
				overflow: hidden;
				transition: height 0.3s ease;
				margin: 0 -12px;
				padding: 10px 12px 0;
			}

			.upsell-accordion-content.expanded:before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: transparent;
				z-index: 999;
				pointer-events: none;
			}

			.upsell-accordion-content.expanded {
				filter: grayscale(0.2) opacity(0.8);
				height: auto;
			}

			.customize-control-neve-scroll-to-top-upsell .components-range-control__root {
				-webkit-tap-highlight-color: transparent;
				-webkit-box-align: center;
				align-items: center;
				display: flex;
				-webkit-box-pack: start;
				justify-content: flex-start;
				padding: 0px;
				position: relative;
				touch-action: none;
				width: 100%;
				min-height: 30px;
				gap: 16px;
			}
			.customize-control-neve-scroll-to-top-upsell .components-range-control__wrapper {
				display: block;
				flex: 1 1 0%;
				position: relative;
				width: 100%;
				color: rgb(0, 124, 186);
				height: 30px;
				min-height: 30px;
			}
			.customize-control-neve-scroll-to-top-upsell .components-range-control__track_bg {
				background-color: rgb(221, 221, 221);
				left: 0px;
				pointer-events: none;
				right: 0px;
				display: block;
				height: 4px;
				position: absolute;
				margin-top: 13px;
				top: 0px;
				border-radius: 4px;
			}
			.customize-control-neve-scroll-to-top-upsell .components-range-control__track {
				border-radius: 4px;
				height: 4px;
				pointer-events: none;
				display: block;
				position: absolute;
				margin-top: 13px;
				top: 0px;
				background: currentcolor;
			}
			.customize-control-neve-scroll-to-top-upsell .components-range-control__thumb-wrapper {
				-webkit-box-align: center;
				align-items: center;
				display: flex;
				height: 12px;
				-webkit-box-pack: center;
				justify-content: center;
				margin-top: 9px;
				outline: 0px;
				pointer-events: none;
				position: absolute;
				top: 0px;
				user-select: none;
				width: 12px;
				border-radius: 50%;
				background-color: rgb(0, 124, 186);
				margin-left: -10px;
				transform: translateX(4.5px);
			}
			.customize-control-neve-scroll-to-top-upsell .components-range-control__thumb-wrapper span {
				-webkit-box-align: center;
				align-items: center;
				border-radius: 50%;
				height: 100%;
				outline: 0px;
				position: absolute;
				user-select: none;
				width: 100%;
				background-color: rgb(0, 124, 186);
			}
CSS;
		$css        = Dynamic_Css::minify_css( $css );
		$global_svg = <<<SVG
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
	<path d="M12 3.3c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8s-4-8.8-8.8-8.8zm6.5 5.5h-2.6C15.4 7.3 14.8 6 14 5c2 .6 3.6 2 4.5 3.8zm.7 3.2c0 .6-.1 1.2-.2 1.8h-2.9c.1-.6.1-1.2.1-1.8s-.1-1.2-.1-1.8H19c.2.6.2 1.2.2 1.8zM12 18.7c-1-.7-1.8-1.9-2.3-3.5h4.6c-.5 1.6-1.3 2.9-2.3 3.5zm-2.6-4.9c-.1-.6-.1-1.1-.1-1.8 0-.6.1-1.2.1-1.8h5.2c.1.6.1 1.1.1 1.8s-.1 1.2-.1 1.8H9.4zM4.8 12c0-.6.1-1.2.2-1.8h2.9c-.1.6-.1 1.2-.1 1.8 0 .6.1 1.2.1 1.8H5c-.2-.6-.2-1.2-.2-1.8zM12 5.3c1 .7 1.8 1.9 2.3 3.5H9.7c.5-1.6 1.3-2.9 2.3-3.5zM10 5c-.8 1-1.4 2.3-1.8 3.8H5.5C6.4 7 8 5.6 10 5zM5.5 15.3h2.6c.4 1.5 1 2.8 1.8 3.7-1.8-.6-3.5-2-4.4-3.7zM14 19c.8-1 1.4-2.2 1.8-3.7h2.6C17.6 17 16 18.4 14 19z"></path>
</svg>
SVG;
		?>
		<style>
			<?php echo $css; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</style>
		<div class="neve-white-background-control upsell-control-spacing">
			<div class="components-base-control components-toggle-control neve-toggle-control">
				<div class="components-base-control__field">
					<div class="components-flex components-h-stack">
						<span class="dashicons dashicons-lock"></span>
						<label class="components-flex-item components-flex-block components-toggle-control__label">Enable Scroll to Top</label>
					</div>
				</div>
			</div>
		</div>
		<div class="upsell-control-spacing">
			<div role="button" class="neve-customizer-heading upsell-accordion-header" onclick="(function () { document.getElementById('neve-stt-general-content')?.classList?.toggle('expanded'); })();">
				<span class="accordion-heading">General</span>
				<span class="accordion-expand-button"></span>
			</div>
			<div id="neve-stt-general-content" class="upsell-accordion-content">
				<div class="upsell-control-spacing">
					<label class="customize-control-title">Choose Side</label>
					<select disabled>
						<option value="left">Left</option>
						<option value="right" selected="selected">Right</option>
					</select>
				</div>
				<div class="upsell-control-spacing">
					<label class="customize-control-title">Type</label>
					<select disabled>
						<option value="icon" selected="selected">Icon</option>
						<option value="image">Image</option>
					</select>
				</div>
				<div class="neve-white-background-control upsell-control-spacing">
					<span class="customize-control-title">Scroll to Top Icon</span>
					<div class="neve-radio-icons"><span>
					<button type="button" aria-label="Icon Style 1" class="components-button active has-icon" disabled>
						<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15" focusable="false">
							<rect width="15" height="15" fill="none"></rect>
							<path d="M2,8.48l-.65-.65a.71.71,0,0,1,0-1L7,1.14a.72.72,0,0,1,1,0l5.69,5.7a.71.71,0,0,1,0,1L13,8.48a.71.71,0,0,1-1,0L8.67,4.94v8.42a.7.7,0,0,1-.7.7H7a.7.7,0,0,1-.7-.7V4.94L3,8.47a.7.7,0,0,1-1,0Z"></path>
						</svg>
					</button>
				</span>
						<span>
					<button type="button" aria-label="Icon Style 2" class="components-button has-icon" disabled>
						<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15" focusable="false">
							<rect width="15" height="15" fill="none"></rect>
							<path d="M14,12a1,1,0,0,1-.73-.32L7.5,5.47,1.76,11.65a1,1,0,0,1-1.4,0A1,1,0,0,1,.3,10.3l6.47-7a1,1,0,0,1,1.46,0l6.47,7a1,1,0,0,1-.06,1.4A1,1,0,0,1,14,12Z"></path>
						</svg>
					</button>
				</span>
						<span>
					<button type="button" aria-label="Icon Style 3" class="components-button has-icon" disabled>
						<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15" focusable="false">
							<rect width="15" height="15" fill="none"></rect><path d="M14.71,10.3l-6.48-7a1,1,0,0,0-1.46,0l-6.48,7A1,1,0,0,0,1,12H14a1,1,0,0,0,.73-1.68Z"></path>
						</svg>
					</button>
				</span>
						<span>
					<button type="button" aria-label="Icon Style 4" class="components-button has-icon" disabled>
						<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15" focusable="false">
							<rect width="15" height="15" fill="none"></rect>
							<path d="M13,15a1,1,0,0,1-.74-.32L7.5,9.46l-4.76,5.2A1,1,0,1,1,1.26,13.3l5.5-6a1,1,0,0,1,1.48,0l5.5,6a1,1,0,0,1-.06,1.42A1.05,1.05,0,0,1,13,15Z"></path>
							<path d="M13,8a1,1,0,0,1-.74-.33L7.5,2.49,2.74,7.68A1,1,0,0,1,1.26,6.33l5.5-6a1,1,0,0,1,1.48,0l5.5,6A1,1,0,0,1,13,8Z"></path>
						</svg>
					</button>
				</span>
						<span><button type="button" aria-label="Icon Style 5" class="components-button has-icon" disabled>
						<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15" focusable="false">
							<rect width="15" height="15" fill="none"></rect>
							<path d="M2,10.91l-.65-.65a.69.69,0,0,1,0-1L7,3.57a.72.72,0,0,1,1,0l5.69,5.7a.71.71,0,0,1,0,1l-.65.65a.71.71,0,0,1-1,0L8.67,7.37v6.56a.7.7,0,0,1-.7.7H7a.7.7,0,0,1-.7-.7V7.37L3,10.9A.69.69,0,0,1,2,10.91Z"></path>
							<rect x="1" y="0.37" width="13" height="2" rx="0.4"></rect>
						</svg>
					</button>
				</span>
						<span><button type="button" aria-label="Icon Style 6" class="components-button has-icon" disabled>
						<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15" focusable="false">
							<rect width="15" height="15" fill="none"></rect>
							<path d="M7.86,1.93l5.83,10.2a.8.8,0,0,1-1.08,1.1L8,10.65a.83.83,0,0,0-.78,0L2.39,13.36a.79.79,0,0,1-1.1-1L6.45,2A.8.8,0,0,1,7.86,1.93Z"></path>
						</svg>
					</button>
				</span>
					</div>
				</div>
				<div class="upsell-control-spacing">
					<label class="customize-control-title">Label</label>
					<input type="text" value="" disabled>
				</div>

				<div class="neve-white-background-control neve-range-control">
					<div class="neve-control-header">
						<span class="customize-control-title">Offset (px)</span>
					</div>
					<div class="range-wrap">
						<div class="components-base-control components-range-control">
							<div class="components-base-control__field">
								<div class="components-range-control__root">
									<div class="components-range-control__wrapper">
										<span aria-hidden="true" class="components-range-control__track_bg"></span>
										<span aria-hidden="true" class="components-range-control__track" style="width: 0%;"></span>
										<span class="components-range-control__thumb-wrapper" style="left: 0%;">
											<span aria-hidden="true"></span>
										</span>
									</div>
									<div class="components-base-control components-input-control components-range-control__number">
										<div class="components-base-control__field">
											<div class="components-flex">
												<div class="components-input-control__container">
													<input autocomplete="off" inputmode="decimal" max="1000" min="0" step="1" class="components-input-control__input" type="number" value="0" disabled>
													<div aria-hidden="true" class="components-input-control__backdrop"></div>
												</div>
											</div>
										</div>
									</div>
									<button type="button" class="components-button components-range-control__reset is-secondary is-small">Reset</button>
							</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="neve-white-background-control upsell-control-spacing">
			<div class="components-base-control components-toggle-control neve-toggle-control ">
				<div class="components-base-control__field">
					<div class="components-flex components-h-stack">
						<span class="dashicons dashicons-lock"></span>
						<label class="components-flex-item components-flex-block components-toggle-control__label">Hide on mobile</label>
					</div>
				</div>
			</div>
		</div>

		<div class="upsell-control-spacing">
			<div role="button" class="neve-customizer-heading upsell-accordion-header" onclick="(function () { document.getElementById('neve-stt-style-content')?.classList?.toggle('expanded'); })();">
				<span class="accordion-heading">Style</span>
				<span class="accordion-expand-button"></span>
			</div>
			<div id="neve-stt-style-content" class="upsell-accordion-content">
				<div class="neve-white-background-control neve-sizing upsell-control-spacing">
					<div class="neve-control-header">
						<span class="customize-control-title">Padding</span>
						<div class="neve-responsive-control-bar">
							<div class="floating-controls">
								<div role="group" class="components-button-group">
									<button type="button" aria-label="Desktop" class="components-button desktop has-icon">
										<span class="dashicon dashicons dashicons-desktop"></span>
									</button>
									<button type="button" aria-label="Tablet" class="components-button tablet has-icon">
										<span class="dashicon dashicons dashicons-tablet"></span>
									</button>
									<button type="button" aria-label="Mobile" class="components-button mobile has-icon">
										<span class="dashicon dashicons dashicons-smartphone"></span>
									</button>
								</div>
							</div>
						</div>
						<div class="neve-units">
							<button type="button" class="components-button active is-small">px</button>
							<button type="button" class="components-button is-small">em</button>
							<button type="button" class="components-button is-small">rem</button>
						</div>
					</div>
					<div class="neve-responsive-sizing">
						<button type="button" aria-label="Link values" class="components-button link has-icon">
							<span class="dashicon dashicons dashicons-editor-unlink"></span>
						</button><div class="nv-sizing-item">
							<input type="number" class="top-input" min="-300" max="300" step="1" value="8" disabled>
							<label class="label" for="top-input">Top</label>
						</div>
						<div class="nv-sizing-item">
							<input type="number" class="right-input" min="-300" max="300" step="1" value="10" disabled>
							<label class="label" for="right-input">Right</label>
						</div>
						<div class="nv-sizing-item">
							<input type="number" class="bottom-input" min="-300" max="300" step="1" value="8" disabled>
							<label class="label" for="bottom-input">Bottom</label>
						</div><div class="nv-sizing-item">
							<input type="number" class="left-input" min="-300" max="300" step="1" value="10" disabled>
							<label class="label" for="left-input">Left</label>
						</div>
					</div>
				</div>
				<div class="neve-white-background-control neve-range-control upsell-control-spacing">
					<div class="neve-control-header"><span class="customize-control-title">Icon Size</span>
						<div class="neve-responsive-control-bar">
							<div class="floating-controls">
								<div role="group" class="components-button-group">
									<button type="button" aria-label="Desktop" class="components-button desktop has-icon">
										<span class="dashicon dashicons dashicons-desktop"></span>
									</button>
									<button type="button" aria-label="Tablet" class="components-button tablet has-icon">
										<span class="dashicon dashicons dashicons-tablet"></span>
									</button>
									<button type="button" aria-label="Mobile" class="components-button mobile has-icon">
										<span class="dashicon dashicons dashicons-smartphone"></span>
									</button>
								</div>
							</div>
						</div>
						<div class="neve-units">
							<button type="button" class="components-button active is-small">px</button>
							<button type="button" class="components-button is-small">em</button>
							<button type="button" class="components-button is-small">rem</button>
						</div>
					</div>
					<div class="range-wrap">
						<div class="components-base-control components-range-control">
							<div class="components-base-control__field">
								<div class="components-range-control__root">
									<div class="components-range-control__wrapper">
										<span aria-hidden="true" class="components-range-control__track_bg"></span>
										<span aria-hidden="true" class="components-range-control__track" style="width: 16%;"></span>
										<span class="components-range-control__thumb-wrapper" style="left: 16%;">
											<span aria-hidden="true"></span>
										</span>
									</div>
									<div class="components-base-control components-input-control components-range-control__number">
										<div class="components-base-control__field">
											<div class="components-flex">
												<div class="components-input-control__container">
													<input autocomplete="off" inputmode="decimal" max="100" min="0" step="1" class="components-input-control__input" type="number" value="16" disabled>
												</div>
											</div>
										</div>
									</div>
									<span>
										<button type="button" class="components-button components-range-control__reset is-secondary is-small">Reset</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="neve-white-background-control neve-range-control">
					<div class="neve-control-header">
						<span class="customize-control-title">Border Radius</span>
					</div>
					<div class="range-wrap">
						<div class="components-base-control components-range-control">
							<div class="components-base-control__field">
								<div class="components-range-control__root">
									<div class="components-range-control__wrapper">
										<span aria-hidden="true" class="components-range-control__track_bg"></span>
										<span aria-hidden="true" class="components-range-control__track" style="width: 1.5%;"></span>
										<span class="components-range-control__thumb-wrapper" style="left: 1.5%;">
											<span aria-hidden="true"></span>
										</span>
									</div>
									<div class="components-base-control components-input-control components-range-control__number">
										<div class="components-base-control__field">
											<div class="components-flex">
												<div class="components-input-control__container">
													<input autocomplete="off" inputmode="decimal" max="200" min="0" step="1" class="components-input-control__input" type="number" value="3" disabled>
												</div>
											</div>
										</div>
									</div>
									<span>
										<button type="button" class="components-button components-range-control__reset is-secondary is-small">Reset</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="upsell-control-spacing">
			<div role="button" class="neve-customizer-heading upsell-accordion-header" onclick="(function () { document.getElementById('neve-stt-colors-content')?.classList?.toggle('expanded'); })();">
				<span class="accordion-heading">Colors</span>
				<span class="accordion-expand-button"></span>
			</div>

			<div id="neve-stt-colors-content" class="upsell-accordion-content">
				<div class="neve-white-background-control neve-color-control upsell-control-spacing">
					<div class="neve-control-header neve-color-component allows-global">
						<span class="customize-control-title">Color</span>
						<div class="components-dropdown" tabindex="-1">
							<button type="button" aria-expanded="false" aria-label="Global Colors" role="button" class="components-button global-color-picker active">
								<?php echo $global_svg; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							</button>
						</div>
						<div class="components-dropdown" tabindex="-1">
							<button type="button" aria-expanded="false" aria-label="Color" class="components-button is-secondary">
								<span class="color" style="background: var(--nv-text-dark-bg);"></span>
								<span class="gradient"></span>
							</button>
						</div>
					</div>
				</div>
				<div class="neve-white-background-control neve-color-control upsell-control-spacing">
					<div class="neve-control-header neve-color-component allows-global">
						<span class="customize-control-title">Hover Color</span>
						<div class="components-dropdown" tabindex="-1">
							<button type="button" aria-expanded="false" aria-label="Global Colors" role="button" class="components-button global-color-picker active">
								<?php echo $global_svg; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							</button>
						</div>
						<div class="components-dropdown" tabindex="-1">
							<button type="button" aria-expanded="false" aria-label="Color" class="components-button is-secondary">
								<span class="color" style="background: var(--nv-text-dark-bg);"></span>
								<span class="gradient"></span>
							</button>
						</div>
					</div>
				</div>
				<div class="neve-white-background-control neve-color-control upsell-control-spacing">
					<div class="neve-control-header neve-color-component allows-global">
						<span class="customize-control-title">Background Color</span>
						<div class="components-dropdown" tabindex="-1">
							<button type="button" aria-expanded="false" aria-label="Global Colors" role="button" class="components-button global-color-picker active">
								<?php echo $global_svg; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							</button>
						</div>
						<div class="components-dropdown" tabindex="-1">
							<button type="button" aria-expanded="false" aria-label="Color" class="components-button is-secondary">
								<span class="color" style="background: var(--nv-primary-accent);"></span>
								<span class="gradient"></span>
							</button>
						</div>
					</div>
				</div>
				<div class="neve-white-background-control neve-color-control upsell-control-spacing">
					<div class="neve-control-header neve-color-component allows-global">
						<span class="customize-control-title">Background Hover Color</span>
						<div class="components-dropdown" tabindex="-1">
							<button type="button" aria-expanded="false" aria-label="Global Colors" role="button" class="components-button global-color-picker active">
								<?php echo $global_svg; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							</button>
						</div>
						<div class="components-dropdown" tabindex="-1">
							<button type="button" aria-expanded="false" aria-label="Color" class="components-button is-secondary">
								<span class="color" style="background: var(--nv-primary-accent);"></span>
								<span class="gradient"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}
