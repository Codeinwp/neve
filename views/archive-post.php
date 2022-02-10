<?php
/**
 * Archive Post view template.
 *
 * @package Neve
 */

$featured_post_classes = apply_filters( 'neve_featured_post_classes', '' );
?>
<article id="<?php echo esc_attr( $args['post_id'] ); ?>" class="<?php echo esc_attr( $args['post_class'] ); ?>">
	<div class="article-content-col">
		<div class="content <?php echo esc_attr( $featured_post_classes ); ?>">
			<?php echo $args['content'];  // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</div>
	</div>
</article>
