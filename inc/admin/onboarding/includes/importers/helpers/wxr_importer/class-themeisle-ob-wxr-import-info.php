<?php
/**
 * WXR Import Information class model.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      12/07/2018
 *
 * @package    themeisle-onboarding
 * @soundtrack BomBom (feat. The Teaching) - Macklemore & Ryan Lewis
 */


/**
 * Class Themeisle_OB_WXR_Import_Info
 */
class Themeisle_OB_WXR_Import_Info {
	/**
	 * Home Url
	 *
	 * @var string
	 */
	public $home;

	/**
	 * Site url.
	 *
	 * @var string
	 */
	public $siteurl;

	/**
	 * The title.
	 *
	 * @var string
	 */
	public $title;

	/**
	 * Site users.
	 *
	 * @var array
	 */
	public $users = array();

	/**
	 * Import post count.
	 *
	 * @var int
	 */
	public $post_count = 0;

	/**
	 * Media count (attachments).
	 *
	 * @var int
	 */
	public $media_count = 0;

	/**
	 * Comments count.
	 *
	 * @var int
	 */
	public $comment_count = 0;

	/**
	 * Terms count.
	 *
	 * @var int
	 */
	public $term_count = 0;

	/**
	 * Generator.
	 *
	 * @var string
	 */
	public $generator = '';

	/**
	 * Version.
	 *
	 * @var string
	 */
	public $version;
}
