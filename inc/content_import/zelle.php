<?php
/**
 * Import Zelle to Elementor template.
 *
 * @package Neve\Content_Import
 */

namespace Neve\Content_Import;

use Neve\Admin\Plugin_Install\Main as Plugin_Install;


/**
 * Class to import Zelle to an Elementor template.
 *
 * @package Neve\Content_Import
 */
class Zelle {

	/**
	 * The page template name.
	 *
	 * @var string
	 */
	protected $name = 'Zelle Frontpage';

	/**
	 * The url from where we fetch the Elementor template.
	 *
	 * @var string
	 */
	protected $json_template_url = 'https://raw.githubusercontent.com/Codeinwp/obfx-templates/master/zerif-elementor/template.json';

	/**
	 * Previous theme content.
	 *
	 * @var array
	 */
	protected $previous_theme_content = array();

	/**
	 * Content.
	 *
	 * @var array
	 */
	protected $content = array();

	/**
	 * A property where we cache the content.
	 *
	 * @var array
	 */
	protected $default_content = array();

	/**
	 * Zelle constructor.
	 *
	 * @access public
	 * @since 1.1.86
	 */
	public function init() {
		add_action( 'after_switch_theme', array( $this, 'maybe_switched_from_zelle' ) );
		$content_was_imported = get_theme_mod( 'zelle_frontpage_was_imported' );
		if ( $content_was_imported !== 'no' ) {
			return;
		}
		add_action( 'admin_notices', array( $this, 'admin_notices' ) );
		add_action( 'wp_ajax_dismiss_zelle_import', array( $this, 'dismiss_zelle_import' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_notice_scripts' ) );
		add_action( 'wp_ajax_import_zelle_frontpage', array( $this, 'import_zelle_frontpage' ) );
	}

	/**
	 * In case the old theme wasn't Zerif, mark the importer flag to avoid printing the import notice.
	 */
	public function maybe_switched_from_zelle() {
		$old_theme = strtolower( get_option( 'theme_switched' ) );

		$content_imported = get_theme_mod( 'zelle_frontpage_was_imported', 'not-zerif' );
		if ( $content_imported === 'yes' ) {
			return;
		}

		if ( $content_imported === 'not-zerif' && in_array( $old_theme, array( 'zerif-pro', 'zerif-lite' ) ) ) {
			set_theme_mod( 'zelle_frontpage_was_imported', 'no' );
		}
		if ( ! in_array( $old_theme, array( 'zerif-pro', 'zerif-lite' ) ) ) {
			set_theme_mod( 'zelle_frontpage_was_imported', 'not-zerif' );
		}
	}

	/**
	 * Adds a dashboard notification which allows the user to install Elementor in case it's missing and
	 * convert the old Zelle front-page sections into a template.
	 */
	public function admin_notices() {

		// This notice should appear only for admin users.
		if (
			! is_admin()
			&& current_user_can( 'install_plugins' )
			&& current_user_can( 'activate_plugins' )
		) {
			return;
		}

		$installer_helper = Plugin_Install::instance();
		$installer_helper->enqueue_scripts();

		echo '<div class="notice notice-success is-dismissible import-zelle">';
		echo '<p>' . esc_html__( 'We detected that you previously had Zelle ( former Zerif ) installed.', 'neve' ) . '</p>';
		echo '<p>' . esc_html__( 'We can help you convert your Zelle front page into an Elementor template, so you can use it again.', 'neve' ) . '</p>';
		if ( 'deactivate' !== $installer_helper->check_plugin_state( 'elementor' ) ) {
			echo '<p>' . esc_html__( 'But first, we need to install and activate Elementor.', 'neve' ) . '</p>';
			echo '<p>' . $installer_helper->get_button_html( 'elementor' ) . '</p>';
		} else {
			echo '<p><a id="import-zelle-frontpage" class="button button-primary" href="#">';
			echo esc_html__( 'Import Zelle Front page as template ', 'neve' );
			echo '</a></p>';
		}
		echo '</div>';
	}

	/**
	 * Dismiss import notice
	 */
	public function dismiss_zelle_import() {
		$params = $_REQUEST;

		if ( ! isset( $params['nonce'] ) || ! wp_verify_nonce( $params['nonce'], 'dismiss_zelle_import' ) ) {
			wp_send_json_error( 'Wrong nonce' );
		}

		set_theme_mod( 'zelle_frontpage_was_imported', 'yes' );

		wp_send_json_success( 'Dismiss import' );

	}

	/**
	 * Enqueue import notice scripts.
	 */
	public function enqueue_notice_scripts() {
		if (
			! is_admin()
			&& current_user_can( 'install_plugins' )
			&& current_user_can( 'activate_plugins' )
		) {
			return;
		}

		wp_enqueue_script(
			'neve-import-notice',
			get_template_directory_uri() . '/inc/content_import/script.js',
			array( 'plugin-install' ),
			NEVE_VERSION
		);

		wp_localize_script(
			'neve-import-notice',
			'neveImport',
			array(
				'ajaxurl'      => admin_url( 'admin-ajax.php' ),
				'dismissNonce' => wp_create_nonce( 'dismiss_zelle_import' ),
				'importNonce'  => wp_create_nonce( 'import_zelle_frontpage' ),
			)
		);
	}

	/**
	 * The callback of an ajax request when the user requests an import action.
	 */
	public function import_zelle_frontpage() {

		$params = $_REQUEST;

		if ( ! isset( $params['nonce'] ) || ! wp_verify_nonce( $params['nonce'], 'import_zelle_frontpage' ) ) {
			wp_send_json_error( 'wrong nonce' );
		}

		$this->previous_theme_content = get_option( 'theme_mods_zerif-pro' );
		if ( empty( $this->previous_theme_content ) ) {
			$this->previous_theme_content = get_option( 'theme_mods_zerif-lite' );
		}

		require_once( ABSPATH . 'wp-admin' . '/includes/image.php' );
		require_once( ABSPATH . '/wp-admin/includes/file.php' );

		$template                   = download_url( esc_url( $this->json_template_url ) );
		$_FILES['file']['tmp_name'] = $template;

		global $wp_filesystem;

		WP_Filesystem();

		$data                  = json_decode( $wp_filesystem->get_contents( $template ), true );
		$this->default_content = $data['content'];
		$this->content         = $this->default_content;

		// we don't need a footer for this page
		unset( $this->content[9] );

		if ( empty( $data ) ) {
			wp_send_json_error( 'Invalid File.' );
		}

		$this->map_bigtitle_section();
		$this->map_our_focus_section();
		$this->map_about_us_section();
		$this->map_our_team_section();
		$this->map_testimonials_section();
		$this->map_ribbon_section();
		$this->map_latest_news_section();
		$this->map_contact_us_section();

		$data['title']   = $this->name;
		$data['content'] = array_values( $this->content );

		require_once( ABSPATH . 'wp-admin' . DIRECTORY_SEPARATOR . 'includes' . DIRECTORY_SEPARATOR . 'file.php' );

		$wp_filesystem->put_contents( $template, json_encode( $data ), 0644 );

		$elementor = new \Elementor\TemplateLibrary\Source_Local;

		$el_template_post = $elementor->import_template( $this->name, $template );

		if ( empty( $el_template_post ) ) {
			wp_send_json_error( 'cannot create template' );
		}

		$post_id = $this->insert_page( $el_template_post[0]['template_id'] );

		if ( $post_id ) {
			// * Mark the import as success and update the flag option to true.
			set_theme_mod( 'zelle_frontpage_was_imported', 'yes' );

			update_option( 'page_on_front', $post_id );
			update_option( 'show_on_front', 'page' );

			// on success we return the page url because we'll redirect to it.
			wp_send_json_success( get_permalink( $post_id ) );
		}

		wp_send_json_error( 'something went wrong' );

	}

	/**
	 * Returns the content from Our focus, Testimonials, Team and About in json format
	 *
	 * @param string $sidebar Sidebar name.
	 * @param string $prefix Prefix of widgets in that sidebar.
	 *
	 * @since 1.1.51
	 * @access private
	 * @return array|string
	 */
	private function get_sidebar_content( $widget_ids, $prefix ) {
		if ( empty( $widget_ids ) ) {
			return '';
		}
		$data_in_hestia_format = array();
		$ids_to_grab           = array();
		foreach ( $widget_ids as $widget_id ) {
			if ( strpos( $widget_id, $prefix ) !== false ) {
				$short_id_transient = explode( '-', $widget_id );
				$short_id           = end( $short_id_transient );
				array_push( $ids_to_grab, $short_id );
			}
		}
		$all_widgets = get_option( 'widget_' . $prefix . '-widget' );
		foreach ( $ids_to_grab as $key ) {
			$widget_data = array();
			if ( array_key_exists( $key, $all_widgets ) ) {
				$current_widget = $all_widgets[ $key ];
				if ( ! empty( $current_widget ) ) {
					$social_repeater = array();
					foreach ( $current_widget as $key => $value ) {
						$repeater_key = $this->get_key( $key );
						if ( ! empty( $value ) && ! empty( $repeater_key ) ) {
							if ( $repeater_key === 'social_repeater' ) {
								$social = $this->get_repeater_social( $key, $value );
								array_push( $social_repeater, $social );
							} else {
								$widget_data[ $repeater_key ] = $value;
							}
						}
					}
					$widget_data['social_repeater'] = json_encode( $social_repeater );
					$widget_data['choice']          = 'customizer_repeater_image';
				}
			}
			if ( ! empty( $widget_data ) ) {
				array_push( $data_in_hestia_format, $widget_data );
			}
		}

		return json_encode( $data_in_hestia_format );
	}

	/**
	 * Return content to add to social repeater. Used for team members.
	 *
	 * @param string $social_name Name of social link.
	 * @param string $value Link of social.
	 *
	 * @since 1.1.51
	 * @access private
	 * @return array
	 */
	private function get_repeater_social( $social_name, $value ) {
		$result = array(
			'icon' => '',
			'link' => $value,
		);
		switch ( $social_name ) {
			case 'fb_link':
				$result['icon'] = 'fa-facebook';
				break;
			case 'tw_link':
				$result['icon'] = 'fa-twitter';
				break;
			case 'bh_link':
				$result['icon'] = 'fa-behance';
				break;
			case 'db_link':
				$result['icon'] = 'fa-dribbble';
				break;
			case 'ln_link':
				$result['icon'] = 'fa-linkedin';
				break;
			case 'gp_link':
				$result['icon'] = 'fa-google-plus';
				break;
			case 'pinterest_link':
				$result['icon'] = 'fa-pinterest-p';
				break;
			case 'tumblr_link':
				$result['icon'] = 'fa-tumblr';
				break;
			case 'reddit_link':
				$result['icon'] = 'fa-reddit-alien';
				break;
			case 'youtube_link':
				$result['icon'] = 'fa-youtube';
				break;
			case 'instagram_link':
				$result['icon'] = 'fa-instagram';
				break;
			case 'website_link':
				$result['icon'] = 'fa-globe';
				break;
			case 'email_link':
				$result['icon'] = 'fa-envelope';
				break;
			case 'phone_link':
				$result['icon'] = 'fa-phone';
				break;
			case 'profile_link':
				$result['icon'] = 'fa-user';
				break;
		}

		return $result;
	}

	/**
	 * Map widgets inputs names to repeater inputs
	 *
	 * @param string $key Name of the inputs.
	 *
	 * @since 1.1.51
	 * @access private
	 * @return bool|string
	 */
	private function get_key( $key ) {
		$repeater_map = array(
			'image_url'       => array( 'image_url', 'image_uri' ),
			'title'           => array( 'title', 'name' ),
			'subtitle'        => array( 'subtitle', 'position', 'details' ),
			'text'            => array( 'text', 'description' ),
			'link'            => array( 'link' ),
			'social_repeater' => array(
				'fb_link',
				'tw_link',
				'bh_link',
				'db_link',
				'ln_link',
				'gp_link',
				'pinterest_link',
				'tumblr_link',
				'reddit_link',
				'youtube_link',
				'instagram_link',
				'website_link',
				'email_link',
				'phone_link',
				'profile_link',
			),
		);
		foreach ( $repeater_map as $k => $v ) {
			if ( in_array( $key, $v ) ) {
				return $k;
			}
		}

		return false;
	}

	/**
	 * Map the bigtitle options from Zerif theme_mod in the Elementor template.
	 */
	function map_bigtitle_section() {
		if ( isset( $this->previous_theme_content['zerif_bigtitle_show'] ) && $this->previous_theme_content['zerif_bigtitle_show'] ) {
			unset( $this->content[0] );

			return;
		}

		// background settings
		if ( ! empty( $this->previous_theme_content['background_image'] ) ) {
			$this->content[0]['settings']['background_image']['url'] = wp_kses_post( $this->previous_theme_content['background_image'] );
			$this->content[0]['settings']['background_image']['id']  = $this->get_image_id_by_url( $this->previous_theme_content['background_image'] );
		}

		if ( ! empty( $this->previous_theme_content['background_position_x'] ) && ! empty( $this->previous_theme_content['background_position_y'] ) ) {
			$this->content[0]['settings']['background_position'] = wp_kses_post( $this->previous_theme_content['background_position_x'] . ' ' . $this->previous_theme_content['background_position_y'] );
		}

		if ( ! empty( $this->previous_theme_content['background_attachment'] ) ) {
			$this->content[0]['settings']['background_attachment'] = wp_kses_post( $this->previous_theme_content['background_attachment'] );
		}

		// big title is always first.
		$data = $this->content[0]['elements'][0]['elements'];

		// heading settings
		$h_el = $data[0];
		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_title'] ) ) {
			$h_el['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_title'] );
		} elseif ( ! empty( $this->previous_theme_content['zerif_bigtitle_title_2'] ) ) {
			$h_el['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_title_2'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_header_color'] ) ) {
			$h_el['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_header_color'] );
		}
		$data[0] = $h_el;

		$buttons = $data[1]['elements'];

		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_redbutton_label'] ) ) {
			$buttons[0]['elements'][0]['settings']['text'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_redbutton_label'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_redbutton_label_2'] ) ) {
			$buttons[1]['elements'][0]['settings']['text'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_redbutton_label_2'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_redbutton_url'] ) ) {
			$buttons[0]['elements'][0]['settings']['href'] = esc_url( $this->previous_theme_content['zerif_bigtitle_redbutton_url'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_greenbutton_label'] ) ) {
			$buttons[1]['elements'][0]['settings']['text'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_greenbutton_label'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_greenbutton_url'] ) ) {
			$buttons[1]['elements'][0]['settings']['href'] = esc_url( $this->previous_theme_content['zerif_bigtitle_greenbutton_url'] );
		}

		// first button.
		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_1button_color'] ) ) {
			$buttons[0]['elements'][0]['settings']['button_text_color'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_1button_color'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_1button_color_hover'] ) ) {
			$buttons[0]['elements'][0]['settings']['hover_color'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_1button_color_hover'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_1button_background_color'] ) ) {
			$buttons[0]['elements'][0]['settings']['background_color'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_1button_background_color'] );
		}

		// second button.
		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_2button_color'] ) ) {
			$buttons[1]['elements'][0]['settings']['button_text_color'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_2button_color'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_2button_color_hover'] ) ) {
			$buttons[1]['elements'][0]['settings']['hover_color'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_2button_color_hover'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_2button_background_color'] ) ) {
			$buttons[1]['elements'][0]['settings']['background_color'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_2button_background_color'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_bigtitle_2button_background_color_hover'] ) ) {
			$buttons[1]['elements'][0]['settings']['button_background_hover_color'] = wp_kses_post( $this->previous_theme_content['zerif_bigtitle_2button_background_color_hover'] );
		}

		$data[1]['elements'] = $buttons;

		$this->content[0]['elements'][0]['elements'] = $data;
	}

	/**
	 * Map Our focus section.
	 */
	function map_our_focus_section() {
		if ( isset( $this->previous_theme_content['zerif_ourfocus_show'] ) && $this->previous_theme_content['zerif_ourfocus_show'] ) {
			unset( $this->content[1] );

			return;
		}

		if ( ! empty( $this->previous_theme_content['zerif_ourfocus_background'] ) ) {
			$this->content[1]['settings']['background_color'] = wp_kses_post( $this->previous_theme_content['zerif_ourfocus_background'] );
		}

		$data = $this->content[1]['elements'][0]['elements'];

		if ( ! empty( $this->previous_theme_content['zerif_ourfocus_title'] ) ) {
			$data[0]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_ourfocus_title'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_ourfocus_header'] ) ) {
			$data[0]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_ourfocus_header'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_ourfocus_subtitle'] ) ) {
			$data[1]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_ourfocus_subtitle'] );
		}

		$widget_ids = $this->previous_theme_content['sidebars_widgets']['data']['sidebar-ourfocus'];
		if ( empty( $widget_ids ) ) {
			return;
		}
		$content = $this->get_sidebar_content( $widget_ids, 'ctup-ads' );

		$old_values = json_decode( $content, true );

		if ( empty( $old_values ) ) {
			return;
		}

		$count_features = count( $old_values );

		$default_feature = $data[2]['elements'][0];

		$new_widgets = array();

		foreach ( $old_values as $index_key => $widget_data ) {
			$this_feature = $default_feature;

			// image
			if ( ! empty( $widget_data['image_url'] ) ) {
				$this_feature['elements'][0]['settings']['image']['url'] = $widget_data['image_url'];
				$this_feature['elements'][0]['settings']['image']['id']  = $this->get_image_id_by_url( $widget_data['image_url'] );
				$this_feature['elements'][0]['settings']['image_size']   = 'thumbnail';
				$this_feature['elements'][0]['settings']['link_to']      = $widget_data['link'];

				if ( ! empty( $widget_data['link'] ) ) {
					$this_feature['elements'][0]['settings']['link_to'] = 'custom';
					$this_feature['elements'][0]['settings']['url']     = $widget_data['link'];
				}

				// colors: this doesn't work with anything else than exactly 4 features; disabling for the moment.
				$this_feature['elements'][0]['settings']['_border_border']       = 'none';
				$this_feature['elements'][0]['settings']['_border_hover_border'] = 'none';
			}

			// title
			$this_feature['elements'][1]['settings']['title'] = $widget_data['title'];
			// description
			$this_feature['elements'][3]['settings']['editor'] = '<p style="text-align:center">' . $widget_data['text'] . '</p>';
			// recalculate box sizes
			$this_feature['settings']['_column_size'] = 25;
			$this_feature['settings']['_inline_size'] = round( 100 / $count_features );

			$this_feature['id'] = \Elementor\Utils::generate_random_string();

			$new_widgets[] = $this_feature;
		}

		$data[2]['elements'] = $new_widgets;

		$this->content[1]['elements'][0]['elements'] = $data;
	}

	/**
	 * Map About Us section.
	 */
	function map_about_us_section() {
		if ( isset( $this->previous_theme_content['zerif_aboutus_show'] ) && $this->previous_theme_content['zerif_aboutus_show'] ) {
			unset( $this->content[3] );

			return;
		}

		if ( ! empty( $this->previous_theme_content['zerif_aboutus_background'] ) ) {
			$this->content[3]['settings']['background_color'] = wp_kses_post( $this->previous_theme_content['zerif_aboutus_background'] );
		}

		$data = $this->content[3]['elements'][0]['elements'];

		$title = $data[0]['elements'][0]['elements'];

		if ( ! empty( $this->previous_theme_content['zerif_aboutus_title'] ) ) {
			$title[0]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_aboutus_title'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_aboutus_title_color'] ) ) {
			$title[0]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_aboutus_title_color'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_aboutus_subtitle'] ) ) {
			$title[1]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_aboutus_subtitle'] );
		}

		$data[0]['elements'][0]['elements'] = $title;

		$content = $data[1]['elements'];

		if ( ! empty( $this->previous_theme_content['zerif_aboutus_biglefttitle'] ) ) {
			$content[0]['elements'][0]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_aboutus_biglefttitle'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_aboutus_text'] ) ) {
			$content[1]['elements'][0]['settings']['editor'] = wp_kses_post( $this->previous_theme_content['zerif_aboutus_text'] );
		}

		$features = $content[2]['elements'];

		foreach ( $features as $key => $feature ) {

			if ( empty( $this->previous_theme_content[ 'zerif_aboutus_feature' . $key . '_text' ] ) ) {
				continue;
			}

			$features[ $key ]['settings']['title_text'] = $this->previous_theme_content[ 'zerif_aboutus_feature' . $key . '_title' ];
			// the `zerif_aboutus_feature1_nr` `zerif_aboutus_feature1_text` won't be imported
		}

		$content[2]['elements'] = $features;

		$data[1]['elements'] = $content;

		// we cannot import clients since they are custom widgets.
		unset( $data[2] );
		unset( $data[3] );

		$this->content[3]['elements'][0]['elements'] = $data;
	}

	/**
	 * Map Our Team section.
	 */
	function map_our_team_section() {
		if ( isset( $this->previous_theme_content['zerif_ourteam_show'] ) && $this->previous_theme_content['zerif_ourteam_show'] ) {
			unset( $this->content[4] );

			return;
		}

		$widget_ids = $this->previous_theme_content['sidebars_widgets']['data']['sidebar-ourteam'];
		if ( empty( $widget_ids ) ) {
			return;
		}
		$content = $this->get_sidebar_content( $widget_ids, 'zerif_team' );

		$old_widget = json_decode( $content, true );

		if ( ! empty( $this->previous_theme_content['zerif_ourteam_background'] ) ) {
			$this->content[4]['settings']['background_color'] = wp_kses_post( $this->previous_theme_content['zerif_ourteam_background'] );
		}

		$data = $this->content[4]['elements'][0]['elements'];

		// title $data[0]
		if ( ! empty( $this->previous_theme_content['zerif_ourteam_title'] ) ) {
			$data[0]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_ourteam_title'] );
			// now the color
			if ( ! empty( $this->previous_theme_content['zerif_ourteam_header'] ) ) {
				$data[0]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_ourteam_header'] );
			}
		}

		// subtitle $data[1]
		if ( ! empty( $this->previous_theme_content['zerif_ourteam_subtitle'] ) ) {
			$data[1]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_ourteam_subtitle'] );
			// now the color
			if ( ! empty( $this->previous_theme_content['zerif_ourteam_text'] ) ) {
				$data[1]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_ourteam_text'] );
			}
		}

		if ( ! empty( $old_widget ) ) {
			$widgets_nr   = count( $old_widget );
			$default_team = $data[2]['elements'][0];
			$new_widgets  = array();
			foreach ( $old_widget as $index => $widget ) {
				$new_team = $default_team;

				if ( ! empty( $widget['image_url'] ) ) {
					$new_team['elements'][0]['settings']          = $this->map_widget_image( $new_team['elements'][0]['settings'], $widget['image_url'] );
					$new_team['elements'][0]['settings']['align'] = 'center';
				}

				$color_key = 'zerif_ourteam_' . ( $index + 1 ) . 'box';
				if ( ! empty( $this->previous_theme_content[ $color_key ] ) ) {
					$new_team['elements'][0]['settings']['_border_color'] = wp_kses_post( $this->previous_theme_content[ $color_key ] );
					$new_team['elements'][2]['settings']['color']         = wp_kses_post( $this->previous_theme_content[ $color_key ] );
				}

				if ( ! empty( $widget['title'] ) ) {
					$new_team['elements'][1]['settings']['title'] = $widget['title'];
				}

				if ( ! empty( $widget['subtitle'] ) ) {
					$new_team['elements'][3]['settings']['editor'] = wp_kses_post( '<p style="text-align: center;">' . $widget['subtitle'] . '</p>' );
				}

				if ( ! empty( $widget['text'] ) ) {
					$new_team['elements'][3]['settings']['editor'] = wp_kses_post( '<p style="text-align: center;">' . $widget['subtitle'] . '</p>' );
				}

				if ( ! empty( $this->previous_theme_content['zerif_ourteam_socials'] ) ) {
					$new_team['elements'][4]['settings']['icon_secondary_color'] = wp_kses_post( $this->previous_theme_content['zerif_ourteam_socials'] );

					if ( ! empty( $this->previous_theme_content['zerif_ourteam_socials_hover'] ) ) {
						$new_team['elements'][4]['settings']['hover_secondary_color'] = wp_kses_post( $this->previous_theme_content['zerif_ourteam_socials_hover'] );
					}
				}

				if ( ! empty( $widget['social_repeater'] ) ) {
					$social_links = json_decode( $widget['social_repeater'], true );

					foreach ( $social_links as $social_index => $social_link ) {
						$new_link = array(
							'social' => 'fa ' . $social_link['icon'],
							'link'   => array(
								'is_external' => false,
								'nofollow'    => false,
								'url'         => $social_link['link'],
							),
							'_id'    => \Elementor\Utils::generate_random_string(),
						);

						$new_team['elements'][4]['settings']['social_icon_list'][ $social_index ] = $new_link;
					}
				}

				$new_team['id']                       = \Elementor\Utils::generate_random_string();
				$new_team['settings']['_column_size'] = round( 100 / $widgets_nr );
				$new_team['settings']['_inline_size'] = round( 100 / $widgets_nr );
				$new_widgets[]                        = $new_team;
			}

			$data[2]['elements'] = $new_widgets;
		}

		$this->content[4]['elements'][0]['elements'] = $data;
	}

	/**
	 * Map Testimonials section.
	 */
	function map_testimonials_section() {
		if ( isset( $this->previous_theme_content['zerif_testimonials_show'] ) && $this->previous_theme_content['zerif_testimonials_show'] ) {
			unset( $this->content[5] );

			return;
		}

		$data = $this->content[5]['elements'][0]['elements'];

		if ( ! empty( $this->previous_theme_content['zerif_testimonials_background'] ) ) {
			$this->content[5]['settings']['background_color'] = wp_kses_post( $this->previous_theme_content['zerif_testimonials_background'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_testimonials_title'] ) ) {
			$data[0]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_testimonials_title'] );

			if ( ! empty( $this->previous_theme_content['zerif_testimonials_header'] ) ) {
				$data[0]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_testimonials_header'] );
			}
		}

		if ( ! empty( $this->previous_theme_content['zerif_testimonials_subtitle'] ) ) {
			$data[1]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_testimonials_subtitle'] );
		}

		$widget_ids = $this->previous_theme_content['sidebars_widgets']['data']['sidebar-testimonials'];
		if ( empty( $widget_ids ) ) {
			return;
		}
		$content = $this->get_sidebar_content( $widget_ids, 'zerif_testim' );

		$old_data = json_decode( $content, true );

		if ( ! empty( $old_data ) ) {
			$default_widget = $data[2]['elements'][0];
			$new_widgets    = array();

			$widgets_nr = count( $old_data );

			foreach ( $old_data as $testimonial_index => $testimonial ) {
				$this_widget = $default_widget;

				// testimonial content.
				if ( ! empty( $testimonial['text'] ) ) {
					$this_widget['elements'][0]['settings']['editor'] = wp_kses_post( $testimonial['text'] );
				}

				// name
				if ( ! empty( $testimonial['title'] ) ) {
					$this_widget['elements'][2]['settings']['editor'] = wp_kses_post( '<p>' . $testimonial['title'] . '</p>' );
				}

				if ( ! empty( $testimonial['image_url'] ) ) {
					$this_widget['elements'][3]['settings']                  = $this->map_widget_image( $this_widget['elements'][3]['settings'], $testimonial['image_url'] );
					$this_widget['elements'][3]['settings']['width']['size'] = 100;
				}

				// a job title?
				// $this_widget['elements'][4]['settings']['icon'];
				$this_widget['settings']['_column_size'] = round( 100 / $widgets_nr );

				$new_widgets[] = $this_widget;
			}

			$data[2]['elements'] = $new_widgets;
		}

		$this->content[5]['elements'][0]['elements'] = $data;
	}

	/**
	 * Map Ribbons section.
	 */
	function map_ribbon_section() {
		if ( ! empty( $this->previous_theme_content['zerif_ribbon_background'] ) ) {
			$this->content[2]['settings']['background_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbon_background'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_ribbonright_background'] ) ) {
			$this->content[6]['settings']['background_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbonright_background'] );
		}

		// plain ribbon
		$ribbon = $this->content[2]['elements'][0]['elements'];

		if ( ! empty( $this->previous_theme_content['zerif_bottomribbon_text'] ) ) {
			$ribbon[0]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_bottomribbon_text'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_ribbon_text_color'] ) ) {
			$ribbon[0]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbon_text_color'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_ribbon_text_color'] ) ) {
			$ribbon[0]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbon_text_color'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_bottomribbon_buttonlabel'] ) ) {
			$ribbon[1]['settings']['text'] = wp_kses_post( $this->previous_theme_content['zerif_bottomribbon_buttonlabel'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_bottomribbon_buttonlink'] ) ) {
			$ribbon[1]['settings']['url'] = wp_kses_post( $this->previous_theme_content['zerif_bottomribbon_buttonlink'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_ribbon_button_background'] ) ) {
			$ribbon[1]['settings']['background_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbon_button_background'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_ribbon_button_background_hover'] ) ) {
			$ribbon[1]['settings']['button_background_hover_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbon_button_background_hover'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_ribbon_button_button_color'] ) ) {
			$ribbon[1]['settings']['button_text_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbon_button_button_color'] );
		}

		$this->content[2]['elements'][0]['elements'] = $ribbon;

		// right ribbon.
		$right_ribbon = $this->content[6]['elements'];

		if ( ! empty( $this->previous_theme_content['zerif_ribbonright_text'] ) ) {
			$right_ribbon[0]['elements'][0]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_ribbonright_text'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_ribbonright_text_color'] ) ) {
			$right_ribbon[0]['elements'][0]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbonright_text_color'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_ribbonright_buttonlabel'] ) ) {
			$right_ribbon[1]['elements'][0]['settings']['text'] = wp_kses_post( $this->previous_theme_content['zerif_ribbonright_buttonlabel'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_ribbonright_buttonlink'] ) ) {
			$right_ribbon[1]['elements'][0]['settings']['url'] = wp_kses_post( $this->previous_theme_content['zerif_ribbonright_buttonlink'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_ribbonright_button_background'] ) ) {
			$right_ribbon[1]['elements'][0]['settings']['background_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbonright_button_background'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_ribbonright_button_background_hover'] ) ) {
			$right_ribbon[1]['elements'][0]['settings']['button_background_hover_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbonright_button_background_hover'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_ribbonright_button_background_hover'] ) ) {
			$right_ribbon[1]['elements'][0]['settings']['button_background_hover_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbonright_button_background_hover'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_ribbonright_button_button_color'] ) ) {
			$right_ribbon[1]['elements'][0]['settings']['button_text_color'] = wp_kses_post( $this->previous_theme_content['zerif_ribbonright_button_button_color'] );
		}

		$this->content[6]['elements'] = $right_ribbon;
	}

	/**
	 * Map latest news.
	 */
	function map_latest_news_section() {
		if ( ! isset( $this->previous_theme_content['zerif_latest_news_show'] ) || ! $this->previous_theme_content['zerif_latest_news_show'] ) {
			unset( $this->content[7] );

			return;
		}

		if ( ! empty( $this->previous_theme_content['zerif_latestnews_background'] ) ) {
			$this->content[7]['settings']['background_color'] = wp_kses_post( $this->previous_theme_content['zerif_latestnews_background'] );
		}

		$data = $this->content[7]['elements'][0]['elements'];

		// title
		if ( ! empty( $this->previous_theme_content['zerif_latestnews_title'] ) ) {
			$data[0]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_latestnews_title'] );

			if ( ! empty( $this->previous_theme_content['zerif_latestnews_header_title_color'] ) ) {
				$data[0]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_latestnews_header_title_color'] );
			}
		}

		// subtitle
		if ( ! empty( $this->previous_theme_content['zerif_latestnews_subtitle'] ) ) {
			$data[1]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_latestnews_subtitle'] );

			if ( ! empty( $this->previous_theme_content['zerif_latestnews_header_subtitle_color'] ) ) {
				$data[1]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_latestnews_header_subtitle_color'] );
			}
		}

		// latest posts widget
		if ( ! empty( $this->previous_theme_content['zerif_latestnews_post_title_color'] ) ) {
			$data[2]['settings']['grid_title_style_color'] = wp_kses_post( $this->previous_theme_content['zerif_latestnews_post_title_color'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_latestnews_post_text_color'] ) ) {
			$data[2]['settings']['grid_content_style_color'] = wp_kses_post( $this->previous_theme_content['zerif_latestnews_post_text_color'] );
		}

		$this->content[7]['elements'][0]['elements'] = $data;
	}

	/**
	 * Map Contact us section.
	 */
	function map_contact_us_section() {
		if ( isset( $this->previous_theme_content['zerif_contactus_show'] ) && $this->previous_theme_content['zerif_contactus_show'] ) {
			unset( $this->content[0] );

			return;
		}

		$data = $this->content[8]['elements'][0]['elements'];

		if ( ! empty( $this->previous_theme_content['zerif_contactus_title'] ) ) {
			$data[0]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_contactus_title'] );
			if ( ! empty( $this->previous_theme_content['zerif_contacus_header'] ) ) {
				$data[0]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_contacus_header'] );
			}
		}

		if ( ! empty( $this->previous_theme_content['zerif_contactus_subtitle'] ) ) {
			$data[1]['settings']['title'] = wp_kses_post( $this->previous_theme_content['zerif_contactus_subtitle'] );
			if ( ! empty( $this->previous_theme_content['zerif_contacus_header'] ) ) {
				$data[0]['settings']['title_color'] = wp_kses_post( $this->previous_theme_content['zerif_contacus_header'] );
			}
		}

		if ( ! empty( $this->previous_theme_content['zerif_contactus_email'] ) ) {
			$data[2]['settings']['to_send_email'] = wp_kses_post( $this->previous_theme_content['zerif_contactus_email'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_contactus_button_label'] ) ) {
			$data[2]['settings']['submit_label'] = wp_kses_post( $this->previous_theme_content['zerif_contactus_button_label'] );
		}

		if ( ! empty( $this->previous_theme_content['zerif_contactus_name_placeholder'] ) ) {
			$data[2]['settings']['form_fields'][0]['placeholder'] = wp_kses_post( $this->previous_theme_content['zerif_contactus_name_placeholder'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_contactus_email_placeholder'] ) ) {
			$data[2]['settings']['form_fields'][1]['placeholder'] = wp_kses_post( $this->previous_theme_content['zerif_contactus_email_placeholder'] );
		}
		if ( ! empty( $this->previous_theme_content['zerif_contactus_subject_placeholder'] ) ) {
			$data[2]['settings']['form_fields'][2]['placeholder'] = wp_kses_post( $this->previous_theme_content['zerif_contactus_message_placeholder'] );
			$data[2]['settings']['form_fields'][2]['key']         = 'subject';
			$data[2]['settings']['form_fields'][2]['type']        = 'text';
		}
		if ( ! empty( $this->previous_theme_content['zerif_contactus_message_placeholder'] ) ) {
			$data[2]['settings']['form_fields'][3]['placeholder'] = wp_kses_post( $this->previous_theme_content['zerif_contactus_message_placeholder'] );
		}

		$this->content[8]['elements'][0]['elements'] = $data;
	}

	/**
	 * This function maps a image id and url to an Elementor widget array and it returns the mapped array.
	 *
	 * @param array  $widget The element array.
	 * @param string $url The image url to import.
	 *
	 * @return array
	 */
	function map_widget_image( $widget, $url ) {
		$widget['image']['url'] = $url;
		$widget['image']['id']  = $this->get_image_id_by_url( $url );
		$widget['image_size']   = 'thumbnail';

		return $widget;
	}

	/**
	 * Returns the attachment id for an certain attachment url.
	 *
	 * @param string $attachment_url The attachment url for which we search the id.
	 *
	 * @return bool|null|string|void
	 */
	function get_image_id_by_url( $attachment_url = '' ) {
		global $wpdb;
		$attachment_id = false;

		// If there is no url, return.
		if ( '' == $attachment_url ) {
			return;
		}

		// Get the upload directory paths
		$upload_dir_paths = wp_upload_dir();

		// Make sure the upload path base directory exists in the attachment URL, to verify that we're working with a media library image
		if ( false !== strpos( $attachment_url, $upload_dir_paths['baseurl'] ) ) {

			// If this is the URL of an auto-generated thumbnail, get the URL of the original image
			$attachment_url = preg_replace( '/-\d+x\d+(?=\.(jpg|jpeg|png|gif)$)/i', '', $attachment_url );

			// Remove the upload path base directory from the attachment URL
			$attachment_url = str_replace( $upload_dir_paths['baseurl'] . '/', '', $attachment_url );

			// Finally, run a custom database query to get the attachment ID from the modified attachment URL
			$attachment_id = $wpdb->get_var( $wpdb->prepare( "SELECT wposts.ID FROM $wpdb->posts wposts, $wpdb->postmeta wpostmeta WHERE wposts.ID = wpostmeta.post_id AND wpostmeta.meta_key = '_wp_attached_file' AND wpostmeta.meta_value = %s AND wposts.post_type = 'attachment'", $attachment_url ) );

		}

		return $attachment_id;
	}

	/**
	 * This method seeks for the imported Elementor template and creates a page based on it's content.
	 *
	 * @param number $id The Elementor template id.
	 *
	 * @return bool|int|WP_Error
	 */
	private function insert_page( $id ) {
		$args = array(
			'post_type'        => 'elementor_library',
			'nopaging'         => true,
			'posts_per_page'   => '1',
			'suppress_filters' => true,
			'post__in'         => array( $id ),
		);

		$query = new \WP_Query( $args );

		$last_template_added = $query->posts[0];
		// get template id
		$template_id = $last_template_added->ID;

		wp_reset_query();
		wp_reset_postdata();

		// page content
		$page_content = $last_template_added->post_content;
		// meta fields
		$elementor_data_meta      = get_post_meta( $template_id, '_elementor_data' );
		$elementor_ver_meta       = get_post_meta( $template_id, '_elementor_version' );
		$elementor_edit_mode_meta = get_post_meta( $template_id, '_elementor_edit_mode' );
		$elementor_css_meta       = get_post_meta( $template_id, '_elementor_css' );
		$elementor_metas          = array(
			'_elementor_data'      => ! empty( $elementor_data_meta[0] ) ? wp_slash( $elementor_data_meta[0] ) : '',
			'_elementor_version'   => ! empty( $elementor_ver_meta[0] ) ? $elementor_ver_meta[0] : '',
			'_elementor_edit_mode' => ! empty( $elementor_edit_mode_meta[0] ) ? $elementor_edit_mode_meta[0] : '',
			'_elementor_css'       => $elementor_css_meta,
		);

		// Create post object
		$new_template_page = array(
			'post_type'     => 'page',
			'post_title'    => $this->name,
			'post_status'   => 'publish',
			'post_content'  => $page_content,
			'meta_input'    => $elementor_metas,
			'page_template' => apply_filters( 'template_directory_default_template', 'page-templates/template-pagebuilder-full-width.php' ),
		);

		// * Insert a new page.
		$post_id = wp_insert_post( $new_template_page );

		if ( is_wp_error( $post_id ) ) {
			return false;
		}

		return $post_id;
	}
}