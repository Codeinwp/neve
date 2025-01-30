import { Description, Field, Input, Label } from '@headlessui/react';
import { Fragment } from '@wordpress/element';
import cn from 'classnames';

const TextInput = ({
	value,
	label,
	disabled,
	onChange,
	name,
	className = '',
	type = 'text',
	description,
}) => {
	let TagName = 'input';

	if (type === 'textarea') {
		TagName = 'textarea';
	}

	return (
		<Field className="grid gap-1">
			{label && (
				<Label className="text-sm text-gray-600 font-medium">
					{label}
				</Label>
			)}
			{description && (
				<Description className="text-xs text-gray-600">
					{description}
				</Description>
			)}
			<Input type={type} as={Fragment} name={name}>
				<TagName
					type={type}
					value={value}
					onChange={onChange}
					disabled={disabled}
					className={cn(
						'block w-full px-3 !py-1 text-sm border rounded disabled:bg-gray-100 !border-gray-300 focus:!border-gray-500 focus:!shadow-none',
						{
							'cursor-not-allowed': disabled,
						},
						className
					)}
				/>
			</Input>
		</Field>
	);
};

export default TextInput;
