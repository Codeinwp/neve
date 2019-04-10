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
/**
 * Class Manager
 *
 * @package HFG\Core\Settings
 */
class Manager {

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
	 * @var Defaults $_defaults
	 */
	private static $_defaults = [];
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
		'group'             => false,
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
	 * @param null                       $group Group to load.
	 * @param \WP_Customize_Manager|null $customize_manager Manager object.
	 *
	 * @return \WP_Customize_Manager Customizer object.
	 */
	public function load( $group = null, \WP_Customize_Manager $customize_manager = null ) {
		static $core_transports = [
			'refresh'     => true,
			'postMessage' => true,
		];
		foreach ( $this->get_settings_group( $group ) as $id ) {

			if ( ! isset( self::$settings[ $id ] ) ) {
				continue;
			}
			$arguments = self::$settings[ $id ];
			$transport = isset( $core_transports[ $arguments['transport'] ] ) ? $arguments['transport'] : $this->handle_transport( $arguments['transport'], $id );

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

			if ( ! isset( $arguments['type'] ) ) {
				continue;
			}
			$type = $arguments['type'];

			$control_args = array_merge(
				[
					'label'   => isset( $arguments['label'] ) ? $arguments['label'] : '',
					'section' => isset( $arguments['section'] ) ? $arguments['section'] : '',
				],
				isset( $arguments['options'] ) ? $arguments['options'] : []
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
		}

		return $customize_manager;
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
	 * Get settings groupd for a certain partial to refresh.
	 *
	 * @param string $id Selective refresh main id.
	 *
	 * @return mixed|null Transport group.
	 */
	public function get_transport_group( $id ) {

		return isset( self::$transport_groups[ $id ] ) ? self::$transport_groups[ $id ] : null;
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
			return get_theme_mod( $id, $default );
		}
		if ( isset( self::$settings[ $id ]['preview_default'] ) && is_customize_preview() ) {
			return get_theme_mod( $id, self::$settings[ $id ]['preview_default'] );
		}
		if ( isset( self::$settings[ $id ]['default'] ) ) {
			return get_theme_mod( $id, self::$settings[ $id ]['default'] );
		}

		return get_theme_mod( $id );
	}
}
