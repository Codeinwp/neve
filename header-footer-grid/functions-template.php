<?php
/**
 * Global scoped functions for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG;

use HFG\Core\Builder\Abstract_Builder;
use HFG\Core\Settings\Manager;
use HFG\Core\Magic_Tags;

/**
 * Return registered builders.
 *
 * @param string $builder_name The builder id. (header|footer|page_header etc.).
 *
 * @return Abstract_Builder instance, such as HFG\Core\Builder\Header|Neve_Pro\Modules\Header_Footer_Grid\Builder\Page_Header|HFG\Core\Builder\Footer
 */
function get_builder( $builder_name = '' ) {
	return Main::get_instance()->get_builder( $builder_name );
}

/**
 * Render a specified builder.
 *
 * @param string $builder_name The builder id.
 */
function render_builder( $builder_name = '' ) {
	get_builder( $builder_name )->render();
}

/**
 * Render a specific component.
 *
 * @param string $builder_name The builder id.
 * @param null   $device       The device.
 */
function render_components( $builder_name = '', $device = null ) {
	get_builder( $builder_name )->render_components( $device );
}

/**
 * Returns the current component.
 *
 * @param string $builder_name The builder id.
 * @param null   $component_id The component id.
 *
 * @return Core\Components\Abstract_Component
 */
function current_component( $builder_name = '', $component_id = null ) {
	$builder = get_builder( $builder_name );

	return $builder->get_component( $component_id );
}

/**
 * Returns the current device.
 *
 * @param string $builder_name The builder id.
 *
 * @return string|null
 */
function current_device( $builder_name = '' ) {
	return get_builder( $builder_name )->get_current_device();
}

/**
 * Returns the current row.
 *
 * @param string $builder_name The builder id.
 *
 * @return string|null
 */
function current_row( $builder_name = '' ) {
	return get_builder( $builder_name )->get_current_row_index();
}

/**
 * Get setting value of a certain component.
 *
 * @param string $id           Id of component setting.
 * @param null   $default      Default value, otherwise use the one when the setting was defined.
 * @param null   $component_id Component id.
 *
 * @return mixed Component settings.
 */
function component_setting( $id, $default = null, $component_id = null ) {
	if ( null === $component_id ) {
		$component_id = current_component()->get_id();
	}

	return Manager::get_instance()->get( $component_id . '_' . $id, $default );
}

/**
 * Get setting value of a certain component.
 *
 * @param string $id      Id of component setting.
 * @param null   $default Default value, otherwise use the one when the setting was defined.
 *
 * @return mixed Setting value.
 */
function setting( $id, $default = null ) {
	return Manager::get_instance()->get( $id, $default );
}

/**
 * Get setting value of a certain row.
 *
 * @param string $id      Row id.
 * @param null   $default Default value, otherwise use the one when the setting was defined.
 *
 * @return mixed Row settings.
 */
function row_setting( $id, $default = null ) {

	$control_id = get_builder()->get_property( 'control_id' );
	$row_index  = current_row();

	return Manager::get_instance()->get( $control_id . '_' . $row_index . '_' . $id, $default );
}

/**
 * Utility method to return media url.
 *
 * @param mixed      $value The media reference.
 * @param mixed|null $size  Optional. The size desired.
 *
 * @return string|false
 */
function get_media( $value, $size = 'full' ) {

	if ( empty( $value ) ) {
		return false;
	}

	$media = false;
	if ( is_numeric( $value ) ) {
		$media = media_from_id( $value, $size );
	} elseif ( is_string( $value ) ) {
		$media = media_from_url( $value, $size );
	} elseif ( is_array( $value ) ) {
		$media = media_from_array( $value, $size );
	}

	return $media;
}

/**
 * Retrieve media URL from post id.
 *
 * @param int    $id   Post ID.
 * @param string $size Media size.
 *
 * @return false|string
 */
function media_from_id( $id, $size = 'full' ) {
	$image_attributes = wp_get_attachment_image_src( $id, $size );
	if ( ! $image_attributes ) {
		return false;
	}

	return $image_attributes[0];
}

/**
 * Retrieve media from attachment url.
 *
 * @param string $url  The attachment url.
 * @param string $size The media size.
 *
 * @return string|false
 */
function media_from_url( $url, $size = 'full' ) {
	$img_id = function_exists( 'wpcom_vip_attachment_url_to_postid' ) ? wpcom_vip_attachment_url_to_postid( $url ) : attachment_url_to_postid( $url ); //phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.attachment_url_to_postid_attachment_url_to_postid
	if ( $img_id ) {
		$image_attributes = wp_get_attachment_image_src( $img_id, $size );
		if ( ! $image_attributes ) {
			return false;
		}

		return $image_attributes[0];
	}

	return $url;
}

/**
 * Retrieve media from an array.
 *
 * @param array  $array Array for media.
 * @param string $size  The media size.
 *
 * @return false|string
 */
function media_from_array( $array = array(), $size = 'full' ) {
	$value = wp_parse_args(
		$array,
		array(
			'id'   => '',
			'url'  => '',
			'mime' => '',
		)
	);

	if ( empty( $array['id'] ) && empty( $array['url'] ) ) {
		return false;
	}

	$media_url = '';

	if ( strpos( $array['mime'], 'image/' ) !== false ) {
		$image_attributes = wp_get_attachment_image_src( $array['id'], $size );
		if ( $image_attributes ) {
			$media_url = $image_attributes[0];
		}
	} else {
		$media_url = wp_get_attachment_url( $array['id'] );
	}

	if ( ! $media_url ) {
		$media_url = $value['url'];
		if ( $media_url ) {
			$img_id = function_exists( 'wpcom_vip_attachment_url_to_postid' ) ? wpcom_vip_attachment_url_to_postid( $media_url ) : attachment_url_to_postid( $media_url ); //phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.attachment_url_to_postid_attachment_url_to_postid
			if ( $img_id ) {
				return wp_get_attachment_url( $img_id );
			}
		}
	}

	return $media_url;
}

/**
 * Replace magic tags.
 *
 * @param string $string the string to parse for magic tags.
 *
 * @return string
 */
function parse_dynamic_tags( $string ) {
	return Magic_Tags::get_instance()->do_magic_tags( $string );
}


