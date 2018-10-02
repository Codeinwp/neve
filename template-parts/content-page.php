<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      23/08/2018
 *
 * @package Neve
 */

do_action( 'neve_before_content', 'single-page' ); ?>
	<div class="nv-content-wrap">
		<?php the_content(); ?>
		<?php do_action( 'neve_do_pagination', 'single' ); ?>
	</div>
<?php
do_action( 'neve_after_content', 'single-page' );

