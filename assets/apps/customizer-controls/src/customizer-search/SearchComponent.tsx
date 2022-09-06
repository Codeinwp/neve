/* global  _wpCustomizeSettings wp */

import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

/**
 * Customizer Control Type
 */
export type Control = {
	section: string;
	panelName: string | null;
	sectionName: string;
	panel: string;
	label: string;
	instanceNumber: number;
};

/**
 * Customizer Section Type
 */
type Section = {
	id: string;
	panel: string;
	title: string;
};

/**
 * Customizer Panel Type
 */
type Panel = {
	id: string;
	title: string;
};

/**
 * Global for TypeScript
 */
declare global {
	const _wpCustomizeSettings: {
		controls: Control[];
		sections: Section[];
		panels: Panel[];
	};

	const wp: {
		customize: {
			section: (sectionName: string) => { expand: () => void };
		};
	};
}

/**
 * Type SearchComponentProps
 */
type SearchComponentProps = {
	isOpened: boolean;
	search: string;
	setSearch: (value: string) => void;
	setMatchResults: (value: Control[]) => void;
};

/**
 * Search Component
 * Handles search input, filtering and display of results.
 *
 * @param {SearchComponentProps} SearchComponentProps
 * @class
 */
const SearchComponent: React.FC<SearchComponentProps> = ({
	isOpened,
	search,
	setSearch,
	setMatchResults,
}) => {
	const customizerPanels = document.getElementById(
		'customize-theme-controls'
	);

	const controls = Object.values(_wpCustomizeSettings.controls).map(
		(control) => {
			Object.values(_wpCustomizeSettings.sections).forEach((section) => {
				if (control.section === section.id) {
					Object.values(_wpCustomizeSettings.panels).forEach(
						(panel) => {
							if ('' === section.panel) {
								control.panelName = section.title;
							}

							if (section.panel === panel.id) {
								control.sectionName = section.title;
								control.panel = section.panel;
								control.panelName = panel.title;
							}
						}
					);
				}
			});

			return control;
		}
	) as Control[];

	/**
	 * This `useEffect()` is being used to listen for the toggleEvent
	 * from `SearchToggle` component.
	 */
	useEffect(() => {
		if (isOpened) {
			document
				.getElementById('neve-customize-search-field')
				?.classList.add('visible');
			document.getElementById('nv-customizer-search-input')?.focus();
		} else {
			document
				.getElementById('neve-customize-search-field')
				?.classList.remove('visible');
			clearField();
		}
	}, [isOpened]);

	/**
	 * Clear the search input field.
	 *
	 * @return {void}
	 */
	const clearField = () => {
		setSearch('');
		document.getElementById('nv-customizer-search-input')?.focus();
		customizerPanels?.classList.remove('search-not-found');
	};

	/**
	 * Handle input field change.
	 *
	 * @param {Event} event
	 * @param {Event.target} event.target
	 * @param {string} event.target.value
	 * @return {void}
	 */
	const onInputChange = (event: { target: { value: string } }) => {
		const query = event.target.value;
		setSearch(query);
		const newResults = getControlsMatch(query);
		setMatchResults(newResults);
		if (query === '') {
			customizerPanels?.classList.remove('search-not-found');
		} else {
			customizerPanels?.classList.add('search-not-found');
		}

		if (newResults.length === 0) {
			customizerPanels?.classList.remove('search-not-found');
		}
	};

	/**
	 * Return all controls that match query.
	 *
	 * @param {string} query
	 * @return {Control[]} controls
	 */
	const getControlsMatch = (query: string) => {
		return controls.filter((control) => {
			if (!control.label) control.label = '';
			if (!control.panelName) control.panelName = '';
			if (!control.sectionName) control.sectionName = '';

			const matchQuery = query.replace(
				/[-[\]{}()*+?.,\\^$|#\s]/g,
				'\\$&'
			);
			const regex = new RegExp(matchQuery, 'gi');

			return (
				control.label.match(regex) ||
				control.panelName.match(regex) ||
				control.sectionName.match(regex)
			);
		});
	};

	return (
		<>
			<span className="accordion-section">
				<span className="search-input">
					{__('Search', 'neve') +
						' ' +
						__('Settings', 'neve').toLowerCase()}
				</span>
				<span className="nv-search-wrap">
					<input
						type="text"
						placeholder={__('Search', 'neve')}
						id="nv-customizer-search-input"
						className="nv-customizer-search-input"
						value={search}
						onChange={onInputChange}
					/>

					<Button
						label={__('Clear', 'neve')}
						isSmall
						isSecondary
						onClick={clearField}
					>
						{__('Clear', 'neve')}
						<span className="screen-reader-text">
							{__('Clear', 'neve')}
						</span>
					</Button>
				</span>
			</span>
		</>
	);
};

export default SearchComponent;
