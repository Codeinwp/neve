<?php
/**
 * Limited offers utility class.
 *
 * Author:          Soare Robert Danial <robert.soare@themeisle.com>
 * Created on:      17/10/2023
 *
 * @package Neve\Core
 */

namespace Neve\Core;

use Exception;

/**
 * Class LimitedOffers
 */
class Limited_Offers {

	/**
	 * Active deal.
	 *
	 * @var string
	 */
	private $active = '';

	/**
	 * The key for WP Options to disable the dashboard notification.
	 *
	 * @var string
	 */
	public $wp_option_dismiss_notification_key_base = 'dismiss_themeisle_notice_event_';

	/**
	 * Metadata for announcements.
	 *
	 * @var array
	 */
	public $assets = array();

	/**
	 * Timeline for the offers.
	 *
	 * @var array
	 */
	public $announcements = array();

	/**
	 * LimitedOffers constructor.
	 */
	public function __construct() {
		$this->announcements = apply_filters( 'themeisle_sdk_announcements', array() );

		if ( empty( $this->announcements ) || ! is_array( $this->announcements ) ) {
			return;
		}

		try {
			foreach ( $this->announcements as $announcement => $event_data ) {
				if ( false !== strpos( $announcement, 'black_friday' ) ) {
					if (
						empty( $event_data ) ||
						! is_array( $event_data ) ||
						empty( $event_data['active'] ) ||
						empty( $event_data['neve_dashboard_url'] ) ||
						! isset( $event_data['urgency_text'] )
					) {
						continue;
					}

					$this->active = $announcement;
					$this->prepare_black_friday_assets( $event_data );
				}
			}
		} catch ( Exception $e ) {
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				error_log( $e->getMessage() ); // phpcs:ignore
			}
		}
	}

	/**
	 * Load hooks for the dashboard.
	 *
	 * @return void
	 */
	public function load_dashboard_hooks() {

		if ( empty( $this->assets['globalNoticeUrl'] ) ) {
			return;
		}

		add_filter( 'themeisle_products_deal_priority', array( $this, 'add_priority' ) );
		add_action( 'admin_notices', array( $this, 'render_notice' ) );
		add_action( 'wp_ajax_dismiss_themeisle_event_notice_neve', array( $this, 'disable_notification_ajax' ) );
	}

	/**
	 * Check if we have an active deal.
	 *
	 * @return bool True if the deal is active.
	 */
	public function is_active() {
		return ! empty( $this->active );
	}


	/**
	 * Activate the Black Friday deal.
	 *
	 * @param array $data Event data.
	 *
	 * @return void
	 */
	public function prepare_black_friday_assets( $data ) {
		$this->assets = array_merge(
			$this->assets,
			array(
				'bannerUrl'                => get_template_directory_uri() . '/assets/img/dashboard/black-friday-banner.png',
				'bannerAlt'                => 'Neve Black Friday Sale',
				'bannerStoreUrl'           => esc_url_raw( $data['neve_dashboard_url'] ),
				'customizerBannerUrl'      => get_template_directory_uri() . '/assets/img/dashboard/black-friday-customizer-banner.png',
				'customizerBannerAlt'      => 'Neve Black Friday Sale',
				'customizerBannerStoreUrl' => esc_url_raw( $data['neve_customizer_url'] ),
				'urgencyText'              => $data['urgency_text'],
			)
		);
	}

	/**
	 * Get the slug of the active deal.
	 *
	 * @return string Active deal.
	 */
	public function get_active_deal() {
		return $this->active;
	}

	/**
	 * Get the localized data for the plugin.
	 *
	 * @return array Localized data.
	 */
	public function get_localized_data() {
		return array_merge(
			array(
				'active'   => $this->is_active(),
				'dealSlug' => $this->get_active_deal(),
			),
			$this->assets
		);
	}

	/**
	 * Disable the notification via ajax.
	 *
	 * @return void
	 */
	public function disable_notification_ajax() {
		if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'dismiss_themeisle_event_notice_neve' ) ) {
			wp_die( 'Invalid nonce! Refresh the page and try again.' );
		}

		// We record the time and the plugin of the dismissed notification.
		update_option( $this->wp_option_dismiss_notification_key_base . $this->active, 'neve_' . $this->active . '_' . current_time( 'Y_m_d' ) );
		wp_die( 'success' );
	}

	/**
	 * Render the dashboard banner.
	 *
	 * @return void
	 */
	public function render_notice() {

		if ( ! $this->has_priority() ) {
			return;
		}

		$message = 'Neve <strong>Black Friday Sale</strong> - Save big with a <strong>Lifetime License</strong> of Neve Agency Plan. <strong>Only 100 licenses</strong>, for a limited time!';

		?>
		<style>
			.themeisle-sale {
				padding: 10px 15px;

				display: flex;
				align-items: center;

				opacity: 1;
				transition: opacity 0.8s ease-out;
			}
			.themeisle-sale svg {
				margin-right: 15px;
				min-width: 24px;
			}

			.themeisle-sale-error {
				color: red;
			}
			.themeisle-sale.hidden {
				opacity: 0;
			}
			.themeisle-sdk-notice:is([id*="review"]) { /* Do not show the review notice when the sale is active. */
				display: none;
			}
		</style>
		<div class="themeisle-sale notice notice-info is-dismissible">
			<div class="notice-dismiss"></div>
			<svg width="24" height="24" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.198486H61V59.9128H0.5V0.198486ZM25.0305 30.0698V44.2415H17.7858V15.4382C17.7858 15.2989 17.8281 15.2013 17.9129 15.1456C17.9976 15.0899 18.1529 15.1595 18.3789 15.3546L36.4696 30.0698V15.8145H43.7143V44.6596C43.7143 44.8268 43.672 44.9313 43.5872 44.9731C43.5025 45.0149 43.3472 44.9383 43.1212 44.7432L25.0305 30.0698ZM43.7143 48.9127H17.7858V51.2699H43.7143V48.9127Z" fill="#0073AA"/>
			</svg>

			<span>
				<?php echo wp_kses_post( $message ); ?>
				<a href="<?php echo esc_url( ! empty( $this->assets['globalNoticeUrl'] ) ? $this->assets['globalNoticeUrl'] : '' ); ?>" target="_blank" rel="external noreferrer noopener">
					Learn more
				</a>
			</span>
			<span class="themeisle-sale-error"></span>
		</div>
		<script type="text/javascript">
			window.document.addEventListener( 'DOMContentLoaded', () => {
				const button = document.querySelector( '.themeisle-sale.notice .notice-dismiss' );
				button?.addEventListener( 'click', e => {
					e.preventDefault();
					fetch('<?php echo esc_url( admin_url( 'admin-ajax.php' ) ); ?>', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						body: new URLSearchParams({
							action: 'dismiss_themeisle_event_notice_neve',
							nonce: '<?php echo esc_attr( wp_create_nonce( 'dismiss_themeisle_event_notice_neve' ) ); ?>'
						})
					})
						.then(response => response.text())
						.then(response => {
							if ( ! response?.includes( 'success' ) ) {
								document.querySelector( '.themeisle-sale-error' ).innerHTML = response;
								return;
							}

							document.querySelectorAll( '.themeisle-sale.notice' ).forEach( el => {
								el.classList.add( 'hidden' );
								setTimeout( () => {
									el.remove();
								}, 800 );
							});
						})
						.catch(error => {
							console.error( 'Error:', error );
							document.querySelector( '.themeisle-sale-error' ).innerHTML = error;
						});
				});
			});
		</script>
		<?php
	}

	/**
	 * Check if we can show the dashboard banner. Since it is shared between themes, the user need only to dismiss it once.
	 *
	 * @return bool
	 */
	public function can_show_dashboard_banner() {
		return ! get_option( $this->wp_option_dismiss_notification_key_base . $this->active, false );
	}

	/**
	 * Add product priority to the filter.
	 *
	 * @param array $products Registered products.
	 * @return array Array enhanced with Neve priority.
	 */
	public function add_priority( $products ) {
		$products['neve'] = 0;
		return $products;
	}

	/**
	 * Check if the current product has priority.
	 * Use this for conditional rendering if you want to show the banner only for one product.
	 *
	 * @return bool True if the current product has priority.
	 */
	public function has_priority() {
		$products = apply_filters( 'themeisle_products_deal_priority', [] );

		if ( empty( $products ) ) {
			return true;
		}

		$highest_priority = array_search( min( $products ), $products );
		return 'neve' === $highest_priority;
	}
}
