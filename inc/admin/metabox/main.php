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
//		$this->add_content_toggles();
//		$this->add_control( new Controls\Separator( 'neve_meta_separator', array( 'priority' => 45 ) ) );
//		$this->add_content_width();
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
					'icons' => array(
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
						'default'    => __( 'Customizer Setting', 'neve' ),
						'left'       => __( 'Left Sidebar', 'neve' ),
						'right'      => __( 'Right Sidebar', 'neve' ),
						'full-width' => __( 'No Sidebar', 'neve' ),
					),
					'icons' => array(
						'default'    => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAYAAABeUaiAAAACPUlEQVR4nO3dSY7aQABAURLlNNz/KvR1iHqBFBGwy6Y+g/q9pfFQtr6NqV70r/P5fD7AZL9dUArCIiEsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEsIi8afY6dfX13/Ljsfj3XXvfbb0+egxbq23Z7s9Y1xb79Z2a+O93n7N6Poj49/kPNnpdLq5w63Ll7bbu69H1lna9/dnI+dxvc7IePeOaXQfe/e1ZupX4dKd+7185A579THu7X/W+GeOaabZ5zctrJGTry/Oo8dYO4eli7/02TPCeDcf9/L+yifHK3xqlMnLe+06rne58Jdxrb2gjxrZdtYL+eyAPzKsw8KvnZ/2lbP1fJe+ymf62LD+NesJMWsslzHUT6u943vGcUyQvqFn3hzVO+u0sEYGOGu6obJ2Dj/x191uU2fFdk5ezppUfeUE6Z5lj056vvME6fR3rHt3/Z75oa0TobOeJrf2/4wn1eWYW37pbfkT0Np6M5/I/tk4CS/vJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhMV8h8PhLyY1TZyw90ShAAAAAElFTkSuQmCC',
						'left'       => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAWElEQVR42mNgGAXDE4RCQMDAKONaBQINWqtWrWBatQDIaxg8ygYqQIAOYwC6bwHUmYNH2eBPSMhgBQXKRr0w6oVRL4x6YdQLo14Y9cKoF0a9QCO3jYLhBADvmFlNY69qsQAAAABJRU5ErkJggg==',
						'right'      => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAWUlEQVR42mNgGAUjB4iGgkEIzZStAoEVTECiQWsVkLdiECkboAABOmwBF9BtUGcOImUDEiCkJCQU0ECBslEvjHph1AujXhj1wqgXRr0w6oVRLwyEF0bBUAUAz/FTNXm+R/MAAAAASUVORK5CYII=',
						'full-width' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAYAAABeUaiAAAABeklEQVR4nO3aUWrCABBF0bR0Ndn/WtxO/C+ItJM7hXLOvwbkMjzFj+u6rgNu9ukDpSAsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIiEsEl+v3vTxeGSf+HmetzzrJ+8zeeb31/Kei0VCWCSERcJfk0m4WCSEReKWnxu2vvYX7/ObZ/Gei0VCWCSERcLPDSRcLBLCIiEsEn/ytxn+j1e/8blYJHwrJOFikRAWCeOdEeOdVcY7CReLhLBIGO+MGO+sMt5JuFgkhEXCeGfEeGeV8U7CxSIhLBLGOyPGO6uMdxIuFglhkTDeGTHeWWW8k3CxSAiLhPHOiPHOKuOdhItFQlgkjHdGjHdWGe8kXCwSwiJhvDNivLPKeCfhYpEQFgnjnRHjnVXGOwkXi4SwSBjvjBjvrDLeSbhYJIRFwnhnxHhnlfFOwsUiISwSxjsjxjurjHcSLhYJYZEQFglhkRAWCWGREBYJYZEQFglhkRAWCWGREBb3O47jCYpgf6PRIsLJAAAAAElFTkSuQmCC',
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
					'depends_on' => 'neve_meta_enable_content_width',
					'priority'   => 55,
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
