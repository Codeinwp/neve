<?php
/**
 * Customizer upsells controls.
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Core\Theme_Info;
use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Section;
use Neve\Customizer\Types\Control;

/**
 * Class Upsells
 *
 * @package Neve\Customizer\Options
 */
class Upsells extends Base_Customizer {

	use Theme_Info;

	/**
	 * Holds the main upsell url
	 *
	 * @var string
	 */
	private $upsell_url = '';

	/**
	 * Init function
	 *
	 * @return bool|void
	 */
	public function init() {
		if ( $this->has_valid_addons() ) {
			return;
		}

		$this->upsell_url = esc_url_raw( apply_filters( 'neve_upgrade_link_from_child_theme_filter', tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'learnmorebtn' ) ) );

		parent::init();
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'localize_upsell' ) );

		add_filter( 'theme_mod_neve_checkout_page_layout', array( $this, 'override_neve_checkout_page_layout_theme_mod' ), 10, 1 );
	}


	/**
	 * Dismiss the upsell banner for 7 days.
	 *
	 * @return void
	 */
	public static function remove_customizer_upsell_notice() {
		check_ajax_referer( 'neve-upsell-banner-nonce', 'nonce' );

		set_transient( 'upsell_dismiss_banner_customizer', true, 7 * DAY_IN_SECONDS );
		wp_send_json( [] );
	}

	/**
	 * Overrides neve_checkout_page_layout theme mod as 'standard' if Neve Pro addon is disabled or not activated.
	 *
	 * @param  string $value current value.
	 * @return string
	 */
	public function override_neve_checkout_page_layout_theme_mod( $value ) {
		return 'standard';
	}

	/**
	 * Localize upsell script and send strings.
	 */
	public function localize_upsell() {
		wp_localize_script(
			'neve-customizer-controls',
			'upsellConfig',
			array(
				'button_url'    => esc_url_raw( apply_filters( 'neve_upgrade_link_from_child_theme_filter', tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'proheader' ) ) ),
				'button_text'   => esc_html__( 'Get the PRO version!', 'neve' ),
				'text'          => esc_html__( 'Extend your header with more components and settings, build sticky/transparent headers or display them conditionally.', 'neve' ),
				'screen_reader' => esc_html__( '(opens in a new tab)', 'neve' ),
			)
		);
	}

	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->wpc->register_section_type( '\Neve\Customizer\Controls\Simple_Upsell_Section' );
		$this->wpc->register_section_type( '\Neve\Customizer\Controls\React\Upsell_Banner_Section' );
		$this->wpc->register_control_type( '\Neve\Customizer\Controls\React\Upsell_Banner' );
		$this->section_upsells();
		$this->control_upsells();
		$this->checkout_locked_layout();
		$this->product_catalog_upsells();
	}

	/**
	 * Locked Checkout Layouts
	 *
	 * @return void
	 */
	private function checkout_locked_layout() {
		$this->add_control(
			new Control(
				'neve_checkout_page_layout',
				[
					'default'           => 'standard',
					'sanitize_callback' => [ $this, 'sanitize_checkout_layout' ],
				],
				[
					'section'  => 'woocommerce_checkout',
					'priority' => 5,
					'choices'  => [
						'standard' => [
							'name'  => esc_html__( 'Standard', 'neve' ),
							'image' => 'data:image/png;base64,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',
						],
						'vertical' => [
							'name'      => esc_html__( 'Vertical', 'neve' ),
							'image'     => 'data:image/png;base64,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',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'woocheckoutvertical' ),
						],
						'stepped'  => [
							'name'      => esc_html__( 'Stepped', 'neve' ),
							'image'     => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAB5CAYAAACwe5bgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAXqADAAQAAAABAAAAeQAAAABPL5SvAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAFMElEQVR4Ae2cfUsbQRDGx2oVNb5ibWtB8A9LAkL9/p9DqBBQGii+VFFrtKaNbfdJjAZNnLvszK0xz0A0XOZm9n733O7d3tyN/QsmtMIJvCk8IxO2CBB8IiEQPMEnIpAoLRVP8IkIJEpLxRN8IgKJ0lLxBJ+IQKK0VDzBJyKQKC0VT/CJCCRKS8UTfCICidJS8QSfiECitFQ8wScikChttOKvrq7k+PjYtfmnp6dSq9Xk4uLCNE8z3OY/+yVy2TANmynYRCavPk4HBweyt7fX+nV1dbWPV9zi/f19AfhSqSTIt7GxIRa5Grciu0EvU+MiN+H7WGjml49xbc2zdpTi6/W6bG5u5smX27fZbEqlUpFyuSwLCwtmqr8NsD/Ni5SDXj6viDSaIjgCirIoxQP648O/Wq1Ko/H8sbu2tibLy8uZtrGzY9GlQfnb29v368XkmpkUwad2LvIzNHd9SWQCsg+Grue70quNB8luhh02qEWB75UUO0IDn7erAPSdnZ3W0TU7O3uf1iLX3FQ73NGlyEoIDfhQP3bGczYVSS5y9adN6yj06S8PS7rhPSzt/Q0DN5SNuI93WEwuDKrXv0N3s9BW/mEAX78RWZwWwc6oKEPW+N3R0bvV+lJz8OiHLQ1nMzDAxwfxt7a2Wstics28FfkWupmTa5HbvyKTgcR0WAaDmmMV3Y7U/+/YqNdOoj+HetHfF2kjD75I2N25ok4nuwPxez4CBJ+Pl5k3wZuhzBeI4PPxMvMmeDOU+QIRfD5eZt4Eb4YyXyCCz8fLzJvgzVDmCxQ1V4MZvWaY5xhFw7Twh7nBtzwK/GG9PYU6ePrhXROTaDHg2dUk2vcET/CJCCRKS8UTfCICidJS8YnAR51O9mrz+mK4Ux+KhDwN1w61s3aGpXBzemnGM1s7Nso9UH1gZebgAcL7RjEA1O4I4Kb1SgHgT4yvWczBo0AotvRBU9VtV8XXWSjJsFRiv9wo+bM0c/CoVynSUBuDz7AZB9dEe8xc8d79eyJO5t2ZOfjyO//BNQV8lHRr9ZR52mUO/rfxIJRnY4bJ1xz816AMmk6Ag6vOyMWD4F2w6kHNuxrclfG+gNI3a3APXCidXA2+ftY1zcG/Lw33WQ3KtocS/FGY0xh2xWdVbYyfueLxSAtNJ8DBVWfk4kHwLlj1oASvM3LxIHgXrHpQgtcZuXgQvAtWPSjB64xcPAjeBase1PwCqoi5GjwCj0plGN47MH/3Ioj2kt5/cRMjxQuBercmlMD0+2HQ5UXM1aCqoAMe0PEiCNVCXcyrBl/EXA0U37HW7Tjl3TLwtbxt18kd899c8UXP1UDFL0nJWXcGB9espIz9CN4YaNZw5l0N3mw06Vy0mnXjLP2qJ6Fi7Y9dRHPwgP4ai5omjPsGc/C7P+xU8ZIidZ9JWbTLHHwRlbsWG546hvEBlHpzhie/ueLxYELMzW6UVwzjeXneXW4OHo/ixAyugD4KZYDm4M/DgwnjEaeTozJGmIPHSzRpOgEOrjojFw+Cd8GqByV4nZGLB8G7YNWDErzOyMWD4F2w6kH5Nm2dkYsHFe+CVQ9K8DojFw+Cd8GqByV4nZGLB8G7YNWDErzOyMWD4F2w6kEJXmfk4kHwLlj1oASvM3LxIHgXrHpQgtcZuXgQvAtWPSjB64xcPAjeBaselOB1Ri4eBO+CVQ9K8DojFw+Cd8GqByV4nZGLB8G7YNWDErzOyMWD4F2w6kEJXmfk4kHwLlj1oASvM3LxIHgXrHpQgtcZuXgQvAtWPeh/KEESp3rpdV0AAAAASUVORK5CYII=',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'woocheckoutstepped' ),
						],
					],
				],
				'\Neve\Customizer\Controls\React\Radio_Image'
			)
		);
	}

	/**
	 * Locked options on Product Catalog
	 *
	 * @return void
	 */
	private function product_catalog_upsells() {
		$this->add_control(
			new Control(
				'neve_product_card_layout_ui_heading',
				[
					'sanitize_callback' => 'sanitize_text_field',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'            => esc_html__( 'Layout', 'neve' ),
					'section'          => 'woocommerce_product_catalog',
					'priority'         => 200,
					'class'            => 'card-layout-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 2,
					'expanded'         => false,
				],
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_product_card_layout',
				[
					'transport'         => 'postMessage',
					'default'           => 'grid',
					'sanitize_callback' => function() {
						return 'grid';
					},
				],
				[
					'label'    => esc_html__( 'Layout', 'neve' ),
					'section'  => 'woocommerce_product_catalog',
					'priority' => 210,
					'choices'  => [
						'grid' => [
							'name' => __( 'Grid', 'neve' ),
							'url'  => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYCAAAAACfVToRAAAEtElEQVR42u3cIXPjOhSG4f3/9KOGgoFmhmZlspvUabITsp5LjMyMzgWSHadNE7fJve1G74fSmbTgGUk+OpL7y8hn8gsCvPDCCy+8CF544YUXXngRvPDCCy+8yP/g9c/vbwteeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeP0Ur9dbsk/Ma9/U1U2pX1Py2j9XN6dJyOsOXFW1TcZrew+uqk7Ga3MXrwsD7MG87sN1YQV7SK96+9VqYpOk1/rL5egrXnjhhddP8drjtdxrv6mrqm72eC3y2sWd9/MeryVeU6Nig9cCr9leco/Xda/N5f3NS1Xv8Jp5rS96barqDFjKXi+X+g1h8L0DY/06v36Nc/UtWNLPx6nX+vJxm+wNWNJeYy9/c6mreAqWeH3fPFfVenu5CXsCxn77es96DobXghb/DAyvJSciRzC8Fh0gTWB47ep6e/28bQRL3mtXz8v7j48n6z1exxbY9vpp7itex45hALt4+I3XjKuqttfuCuA156qq7ZWrFXj9bj5zZQIvvPDCCy+8EvHarj+RHV7cz8ELL7zwwguv+fsK66+mTsyr5v2OT3nd6f2hXSpeu7twrdN5/7G5A1e9S+h95OY/5XrA9913m5sW/efL1/Ufz4v/p4AXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXkl6dX++LX+l1yMGL7zwwgsvvAheeOGFF1543T9OMfnh+pe9lOM1przdq1zyVx7FSx6vJV65mVmTSSu8FnuZlzSY937ocpVmvZck34evNSvJNee9vJNUHhLzaiT1JqmRVFo7TtLRQZIyKTeT1JpZL6k36920/MVvKaHxFVBU9mE585K6YHkIau+8nFSYHTKpSckrrl+SVA5mRZxYpVSYufgsyN97NZIzM3uSigSfj4p8WZyIraShD6NsXO9PvArpKdF6ojQzSc1xrsUP7TjHmvdeLvxCel6hvj9dm/D6eL0PiRan83E4Ox87Sb3lcT723vuEvWbrfW62iuv9avTyUwHi43rv01nvz3l17+oJP9UTK8n11jlJvQ2xngi/WP6IDfk3eNnhXL0axlcTfghewW18XPh06tU3Xmf3Q733jZkdVpL8MD4Twn6onareh/Z6xOCFF1544YUXwQsvvPDC6+b4HC+8bkyzmvUhfCa5cC+gfZo3KPCKyWP7qrXj2avrx1bW2ADDK+ZpOh7qzVbjZ3fsF8YmF15mFg55ijCYnsa2cyHpUEiu83nvfkRH/sd4jccVhVRMhxyZ5J3kzefmpQyvKWU8DiulwlxcrJzkV9GL5+NJDt63I5F57/s4RzsvqcgdXh8NMzfEz8NKKqYHQeYHvN6ky0MJEUbceGLUxYoia/F6u+ariKNoKOb3WL3zkrIer1lFsZLcWJO2mZR38/3Q4BbcA07Iq8uOg2sswCzcBxjM52Y5XrMM2awebXW8nJTFeqLP8Dq7HZI7boekMtYTrF+nyWZeneZ3DfPpM8/HY2ZErj3xsiY0K8q/r6FDvxCvh/T6S4MXXnjhhRdeBC+88MILL7wIXnjhhdcj51987R/KzzMKWAAAAABJRU5ErkJggg==',
						],
						'list' => [
							'name'      => __( 'List', 'neve' ),
							'url'       => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYCAAAAACfVToRAAAE0UlEQVR42u3csVPqTBTG4fv/t2+bckvKdCnT2W2iGASH5ma+JlW6VOcrdkOCIKBBwJvfW+GMOvLM7ubsctY/Rr6SPxDghRdeeOFF8MILL7zwwovghRdeeOFF8MILL7zwwovghRdeeOGFF8ELL7zwwovghRdeeOGFF8ELL7zwwovg9RNe/73fLXjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjh9Sheb1OymZnXpiqLSSnf5uS1eS4mp5qR1xW4imL1bS+nmHR7/n16Kb2z1+oaXEU53UvKp3vll/yWSV7Lq3idGGCXe8n/Aq/rcJ1Ywc57pWZmVSItfo1XufpuNbG8kpd5SZ1577smVW7Weknybfi2aiG56riXd5Ly7S29Xr5djr5dy6uS1JqkSlJudT9JewdJSqTUTFJtZq2k1qx1u+Uvfpdm4RXGV0BR3oblzEtqguU2qB14OSkz2yZSNSevuH5JUt6ZZXFi5VJm5uKzID30qiRnZvYkZTOZj+PnoyJfEidiLalrwyjr1/s9r0x6uv16P/La3M0rNzNJ1TDX4ou6n2PVoZcLP3Anr82yLIqy2tzBK9T3+2vTo3ut4877eXNLr3GJEC3252N3dD42klpL43xsvfc399odVCzv7TVa71OzRVzvF72X3xUgPq73/g7r/WgvubmzV3NQT/hdPbGQXGuNk9RaF+uJ8IP5ZRvyK3ktT+9vXotyfSsv2x6rV8P4qsIXwSu49Y8Lf9P66+Wk17IojoD9lNfR/VDrfWVm24Uk3/XPhLAfqndV7828Xk+dN4TBdwA21esuucH61c/Vj2Bz9hrOWl8/4zoAm7VXf5a//JzrI9isvd431XNRvKxOcX0Am7fX8Xw8sx6D4XWWaw8Mr/NcYzC8LuAageG1LsvVOa4BbPZe63Jc3n/+8WS5wet9dwS2OsdVFG94DSeGAezkh994jbiKYnWuVwCvMVdRrM60VuD1Xn2lZQIvvPDCCy+8ZuK1evlC1nh9I3jhhddMvHyKF14TvarFqE/CJ5IL9xbqp3EDxWN5FS/fTTnVK43tNbUNveGu7Vtt+gadh/GaeJdv8v2Op137amu26F+7oZ8pNuE8iteV7g+tv+nVSsrCYHrq2+IySdtMco1PW3dZx+DNvNZX4Tqx/p1Z0WM7ZSZluybMRPJO8uZT81LySF5f2zOe+XDt6155bNfNpcxcXKyc5BfR69Gej9cAO8V1xmvrfd0Tmfe+jXO08ZKy1D2g1/t6OWnRfz7drn/RG8gl18XX3ULKdg+CxHeP5vWzueDPb9JQQoQR13e0NrGiSGq8Pq75yuIo6rLxPVvvvKSkxWtUUSwkt41f1ImUNoNkap274J7yjLyaZBhcfQFm4b5CZz41S/EapUtG9Wit4fJUEuuJNsFrlGE7JDdsh6Q81hOsX/tJRl6Nxnch091rno9DRkSu3vOyKhxW5D9woPOv/j+rh9wP4fXPeP1U8MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILrwlezd+75Vd6EbzwwgsvvPAieOGFF154EbzwwgsvvPAieOGFF1544UXwwgsvvPAieOGFF1544UXwwgsvvPAieOGFF1544UXwmpz/AdpnH8pqwZaBAAAAAElFTkSuQmCC',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'woocardlistlayout' ),
						],
					],
				],
				'\Neve\Customizer\Controls\React\Radio_Image'
			)
		);

		$this->add_control(
			new Control(
				'neve_add_to_cart_display',
				[
					'default'           => 'none',
					'sanitize_callback' => function() {
						return 'none';
					},
				],
				[
					'label'    => esc_html__( 'Button Style', 'neve' ),
					'section'  => 'woocommerce_product_catalog',
					'priority' => 230,
					'choices'  => [
						'none'     => [
							'name' => __( 'None', 'neve' ),
							'url'  => 'data:image/png;base64,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',
						],
						'after'    => [
							'name'      => __( 'Bottom', 'neve' ),
							'url'       => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYCAMAAACN4JX/AAAAq1BMVEU/xPtExftRyvtSyvtTyPtbzfxhzvxkzPxm0Pxv0/x00fyD1fyM3P2R2fyTk5OcnJye3f2kpKSn5P2q4f2srKyy5/2z6P20tLS25f27u7vB6f3Dw8PH7v7KysrK7/7M7P7R0dHS0tLT09PU1NTW1tbW8v7X8P7Y2NjZ2dna2trb29vb9P7c3Nzd3d3f39/i9P7l5eXs7Ozs+P7x8fHy8vL1+//5+fn+//////+ynh90AAAHOUlEQVR4AezQwQ1CMQxEQVrB/lJC5D1xof/KKAFyAGelNyXM7fWNp7bM+wke2vZ54idfFQd0hWy+NA74GkZfyvaulNPXiuauqN4vs7BY8vrSysauLLl9SSOatmJIhl+qef2/LK9Z6v/yxxdffPHFF1988cUXX9744osvvvgCX3zxxRdffIEvvvjiiy++wBdffPHFF/jiiy++3uzb0YrzKhAH8DcYEQIhSGDuvBMF8fj+T3ZIM50aE9d87MWSOv+r7XQzkB8q2qZjeUGVCX3+dSK88u1elDnkexEviv1bL7r6OV7g8r9EvFTMP0S8ZnrlDYGtuRPxIjEaYLkT8aLQCAv5VsTLXa34OAGYvCdsLwA0unyMW7e6cfe86mZP9aJ7tTzUYg4a4O0VZuDo8iYjvzHFwstQNwpQy3xutv8PVSj4RC8PwF4WKFyjBAUc7e95Vc2WJ3rxfOR7Depjg1BleSursqpvedlzs+d58XrPf87AXgGq8B3NVbnrddnMPsur3k+Yeu5pGgch57RSORZXwZpyDss9r7lohjQun71fNUwVygmEtGIVS9hy2ISsd7z8VbPw5PMQe/m8ZyFbCvJITNXs0X0vajblQ2/76PO2qRgU6VGSeo8Jt8ulTLF9L2rmvuK8Tbdnjgyhvo/5zYnVIhj7XtQsfYHXHHLptRx3GlPmrO+lztAfnK4XN3u0V/V5tDlOR1uNIhpWpvxHiu56UbNHnx8pv/ISL9ufj2tvPmLDa/pWr856X918aHkl9vJVs4Bb/Dd5JbjcTzi++ZgpWHutR8h4brae9l/p6V55vtyvJt5MmeZ+dTpCxqoZ28dy0j7ey0JZCOp0HrLn8xCW4ygqpqiarSUrHSyf7sXjxvARuT5vm1iftx0dsOxmp8prdHHJ0Rs4+GwvB6esfPw7hxe9OvGyGc9a9XwvCkKVufq8kLK/oiZlfS6WJmx96YnP92qALdXn0RTU5FVLOsNep2Y6cLP5a7x633fQFYVXDhooyueDV/YTcEyqv2r6Y6/fp/N9msf9AJpyxlcyxb6UZtwgcEsqrtH7e1Gel/ttxEu8xEu8JOIlXuIlXuIlES/xEi/xEi/xkoiXeImXeFkAn/884iVe4iVeSE+12Vv1RGWNbkgvBI5y3XpcoKjb4bzSBGWWTt3BMfNYXhULwbTrDurMY3mtUMf+UI8KTsGRvOLnSZtERCq16wZeWZMF8F5TfSCv3ULH6qe1rbqCLUj7iUgvx/EiAHt4Ts0064F+wUdepLqM40UAxx3E3Kx72KLZi37xMY6Xu/oFmm7WHTEOu7+3sGU9vpya9QCv4OBeeFz9l3Zd0V7MyXn7s7vCdt3AJ8aN7kVb+tiuJw1lFhzYK800bn6qBw3H4KBeLKHij/Vk4JgpDumFQPG9ekQFZXQczytMzHKnHnGBT+bhvCxQptCt8zvI48wP5rUAxdyqk5fnyboM5RU1qWjfrVdeBDaN5BUUsZh+fS9F9uID+Dhe8c3i+nXauAb2eh8ox/EiAtDhTn2lLSp72dHGFxJLvFV3750reSU92HqfaNaFm/W9rPzu5fVo+wmEq/Tr8wJgBtyvLnCVdp2WtWHPQwqu0q7ndALTIQ/jleAyzfoWc6yZlMfxinCZZv2VgMBZgzz/dSe4ABjMfxZ5Xk68xEu8JOIlXuIlXuIlXhLxEi/xEi/xkoiXeImXeImXeEnES7zES7zES7wk4iVeD/D67/927GBVahgK43jVaLS1UAxKKGJXduOiEAj83//JvHMzJ7VJYeCqlOj5Nu3JDGXyY05I+u1zQ/ny/Wqvj11b+XSx16vGvN5f7NU1lnfqpV7qpV7qpV7qpV7qpV7qpV7qpV7/r5dxEXD2OOo2wPf/ptcCMd1NpARnylLCnvWpHKUYuz19IGUSPiDhWSTeVg9rw8vs052QxL4uT7x6qMFsKAc3wBdeBNOmlwNYCi+ircoTrwDhyWTYnqd/zwy4++CtTqoxez1fN/Btem0QIDVg+t3GA3NV5qzSaZNAmihDiWRMg/cu9BDuY+LVOSGSh7Xi1cPqwYmXzCZWZe21gMt/0qXLt1u6G50bbtdInGAtvZYmvWZwPYSDlwH6sqy9AgxZXURnWask040mgi36cWjRy0QwMnEBShJlWXuRELJDBSAD403RHdf7qWvPS4g8zH/Ly0I03Qjh6OWa9FrBpXYyRT/aonxhP8pKFWHYXQfAtuZV9ccfXu9TDwYks3jJZ+15OXLWHcgDviof7Cfc+X5iICea3cuBb85LuiQ34GFuZVl7mbxf/fUbC6nHt2fuRSQ3mHavEebmvGQVltZ6fB4qpjienocikl6WPtmhZq+hvf2XrPbSWsEIUJTz9qGsvR6dt8ektPdpn70MRNOc1+/HOs7e5wTAW33/9fKol3qpl3qpl3qpl3qpl3qpl3qpl3qpl3q9aczrw8VeX183xfX2x6VemgdeGvVSL/VSL/XS/ASH6S8TuuP7JQAAAABJRU5ErkJggg==',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'wooaddtocartafter' ),
						],
						'on_image' => [
							'name'      => __( 'Overlay', 'neve' ),
							'url'       => 'data:image/png;base64,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',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'wooaddtocartonimage' ),
						],
					],
				],
				'\Neve\Customizer\Controls\React\Radio_Image'
			)
		);

		$this->add_control(
			new Control(
				'neve_category_card_layout_ui_heading',
				[
					'sanitize_callback' => 'sanitize_text_field',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'            => esc_html__( 'Category', 'neve' ),
					'section'          => 'woocommerce_product_catalog',
					'priority'         => 300,
					'class'            => 'category-layout-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 1,
					'expanded'         => false,
				],
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_category_card_layout',
				[
					'default'           => 'default',
					'sanitize_callback' => function() {
						return 'default';
					},
				],
				[
					'label'    => esc_html__( 'Layout', 'neve' ),
					'section'  => 'woocommerce_product_catalog',
					'priority' => 310,
					'choices'  => [
						'default' => [
							'name' => 'Simple',
							'url'  => 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA5MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjkwIiBoZWlnaHQ9IjYwIiByeD0iMSIgZmlsbD0iI0YzRjRGNSIvPgo8cmVjdCB3aWR0aD0iNzEuNzUiIGhlaWdodD0iNDEuODM3OSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgODAgMCkiIGZpbGw9IiNEREREREQiLz4KPHBhdGggZD0iTTIzLjU2NjQgNTBINTEuMTk2NCIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTU1LjMxNjQgNTBINjQuNjg1NSIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg==',
						],
						'style-3' => [
							'name'      => 'Boxed',
							'url'       => 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTEiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA5MSA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC4xODU1NDciIHdpZHRoPSI5MCIgaGVpZ2h0PSI2MCIgcng9IjEiIGZpbGw9IiNGM0Y0RjUiLz4KPHJlY3Qgd2lkdGg9IjcxLjc1IiBoZWlnaHQ9IjUwIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA4MC4xODU1IDApIiBmaWxsPSIjREREREREIi8+CjxyZWN0IHg9IjI1LjY4NTUiIHk9IjEzLjgzNzkiIHdpZHRoPSIzOSIgaGVpZ2h0PSIyMS4xNjIxIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzAuMzE0NSAyNEw0OS4zMDk0IDI0LjI2NDIiIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik01Mi4wNjA1IDI0LjMxODRMNTguOTM2NSAyNC40MTkiIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'woocategorycardboxed' ),
						],
						'style-2' => [
							'name'      => 'Hover',
							'url'       => 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTEiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA5MSA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC44NjkxNDEiIHdpZHRoPSI5MCIgaGVpZ2h0PSI2MCIgcng9IjEiIGZpbGw9IiNGM0Y0RjUiLz4KPHJlY3Qgd2lkdGg9IjcxLjc1IiBoZWlnaHQ9IjUwIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA4MC44NjkxIDApIiBmaWxsPSIjOTk5OTk5Ii8+CjxwYXRoIGQ9Ik0yNC4xODE2IDI0SDUxLjgwNjYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNNTUuODA2NiAyNEw2NS44MDY2IDI0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg==',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'woocategorycardhover' ),
						],
					],
				],
				'\Neve\Customizer\Controls\React\Radio_Image'
			)
		);

		$this->add_control(
			new Control(
				'neve_sale_tag_ui_heading',
				[
					'sanitize_callback' => 'sanitize_text_field',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'            => esc_html__( 'Tags', 'neve' ),
					'section'          => 'woocommerce_product_catalog',
					'priority'         => 600,
					'class'            => 'sale-tag-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 1,
					'expanded'         => false,
				],
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_sale_tag_position',
				[
					'default'           => 'inside',
					'sanitize_callback' => function() {
						return 'inside';
					},
				],
				[
					'label'         => esc_html__( 'Style', 'neve' ),
					'section'       => 'woocommerce_product_catalog',
					'priority'      => 610,
					'documentation' => [
						'link' => 'https://docs.themeisle.com/article/1058-woocommerce-booster-documentation#sale-tag',
					],
					'choices'       => [
						'inside'  => [
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYCAMAAACN4JX/AAAAVFBMVEU/xPtTyPtkzPx00fyD1fyR2fye3f2q4f225f3B6f3M7P7S0tLT09PU1NTV1dXW1tbX19fX8P7Y2NjZ2dna2trb29vc3Nzd3d3i9P7s+P71+/////8xOQAQAAADLElEQVR4AezQMQ0AMAwDsLDYMf48i6Gq8tkQnL+BL1++fPnyhS9fvnz58oUvX758+cKXL1++fPnCly9fvnz5ov3lC1++fPnKwWvx5cuXL1++fPny5cuXL1++fPny5cuXL1++fPnyNezXsW7EIAyAYRPiM8eWjfh///dsiNOrVJW1k/8BmfUTIPEPXsUc3GJTwe/h5JTo5GlPr8n1eIwydw3Q9GLt1UDv1SaeA/2XV0xRevW4gM77Wl/QoKTX2stgWL2GqXTQC1h6rb3kYNb1GjdQ6Yw/368jvaLdHMBEDBdRqOm19IrMoXxoWt7HlVeBdoPBtvPk6bU8Xwe8ROrA5R0yCppeK6/qRPp91MTpP6/WZ5qsUf6HoFUx2GXWYftqx25zrIZhMAovIElTtfnY/05B/LhKecHcMEMYxefsoI/qSPb/8mLfxuv42/LVPHqFD5QbXlPFgtdcBa+pYsNrqozXXA2vqW68pjrxmiqzD73R+fI68HqjhhdeeOGFF1544YUXXu/Wf5l+UW8xvEp/NMEryeJnhNcdHlWbBK8klwUjvFp4Fk2QI8Tbt1cNP2VxpfC9C68xm0vBmEebS8FcefX49DosLgFz6HU+vW6DS8A8erU4QiSDS8BcevUyMMRqcAmYT69+xwkuAfPn1Vv+IRbPZnEJmDevsVpK7d3mEjDHXppyKRheE1wChpfJJWB42VwChpdyCZhbr5LSNcElYM68ilxXDS4Bc+AlXAOYxSVVH17CNYJNcIXiw0u4RjDhwku4RjDhwku4BjDhwku4BjCDC6+iAvn3XHjlGRu88MILL7zwwgsvvPBa7HXnD1a538+HF1544YUXXnjhZYdXbJ/vVTb2CvH49MKrvItXDEs6d/FKa7yuXbzONV51F6+2hOvoG3gt/MHqPl49rXi9NvJqaQHXBl6rRjKWvplXb2eK/wjruHvfwGthG3jhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOFFX9YLL7wIL7zwwgsvvAgvvPDCCy+8CC+88MILL8ILL7zwwgsvwgsvvPDCi74BKevIZRVAXf8AAAAASUVORK5CYII=',
						],
						'outside' => [
							'url'       => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYCAMAAACN4JX/AAAAVFBMVEU/xPtTyPtkzPx00fyD1fyR2fye3f2q4f225f3B6f3M7P7S0tLT09PU1NTV1dXW1tbX19fX8P7Y2NjZ2dna2trb29vc3Nzd3d3i9P7s+P71+/////8xOQAQAAADR0lEQVR4AezXMWvDMBBA4XNsRY62THX0/v//bA8lKQQ0lIZ2eW8w5/XDZ7jAfpJeeumll156mV566fWW9NJLL71ML7300kuv+EV6PdJLL7300ksvvfTSSy+99NJLL7300ksvvT7+ML30eld66aXXUjv0Ol5W6JHduMXoxr1Nr+S6exxLfLUDRa+5VwqVfFITrwPtxWtMI73aWMDOJSLOsMOi19yrwlHXiEilK22BqtfUK42yViLiBCUax4vX6KrXaKsdoEZUekSBVa+p1yjJlifNPttHvZbUSTA4bdzres284grniPWgx2XIFCh6zbzWzqg8PrXotO+/1nNK1pH3EOxrVNgia3DS67/vbb300ksvvfTSSy+99NJLL7300ksvvfTSSy+9Ptu511y3QSiKwgPggWXzmP9MW/UPanfvaaISdHVYawif4sTaKOSFlbu79wprKx2vt4p1v9eCxhdd4eNVR15P+Hyxu/HqMWyouPG6w5a6F6+8x+vx4hX3eF1evMKeij+vNpalryrZnVce6+t44YUXXnjhhde5XrWkGNPVXkHBq2frtXyGl0w8Ca9/eqWXliu8/j64Nrxsr2QsCxJePfxeNEFyiM/ZXi38kcWVws9uwwsv4TLAeB6FS8AO85JFP1tcAnaal553PwaXgJ3mpSe4yeASsCO9Rg2z2AwuATvTazzxFS4BO9Zr9PJLLF7d5lKwY/fCVmuzfxltMPZVm0vB8LK5BAwvm0vA8LK5BAwv5RKwY71qSrfBZYAd6VV1XbW5FMy3l3BNMJNLakd4CdcEs7mkeo6XcE0w5cJLuCaYcuElXBNMuPASrglmcOFVVaB8zYVXeRlmvxdeeOGFF1544YUXXng95T9rq734fwdeeOGFF1544YUXXrGv96qOvULMy3N4Hwz3Db3nlfZ43V68rj1ezYtX38KVhxevPR+w5sdrpJ3fXg68etrF5cBrwyMZ63DmNfqV4oew8jOGK6/94YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjh5cCL8MILL7zwwovwwgsvvPDCi/DCCy+88CK88MILL7zwIrzwwgsvvPAivPD6Lv0ALgqZQ3JkuCMAAAAASUVORK5CYII=',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'woosaletagoutside' ),
						],
					],
				],
				'\Neve\Customizer\Controls\React\Radio_Image'
			)
		);

		$this->add_control(
			new Control(
				'neve_card_content_ui_heading',
				[
					'sanitize_callback' => 'sanitize_text_field',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'            => esc_html__( 'Content', 'neve' ),
					'section'          => 'woocommerce_product_catalog',
					'priority'         => 500,
					'class'            => 'card-content-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 1,
					'expanded'         => false,
				],
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_product_content_alignment',
				[
					'default'           => 'left',
					'sanitize_callback' => function() {
						return 'left';
					},
				],
				[
					'label'    => esc_html__( 'Alignment', 'neve' ),
					'section'  => 'woocommerce_product_catalog',
					'priority' => 520,
					'choices'  => [
						'left'   => [
							'name' => __( 'Left', 'neve' ),
							'url'  => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYCAAAAACfVToRAAAEtElEQVR42u3cIXPjOhSG4f3/9KOGgoFmhmZlspvUabITsp5LjMyMzgWSHadNE7fJve1G74fSmbTgGUk+OpL7y8hn8gsCvPDCCy+8CF544YUXXngRvPDCCy+8yP/g9c/vbwteeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeP0Ur9dbsk/Ma9/U1U2pX1Py2j9XN6dJyOsOXFW1TcZrew+uqk7Ga3MXrwsD7MG87sN1YQV7SK96+9VqYpOk1/rL5egrXnjhhddP8drjtdxrv6mrqm72eC3y2sWd9/MeryVeU6Nig9cCr9leco/Xda/N5f3NS1Xv8Jp5rS96barqDFjKXi+X+g1h8L0DY/06v36Nc/UtWNLPx6nX+vJxm+wNWNJeYy9/c6mreAqWeH3fPFfVenu5CXsCxn77es96DobXghb/DAyvJSciRzC8Fh0gTWB47ep6e/28bQRL3mtXz8v7j48n6z1exxbY9vpp7itex45hALt4+I3XjKuqttfuCuA156qq7ZWrFXj9bj5zZQIvvPDCCy+8EvHarj+RHV7cz8ELL7zwwguv+fsK66+mTsyr5v2OT3nd6f2hXSpeu7twrdN5/7G5A1e9S+h95OY/5XrA9913m5sW/efL1/Ufz4v/p4AXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXkl6dX++LX+l1yMGL7zwwgsvvAheeOGFF1543T9OMfnh+pe9lOM1przdq1zyVx7FSx6vJV65mVmTSSu8FnuZlzSY937ocpVmvZck34evNSvJNee9vJNUHhLzaiT1JqmRVFo7TtLRQZIyKTeT1JpZL6k36920/MVvKaHxFVBU9mE585K6YHkIau+8nFSYHTKpSckrrl+SVA5mRZxYpVSYufgsyN97NZIzM3uSigSfj4p8WZyIraShD6NsXO9PvArpKdF6ojQzSc1xrsUP7TjHmvdeLvxCel6hvj9dm/D6eL0PiRan83E4Ox87Sb3lcT723vuEvWbrfW62iuv9avTyUwHi43rv01nvz3l17+oJP9UTK8n11jlJvQ2xngi/WP6IDfk3eNnhXL0axlcTfghewW18XPh06tU3Xmf3Q733jZkdVpL8MD4Twn6onareh/Z6xOCFF1544YUXwQsvvPDC6+b4HC+8bkyzmvUhfCa5cC+gfZo3KPCKyWP7qrXj2avrx1bW2ADDK+ZpOh7qzVbjZ3fsF8YmF15mFg55ijCYnsa2cyHpUEiu83nvfkRH/sd4jccVhVRMhxyZ5J3kzefmpQyvKWU8DiulwlxcrJzkV9GL5+NJDt63I5F57/s4RzsvqcgdXh8NMzfEz8NKKqYHQeYHvN6ky0MJEUbceGLUxYoia/F6u+ariKNoKOb3WL3zkrIer1lFsZLcWJO2mZR38/3Q4BbcA07Iq8uOg2sswCzcBxjM52Y5XrMM2awebXW8nJTFeqLP8Dq7HZI7boekMtYTrF+nyWZeneZ3DfPpM8/HY2ZErj3xsiY0K8q/r6FDvxCvh/T6S4MXXnjhhRdeBC+88MILL7wIXnjhhdcj51987R/KzzMKWAAAAABJRU5ErkJggg==',
						],
						'center' => [
							'name'      => __( 'Center', 'neve' ),
							'url'       => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYCAAAAACfVToRAAAEtElEQVR42u3cLXPjPBSG4f3/9KGGgoFmhmZlspvUabITsp6XGJkZnRdIdpw2X91ku9noflA6kxZcI8lHR3J/GPlKfkCAF1544YUXwQsvvPDCCy+CF1544YUX+fNe//38a8ELL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILr4fxer8l28S8tk1d3ZT6PSWv7Wt1c5qEvO7AVVXrZLzW9+Cq6mS8VnfxOj3Ans3rPlynV7Dn9KrXv1tNrJL0Wv52PfqOF1544fUoXlu8rvfaruqqqpstXld5beLO+3WL1zVeU6NihdcVXrO95Bavy16r8/ubt6re4DXzWp71WlXVEbCUvd7O9RvC4PsExvp1fP0a5+pHsKSfj1Ov9e10m+wDWNJeYy9/da6reAiWeH3fvFbVcn2+CXsAxn77cs96DobXFS3+GRhe15yI7MHwuuoAaQLDa1PX68vnbSNY8l6bel7enz6erLd47Vtg68unue947TuGAezs4TdeM66qWl+6K4DXnKuq1heuVuD1s/nKlQm88MILL7zwSsRrvfxCNnhxPwcvvPDCCy+85u8rLH83dWJeNe93fMnrTu8PbVLx2tyFa5nO+4/NHbjqTULvIzd/kusZ33ffrG5a9F/PXtd/Qi/+nwJeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeKXo1f36a/knvZ4yeOGFF1544UXwwgsvvPDC61viFJPvLn/ZSzleY8rbvcpr/sqzeMnjdY1XbmbWZNICr6u9zEsazHs/dLlKs95Lku/D15qF5JrjXt5JKneJeTWSepPUSCqtHSfp6CBJmZSbSWrNrJfUm/VuWv7it5TQ+AooKvuwnHlJXbDcBbVPXk4qzHaZ1KTkFdcvSSoHsyJOrFIqzFx8FuSfvRrJmZm9SEWCz0dFvixOxFbS0IdRNq73B16F9JJoPVGamaRmP9fih3acY81nLxd+IT2vUN8frk14nV7vQ6LF4Xwcjs7HTlJveZyPvfc+Ya/Zep+bLeJ6vxi9/FSA+Lje+3TW+2Ne3ad6wk/1xEJyvXVOUm9DrCfCL5bfvyF/DC/bHatXw/hqwg/BK7iNjwufTr36wevofqj3vjGz3UKSH8ZnQtgPtVPV+9Re/3zwwgsvvPDCi+CFF1544fWd8TleeN2YZjHrT/hMcuG+QPsyb1zgFZPHtlZr+zNZ148trrExhlfMy3Rs1Jstxs9u30eMzS+8zCwc/hRhML2M7ehC0q6QXOfz3n1/p/6RvcZjjEIqpsOPTPJO8uZz81KG15QyHpOVUmEuLlZO8ovoxfPxIDvv25HIvPd9nKOdl1TkDq9Tw8wN8fOwkIrpQZD5Aa8P6fJQQoQRN54kdbGiyFq8Pq75KuIoGor5/VbvvKSsx2tWUSwkN9akbSbl3Xw/NLgr7gcn5NVl+8E1FmAW7gkM5nOzHK9ZhmxWj7baX1rKYj3RZ3gd3Q7J7bdDUhnrCdavw2Qzr07zO4j59Jnn4z4zItceeFkTmhXlgzR06BfilbrXIwUvvPDCCy+8CF544YUXXngRvPDCC69nzv/F6x/Kmshd1QAAAABJRU5ErkJggg==',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'wooscardcontentalingcenter' ),
						],
						'right'  => [
							'name'      => __( 'Right', 'neve' ),
							'url'       => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYCAAAAACfVToRAAAEs0lEQVR42u3cLXPrOhSF4fP/6aKGgoFmhmZlspvUaXIm5HguMTIz2hdIdpw2X23SaRu9C6UzacEzkry1JfePkY/kDwR44YUXXngRvPDCCy+88CJ44YUXXniRr/f67++3BS+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+8fozX6y3ZJua1berqptSvKXltn6ub0yTkdQeuqlon47W+B1dVJ+O1uovX6QH2aF734Tq9gj2mV73+bDWxStJr+el69BUvvPDC66d4bfG63mu7qquqbrZ4XeW1iTvv5y1e13hNjYoVXld4zfaSW7wue63O729eqnqD18xredZrVVVHwFL2ejnXbwiD7x0Y69fx9Wucq2/Bkn4+Tr3Wl9NtsjdgSXuNvfzVua7iIVji9X3zXFXL9fkm7AEY++3LPes5GF5XtPhnYHhdcyKyB8PrqgOkCQyvTV2vL5+3jWDJe23qeXl/+niy3uK1b4GtL5/mvuK17xgGsLOH33jNuKpqfemuAF5zrqpaX7hagdff5iNXJvDCCy+88MIrEa/18gPZ4MX9HLzwwgsvvPCav6+w/GzqxLxq3u/4kNed3h/apOK1uQvXMp33H5s7cNWbhN5Hbr6S6xHfd9+sblr0n89e139AL/6fAl544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF154pejV/fu2/EqvhwxeeOGFF154EbzwwgsvvPD6rjjF5LvLX/ZSjteY8nav8pq/8ihe8nhd45WbmTWZtMDrai/zkgbz3g9drtKs95Lk+/C1ZiG55riXd5LKXWJejaTeJDWSSmvHSTo6SFIm5WaSWjPrJfVmvZuWv/gtJTS+AorKPixnXlIXLHdB7Z2XkwqzXSY1KXnF9UuSysGsiBOrlAozF58F+XuvRnJmZk9SkeDzUZEvixOxlTT0YZSN6/2BVyE9JVpPlGYmqdnPtfihHedY897LhV9IzyvU94drE16n1/uQaHE4H4ej87GT1Fse52PvvU/Ya7be52aLuN4vRi8/FSA+rvc+nfX+mFf3rp7wUz2xkFxvnZPU2xDrifCL5RdvyH+sl+2O1athfDXhh+AV3MbHhU+nXn3jdXQ/1HvfmNluIckP4zMh7Ifaqep9aK/fFbzwwgsvvPAieOGFF154/dD4HC+8bkyzmPUtfCa5cI+gfZo3NPCKyWO7q7X9Wa3rx9bX2DDDK+ZpOk7qzRbjZ7fvL8amGF5mFg6FijCYnsY2dSFpV0iu83nvvrSD/+u8xuONQiqmQ5FM8k7y5nPzUobXlDIen5VSYS4uVk7yi+jF8/EgO+/bkci8932co52XVOQOr1PDzA3x87CQiulBkPkBrzfp8lBChBE3njB1saLIWrzervkq4igaivm9V++8pKzHa1ZRLCQ31qRtJuXdfD80uCvuDSfk1WX7wTUWYBbuDwzmc7Mcr1mGbFaPttpfZspiPdFneB3dDsntt0NSGesJ1q/DZDOvTvO7ifn0mefjPjMi1x54WROaFeVXNnToF+KF188JXnjhhRdeeBG88MILL7zwInjhhRdej5z/AdA+H8o+3vutAAAAAElFTkSuQmCC',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'wooscardcontentalingright' ),
						],
						'inline' => [
							'name'      => __( 'Left', 'neve' ) . ' / ' . __( 'Right', 'neve' ),
							'url'       => 'data:image/png;base64,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',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'wooscardcontentalinginline' ),
						],
					],
				],
				'\Neve\Customizer\Controls\React\Radio_Image'
			)
		);
	}

	/**
	 * Sanitize checkout layout that forcefully updates the selection as standard.
	 *
	 * @return string
	 */
	public function sanitize_checkout_layout() {
		return 'standard';
	}

	/**
	 * Add upsells section
	 */
	private function section_upsells() {

		$this->add_section(
			new Section(
				'neve_free_pro_upsell',
				array(
					'priority' => -100,
					'title'    => esc_html__( 'Neve PRO Features', 'neve' ),
					'url'      => $this->upsell_url,
				),
				'Neve\Customizer\Controls\React\Upsell_Section'
			)
		);

		$this->add_section(
			new Section(
				'neve_scroll_to_top_upsell',
				array(
					'priority' => 80,
					'title'    => esc_html__( 'Scroll To Top', 'neve' ),
					'panel'    => 'neve_layout',
				)
			)
		);
	}

	/**
	 * Add upsells controls
	 */
	private function control_upsells() {
		$this->add_control(
			new Control(
				'neve_upsell_main_control',
				[ 'sanitize_callback' => 'sanitize_text_field' ],
				[
					'text'        => esc_html__( 'Neve PRO Features', 'neve' ),
					'button_text' => esc_html__( 'Learn More', 'neve' ),
					'section'     => 'neve_free_pro_upsell',
					'priority'    => PHP_INT_MIN,
					'link'        => $this->upsell_url,
				],
				'Neve\Customizer\Controls\Simple_Upsell'
			)
		);


		$this->add_control(
			new Control(
				'neve_scroll_to_top_cta_control',
				[ 'sanitize_callback' => 'sanitize_text_field' ],
				[
					/* translators: Module name for the upsell. */
					'text'        => sprintf( __( 'Unlock %s with the Pro version.', 'neve' ), __( 'Scroll To Top', 'neve' ) ),
					'button_text' => esc_html__( 'Get the PRO version!', 'neve' ),
					'section'     => 'neve_scroll_to_top_upsell',
					'priority'    => PHP_INT_MIN,
					'link'        => $this->upsell_url,
					'class'       => 'column-layout',
					'use_primary' => 'true',
				],
				'Neve\Customizer\Controls\Simple_Upsell'
			)
		);

		$this->add_control(
			new Control(
				'neve_scroll_to_top_upsell_control',
				[ 'sanitize_callback' => 'sanitize_text_field' ],
				[
					'section'  => 'neve_scroll_to_top_upsell',
					'priority' => 2,
				],
				'Neve\Customizer\Controls\Upsells\Scroll_To_Top_Control'
			)
		);

		$upsells         = [];
		$upsells_banners = [];

		$upsells_banners['blog_archive'] = [
			'text'        => __( 'More blog layout customization options available in PRO', 'neve' ),
			'button_text' => __( 'Learn More', 'neve' ),
			'use_logo'    => true,
			'section'     => 'neve_blog_archive_layout',
		];
		$upsells_banners['single_post']  = [
			'text'        => __( 'More single post components available in PRO', 'neve' ),
			'button_text' => __( 'Learn More', 'neve' ),
			'use_logo'    => true,
			'section'     => 'neve_single_post_layout',
		];


		$hfg_header                     = 'hfg_header';
		$hfg_header_text                = __( 'Extend your header with more components and settings, build sticky/transparent headers or display them conditionally.', 'neve' );
		$hfg_header_button              = __( 'Get the PRO version!', 'neve' );
		$upsells_banners[ $hfg_header ] = [
			'text'        => $hfg_header_text,
			'button_text' => $hfg_header_button,
			'use_logo'    => true,
			'panel'       => $hfg_header,
			'type'        => 'section',
		];

		foreach ( [ 'top', 'main', 'bottom', 'sidebar' ] as $section ) {
			$section_id                     = $hfg_header . '_layout_' . $section;
			$upsells_banners[ $section_id ] = [
				'text'        => $hfg_header_text,
				'button_text' => $hfg_header_button,
				'use_logo'    => true,
				'section'     => $section_id,
			];
		}

		$hfg_footer                     = 'hfg_footer';
		$hfg_footer_text                = __( 'Neve PRO Features', 'neve' );
		$hfg_footer_button              = __( 'Get the PRO version!', 'neve' );
		$upsells_banners[ $hfg_footer ] = [
			'text'        => $hfg_footer_text,
			'button_text' => $hfg_footer_button,
			'use_logo'    => true,
			'panel'       => $hfg_footer,
			'type'        => 'section',
		];
		foreach ( [ 'top', 'main', 'bottom' ] as $section ) {
			$section_id                     = $hfg_footer . '_layout_' . $section;
			$upsells_banners[ $section_id ] = [
				'text'        => $hfg_footer_text,
				'button_text' => $hfg_footer_button,
				'use_logo'    => true,
				'section'     => $section_id,
			];
		}


		if ( class_exists( 'WooCommerce', false ) ) {
			$upsells['product_catalog']       = [
				'text'        => __( 'More product catalog options available in PRO', 'neve' ) . ' (Business & Agency)',
				'button_text' => __( 'Learn More', 'neve' ),
				'section'     => 'woocommerce_product_catalog',
			];
			$upsells['woocommerce_checkout']  = [
				'text'        => __( 'More checkout options available in PRO', 'neve' ) . ' (Business & Agency)',
				'button_text' => __( 'Learn More', 'neve' ),
				'section'     => 'woocommerce_checkout',
			];
			$upsells['single_product_layout'] = [
				'text'        => __( 'More single product options available in PRO', 'neve' ) . ' (Business & Agency)',
				'button_text' => __( 'Learn More', 'neve' ),
				'section'     => 'neve_single_product_layout',
			];
			$upsells['typography']            = [
				'text'        => __( 'WooCommerce typography options available in PRO', 'neve' ) . ' (Business & Agency)',
				'button_text' => __( 'Learn More', 'neve' ),
				'panel'       => 'neve_typography',
				'type'        => 'section',
			];
		}

		$is_dismissed = get_transient( 'upsell_dismiss_banner_customizer' );
		if ( $is_dismissed === false ) {
			foreach ( $upsells_banners as $id => $args ) {
				if ( isset( $args['type'] ) && $args['type'] === 'section' ) {
					$section_id = 'neve_' . $id . '_upsell_section';
					$this->add_section(
						new Section(
							$section_id,
							array_merge(
								$args,
								[
									'type'     => 'neve_upsell_banner_section',
									'priority' => 10000,
									'nonce'    => wp_create_nonce( 'neve-upsell-banner-nonce' ),
									'url'      => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'panel-' . $args['panel'] ),
								]
							),
							'\Neve\Customizer\Controls\React\Upsell_Banner_Section'
						)
					);

					continue;
				}
				$control_id = 'neve_' . $id . '_upsell_banner_control';
				$this->add_control(
					new Control(
						$control_id,
						[ 'sanitize_callback' => 'sanitize_text_field' ],
						array_merge(
							$args,
							[
								'type'     => 'neve_upsell_banner',
								'priority' => 10000,
								'nonce'    => wp_create_nonce( 'neve-upsell-banner-nonce' ),
								'url'      => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'upsell-banner-customizer-section-' . $args['section'] ),
							]
						),
						'\Neve\Customizer\Controls\React\Upsell_Banner'
					)
				);
			}
		}

		foreach ( $upsells as $id => $args ) {
			if ( isset( $args['type'] ) && $args['type'] === 'section' ) {
				$this->add_section(
					new Section(
						'neve_' . $id . '_upsell_section',
						array_merge(
							$args,
							[
								'type'     => 'nv_simple_upsell_section',
								'priority' => 10000,
								'link'     => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'panel-' . $args['panel'] ),
							]
						),
						'\Neve\Customizer\Controls\Simple_Upsell_Section'
					)
				);

				return false;
			}
			$this->add_control(
				new Control(
					'neve_' . $id . '_upsell',
					[ 'sanitize_callback' => 'sanitize_text_field' ],
					array_merge(
						$args,
						[
							'priority' => 10000,
							'link'     => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'section-' . $args['section'] ),
						]
					),
					'Neve\Customizer\Controls\Simple_Upsell'
				)
			);
		}
	}
}
