import { useState, useEffect, Component } from '@wordpress/element';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';

const GS = () => {
	// _________________________________________________
	// Initialize Gridstack inside useEffect so that DOM is rendered when its initialized
	// _________________________________________________
	useEffect(() => {
		const grid = GridStack.init({
			float: true,
			cellHeight: '70px',
			maxRow: 3,
		});
	});
	// _________________________________________________
	// _________________________________________________

	return (
		<div className="App">
			<div className="grid-stack">
				<div
					className="grid-stack-item border-dark"
					data-gs-width="1"
					data-gs-height="1"
				>
					<div className="grid-stack-item-content">Item 1</div>
				</div>
				<div
					className="grid-stack-item border-dark"
					data-gs-width="1"
					data-gs-height="1"
				>
					<div className="grid-stack-item-content">Item 2</div>
				</div>
				<div
					className="grid-stack-item border-dark"
					data-gs-width="1"
					data-gs-height="1"
				>
					<div className="grid-stack-item-content">Item 3</div>
				</div>
			</div>
		</div>
	);
};
/*

class GS extends Component {
	state = {
		count: 0,
		info: '',
		items: [
			{ x: 2, y: 1, h: 2 },
			{ x: 2, y: 4, w: 3 },
			{ x: 4, y: 2 },
			{ x: 3, y: 1, h: 2 },
			{ x: 0, y: 6, w: 2, h: 2 },
		],
	};

	componentDidMount() {
		// Provides access to the GridStack instance across the React component.
		this.grid = GridStack.init({
			float: true,
			cellHeight: '70px',
			maxRow: 1,
		});

		this.state.items.map((i) => {
			this.grid.makeWidget(i);
		});

		this.grid.on('dragstop', (event, element) => {
			const node = element.gridstackNode;
			this.setState({
				info: `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`,
			});

			// Clear the info text after a two second timeout.
			// Clears previous timeout first.
			window.clearTimeout(this.timerId);
			this.timerId = window.setTimeout(() => {
				this.setState({
					info: '',
				});
			}, 2000);
		});
	}

	addNewWidget = () => {
		const node = this.state.items[this.state.count] || {
			x: Math.round(12 * Math.random()),
			y: Math.round(5 * Math.random()),
			w: Math.round(1 + 3 * Math.random()),
			h: Math.round(1 + 3 * Math.random()),
		};
		node.id = node.content = String(this.state.count);
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
		this.grid.addWidget(node);
	};

	render() {
		console.log(this.grid);
		return (
			<div className="hfg-builder">
				<h1>How to integrate GridStack.js with React.js</h1>
				<p>
					As with any virtualDOM-based framework, you need to check if
					React has rendered the DOM (or any updates to it)
					<strong>before</strong> you initialize GridStack or call its
					methods. As a basic example, check this component's
					<code>mounted</code> hook.
				</p>
				<p>
					If your app requires more complex render logic than the
					inline template in `addWidget`, consider&nbsp;
					<a href="https://github.com/gridstack/gridstack.js/tree/develop/doc#makewidgetel">
						makeWidget
					</a>
					&nbsp;to let React deal with DOM rendering.
				</p>
				<button type="button" onClick={this.addNewWidget}>
					Add Widget
				</button>
				{this.state.info}
				<section className="grid-stack"></section>
			</div>
		);
	}
}
*/

export default GS;
