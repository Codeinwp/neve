<?php
/**
 * Settings manager for HFG builder.
 *
 * @package     HFG
 * @copyright   Copyright (c) 2017, Marius Cristea
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       1.1.0
 */

namespace HFG\Core\Settings;

use Neve\Customizer\Controls\Tabs;
use Neve\Core\Settings\Mods;

/**
 * Class Manager
 *
 * @package HFG\Core\Settings
 */
class Manager {

	const TAB_GENERAL = 'general';
	const TAB_LAYOUT  = 'layout';
	const TAB_STYLE   = 'style';

	/**
	 * Holds an instance of this class.
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var Manager $_instance
	 */
	private static $_instance = null;
	/**
	 * Holds a defaults definition.
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var Defaults $_defaults (Defaults class implements to \ArrayAccess, it can be used an array)
	 */
	private static $_defaults;
	/**
	 * Used to save the register settings ids and their defaults.
	 *
	 * @var array Array of registered settings.
	 */
	private static $settings = [];
	/**
	 * Save group mappings.
	 *
	 * @var array Array of registered grups.
	 */
	private static $groups = [];
	/**
	 * Save tabs mappings.
	 *
	 * @var array Array of registered tabs.
	 */
	private static $tabs = [];
	/**
	 * Transport groups.
	 *
	 * @var array Array of registered transport groups.
	 */
	private static $transport_groups = null;

	/**
	 * Define required and optional fields.
	 *
	 * @var array Field array.
	 */
	private $fields = [
		'id'                => true,
		'section'           => false,
		'type'              => false,
		'label'             => false,
		'description'       => false,
		'group'             => false,
		'tab'               => false,
		'transport'         => false,
		'sanitize_callback' => false,
		'preview_default'   => false,
		'default'           => false,
	];


	/**
	 * Returns the instance of the class.
	 *
	 * @return Manager
	 * @since   1.0.0
	 * @access  public
	 */
	public static function get_instance() {
		if ( null === self::$_instance ) {
			self::$_instance = new self();
			self::$_defaults = new Defaults();
		}

		return self::$_instance;
	}

	/**
	 * Load settings/control group in customizer.
	 *
	 * @param string|null                $group Group to load.
	 * @param \WP_Customize_Manager|null $customize_manager Manager object.
	 *
	 * @return \WP_Customize_Manager Customizer object.
	 */
	public function load( $group = null, \WP_Customize_Manager $customize_manager = null ) {
		static $core_transports = [
			'refresh'     => true,
			'postMessage' => true,
		];
		$section                = '';
		foreach ( $this->get_settings_group( $group ) as $id ) {

			if ( ! isset( self::$settings[ $id ] ) ) {
				continue;
			}
			$arguments = self::$settings[ $id ];

			if ( isset( $arguments['live_refresh_css_prop'] ) && isset( $arguments['live_refresh_css_prop']['cssVar'] ) && neve_is_new_skin() ) {
				$transport = 'postMessage';
			} else {
				$transport = isset( $core_transports[ $arguments['transport'] ] ) ? $arguments['transport'] : $this->handle_transport( $arguments['transport'], $id );
			}

			$customize_manager->add_setting(
				$id,
				array(
					'default'           => $arguments['preview_default'],
					'theme_supports'    => Config::get_support(),
					'transport'         => $transport,
					'sanitize_callback' =>
						isset( $arguments['sanitize_callback'] )
							? $arguments['sanitize_callback']
							: 'wp_filter_nohtml_kses',
				)
			);

			if ( isset( $arguments['settings'] ) ) {
				foreach ( array_keys( $arguments['settings'] ) as $setting ) {
					if ( $setting === 'default' ) {
						continue;
					}

					$data = $arguments[ 'setting_' . $setting ] ?? [];
					$customize_manager->add_setting(
						$arguments['settings'][ $setting ],
						array(
							'default'           => $data['default'] ?? '',
							'theme_supports'    => Config::get_support(),
							'transport'         => isset( $core_transports[ $data['transport'] ] ) ? $data['transport'] : $this->handle_transport( $data['transport'], $arguments['settings'][ $setting ] ),
							'sanitize_callback' => $data['sanitize_callback'] ?? 'wp_filter_nohtml_kses',
						)
					);
				}
			}

			if ( ! isset( $arguments['type'] ) ) {
				continue;
			}
			$type = $arguments['type'];

			$control_args = array_merge(
				[
					'label'       => isset( $arguments['label'] ) ? $arguments['label'] : '',
					'description' => isset( $arguments['description'] ) ? $arguments['description'] : '',
					'section'     => isset( $arguments['section'] ) ? $arguments['section'] : '',
				],
				isset( $arguments['options'] ) ? $arguments['options'] : [],
				isset( $arguments['settings'] ) ? [ 'settings' => $arguments['settings'] ] : []
			);

			if ( ! is_subclass_of( $type, '\WP_Customize_Control' ) ) {
				$control_args['type'] = $type;
				$customize_manager->add_control(
					$id,
					$control_args
				);
			} else {
				$customize_manager->add_control(
					new $type(
						$customize_manager,
						$id,
						$control_args
					)
				);
			}

			$section = $arguments['section'];
		}

		$args = array(
			'priority' => - 100,
			'section'  => $section,
			'tabs'     => array(
				self::TAB_GENERAL => array(
					'label' => esc_html__( 'General', 'neve' ),
					'icon'  => 'admin-generic',
				),
				self::TAB_LAYOUT  => array(
					'label' => esc_html__( 'Layout', 'neve' ),
					'icon'  => 'layout',
				),
				self::TAB_STYLE   => array(
					'label' => esc_html__( 'Style', 'neve' ),
					'icon'  => 'admin-customizer',
				),
			),
			'controls' => $this->get_tabs_group( $group ),
		);

		if ( in_array(
			$section,
			[
				'hfg_header_layout_section',
				'hfg_footer_layout_section',
				'hfg_page_header_layout_section',
			],
			true
		) ) {
			return $customize_manager;
		}

		foreach ( $args['tabs'] as $tab => $values ) {
			$tabs = $this->get_tabs_group( $group );
			if ( empty( $tabs[ $tab ] ) ) {
				unset( $args['tabs'][ $tab ] );
			}
		}

		$customize_manager->add_setting(
			$group . '_tabs',
			array(
				'theme_supports'    => Config::get_support(),
				'transport'         => 'refresh',
				'sanitize_callback' => 'wp_filter_nohtml_kses',
			)
		);
		$customize_manager->add_control(
			new Tabs(
				$customize_manager,
				$group . '_tabs',
				$args
			)
		);

		return $customize_manager;
	}

	/**
	 * Utility method to define existing controls for component tabs.
	 *
	 * @param string $id The ID for the tab.
	 * @param array  $tabs List of tab and controls to use.
	 *
	 * @since   1.0.1
	 * @access  public
	 */
	public function add_controls_to_tabs( $id, $tabs = array() ) {
		self::$tabs[ $id ] = array_merge_recursive(
			array(
				self::TAB_GENERAL => array(),
				self::TAB_LAYOUT  => array(),
				self::TAB_STYLE   => array(),
			),
			$tabs
		);
	}

	/**
	 *
	 * Get settings assigned to certain group
	 *
	 * @param string $id Group id.
	 *
	 * @return array|mixed Settings ids.
	 */
	public function get_settings_group( $id ) {
		return isset( self::$groups[ $id ] ) ? self::$groups[ $id ] : [];
	}

	/**
	 *
	 * Get tabs assigned to certain group
	 *
	 * @param string $id Group id.
	 *
	 * @return array|mixed Settings ids.
	 */
	public function get_tabs_group( $id ) {
		return isset( self::$tabs[ $id ] ) ? self::$tabs[ $id ] : [];
	}

	/**
	 * Assign setting to selective refresh partial based on the setting transport.
	 *
	 * It's using this format `post<component_id|builder_id|row_id>`.
	 *
	 * @param string $transport Transport type.
	 * @param string $id Component id.
	 *
	 * @return string Core transport.
	 */
	public function handle_transport( $transport, $id ) {

		$group_name = substr( $transport, 4 );

		if ( ! isset( self::$transport_groups[ $group_name ] ) ) {
			self::$transport_groups[ $group_name ] = [];
		}

		self::$transport_groups[ $group_name ][] = $id;

		return 'postMessage';

	}

	/**
	 * Method used to add settings to to customizer.
	 *
	 * TODO: Define arguments schema.
	 *
	 * @param array $arguments Component arguments.
	 *
	 * @return bool;
	 */
	public function add( $arguments = array() ) {


		if ( count( array_diff_key( array_filter( $this->fields ), $arguments ) ) !== 0 ) {
			return false;
		}

		$id = ( ( ! isset( $arguments['noformat'] ) || $arguments['noformat'] === false ) && isset( $arguments['group'] )
				? $arguments['group'] . '_'
				: '' ) . $arguments['id'];

		$default = ( isset( $arguments['default'] )
			? $arguments['default']
			: '' );

		$preview_default = isset( $arguments['preview_default'] )
			? $arguments['preview_default']
			: $default;

		if ( isset( self::$_defaults[ $id ] ) ) {
			$default         = self::$_defaults[ $id ];
			$preview_default = $default;
		}

		if ( isset( $arguments['group'] ) ) {
			if ( ! isset( self::$groups[ $arguments['group'] ] ) ) {
				self::$groups[ $arguments['group'] ] = [];
			}
			self::$groups[ $arguments['group'] ][] = $id;

			if ( isset( $arguments['tab'] ) && in_array(
				$arguments['tab'],
				array(
					self::TAB_GENERAL,
					self::TAB_LAYOUT,
					self::TAB_STYLE,
				),
				true
			) ) {
				if ( ! isset( self::$tabs[ $arguments['group'] ][ $arguments['tab'] ] ) ) {
					self::$tabs[ $arguments['group'] ][ $arguments['tab'] ] = [];
				}
				self::$tabs[ $arguments['group'] ][ $arguments['tab'] ][ $id ] = array();
			}
		}
		if ( isset( $arguments['use_dynamic_fields'] ) ) {
			add_filter(
				'neve_react_controls_localization',
				function ( $array ) use ( $arguments ) {
					$array['dynamicTags']['controls'][ $arguments['group'] . '_' . $arguments['id'] ] = $arguments['use_dynamic_fields'];

					return $array;
				}
			);
		}
		if ( isset( $arguments['live_refresh_selector'] ) && $arguments['live_refresh_selector'] !== false ) {
			add_filter(
				'neve_customize_preview_localization',
				function ( $array ) use ( $arguments ) {
					$args = [];

					if ( ! isset( $array[ $arguments['type'] ] ) ) {
						$array[ $arguments['type'] ] = [];
					}

					if ( isset( $arguments['live_refresh_selector'] ) ) {
						$args['selector'] = $arguments['live_refresh_selector'];
					}

					if ( isset( $arguments['live_refresh_css_prop'] ) ) {
						$args['additional'] = $arguments['live_refresh_css_prop'];
					}

					$array[ $arguments['type'] ][ $arguments['group'] . '_' . $arguments['id'] ] = $args;

					return $array;
				}
			);
		}

		if ( isset( $arguments['conditional_header'] ) && $arguments['conditional_header'] === true ) {
			add_filter(
				'neve_react_controls_localization',
				function ( $array ) use ( $id, $default ) {
					$array['headerControls'][ $id ] = $default;

					return $array;
				}
			);
			if ( defined( 'NEVE_PRO_VERSION' ) ) {
				add_filter(
					'neve_pro_react_controls_localization',
					function ( $array ) use ( $id ) {
						$array['headerControls'][] = $id;

						return $array;
					}
				);
			}
		}

		self::$settings[ $id ] = array_merge(
			$arguments,
			[
				'default'         => $default,
				'preview_default' => $preview_default,
			]
		);

		return true;
	}

	/**
	 * Get settings grouped for a certain partial to refresh.
	 *
	 * @param string $id Selective refresh main id.
	 *
	 * @return mixed|null Transport group.
	 */
	public function get_transport_group( $id ) {

		return isset( self::$transport_groups[ $id ] ) ? self::$transport_groups[ $id ] : null;
	}

	/**
	 * Return registered default.
	 *
	 * @param string      $id Setting id.
	 * @param null|string $subkey Subkey, if any.
	 *
	 * @return mixed|null
	 */
	public function get_default( $id, $subkey = null ) {
		return isset( self::$settings[ $id ]['default'] )
			? ( $subkey === null
				? self::$settings[ $id ]['default']
				: ( isset( self::$settings[ $id ]['default'][ $subkey ] )
					? self::$settings[ $id ]['default'][ $subkey ]
					: null
				) )
			: null;
	}

	/**
	 * Get setting value based on context.
	 *
	 * @param string $id Setting id.
	 * @param mixed  $default Default value.
	 *
	 * @return mixed Mod value.
	 */
	public function get( $id, $default = null ) {
		if ( null !== $default ) {
			return Mods::get( $id, $default );
		}
		if ( isset( self::$settings[ $id ]['preview_default'] ) && is_customize_preview() ) {
			return Mods::get( $id, self::$settings[ $id ]['preview_default'] );
		}
		if ( isset( self::$settings[ $id ]['default'] ) ) {
			return Mods::get( $id, self::$settings[ $id ]['default'] );
		}

		return get_theme_mod( $id );
	}
}
