<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve
 */

do_action( 'neve_before_content', 'single-post' ); ?>
	<div class="nv-content-wrap entry-content">
		<?php the_content(); ?>
		<?php do_action( 'neve_do_pagination', 'single' ); ?>
	</div>
<?php
do_action( 'neve_do_tags' );
do_action( 'neve_after_content', 'single-post' );
