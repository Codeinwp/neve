<?php
/**
 * Archive Post view template.
 *
 * @package Neve
 */
?>
<article id="<?php echo esc_attr( $args['post_id'] ); ?>" class="<?php echo esc_attr( $args['post_class'] ); ?>">
	<div class="article-content-col">
		<div class="content">
			<?php echo $args['content'];  // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</div>
	</div>
</article>
