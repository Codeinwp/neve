<?php
/**
 * Tests for the archive excerpt trim.
 *
 * The trim used to run through `wp_trim_words()`, which strips every tag, so a
 * hand-written excerpt lost its links and formatting on blog and archive pages.
 * `Excerpt::trim_markup()` is a pure string function, so the tokenizer cases
 * live here rather than in the Playwright specs.
 *
 * @package neve
 */

/**
 * Class TestNeveExcerptHtml
 */
class TestNeveExcerptHtml extends WP_UnitTestCase {

	/**
	 * The read more marker the partial passes to the trim.
	 *
	 * @var string
	 */
	private $more = ' [&hellip;]';

	/**
	 * Trim a text through the partial's private helper.
	 *
	 * @param string $text      Text to trim.
	 * @param int    $num_words Number of words to keep.
	 *
	 * @return string
	 */
	private function trim( $text, $num_words ) {
		$excerpt = new \Neve\Views\Partials\Excerpt();
		$method  = new ReflectionMethod( $excerpt, 'trim_words_keep_html' );
		$method->setAccessible( true );

		return $method->invoke( $excerpt, $text, $num_words, $this->more );
	}

	/**
	 * Trim a text with the locale counting characters, as CJK locales do.
	 *
	 * @param string $text  Text to trim.
	 * @param int    $limit Number of characters to keep.
	 *
	 * @return string
	 */
	private function trim_by_characters( $text, $limit ) {
		global $wp_locale;

		$previous                   = $wp_locale->word_count_type;
		$wp_locale->word_count_type = 'characters_including_spaces';

		$output = $this->trim( $text, $limit );

		$wp_locale->word_count_type = $previous;

		return $output;
	}

	/**
	 * A link before the cut keeps both its markup and its text.
	 */
	public function test_keeps_link_when_cut_falls_after_it() {
		$text = 'Read the <a href="https://example.com">full announcement</a> and then a long tail of words';

		$this->assertSame(
			'Read the <a href="https://example.com">full announcement</a> and then a long' . $this->more,
			$this->trim( $text, 8 )
		);
	}

	/**
	 * A cut inside a link closes it and leaves the marker outside.
	 */
	public function test_closes_inline_tag_left_open_by_the_cut() {
		$text = 'Read the <a href="https://example.com">full release announcement</a> tail words';

		$this->assertSame(
			'Read the <a href="https://example.com">full release</a>' . $this->more,
			$this->trim( $text, 4 )
		);
	}

	/**
	 * A text shorter than the limit is returned untouched, marker included.
	 */
	public function test_returns_short_text_unchanged() {
		$text = 'Short <strong>bold</strong> excerpt';

		$this->assertSame( $text, $this->trim( $text, 25 ) );
		$this->assertSame( $text, $this->trim( $text, 3 ) );
	}

	/**
	 * A tag opened right at the cut must not leave an empty element behind.
	 */
	public function test_drops_element_opened_at_the_cut() {
		$this->assertSame(
			'<p>one</p><p>two</p>' . $this->more,
			$this->trim( '<p>one</p><p>two</p><p>three</p>', 2 )
		);
	}

	/**
	 * The same, for a list: an empty `li` would render as a stray bullet.
	 */
	public function test_drops_list_item_opened_at_the_cut() {
		$this->assertSame(
			'<ul><li>a b</li></ul>' . $this->more,
			$this->trim( '<ul><li>a b</li><li>c d</li></ul>', 2 )
		);
	}

	/**
	 * Nested tags are closed at the cut.
	 */
	public function test_closes_nested_tags() {
		$this->assertSame(
			'One <em>two <strong>three</strong></em>' . $this->more,
			$this->trim( 'One <em>two <strong>three</strong> four</em> five six', 3 )
		);
	}

	/**
	 * A tag nested in itself is unwound rather than left doubled.
	 */
	public function test_unwinds_a_tag_nested_in_itself() {
		$this->assertSame(
			'Nested <b>one </b><b>two</b>' . $this->more,
			$this->trim( 'Nested <b>one <b>two</b> three</b> four five', 3 )
		);
	}

	/**
	 * Markup the author never closed is closed at the cut anyway.
	 */
	public function test_closes_unbalanced_author_markup() {
		$this->assertSame(
			'Unclosed <a href="#">link never closed</a>' . $this->more,
			$this->trim( 'Unclosed <a href="#">link never closed and more words', 4 )
		);
	}

	/**
	 * A closing tag with nothing to close is dropped.
	 */
	public function test_drops_orphan_closing_tag() {
		$this->assertSame(
			'Stray  closing tag here' . $this->more,
			$this->trim( 'Stray </b> closing tag here and more', 4 )
		);
	}

	/**
	 * Void elements are neither counted as words nor closed.
	 */
	public function test_leaves_void_elements_alone() {
		$this->assertSame(
			'Image <img src="a.png" /> after<br /> text words' . $this->more,
			$this->trim( 'Image <img src="a.png" /> after<br> text words more', 4 )
		);
	}

	/**
	 * A hyphenated custom element is a tag, not three words of text.
	 */
	public function test_treats_custom_elements_as_markup() {
		$this->assertSame(
			'Custom <my-widget>element text</my-widget>' . $this->more,
			$this->trim( 'Custom <my-widget>element text</my-widget> here more words', 3 )
		);

		$this->assertSame(
			'Cut <my-component>inside</my-component>' . $this->more,
			$this->trim( 'Cut <my-component>inside element</my-component> tail', 2 )
		);
	}

	/**
	 * A tag name carrying a colon is markup too, and is closed at the cut.
	 */
	public function test_treats_namespaced_elements_as_markup() {
		$this->assertSame(
			'Vector <svg:use href="#i">icon label</svg:use>' . $this->more,
			$this->trim( 'Vector <svg:use href="#i">icon label</svg:use> here more words', 3 )
		);

		$this->assertSame(
			'Cut <svg:use href="#i">inside</svg:use>' . $this->more,
			$this->trim( 'Cut <svg:use href="#i">inside icon</svg:use> tail', 2 )
		);
	}

	/**
	 * Comments carry no words, so their contents must not spend the budget.
	 */
	public function test_does_not_count_comments_as_words() {
		$this->assertSame(
			'<!-- note --><b>bold text</b> more' . $this->more,
			$this->trim( '<!-- note --><b>bold text</b> more words here', 3 )
		);
	}

	/**
	 * Whitespace between kept words is preserved rather than normalised.
	 */
	public function test_preserves_whitespace_between_kept_words() {
		$this->assertSame(
			"Line\nbreaks  and\ttabs" . $this->more,
			$this->trim( "Line\nbreaks  and\ttabs here plus more", 4 )
		);
	}

	/**
	 * A zero length keeps nothing.
	 */
	public function test_zero_length_returns_empty_string() {
		$this->assertSame( '', $this->trim( 'a <b>b</b> c', 0 ) );
		$this->assertSame( '', $this->trim( '', 8 ) );
	}

	/**
	 * Text without markup is trimmed exactly as `wp_trim_words()` would.
	 */
	public function test_matches_core_for_text_without_markup() {
		$text = 'one two three four five six';

		foreach ( array( 1, 3, 5, 6, 25 ) as $limit ) {
			$this->assertSame(
				wp_trim_words( $text, $limit, $this->more ),
				$this->trim( $text, $limit ),
				'Diverged from wp_trim_words() at length ' . $limit
			);
		}
	}

	/**
	 * Character locales keep their markup rather than falling back to core.
	 */
	public function test_keeps_link_in_character_counting_locales() {
		$text = '你好世界<a href="https://example.com">链接文字</a>更多内容';

		$this->assertSame(
			'你好世界<a href="https://example.com">链接</a>' . $this->more,
			$this->trim_by_characters( $text, 6 )
		);
	}

	/**
	 * Character locales spend the budget per character, whitespace included.
	 */
	public function test_matches_core_in_character_counting_locales() {
		$cases = array(
			array( 'ab cd efgh', 5 ),
			array( 'aa bb cc dd', 4 ),
			array( 'a b c d e f', 3 ),
			array( '你好世界链接文字', 6 ),
		);

		foreach ( $cases as list( $text, $limit ) ) {
			global $wp_locale;

			$previous                   = $wp_locale->word_count_type;
			$wp_locale->word_count_type = 'characters_including_spaces';
			$core                       = wp_trim_words( $text, $limit, $this->more );
			$wp_locale->word_count_type = $previous;

			$this->assertSame(
				$core,
				$this->trim_by_characters( $text, $limit ),
				'Diverged from wp_trim_words() for "' . $text . '" at length ' . $limit
			);
		}
	}

	/**
	 * A text within the character budget is returned untouched.
	 */
	public function test_character_locales_return_short_text_unchanged() {
		$text = '短<strong>文</strong>字';

		$this->assertSame( $text, $this->trim_by_characters( $text, 25 ) );
	}

	/**
	 * The `wp_trim_words` filter runs on the result, as it does in core.
	 */
	public function test_applies_the_wp_trim_words_filter() {
		$calls = array();

		$capture = function ( $trimmed, $num_words, $more, $original ) use ( &$calls ) {
			$calls[] = compact( 'num_words', 'more', 'original' );

			return strtoupper( $trimmed );
		};

		add_filter( 'wp_trim_words', $capture, 10, 4 );

		$text = 'one <b>two</b> three four five';

		// Both the trimmed and the untrimmed return paths go through the filter.
		$this->assertSame( 'ONE <B>TWO</B> THREE' . strtoupper( $this->more ), $this->trim( $text, 3 ) );
		$this->assertSame( strtoupper( $text ), $this->trim( $text, 25 ) );

		remove_filter( 'wp_trim_words', $capture, 10 );

		$this->assertCount( 2, $calls );
		$this->assertSame( 3, $calls[0]['num_words'] );
		$this->assertSame( $this->more, $calls[0]['more'] );
		$this->assertSame( $text, $calls[0]['original'] );
	}

	/**
	 * The rendered archive excerpt keeps the link of a hand-written excerpt.
	 */
	public function test_rendered_excerpt_keeps_the_link() {
		$post_id = self::factory()->post->create(
			array(
				'post_content' => 'Body content, not used by this assertion.',
				'post_excerpt' => 'Read the <a href="https://example.com">full announcement</a> and then a long tail of words to drop',
			)
		);

		$GLOBALS['post'] = get_post( $post_id );
		setup_postdata( $GLOBALS['post'] );
		set_theme_mod( 'neve_post_excerpt_length', 8 );

		$partial = new \Neve\Views\Partials\Excerpt();

		ob_start();
		$partial->render_post_excerpt( 'index', $post_id );
		$output = (string) ob_get_clean();

		remove_theme_mod( 'neve_post_excerpt_length' );
		wp_reset_postdata();

		$this->assertStringContainsString( '<a href="https://example.com">full announcement</a>', $output );
		$this->assertStringNotContainsString( 'to drop', $output );
	}
}
