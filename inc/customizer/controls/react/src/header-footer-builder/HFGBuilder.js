/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import { useState, useEffect } from '@wordpress/element';
import GridLayout from 'react-grid-layout';
import RND from './RND';
import SortableHOC from './HOC';
import DND from './DND';
const HFGBuilder = () => {
	return <DND />;
};

export default HFGBuilder;
