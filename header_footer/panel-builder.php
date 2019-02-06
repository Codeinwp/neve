<?php

class HeaderFooterPanelBuilder {
	public function __construct() {
		$this->load();
		$this->init();
	}

	public function load() {
		$path = get_template_directory();
		require_once $path . '/header_footer/layout-builder.php';
	}

	public function init() {
		$layout_builder = new HeaderFooterLayoutBuilder();
		$layout_builder->init();
	}
}

new HeaderFooterPanelBuilder();