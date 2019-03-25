/* jshint esversion: 6 */
import { initIntegrationToggle } from './integration-toggle.js';
import { initBodyManipulation } from './body-tweaks.js';

const init = function () {
  initIntegrationToggle();
  initBodyManipulation();
};

window.addEventListener('DOMContentLoaded', function () {
  init();
});