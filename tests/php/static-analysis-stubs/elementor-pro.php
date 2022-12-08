<?php

namespace ElementorPro\Base {
    abstract class Module_Base extends \Elementor\Core\Base\Module {}
}

namespace ElementorPro\Modules\ThemeBuilder {
    class Module extends \ElementorPro\Base\Module_Base {}
}

namespace ElementorPro\Modules\ThemeBuilder\Classes {
    class Locations_Manager {
        /**
         * @return void
         */
        public function register_all_core_location() {}
        
        /**
         * do_location
         *
         * @param  string $location
         * @return bool
         */
        public function do_location( $location ) {}
    }

    class Conditions_Manager{
        /**
         * get_cache
         *
         * @return \ElementorPro\Modules\ThemeBuilder\Classes\Conditions_Cache
         */
        public function get_cache() {}
    }

    class Conditions_Cache {
    }
}

namespace {
    /**
     * elementor_theme_do_location
     *
     * @param  string $location
     * @return bool
     */
    function elementor_theme_do_location( $location ) {}
}