import RGL, { WidthProvider } from 'react-grid-layout';
const ReactGridLayout = WidthProvider(RGL);
import { useState } from '@wordpress/element';

const SortableHOC = () => {
	const defaultProps = {
		className: 'layout',
		items: 20,
		rowHeight: 30,
		onLayoutChange() {},
		cols: 12,
	};

	const onLayoutChange = (layout) => {
		console.log(layout);
	};

	const layout = [
		{ i: 'a', x: 1, y: 0, w: 1, h: 1 },
		{ i: 'b', x: 2, y: 0, w: 1, h: 1 },
		{ i: 'c', x: 3, y: 0, w: 1, h: 1 },
	];

	return (
		<div className="hfg-builder">
			<ReactGridLayout
				className="row"
				rowHeight={30}
				compactType={'horizontal'}
				rows={1}
				layout={layout}
				onLayoutChange={onLayoutChange}
				resizeHandles={['e', 'w']}
				isDroppable={true}
				onDrop={(p, e) => {
					console.log(p, e);
				}}
			>
				{layout.map((i, index) => (
					<div className="item" draggable={true} key={i.i}>
						<span className="text">{i.i}</span>
					</div>
				))}
			</ReactGridLayout>{' '}
			<ReactGridLayout
				className="row"
				rowHeight={30}
				compactType={'horizontal'}
				rows={1}
				layout={layout}
				onLayoutChange={onLayoutChange}
				resizeHandles={['e', 'w']}
				isDroppable={true}
				onDrop={(p, e) => {
					console.log(p, e);
				}}
			>
				{layout.map((i, index) => (
					<div className="item" draggable={true} key={i.i}>
						<span className="text">{i.i}</span>
					</div>
				))}
			</ReactGridLayout>
		</div>
	);
};

export default SortableHOC;
