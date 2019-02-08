<script type="text/html" id="tmpl-customify--cb-panel">
	<div class="customify--cp-rows">

		<# if ( ! _.isUndefined( data.rows.top ) ) { #>
		<div class="customify--row-top customify--cb-row" data-id="{{ data.id }}_top">
			<a class="customify--cb-row-settings" title="{{ data.rows.top }}" data-id="top" href="#"></a>
			<div class="customify--row-inner">
				<div class="row--grid">
					<?php
					for ( $i = 1; $i <= 12; $i ++ ) {
						echo '<div></div>';
					}
					?>
				</div>
				<div class="customify--cb-items grid-stack gridster" data-id="top"></div>
			</div>
		</div>
		<# } #>

		<# if ( ! _.isUndefined( data.rows.main ) ) { #>
		<div class="customify--row-main customify--cb-row" data-id="{{ data.id }}_main">
			<a class="customify--cb-row-settings" title="{{ data.rows.main }}" data-id="main" href="#"></a>

			<div class="customify--row-inner">
				<div class="row--grid">
					<?php
					for ( $i = 1; $i <= 12; $i ++ ) {
						echo '<div></div>';
					}
					?>
				</div>
				<div class="customify--cb-items grid-stack gridster" data-id="main"></div>
			</div>
		</div>
		<# } #>


		<# if ( ! _.isUndefined( data.rows.bottom ) ) { #>
		<div class="customify--row-bottom customify--cb-row" data-id="{{ data.id }}_bottom">
			<a class="customify--cb-row-settings" title="{{ data.rows.bottom }}" data-id="bottom" href="#"></a>
			<div class="customify--row-inner">
				<div class="row--grid">
					<?php
					for ( $i = 1; $i <= 12; $i ++ ) {
						echo '<div></div>';
					}
					?>
				</div>
				<div class="customify--cb-items grid-stack gridster" data-id="bottom"></div>
			</div>
		</div>
		<# } #>
	</div>


	<# if ( data.device != 'desktop' ) { #>
	<# if ( ! _.isUndefined( data.rows.sidebar ) ) { #>
	<div class="customify--cp-sidebar">
		<div class="customify--row-bottom customify--cb-row" data-id="{{ data.id }}_sidebar">
			<a class="customify--cb-row-settings" title="{{ data.rows.sidebar }}" data-id="sidebar" href="#"></a>
			<div class="customify--row-inner">
				<div class="customify--cb-items customify--sidebar-items" data-id="sidebar"></div>
			</div>
		</div>
		<div>
			<# } #>
			<# } #>

</script>
