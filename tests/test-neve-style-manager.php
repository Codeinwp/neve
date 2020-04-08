<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      05/10/2018
 *
 * @package neve
 */

use Neve\Core\Styles\Size_Subscriber;

/**
 * Class TestNeveStyleManager
 */
class TestNeveStyleManager extends WP_UnitTestCase {


	/**
	 * Test inline style building.
	 */
	public function testGeneric() {
		$css = ( new Neve\Core\Styles\Generator() )->generate();
		print( $css );
		$this->assertNotEmpty( $css );
	}
}
