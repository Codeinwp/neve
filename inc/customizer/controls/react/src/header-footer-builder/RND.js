import { Rnd } from 'react-rnd';

const RND = () => {
	const layout = [
		{ i: 'a', x: 0, y: 0, w: 1, h: 1 },
		{ i: 'b', x: 1, y: 0, w: 3, h: 1 },
		{ i: 'c', x: 4, y: 0, w: 1, h: 1 },
	];

	return (
		<div className="hfg-builder">
			<div
				className="row"
				style={{ display: 'block', position: 'relative' }}
			>
				<Rnd
					style={{ backgroundColor: 'red', color: 'white' }}
					dragGrid={[10, 10]}
					enableResizing={{ right: true, left: true }}
					onResize={(e, direction, ref, delta, position) => {
						console.log(delta);
						console.log(position);
						console.log(e);
						// console.log(ref);
					}}
					bounds={'.hfg-builder'}
					// dragAxis={'x'}
					default={{
						x: 0,
						y: 0,
						width: '10%',
						height: '100%',
					}}
					maxWidth={'100%'}
				>
					Component test
				</Rnd>
				<Rnd
					style={{ backgroundColor: 'red', color: 'white' }}
					dragGrid={[10, 10]}
					enableResizing={{ right: true, left: true }}
					onResize={(e, direction, ref, delta, position) => {
						console.log(delta);
						console.log(position);
						console.log(e);
						// console.log(ref);
					}}
					bounds={'.hfg-builder'}
					// dragAxis={'x'}
					default={{
						x: 0,
						y: 0,
						width: '10%',
						height: '100%',
					}}
					maxWidth={'100%'}
				>
					Component test
				</Rnd>
			</div>
		</div>
	);
};

export default RND;
