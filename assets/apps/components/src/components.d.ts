import React from 'react';

declare module '@neve-wp/components' {
	interface BackgroundProps {
		onChange: (nextValue: Record<string, unknown>) => void;
		value: Record<string, unknown>;
		label?: string;
	}

	const Background: React.FunctionComponent<BackgroundProps>;

	interface ButtonAppearanceProps {
		label?: string;
		value: Record<string, unknown>;
		onChange: (nextValue: Record<string, unknown>) => void;
		noHover: boolean;
		defaultVals: Record<string, unknown>;
	}

	const ButtonAppearance: React.FunctionComponent<ButtonAppearanceProps>;

	interface ColorControlProps {
		label?: string;
		selectedColor: string;
		onChange: (nextValue: Record<string, unknown>) => void;
		defaultValue?: string;
		disableGlobal?: boolean;
	}

	const ColorControl: React.FunctionComponent<ColorControlProps>;

	interface InlineSelectProps {
		label?: string;
		disabled: boolean;
		onChange: (nextValue: string) => void;
		value: string | number;
		options: Record<'value' | 'label', string>[];
	}

	const InlineSelect: React.FunctionComponent<InlineSelectProps>;

	interface MultiSelectProps {
		label?: string;
		onChange: (nextValue: Record<string, unknown>) => void;
		currentValue: string | number;
		choices: Record<string | number, string>;
	}

	const MultiSelect: React.FunctionComponent<MultiSelectProps>;

	interface NumberControlProps {
		label?: string;
		value: string | number;
		onChange: (nextValue: Record<string, unknown>) => void;
		onReset: () => void;
		units: boolean | string[];
		default: string | number;
		max: number;
		min: number;
		step: number;
		hasResponsive: boolean;
		onChangedDevice: (nextValue: Record<string, unknown>) => void;
		className: string;
	}

	const NumberControl: React.FunctionComponent<NumberControlProps>;

	interface RadioIconsProps {
		options: Record<string, unknown>;
		onChange: (nextValue: Record<string, unknown>) => void;
		value: string | number;
		showLabels: boolean;
	}

	const RadioIcons: React.FunctionComponent<RadioIconsProps>;

	interface RadioImageProps {
		choices: Record<string, unknown>;
		onClick: (nextValue: string) => void;
		value: string;
	}

	const RadioImage: React.FunctionComponent<RadioImageProps>;

	interface SizingControlProps {
		options: [];
		defaults: string | number | Record<string, unknown>;
		onChange: (nextValue: Record<string, unknown>) => void;
		onReset: () => void;
		noLinking: boolean;
		min: number;
		max: number;
		step: number;
	}

	const SizingControl: React.FunctionComponent<SizingControlProps>;

	interface ToggleProps {
		description?: string;
		label?: string;
		checked: boolean;
		onChange: (nextValue: Record<string, unknown>) => void;
	}

	const Toggle: React.FunctionComponent<ToggleProps>;

	interface AccordionProps {
		children: unknown;
		label?: string;
		initiallyExpanded: boolean;
	}

	const Accordion: React.FunctionComponent<AccordionProps>;
}
