<?php
/**
 * Navbar view template.
 *
 * @package Neve
 */
?>

<nav class="nv-navbar" role="navigation">
	<div class="container">
		<div class="row">
			<div class="col-md-12 nv-nav-wrap <?php echo esc_attr( $args['navbar_class'] ); ?>">
				<div class="nv-nav-header">
					<div class="site-logo">
						<a class="brand" href="<?php echo esc_url( $args['home_url'] ); ?>" title="<?php bloginfo( 'name' ); ?>">
							<?php echo wp_kses_post( $args['logo'] ); ?>
						</a>
					</div> <!--.site-logo-->
					<div class="navbar-toggle-wrapper">
						<?php neve_before_navbar_toggle_trigger(); ?>
						<button class="navbar-toggle" <?php echo wp_kses_post( apply_filters( 'neve_nav_toggle_data_attrs', '' ) ); ?>
								aria-label="<?php _e( 'Navigation Menu', 'neve' ); ?>" aria-expanded="false">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="screen-reader-text"><?php esc_html_e( 'Toggle Navigation', 'neve' ); ?></span>
						</button>
						<?php echo $args['responsive_last_menu_item']; ?>
						<?php neve_after_navbar_toggle_trigger(); ?>
					</div> <!--.navbar-toggle-wrapper-->
				</div><!--.nv-nav-header-->
				<?php echo $args['primary_menu']; ?>
			</div> <!--.nv-nav-wrap-->
		</div> <!--.row-->
	</div> <!--.container-->
</nav>
