<?php
/**
 * Template used for component rendering wrapper.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG;

use HFG\Core\Components\Copyright;

$content = component_setting( Copyright::CONTENT_ID );
?>
<div class="component-wrap">
	<?php echo wp_kses_post( balanceTags( parse_dynamic_tags( $content ), true ) ); ?>
</div>

