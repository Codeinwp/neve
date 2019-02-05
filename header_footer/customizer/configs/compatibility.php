<?php
if ( ! function_exists( 'Hf_customizer_compatibility_config' ) ) {
	/**
	 * Add compatibility panel.
	 *
	 * @param array $configs List customize settings.
	 *
	 * @return array
	 */
	function Hf_customizer_compatibility_config( $configs ) {

		$panel  = 'compatibility';
		$config = array(
			// Layout panel.
			array(
				'name'     => $panel . '_panel',
				'type'     => 'panel',
				'priority' => 100,
				'title'    => __( 'Compatibility', 'Hf' ),
			),

		);

		return array_merge( $configs, $config );
	}
}

add_filter( 'Hf/customizer/config', 'Hf_customizer_compatibility_config' );
