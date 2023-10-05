<?php
/**
 * Changleog Handler
 *
 * Handles parsing for Changelog files.
 *
 * @package Neve\Admin\Dashboard
 */

namespace Neve\Admin\Dashboard;

/**
 * Class Changelog_Handler
 *
 * @package Neve\Admin\Dashboard
 */
class Changelog_Handler {
	/**
	 * Get the parsed changelog.
	 *
	 * @param string $changelog_path the changelog path.
	 *
	 * @return array
	 */
	public function get_changelog( $changelog_path ) {

		if ( ! is_file( $changelog_path ) ) {
			return [];
		}

		if ( ! WP_Filesystem() ) {
			return [];
		}

		return $this->parse_changelog( $changelog_path );
	}

	/**
	 * Parse the changelog file.
	 *
	 * @param string $changelog_path the changelog path.
	 *
	 * @return array
	 */
	private function parse_changelog( $changelog_path ) {
		WP_Filesystem();
		global $wp_filesystem;
		$changelog = $wp_filesystem->get_contents( $changelog_path );
		if ( is_wp_error( $changelog ) ) {
			$changelog = '';
		}
		$changelog       = explode( PHP_EOL, $changelog );
		$releases        = [];
		$release_count   = 0;
		$current_section = ''; // Holds the current section ('Improvements', 'Bug Fixes', etc.)

		foreach ( $changelog as $changelog_line ) {
			if ( strpos( $changelog_line, '**Changes:**' ) !== false || empty( $changelog_line ) ) {
				continue;
			}
			if ( substr( ltrim( $changelog_line ), 0, 3 ) === '###' && ! preg_match( '/###\s?(New Features|Bug Fixes)/', $changelog_line ) ) {
				// Extract version and date
				preg_match( '/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/', $changelog_line, $found_v );
				preg_match( '/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}/', $changelog_line, $found_d );
				if ( isset( $found_v[0] ) && isset( $found_d[0] ) ) {
					$release_count++;
					$releases[ $release_count ] = array(
						'version' => $found_v[0],
						'date'    => $found_d[0],
					);
				}

				$current_section = '';
				continue;
			}

			// Check for the new headers 'New Features', 'Bug Fixes', etc.
			if ( preg_match( '/###\s?(New Features|Bug Fixes)/', $changelog_line, $section_matches ) ) {
				$current_section = strtolower( $section_matches[1] );
				continue;
			}

			// Extracting items based on the new changelog structure
			if ( $current_section === 'bug fixes' ) {
				$changelog_line                        = preg_replace( '/-\s?\*\*(.*?):\*\*/', '', $changelog_line );
				$changelog_line                        = $this->parse_md_and_clean( $changelog_line );
				$releases[ $release_count ]['fixes'][] = $changelog_line;
				continue;
			}

			if ( $current_section === 'new features' ) {
				$changelog_line                           = preg_replace( '/-\s?\*\*(.*?):\*\*/', '', $changelog_line );
				$changelog_line                           = $this->parse_md_and_clean( $changelog_line );
				$releases[ $release_count ]['features'][] = $changelog_line;
				continue;
			}

			// Legacy structure handling for feats and fixes
			if ( preg_match( '/[*|-]?\s?(\[fix]|\[Fix]|fix|Fix)[:]?\s?(\b|(?=\[))/', $changelog_line ) ) {
				$changelog_line                        = preg_replace( '/[*|-]?\s?(\[fix]|\[Fix]|fix|Fix)[:]?\s?(\b|(?=\[))/', '', $changelog_line );
				$releases[ $release_count ]['fixes'][] = $this->parse_md_and_clean( $changelog_line );
				continue;
			}

			if ( preg_match( '/[*|-]?\s?(\[feat]|\[Feat]|feat|Feat)[:]?\s?(\b|(?=\[))/', $changelog_line ) ) {
				$changelog_line                           = preg_replace( '/[*|-]?\s?(\[feat]|\[Feat]|feat|Feat)[:]?\s?(\b|(?=\[))/', '', $changelog_line );
				$releases[ $release_count ]['features'][] = $this->parse_md_and_clean( $changelog_line );
				continue;
			}

			$changelog_line = $this->parse_md_and_clean( $changelog_line );
			if ( empty( $changelog_line ) ) {
				continue;
			}
			if ( ! isset( $releases[ $release_count ]['tweaks'] ) ) {
				$releases[ $release_count ]['tweaks'] = [];
			}
			$releases[ $release_count ]['tweaks'][] = $changelog_line;
		}

		return array_values( $releases );
	}

	/**
	 * Parse markdown links, convert bold markers (**) to <b> tags, and cleanup string.
	 *
	 * @param string $string changelog line.
	 *
	 * @return string
	 */
	private function parse_md_and_clean( $string ) {
		// Drop spaces, starting lines | asterisks.
		$string = trim( $string );
		$string = ltrim( $string, '*' );
		$string = ltrim( $string, '-' );

		// Replace markdown links with <a> tags.
		$string = preg_replace_callback(
			'/\[(.*?)]\((.*?)\)/',
			function ( $matches ) {
				return '<a href="' . $matches[2] . '" target="_blank" rel="noopener"><i class="dashicons dashicons-external"></i>' . $matches[1] . '</a>';
			},
			htmlspecialchars( $string )
		);

		// Convert bold markdown (**text**) to <b>text</b>.
		$string = preg_replace( '/\*\*(.*?)\*\*/', '<b>$1</b>', $string );

		return $string;
	}

}
