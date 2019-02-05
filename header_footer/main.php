<?php

class Hf_Main {

	public $customizer;

	public function init() {
		$this->customizer = Hf_Customizer::get_instance();
		$this->customizer->init();
	}
}