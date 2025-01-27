import { Switch, Label, Field, Description } from '@headlessui/react';
import cn from 'classnames';

export default ({
	checked,
	onToggle,
	label,
	disabled = false,
	className,
	labelBefore = false,
	labelClassName = '',
	description,
}) => {
	const switchClasses = cn(
		'group inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition data-[checked]:bg-blue-600',
		{
			'cursor-not-allowed opacity-50': disabled,
		}
	);

	const wrapClasses = cn('flex items-center gap-3', className);

	const labelClasses = cn(
		{
			'font-medium': !labelClassName.includes('font-'),
			'text-sm': !labelClassName.includes('text-'),
			'text-gray-600': !labelClassName.includes('text-'),
		},
		labelClassName
	);

	return (
		<Field className="grid gap-2">
			<div className={wrapClasses}>
				{label && labelBefore && (
					<Label className={labelClasses}>{label}</Label>
				)}

				<Switch
					checked={checked}
					onChange={onToggle}
					disabled={disabled}
					className={switchClasses}
				>
					<span
						className={cn(
							'size-4 rounded-full bg-white transition',
							{
								'translate-x-6 rtl:-translate-x-6': checked,
								'translate-x-1 rtl:-translate-x-1': !checked,
							}
						)}
					/>
				</Switch>

				{label && !labelBefore && (
					<Label className={labelClasses}>{label}</Label>
				)}
			</div>

			{description && (
				<Description className="text-xs text-gray-600">
					{description}
				</Description>
			)}
		</Field>
	);
};
