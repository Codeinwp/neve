/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import { useState, useEffect } from '@wordpress/element';
import GridLayout from 'react-grid-layout';
import Custom from './Custom';
const HFGBuilder = ({ control }) => {
	return (
		<div className="hfg-builder">
			<Custom />
		</div>
	);
};

export default HFGBuilder;
