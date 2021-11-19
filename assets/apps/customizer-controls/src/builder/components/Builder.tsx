import React from 'react';
import { BuilderContentInterface, RowTypes } from '../../@types/utils';
import Row from './Row';
import ResponsiveSwitches from './ResponsiveSwitches';
import classnames from 'classnames';
import { useContext, useEffect } from '@wordpress/element';
import BuilderContext from '../BuilderContext';

type Props = {
	value: BuilderContentInterface;
	hidden: boolean;
	portalMount: HTMLElement | null;
};

const Builder: React.FC<Props> = ({ value, hidden, portalMount }) => {
	const { device, builder, hasColumns } = useContext(BuilderContext);
	const { rows } = window.NeveReactCustomize.HFG[builder];
	const items = { ...value[device] };

	const preview: HTMLElement | null =
		document.querySelector('#customize-preview');

	// Remove preview offset.
	useEffect(() => {
		return () => {
			if (preview === null) {
				return;
			}
			preview.style.maxHeight = '';
			preview.style.marginTop = '';
		};
	}, []);

	const adaptPreviewHeight = (scroll = false) => {
		const builderNode: HTMLElement | null =
			portalMount?.querySelector('.neve-builder') || null;

		if (builderNode === null || preview === null) {
			return;
		}

		if (hidden) {
			preview.style.maxHeight = '';
			preview.style.marginTop = '';
			return;
		}

		const height = builderNode.offsetHeight;
		preview.style.maxHeight = `calc(100vh - ${height}px)`;
		preview.style.marginTop = '0';

		if (!scroll) {
			return;
		}

		if (builder === 'footer') {
			setTimeout(() => {
				window.wp.customize.previewer.send('scroll', 100000000);
			}, 150);

			return;
		}

		// Scroll to top if we're using another builder (header, page-header)
		setTimeout(() => {
			window.wp.customize.previewer.send('scroll', 0);
		}, 150);
	};

	// Offset preview to make space for builder.
	useEffect(() => {
		setTimeout(() => {
			adaptPreviewHeight(true);
		}, 100);
	}, [hidden]);

	useEffect(() => {
		window.wp.customize.previewer.bind(
			'selective-refresh-setting-validities',
			() => {
				adaptPreviewHeight();
			}
		);
	}, [hidden]);

	const builderClasses = classnames('neve-builder', {
		hide: hidden,
		'columns-builder': hasColumns,
	});

	return (
		<div className={builderClasses}>
			<ResponsiveSwitches device={device} />
			<div className="rows-wrapper">
				{rows.sidebar && device !== 'desktop' && (
					<div className="vertical-rows">
						<Row rowId="sidebar" items={items.sidebar} />
					</div>
				)}
				<div className="horizontal-rows">
					{Object.keys(rows).map((rowId, rowIndex) => {
						if (rowId === 'sidebar') {
							return null;
						}

						return (
							<Row
								key={rowIndex}
								rowId={rowId as RowTypes}
								items={items[rowId] || []}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Builder;
