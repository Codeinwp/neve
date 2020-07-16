<?php
/**
 * Page settings metabox.
 *
 * @package Neve
 */

namespace Neve\Admin\Metabox;

/**
 * Class Metabox
 *
 * @package Neve\Admin\Metabox
 */
class Main extends Controls_Base {
	/**
	 * Add controls.
	 */
	public function add_controls() {
		$this->add_layout_controls();
		$this->add_control( new Controls\Separator( 'neve_meta_separator', array( 'priority' => 20 ) ) );
		$this->add_content_toggles();
		$this->add_control( new Controls\Separator( 'neve_meta_separator', array( 'priority' => 45 ) ) );
		$this->add_content_width();
	}

	/**
	 * Add layout controls.
	 */
	private function add_layout_controls() {
		$this->add_control(
			new Controls\Radio(
				'neve_meta_container',
				array(
					'default' => 'default',
					'choices' => array(
						'default'    => __( 'Customizer Setting', 'neve' ),
						'contained'  => __( 'Contained', 'neve' ),
						'full-width' => __( 'Full Width', 'neve' ),
					),
					'icons'   => array(
						'default'    => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAYAAABeUaiAAAACPUlEQVR4nO3dSY7aQABAURLlNNz/KvR1iHqBFBGwy6Y+g/q9pfFQtr6NqV70r/P5fD7AZL9dUArCIiEsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEsIi8afY6dfX13/Ljsfj3XXvfbb0+egxbq23Z7s9Y1xb79Z2a+O93n7N6Poj49/kPNnpdLq5w63Ll7bbu69H1lna9/dnI+dxvc7IePeOaXQfe/e1ZupX4dKd+7185A579THu7X/W+GeOaabZ5zctrJGTry/Oo8dYO4eli7/02TPCeDcf9/L+yifHK3xqlMnLe+06rne58Jdxrb2gjxrZdtYL+eyAPzKsw8KvnZ/2lbP1fJe+ymf62LD+NesJMWsslzHUT6u943vGcUyQvqFn3hzVO+u0sEYGOGu6obJ2Dj/x191uU2fFdk5ezppUfeUE6Z5lj056vvME6fR3rHt3/Z75oa0TobOeJrf2/4wn1eWYW37pbfkT0Np6M5/I/tk4CS/vJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhMV8h8PhLyY1TZyw90ShAAAAAElFTkSuQmCC',
						'contained'  => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAQMAAABknzrDAAAABlBMVEX////V1dXUdjOkAAAAPUlEQVRIx2NgGAUkAcb////Y/+d/+P8AdcQoc8vhH/X/5P+j2kG+GA3CCgrwi43aMWrHqB2jdowEO4YpAACyKSE0IzIuBgAAAABJRU5ErkJggg==',
						'full-width' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAYAAABeUaiAAAABeklEQVR4nO3aUWrCABBF0bR0Ndn/WtxO/C+ItJM7hXLOvwbkMjzFj+u6rgNu9ukDpSAsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEl+v3vTxeGSf+HmetzzrJ+8zeeb31/Kei0VCWCSERcJfk0m4WCSEReKWnxu2vvYX7/ObZ/Gei0VCWCSERcLPDSRcLBLCIiEsEn/ytxn+j1e/8blYJHwrJOFikRAWCeOdEeOdVcY7CReLhLBIGO+MGO+sMt5JuFgkhEXCeGfEeGeV8U7CxSIhLBLGOyPGO6uMdxIuFglhkTDeGTHeWWW8k3CxSAiLhPHOiPHOKuOdhItFQlgkjHdGjHdWGe8kXCwSwiJhvDNivLPKeCfhYpEQFgnjnRHjnVXGOwkXi4SwSBjvjBjvrDLeSbhYJIRFwnhnxHhnlfFOwsUiISwSxjsjxjurjHcSLhYJYZEQFglhkRAWCWGREBYJYZEQFglhkRAWCWGREBb3O47jCYpgf6PRIsLJAAAAAElFTkSuQmCC',
					),
					'label'   => __( 'Container', 'neve' ),
				)
			)
		);
		$this->add_control(
			new Controls\Radio(
				'neve_meta_sidebar',
				array(
					'default'  => ( $this->is_new_page() || $this->is_checkout() ) ? 'full-width' : 'default',
					'choices'  => array(
						'default'    => __( 'Inherit', 'neve' ),
						'left'       => __( 'Left', 'neve' ),
						'right'      => __( 'Right', 'neve' ),
						'full-width' => __( 'None', 'neve' ),
					),
					'icons'    => array(
						'default'    => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABXCAYAAAC9UeOHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN6SURBVHgB7ZrfThpREMZn1SgUWiwkFi6gtol3mnjhi/QJmj5C36SP1gsvTGir0Rb/Baop20UL3fJtugaH3QXKzlLj90s2G5Rlc37MmTNnFqfreW/9weCDiLMujxjHkSPx/TdO13UPfV82hUDKxyXKuMf6kpB7UIiCQhQUoqAQBYUoKERBIQoKUVCIgkIUFKKgEAWFKChEQSEKClFQiIJCFBSioBAFhSgoREEhCgpRUIiCQhQrsgAGg4F0Om3peZ54wwOvwerqqiwvL8uzUkmKxafB66zJVEi325Xzs9PgHMXt7W1wvr6+Ds7lclleVGuZinF+dF1fjEEEQMTl5aX8C9VqNRBjDX4jYi4E3/rR4ZdgasxDsViUzVevgyllBYSYJlVExudPzbllAEwzfFaYb6wwFdL69vUuL6QBxGLqWWImBKtIp9OZ6Zq1tTVZWUnO88hDcUk5DcyEnJ+dyazs7OzI9vb2xPdZRonJsovoSJoqiIJCoTD2dyy3GxsbsrW1Jc1mM/Z6RAgOJNq0MRHyPWGq1Ot1aTQakgSkXFxc3NUjUUD6gxESt6ogR0BGu92W09PxsK/ValKpVOTk5CRRBnCN8kjqQkZLcU34jUJG1IARGZBxfHwsk8CUxH3SrktSF5JUJ4QluOu6kf8fzRvIMyjdIe7m5ib2XmkLyXS3iwFggP1+f+J7MVAk19JwoxdHmjVOSKabOyRKHCHhShMVMblcLjjHRQewKONTj5Bpd6aQgZoDURAFkivo9Xoy771mIfUICXsaSbkklBFWpXt7e2PvwYqEaIqLkHw+bxIhJlMGDZ6kWmQ0hyCnRMmDiKTVJjcUYoGJkHK5kigEg93f35fd3d0gSg4ODmRWqkb9ERMhqDdwJG3CkEixzE7azEXxfLgcW3XRzJbdaTpcyBGtVktmpWrYPTMTggixaPtZ91hNCzP0QlFtpgVk4DMtMa9U642XqURKFjJAJpUqBoIwR2Nn1nIb10GqxVY/ikweQ4yCtuI0YgpDAaXSejDlLDvto2TyGCIO7+9TO8/7eVeYYeD5/JMgGhbx1G6hQv5HzJ/LPEQoREEhCgpRUIiCQhQUoqAQBYUoKERBIQoKUVCIgkIUFKKgEAWFKChEQSEKClFQiIJCFBSioBAFhSgoREEhCgi5EhLg+3K15P/23/viHMkjBzL6v/x3fwDAqWHdPm8hRQAAAABJRU5ErkJggg==',
						'full-width' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABYCAYAAACjxTpsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFISURBVHgB7dWxSsNgGEbht6UEgnGpg3HrUGf1DrxTL0yFutXBToFAsK3WoYtnMIVgW84zZwiHl/8btW07i/bKslxMPtfrp2T0GP1ot9vZOPrFKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKGCSnpqmyevLc07JRVVlPr/98/cuBfReSvVd/e7+IefMpQCjAKMAowBPMnApwJMMXAowCjAKMArwJAOXAjzJwKUAowCjAKMATzJwKcCTDFwKMAowCuj9pnRdl9XqI0OYTq9SFEX+20FR3pfLDKGqLk8zyu6nr+s6QziGIDsHRanrm5wzH1pgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBQw2WzyNhpnEe19AbO4NutQ2DJ9AAAAAElFTkSuQmCC',
						'left'       => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABXCAYAAABSk4i5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFDSURBVHgB7dUtT8NQFIfxM0ouYkWwUBLMMEMAiu/v+A6AQLH5+jVr9qL3iCZNTrPl+emrnuSe/+zrb7uPET6fd3FN7uv57CZ0xijAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjgNhL8/nzH1B6bJprmadDblChd18XU+r4f/DYlytv7R0ytqqrBb1OilFLiknhogVGAUYCTDJxk4CQDJxl4aIFRgFGAkwycZOAkAycZeGiBUYBRgJMMnGTgJAMnGXhogVFAyvdp2zbGOH2/uq4jS0qUzfo/xpgfg6xWr5ElJcrDYhFjlHIXmVKiLJcvcUk8tMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAo4ABQ0jKnFSWXOgAAAABJRU5ErkJggg==',
						'right'      => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABXCAYAAAC5pDO6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgB7dlBSsNQFEbhWyORSCDYFajYgboH9z9zDerAOrMYCQSCmo498MqjCW3PB9nAIbn/IIv489V+/8QReX4/jxxPq4vFWehfhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgHJ/zLbto2315eY2/XNbVRVFfu200/evu9jbsMwxBSSw9R1HfcPjzG3oihiCju9MWVZxqnw+ALDAMMA5xo418C5Bs418PgCwwDDAOcaONfAuQbONfD4AsMAwwDnGjjXwLkGzjXw+ALDgORPqeu67ZOjaZrJbkSu5DCbzWd8rNeRo7xbbY/4IUgOU1WXcbVcRo5DeVtGyWHGz2B8ToXHFxgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgG/AIdeUYQlOqQ4AAAAABJRU5ErkJggg==',
					),
					'label'    => __( 'Sidebar', 'neve' ),
					'priority' => 15,
				)
			)
		);
	}

	/**
	 * Add content toggles.
	 */
	private function add_content_toggles() {
		$content_controls = array(
			'neve_meta_disable_header'         => array(
				'default'     => 'off',
				'label'       => __( 'Components', 'neve' ),
				'input_label' => __( 'Disable Header', 'neve' ),
				'priority'    => 25,
			),
			'neve_meta_disable_title'          => array(
				'default'         => 'off',
				'input_label'     => __( 'Disable Title', 'neve' ),
				'active_callback' => array( $this, 'hide_on_single_product' ),
				'priority'        => 30,
			),
			'neve_meta_disable_featured_image' => array(
				'default'         => 'off',
				'input_label'     => __( 'Disable Featured Image', 'neve' ),
				'active_callback' => array( $this, 'hide_on_single_page_and_product' ),
				'priority'        => 35,
			),
			'neve_meta_disable_footer'         => array(
				'default'     => 'off',
				'input_label' => __( 'Disable Footer', 'neve' ),
				'priority'    => 40,
			),
		);

		$default_control_args = array(
			'default'         => 'off',
			'label'           => '',
			'input_label'     => '',
			'active_callback' => '__return_true',
			'priority'        => 10,
		);

		foreach ( $content_controls as $control_id => $args ) {
			$args = wp_parse_args( $args, $default_control_args );

			$this->add_control(
				new Controls\Checkbox(
					$control_id,
					array(
						'default'         => $args['default'],
						'label'           => $args['label'],
						'input_label'     => $args['input_label'],
						'active_callback' => $args['active_callback'],
						'priority'        => $args['priority'],
					)
				)
			);
		}
	}

	/**
	 * Add content width control.
	 */
	private function add_content_width() {
		$this->add_control(
			new Controls\Checkbox(
				'neve_meta_enable_content_width',
				array(
					'default'     => ( $this->is_new_page() || $this->is_checkout() ) ? 'on' : 'off',
					'label'       => __( 'Content Width', 'neve' ) . ' (%)',
					'input_label' => __( 'Enable Individual Content Width', 'neve' ),
					'priority'    => 50,
				)
			)
		);
		$this->add_control(
			new Controls\Range(
				'neve_meta_content_width',
				array(
					'default'    => ( $this->is_new_page() || $this->is_checkout() ) ? 100 : 70,
					'min'        => 50,
					'max'        => 100,
					'hidden'     => $this->hide_content_width(),
					'priority'   => 55,
					'depends_on' => 'neve_meta_enable_content_width',
					'container'  => 'neve_meta_container',
				)
			)
		);
	}

	/**
	 * Hide content width.
	 *
	 * @return bool
	 */
	public function hide_content_width() {
		if ( $this->is_new_page() ) {
			return false;
		}

		if ( ! isset( $_GET['post'] ) ) {
			return true;
		}

		$meta = get_post_meta( (int) $_GET['post'], 'neve_meta_enable_content_width', true );

		if ( empty( $meta ) && $this->is_checkout() ) {
			return false;
		}

		if ( empty( $meta ) || $meta === 'off' ) {
			return true;
		}

		return false;
	}

	/**
	 * Callback to hide on single product edit page.
	 *
	 * @return bool
	 */
	public function hide_on_single_product() {
		if ( isset( $_GET['post_type'] ) && $_GET['post_type'] === 'product' ) {
			return false;
		}

		if ( ! isset( $_GET['post'] ) ) {
			return true;
		}

		$post_type = get_post_type( (int) $_GET['post'] );

		if ( $post_type !== 'product' ) {
			return true;
		}

		return false;
	}

	/**
	 * Callback to hide on single product/page edit page
	 *
	 * @return bool
	 */
	public function hide_on_single_page_and_product() {
		if ( isset( $_GET['post_type'] ) && ( $_GET['post_type'] === 'page' || $_GET['post_type'] === 'product' ) ) {
			return false;
		}

		if ( ! isset( $_GET['post'] ) ) {
			return true;
		}

		$post_type = get_post_type( (int) $_GET['post'] );

		if ( $post_type !== 'page' && $post_type !== 'product' ) {
			return true;
		}

		return false;
	}

	/**
	 * Check if we're adding a new post of type `page`.
	 *
	 * @return bool
	 */
	private function is_new_page() {
		global $pagenow;

		if ( $pagenow !== 'post-new.php' ) {
			return false;
		}

		if ( ! isset( $_GET['post_type'] ) ) {
			return false;
		}
		if ( ( $_GET['post_type'] !== 'page' ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Check if is checkout.
	 */
	private function is_checkout() {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return false;
		}
		if ( ! isset( $_GET['post'] ) ) {
			return false;
		}
		if ( $_GET['post'] === get_option( 'woocommerce_checkout_page_id' ) ) {
			return true;
		}

		return false;
	}
}
