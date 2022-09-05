/* global  _wpCustomizeSettings wp */

import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

/**
 * Customizer Control Type
 */
type Control = {
	section: string;
	panelName: string | null;
	sectionName: string;
	panel: string;
	label: string;
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
};

/**
 * Search Component
 * Handles search input, filtering and display of results.
 *
 * @param {SearchComponentProps} SearchComponentProps
 * @class
 */
const SearchComponent: React.FC<SearchComponentProps> = ({ isOpened }) => {
	const [search, setSearch] = useState('');
	const [resultsHTML, setResultsHTML] = useState('');
	const [matchResults, setMatchResults] = useState([] as Control[]);

	const customizerPanels = document.getElementById(
		'customize-theme-controls'
	);
	const searchResults = document.getElementById(
		'neve-customize-search-results'
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
	 * This `useEffect()` only handles displaying results for the search;
	 */
	useEffect(() => {
		if (search === '') {
			clearField();
			return;
		}
		if (matchResults.length === 0) {
			return;
		}
		displayQueryMatch(search);
	}, [matchResults, search]);

	/**
	 * This `useEffect()` only handles adding and removing event listeners to redirect to desired sections;
	 */
	useEffect(() => {
		if (searchResults) {
			searchResults.innerHTML = `<ul id="customizer-search-results">${resultsHTML}</ul>`;
			const searchSettings = document.querySelectorAll(
				'#customizer-search-results .accordion-section'
			);
			searchSettings.forEach((setting) =>
				setting.addEventListener('click', expandSection)
			);
		}

		return () => {
			const searchSettings = document.querySelectorAll(
				'#customizer-search-results .accordion-section'
			);
			searchSettings.forEach((setting) =>
				setting.removeEventListener('click', expandSection)
			);
		};
	}, [resultsHTML]);

	/**
	 * Clear the search input field.
	 *
	 * @return {void}
	 */
	const clearField = () => {
		setSearch('');
		document.getElementById('nv-customizer-search-input')?.focus();

		customizerPanels?.classList.remove('search-not-found');
		if (searchResults) {
			searchResults.innerHTML = '';
		}
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
	};

	/**
	 * Handle redirect to specific section on click.
	 *
	 * @param {Event} evt
	 * @return {void}
	 */
	const expandSection = (evt: Event) => {
		if (evt === null) {
			return;
		}
		const target = evt.target as HTMLElement;
		const targetParent = target.parentNode as HTMLElement;
		const sectionName =
			target.getAttribute('data-section') ||
			(targetParent.getAttribute('data-section') as string);
		const section = wp.customize.section(sectionName);
		clearField();
		section.expand();
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

			const regex = new RegExp(query, 'gi');

			return (
				control.label.match(regex) ||
				control.panelName.match(regex) ||
				control.sectionName.match(regex)
			);
		});
	};

	/**
	 * Handles results HTML generation.
	 *
	 * @param {string} query
	 * @return {void}
	 */
	const displayQueryMatch = (query: string) => {
		if (0 === matchResults.length) return;

		const htmlString = matchResults
			.map((control) => {
				if ('' === control.label) return '';

				let breadcrumbs = control.panelName;
				if ('' !== control.sectionName) {
					breadcrumbs = `${breadcrumbs} ▸ ${control.sectionName}`;
				}

				const regex = new RegExp(`(${query})`, 'gi');

				const label = control.label.replace(
					regex,
					'<span class="hl">$1</span>'
				);

				if (breadcrumbs !== null) {
					breadcrumbs = breadcrumbs.replace(
						regex,
						'<span class="hl">$1</span>'
					);
				}

				return `
					<li id="accordion-section-${control.section}" class="accordion-section control-section control-section-default" aria-owns="sub-accordion-section-${control.section}" data-section="${control.section}">
						<h3 class="accordion-section-title" tabindex="0">
							${label}
							<span class="screen-reader-text">Press return or enter to open this section</span>
						</h3>
						<span class="search-setting-path">${breadcrumbs}</i></span>
					</li>
				`;
			})
			.join('');

		customizerPanels?.classList.add('search-not-found');
		setResultsHTML(htmlString);
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
