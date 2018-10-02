<?php
/**
 * Rtl customizer compatibility.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      24/09/2018
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;

/**
 * Class Rtl
 *
 * @package Neve\Customizer\Options
 */
class Rtl extends Base_Customizer {
	/**
	 * Abstract method that must be implemented.
	 */
	public function add_controls() {
		return;
	}

	/**
	 * Change controls
	 */
	protected function change_controls() {
		if ( ! is_rtl() ) {
			return;
		}

		$this->change_customizer_object( 'control', 'neve_navigation_layout', 'choices', $this->rtl_navigation_layout_choices() );

		$this->change_customizer_object( 'control', 'neve_top_bar_layout', 'choices', $this->rtl_top_bar_layout_choices() );

		$sidebar_layout_controls = array(
			'neve_default_sidebar_layout',
			'neve_blog_archive_sidebar_layout',
			'neve_single_post_sidebar_layout',
		);

		if ( class_exists( 'WooCommerce' ) ) {
			$sidebar_layout_controls = array_merge(
				$sidebar_layout_controls,
				array(
					'neve_shop_archive_sidebar_layout'   => array(
						'priority' => 45,
						'label'    => __( 'Shop / Archive Sidebar Layout', 'neve' ),
					),
					'neve_single_product_sidebar_layout' => array(
						'priority' => 50,
						'label'    => __( 'Single Product Sidebar Layout', 'neve' ),
					),
				)
			);
		}
		foreach ( $sidebar_layout_controls as $control_id ) {
			$this->change_customizer_object( 'control', $control_id, 'choices', $this->rtl_sidebar_layout_choices() );
		}
	}

	/**
	 * Get the rtl navigation layout choices.
	 *
	 * @return array
	 */
	private function rtl_navigation_layout_choices() {
		return array(
			'left'   => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAMAAABpj1iyAAAADFBMVEUAhbo+yP/V1dX///9l36pFAAAAdUlEQVR4Ae3VMQrAMAwEQSX5/5/TujIYJPDBbKduqlN9V4aFhTXYsy+JVWsNdz4LCwtrJiyvGgsLCwsLCwsrioWFhYWFhYWFhfVOhoWFFTwQWFhYPYuAhYVlt7CwsLAOpxMLCwsrdE6xsLCwsLCwsLCwsLCwfkRXrgTYLelPAAAAAElFTkSuQmCC',
			),
			'center' => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAADFBMVEX////V1dUAhbo+yP8aB7nsAAAARElEQVRYR2NgGKngPwT8GVU2BJQNb6C1atUCfHjEKRsFo2BEANFQrCBg+CkbWYDIwBgGykYBBYDIkB1VNgpGwSgYMAAAzIYr4wYj4sEAAAAASUVORK5CYII=',
			),
			'right'  => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAADFBMVEX////V1dUAhbo+yP8aB7nsAAAARklEQVRYhWNgGEGA/z8EHKC+MqZVq1ah4xGtjOLgHQWjYBSMgmENREOxgoDhp2xkASIDYxgoGwUUACJDdlTZKBgFo2DAAAAZAflVkm2NtwAAAABJRU5ErkJggg==',
			),
		);
	}

	/**
	 * Get the rtl top_bar layout choices.
	 *
	 * @return array
	 */
	private function rtl_top_bar_layout_choices() {
		return array(
			'content-menu' => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAMAAABpj1iyAAAAXVBMVEUAbq4AebMAe7QAe7UAhboFfLQFh7sjjr49l8NToMhmqMx3sNGGuNWVwNqjyN6wz+K81ufB3+3B4e7C4u7I3evR6fPU5O/V6/Tf6/Pq8vf1+fv1+vz6/f7+//////+gH6NhAAABU0lEQVR42u3UzU7DMBAE4AID/k8CBGObsu//mN0kVRMEUukl6mFGSjbjXD5Zlg9ylyGLLLLIIossssgiiyyyyCKLLLLIIossssgiiyyyyCKLLLLIug8WIH/EI19jvb9d8vol37fUH8l1Hm0eNdf5owDLemnTv1ykTNOhL1dYzw+XHD7k+HhD3aSzQGhSIuBHrdAeRTyATmSwMNoyjIGtOgF/hfWCS54+5XhLXVNhkndNInyEVZZ2oJx3qxnTOYwTJxn0y27twYoY1CYNRiRgVFbS2Z3P1gDrLYKyrPTwy9nag5XQSy3SzMzKyur0WVnGe5+U5SXvyapAgKkS4QKsrCyHECdtcq6trA7W7XLkewc7iLRoEMqGNWrXt4NJG1a1sHWfC6LIekFss/Rfq7zlySKLLLLIIossssgiiyyyyCKLLLLIIossssgiiyyyyCKLrP/mBGV6EYQ9BHpwAAAAAElFTkSuQmCC',
			),
			'menu-content' => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAMAAABpj1iyAAAAXVBMVEUAbq4AebMAe7QAe7UAhboFfLQFh7sjjr49l8NToMhmqMx3sNGGuNWVwNqjyN6wz+K81ufB3+3B4e7C4u7I3evR6fPU5O/V6/Tf6/Pq8vf1+fv1+vz6/f7+//////+gH6NhAAABVklEQVR4Ae3VzU7DMBAE4AID/onjBCjBNmXe/zHZplEbqahShRRxmDl0Oz59slbOjv8yYoklllhiiSWWWGKJJZZYYoklllhiiSWWWGKJJZZYYokl1p8jFsBfEjFtxZrqPNo86lTnPwU4nZdGsk2F5TgDhsJV3t/Oef3i9z31Nit7oGssCYh7q7CeyAggk6OHszbBOfhqE4hc5fnhnN0HD4931JusCtfH0JgQE7yxrANlua3mXA7YHzm9w3B9Wy845+mThzvqbVbCaDY2OLIzQEZvMy+7NcJHj85YngPislsbsHoMrIXNzayJ2Uh5xXIxxt5YkdOWrAp0cJUJoYPnhRXQpaO2D6FdWBk+bMHiEOBHsiWHrqxYe+v2G+D6Fat6+LrBylsKVw/EKqd+fbrJA7FEHx+xxBJLLLHEEkssscQSSyyxxBJLLLHEEkssscQSSyyxxBLrBzxgEYQpIrleAAAAAElFTkSuQmCC',
			),
		);
	}

	/**
	 * Get the sidebar layout choices.
	 *
	 * @return array
	 */
	private function rtl_sidebar_layout_choices() {
		return array(
			'full-width' => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAQMAAABknzrDAAAABlBMVEX////V1dXUdjOkAAAAPUlEQVRIx2NgGAUkAcb////Y/+d/+P8AdcQoc8vhH/X/5P+j2kG+GA3CCgrwi43aMWrHqB2jdowEO4YpAACyKSE0IzIuBgAAAABJRU5ErkJggg==',
			),
			'left'       => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAWUlEQVR42mNgGAUjB4iGgkEIzZStAoEVTECiQWsVkLdiECkboAABOmwBF9BtUGcOImUDEiCkJCQU0ECBslEvjHph1AujXhj1wqgXRr0w6oVRLwyEF0bBUAUAz/FTNXm+R/MAAAAASUVORK5CYII=',
			),
			'right'      => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAWElEQVR42mNgGAXDE4RCQMDAKONaBQINWqtWrWBatQDIaxg8ygYqQIAOYwC6bwHUmYNH2eBPSMhgBQXKRr0w6oVRL4x6YdQLo14Y9cKoF0a9QCO3jYLhBADvmFlNY69qsQAAAABJRU5ErkJggg==',
			),
		);
	}
}
