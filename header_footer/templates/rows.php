<script type="text/html" id="tmpl-customify--cb-panel-v2">
	<div class="cp-rows-v2 customify--cp-rows">

		<# if ( ! _.isUndefined( data.rows.top ) ) { #>
		<div class="customify--row-top customify--cb-row" data-row-id="top" data-id="{{ data.id }}_top">
			<a class="customify--cb-row-settings" title="{{ data.rows.top }}" data-id="top" href="#"></a>
			<div class="customify--row-inner">

				<div class="col-items-wrapper"><div data-id="left" class="col-items col-left"></div></div>
				<div class="col-items-wrapper"><div data-id="center" class="col-items col-center"></div></div>
				<div class="col-items-wrapper"><div data-id="right" class="col-items col-right"></div></div>

			</div>
		</div>
		<# } #>

		<# if ( ! _.isUndefined( data.rows.main ) ) { #>
		<div class="customify--row-main customify--cb-row" data-row-id="main" data-id="{{ data.id }}_main">
			<a class="customify--cb-row-settings" title="{{ data.rows.main }}" data-id="main" href="#"></a>

			<div class="customify--row-inner">
				
				<div class="col-items-wrapper"><div data-id="left" class="col-items col-left"></div></div>
				<div class="col-items-wrapper"><div data-id="center" class="col-items col-center"></div></div>
				<div class="col-items-wrapper"><div data-id="right" class="col-items col-right"></div></div>
				
			</div>
		</div>
		<# } #>

		<# if ( ! _.isUndefined( data.rows.bottom ) ) { #>
		<div class="customify--row-bottom customify--cb-row" data-row-id="bottom" data-id="{{ data.id }}_bottom">
			<a class="customify--cb-row-settings" title="{{ data.rows.bottom }}" data-id="bottom" href="#"></a>
			<div class="customify--row-inner">

				<div class="col-items-wrapper"><div data-id="left" class="col-items col-left"></div></div>
				<div class="col-items-wrapper"><div data-id="center" class="col-items col-center"></div></div>
				<div class="col-items-wrapper"><div data-id="right" class="col-items col-right"></div></div>

			</div>
		</div>
		<# } #>
	</div>


	<# if ( data.device != 'desktop' ) { #>
		<# if ( ! _.isUndefined( data.rows.sidebar ) ) { #>
		<div class="customify--cp-sidebar">
			<div class="customify--row-sidebar customify--cb-row" data-row-id="sidebar" data-id="{{ data.id }}_sidebar">
				<a class="customify--cb-row-settings" title="{{ data.rows.sidebar }}" data-id="sidebar" href="#"></a>
				<div class="customify--row-inner">

					<div class="col-items-wrapper"><div data-id="sidebar" class="col-items col-sidebar"></div></div>

				</div>
			</div>
			<div>
		<# } #>
	<# } #>

</script>