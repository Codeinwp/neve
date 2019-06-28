<?php
/**
 * Template for JS component for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.1
 * @package HFG
 */

namespace HFG;
?>
<script type="text/html" id="tmpl-hfg--cb-panel">
	<div class="hfg--cp-rows">

		<# if ( ! _.isUndefined( data.rows.top ) ) { #>
		<div class="hfg--row-top hfg--cb-row" data-id="{{ data.id }}_top">
			<a class="hfg--cb-row-settings" title="{{ data.rows.top.title || data.rows.top }}" data-id="top" href="#"></a>
			<div class="hfg--row-inner">
				<div class="row--title">{{ data.rows.top.title || data.rows.top }}</div>
				<div class="row--grid">
					<?php
					for ( $i = 1; $i <= 12; $i ++ ) {
						echo '<div></div>';
					}
					?>
				</div>
				<div class="hfg--cb-items grid-stack gridster" data-id="top"></div>
			</div>
		</div>
		<# } #>

		<# if ( ! _.isUndefined( data.rows.main ) ) { #>
		<div class="hfg--row-main hfg--cb-row" data-id="{{ data.id }}_main">
			<a class="hfg--cb-row-settings" title="{{ data.rows.main.title || data.rows.main }}" data-id="main" href="#"></a>

			<div class="hfg--row-inner">
				<div class="row--title">{{ data.rows.main.title || data.rows.main }}</div>
				<div class="row--grid">
					<?php
					for ( $i = 1; $i <= 12; $i ++ ) {
						echo '<div></div>';
					}
					?>
				</div>
				<div class="hfg--cb-items grid-stack gridster" data-id="main"></div>
			</div>
		</div>
		<# } #>

		<# if ( ! _.isUndefined( data.rows.bottom ) ) { #>
		<div class="hfg--row-bottom hfg--cb-row" data-id="{{ data.id }}_bottom">
			<a class="hfg--cb-row-settings" title="{{ data.rows.bottom.title || data.rows.bottom }}" data-id="bottom" href="#"></a>
			<div class="hfg--row-inner">
				<div class="row--title">{{ data.rows.bottom.title || data.rows.bottom }}</div>
				<div class="row--grid">
					<?php
					for ( $i = 1; $i <= 12; $i ++ ) {
						echo '<div></div>';
					}
					?>
				</div>
				<div class="hfg--cb-items grid-stack gridster" data-id="bottom"></div>
			</div>
		</div>
		<# } #>
	</div>

	<# if ( data.device != 'desktop' ) { #>
	<# if ( ! _.isUndefined( data.rows.sidebar ) ) { #>
	<?php
	$is_active = setting( 'nav-icon_sidebar' );
	$style     = '';
	if ( $is_active ) {
		$style = 'style="display: block;"';
	}
	?>
	<div class="hfg--cp-sidebar" <?php echo ( $style );  // WPCS: XSS ok. ?> >
		<h4><?php echo __( 'Sidebar', 'neve' ); // WPCS: XSS ok. ?></h4>
		<div class="hfg--row-bottom hfg--cb-row" data-id="{{ data.id }}_sidebar">
			<a class="hfg--cb-row-settings" title="{{ data.rows.sidebar.title || data.rows.sidebar }}" data-id="sidebar" href="#"></a>
			<div class="hfg--row-inner">
				<div class="row--title">{{ data.rows.sidebar.title || data.rows.sidebar }}</div>
				<div class="hfg--cb-items hfg--sidebar-items" data-id="sidebar"></div>
			</div>
		</div>
	</div>
			<# } #>
			<# } #>

	<h4 class="hfg--widgets-info"><?php _e( 'Available components', 'neve' ); // WPCS: XSS ok. ?>
		<i class="dashicons dashicons-info"></i>
		<span class="tooltip"><?php _e( 'To activate a component, drag it to one of the upper rows.', 'neve' ); // WPCS: XSS ok. ?></span>
	</h4>
</script>
