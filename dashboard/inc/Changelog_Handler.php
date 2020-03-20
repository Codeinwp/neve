<?php

namespace Neve_Dash;

class Changelog_Handler {

	public function get_changelog() {
		echo '<pre>';
		print_r($this->parse_changelog());
		echo '</pre>';
		die();
		return $this->parse_changelog();
	}
	/**
	 * Return the releases changes array.
	 *
	 * @return array $releases - changelog.
	 */
	private function parse_changelog() {
		WP_Filesystem();
		global $wp_filesystem;
		$changelog = $wp_filesystem->get_contents( get_template_directory() . '/CHANGELOG.md' );
		if ( is_wp_error( $changelog ) ) {
			$changelog = '';
		}
		$changelog = explode( PHP_EOL, $changelog );
		$releases  = array();
		foreach ( $changelog as $changelog_line ) {
			if ( strpos( $changelog_line, '**Changes:**' ) !== false || empty( $changelog_line ) ) {
				continue;
			}
			if ( substr( ltrim( $changelog_line ), 0, 3 ) === '###' ) {
				if ( isset( $release ) ) {
					$releases[] = $release;
				}
				$release = array(
					'title'   => substr( $changelog_line, 3 ),
					'changes' => array(),
				);
			} else {
				$release['changes'][] = str_replace( '*', '', $changelog_line );
			}
		}
		return $releases;
	}

}