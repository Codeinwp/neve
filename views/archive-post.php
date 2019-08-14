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
			<?php
			echo neve_custom_kses_escape( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				$args['content'],
				array(
					'time' => array(
						'class'    => true,
						'datetime' => true,
						'content'  => true,
					),
				)
			);
			?>
		</div>
	</div>
</article>
