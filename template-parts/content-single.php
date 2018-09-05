<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve
 */

do_action( 'neve_before_content', 'single-post' );
the_content();
do_action( 'neve_after_content', 'single-post' );
