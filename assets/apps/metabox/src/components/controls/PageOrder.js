import { useState } from '@wordpress/element'
import { maybeParseJson } from '../../../../customizer-controls/src/common/common'
import { BaseControl } from '@wordpress/components'
import SortableItems from './SortableItems';

const PageOrder = (props) => {
	const { getMetaValue, setMetaValue, data } = props;

	const maybeNormalizeData = (val, elements) => {
		if (typeof val === 'string') {
			val = JSON.parse(val);
		}
		const needNormalize =
			val.filter((e) => typeof e === 'string').length > 0;
		let normalizedData;
		if (needNormalize) {
			normalizedData = val.map((element) => {
				return { id: element, visible: true };
			});
		} else {
			normalizedData = val.map((element) => {
				return { id: element.id, visible: true };
			});
		}

		const disabledItems = Object.keys(elements)
			.filter((element) => {
				return (
					normalizedData.filter((el) => {
						return element === el.id;
					}).length === 0
				);
			})
			.map((element) => {
				return { id: element, visible: false };
			});

		return [...normalizedData, ...disabledItems];
	};

	const updateValue = (newVal) => {
		const dbValue = newVal
			.filter((element) => {
				return element.visible === true;
			})
			.map((element) => {
				return { id: element.id };
			});
		setValue(
			newVal.sort((x, y) => {
				if (x.visible === y.visible) {
					return 0;
				}
				if (x.visible) {
					return -1;
				}
				return 1;
			})
		);
		setMetaValue('neve_post_elements_order', JSON.stringify(dbValue));
	};

	const [value, setValue] = useState(
		maybeParseJson(
			maybeNormalizeData(
				getMetaValue('neve_post_elements_order') || data.default,
				data.elements
			)
		)
	);

	return (
		<BaseControl
			id="neve_post_elements_order"
			className="neve-meta-control neve-meta-sortable"
		>
			<SortableItems
				value={value}
				onUpdate={updateValue}
				elements={data.elements}
			/>
		</BaseControl>
	);
};

export default PageOrder;
