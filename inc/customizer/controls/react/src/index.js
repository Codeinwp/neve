/* jshint esversion: 6 */
/* global wp */
import { ToggleControl } from './toggle/Control.js';
import { BackgroundControl } from './background/Control.js';
import { SpacingControl } from './spacing/Control.js';
import './style.scss';

wp.customize.controlConstructor.neve_toggle_control = ToggleControl;
wp.customize.controlConstructor.neve_background_control = BackgroundControl;
wp.customize.controlConstructor.neve_spacing = SpacingControl;
