import cn from 'classnames';
import { LoaderCircle, LucideChevronDown } from 'lucide-react';

import {
	Field,
	Label,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from '@headlessui/react';
import { __ } from '@wordpress/i18n';

export default ({
	label,
	value,
	onChange,
	disabled = false,
	loading,
	choices,
}) => {
	return (
		<Field className="grid gap-1">
			{label && (
				<Label className="text-sm text-gray-600 font-medium">
					{label}
				</Label>
			)}
			<div className="flex items-center gap-3">
				{loading && (
					<LoaderCircle size={18} className="animate-spin shrink-0" />
				)}
				<Listbox
					value={value}
					onChange={onChange}
					disabled={loading || disabled}
				>
					{({ open }) => (
						<>
							<ListboxButton
								className={cn(
									'relative w-full rounded py-1.5 px-2 text-left',
									'rounded border border-gray-300 hover:border-gray-500',
									'flex items-center gap-3 min-w-[200px]',
									{
										'bg-gray-100': disabled || loading,
									}
								)}
							>
								{choices[value] ||
									__('Select an option', 'neve')}

								<LucideChevronDown
									size={18}
									className={cn(
										'ml-auto transition-transform',
										{
											'transform rotate-180': open,
										}
									)}
									aria-hidden="true"
								/>
							</ListboxButton>

							<ListboxOptions
								anchor="bottom"
								transition
								className={cn(
									'text-sm font-normal shadow-lg',
									'rounded border bg-white p-1 my-1 min-w-[200px]',
									'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 antialiased'
								)}
							>
								{Object.entries(choices).map(
									([optionValue, optionLabel]) => (
										<ListboxOption
											key={optionValue}
											value={optionValue}
											className="flex w-full items-center gap-2 text-sm rounded py-1.5 px-3 hover:bg-blue-100 hover:text-blue-700 data-[focus]:bg-blue-100 data-[focus]:text-blue-700 cursor-pointer"
										>
											{optionLabel}
										</ListboxOption>
									)
								)}
							</ListboxOptions>
						</>
					)}
				</Listbox>
			</div>
		</Field>
	);
};
