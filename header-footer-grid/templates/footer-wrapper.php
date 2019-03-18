<?php
/**
 * Template used for header rendering.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG;

use HFG\Core\Builder\Footer as FooterBuilder;

?>
<footer class="site-footer" id="site-footer">
	<?php render_builder( FooterBuilder::BUILDER_NAME ) ?>
</footer>