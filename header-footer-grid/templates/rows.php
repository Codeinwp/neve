<?php
/**
 * Template for JS component for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */
?>
<script type="text/html" id="tmpl-hfg--cb-panel">
	<div class="hfg--cp-rows">

		<# if ( ! _.isUndefined( data.rows.top ) ) { #>
		<div class="hfg--row-top hfg--cb-row" data-id="{{ data.id }}_top">
			<a class="hfg--cb-row-settings" title="{{ data.rows.top }}" data-id="top" href="#"></a>
			<div class="hfg--row-inner">
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
			<a class="hfg--cb-row-settings" title="{{ data.rows.main }}" data-id="main" href="#"></a>

			<div class="hfg--row-inner">
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
			<a class="hfg--cb-row-settings" title="{{ data.rows.bottom }}" data-id="bottom" href="#"></a>
			<div class="hfg--row-inner">
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
	<div class="hfg--cp-sidebar">
		<div class="hfg--row-bottom hfg--cb-row" data-id="{{ data.id }}_sidebar">
			<a class="hfg--cb-row-settings" title="{{ data.rows.sidebar }}" data-id="sidebar" href="#"></a>
			<div class="hfg--row-inner">
				<div class="hfg--cb-items hfg--sidebar-items" data-id="sidebar"></div>
			</div>
		</div>
		<div>
			<# } #>
			<# } #>

</script>
