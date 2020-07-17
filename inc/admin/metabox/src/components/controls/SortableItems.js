import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const { Component } = wp.element;

const SortableItem = sortableElement(({value}) => <li>{value}</li>);

const SortableContainer = sortableContainer(({children}) => {
	return <ul>{children}</ul>;
});

class SortableItems extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [ 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6' ]
		};
		this.onSortEnd = this.onSortEnd.bind(this);
	}

	onSortEnd({oldIndex, newIndex}) {
		this.setState(({items}) => ({
			items: arrayMove(items, oldIndex, newIndex)
		}));
	};

	render() {
		const {items} = this.state;

		return (
			<SortableContainer onSortEnd={this.onSortEnd}>
				{items.map((value, index) => (
					<SortableItem key={`item-${value}`} index={index} value={value} />
				))}
			</SortableContainer>
		);
	}
}

export {SortableItems};
