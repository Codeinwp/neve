import { ColorPicker } from '@wordpress/components';

const dataToColors = (oldColors, { source, valueKey, value }) => {
	if (source === 'hex') {
		return {
			source,
			[source]: value,
		};
	}
	return {
		source,
		...{ ...oldColors[source], ...{ [valueKey]: value } },
	};
};

const isValueEmpty = (data) => {
	if (data.source === 'hex' && data.hex === undefined) {
		return true;
	}

	if (
		data.source === 'hsl' &&
		(data.h === undefined || data.s === undefined || data.l === undefined)
	) {
		return true;
	}

	/**
	 * Check that if source is `rgb`:
	 * `r`, `g` or `b` properties are not undefined
	 * OR (||) `h`, `s`, `v` or `a` properties are not undefined
	 * OR (||) `h`, `s`, `l` or `a` properties are not undefined
	 *
	 * before it was checking with NOT(!) statement witch for `0` (bool|int) values returns `true`
	 * this is a typecasting issue only visible for hex values that derive from #000000
	 */
	return (
		data.source === 'rgb' &&
		(data.r === undefined ||
			data.g === undefined ||
			data.b === undefined) &&
		(data.h === undefined ||
			data.s === undefined ||
			data.v === undefined ||
			data.a === undefined) &&
		(data.h === undefined ||
			data.s === undefined ||
			data.l === undefined ||
			data.a === undefined)
	);
};

export default class ColorPickerFix extends ColorPicker {
	handleInputChange(data) {
		switch (data.state) {
			case 'reset':
				this.resetDraftValues();
				break;
			case 'commit':
				const colors = dataToColors(this.state, data);
				if (!isValueEmpty(colors)) {
					this.commitValues(colors);
				}
				break;
			case 'draft':
				this.setDraftValues(dataToColors(this.state, data));
				break;
		}
	}
}
