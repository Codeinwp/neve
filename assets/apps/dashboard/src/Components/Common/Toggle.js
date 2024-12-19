import { Switch, Label, Field } from '@headlessui/react';
import cn from 'classnames';

export default ({ checked, onToggle, label, disabled = false, className }) => {
	const switchClasses = cn(
		'group inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition data-[checked]:bg-blue-600',
		{
			'cursor-not-allowed opacity-50': disabled,
		}
	);

	const wrapClasses = cn('flex items-center gap-3', className);

	return (
		<Field className={wrapClasses}>
			<Switch
				checked={checked}
				onChange={onToggle}
				disabled={disabled}
				className={switchClasses}
			>
				<span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
			</Switch>

			<Label className="text-sm text-gray-600">{label}</Label>
		</Field>
	);
};
