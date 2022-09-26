<?php
/**
 * Class Server
 *
 * @package HFG\Rest;
 */
namespace HFG\Rest;

/**
 * Class Server
 * This class is responsible from the: In REST Posts List Endpoints; Allows listing posts which their title starts with the keyword that defined in the {self::PARAM_NAME} param
 */
class Server {
	/**
	 * Rest Endpoint Param Name to search post title.
	 */
	const PARAM_NAME = 'post_title_starts_with';

	/**
	 * Initialization
	 *
	 * @return void
	 */
	public function init() {
		do_action( 'neve_before_enable_title_starts_with' );

		$enable_title_starts_with = apply_filters( 'neve_rest_enable_title_starts_with', '__return_false' );
		if ( ! $enable_title_starts_with ) {
			return;
		}

		$abailable_post_types = get_post_types(
			[
				'public'       => true,
				'show_in_rest' => true,
			],
			'names',
			'and'
		);

		if ( empty( $abailable_post_types ) ) {
			return;
		}

		foreach ( $abailable_post_types as $post_type ) {
			add_filter( 'rest_' . $post_type . '_query', array( $this, 'add_arg_to_rest_endpoint' ), 10, 2 );
		}

		add_filter( 'posts_where', array( $this, 'allow_post_title_starts_keyword_search' ), 10, 2 );
	}

	/**
	 * Add a new rest param to endpoints.
	 *
	 * @param  array $args Current supported args.
	 * @param  array $request Request payload.
	 * @return array new args.
	 */
	public function add_arg_to_rest_endpoint( $args, $request ) {
		if ( ! isset( $request[ self::PARAM_NAME ] ) ) {
			return $args;
		}

		$args[ self::PARAM_NAME ] = $request[ self::PARAM_NAME ];

		return $args;
	}

	/**
	 * Alter the WP Query DB Select call, to able to lists posts which their post title starting with the given keyword.
	 *
	 * @param  string    $where  Current WHERE statement.
	 * @param  \WP_Query $wp_query Current WP_Query instance.
	 * @return string New WHERE statement that supports listing posts which their post title starts with the given keyword.
	 */
	public function allow_post_title_starts_keyword_search( $where, $wp_query ) {
		$search_keyword = $wp_query->get( self::PARAM_NAME );

		if ( ! isset( $search_keyword ) || $search_keyword === '' ) {
			return $where;
		}

		global $wpdb;
		$where .= $wpdb->prepare( " AND {$wpdb->posts}.post_title LIKE %s", $wpdb->esc_like( $search_keyword ) . '%' );

		return $where;
	}
}
