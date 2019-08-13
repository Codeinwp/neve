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

use HFG\Core\Components\CustomHtml;

$content = component_setting( CustomHtml::CONTENT_ID );
$content = apply_filters( 'neve_top_bar_content', $content );

global $allowedposttags;
$tags_input_included = array_merge(
	$allowedposttags,
	array(
		'input' => array(
			'accept'       => true,
			'autocomplete' => true,
			'autofocus'    => true,
			'checked'      => true,
			'class'        => true,
			'disabled'     => true,
			'id'           => true,
			'height'       => true,
			'min'          => true,
			'max'          => true,
			'minlenght'    => true,
			'maxlength'    => true,
			'name'         => true,
			'pattern'      => true,
			'placeholder'  => true,
			'readony'      => true,
			'required'     => true,
			'size'         => true,
			'src'          => true,
			'step'         => true,
			'type'         => true,
			'value'        => true,
			'width'        => true,
		),
	)
);

?>
<div class="nv-html-content">
	<?php echo wp_kses( balanceTags( $content, true ), $tags_input_included ); ?>
</div>
