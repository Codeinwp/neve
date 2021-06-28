<?php
namespace Neve\Core;

class Inline_Css {

	private static $_instance = null;

	private static $queued_styles = [];

	public static function get_instance() {
		if ( self::$_instance == null ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	public function add_to_queue( $id, $style ) {
		self::$queued_styles[$id] = $style;
	}

	public function get_by_id( $id ) {
		return self::$queued_styles[ $id ] ?? '';
	}

	public function get_styles() {
		$css = '';
		foreach ( self::$queued_styles as $inline_style ) {
			$css .= $inline_style;
		}
		return $css;
	}

}
