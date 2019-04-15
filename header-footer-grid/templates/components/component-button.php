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

use HFG\Core\Components\Button;

$text        = component_setting( Button::TEXT_ID );
$button_link = component_setting( Button::LINK_ID );
?>
<div class="component-wrap">
	<a href="<?php echo esc_url( $button_link ); ?>"
		class="button button-primary"><?php echo wp_kses_post( $text ); ?></a>
</div>
