import { useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import cn from 'classnames';
import { Check, ChevronDown } from 'lucide-react';
import { useEffect } from 'react';
const MultiSelect = ({ value, label, disabled, choices = {}, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);

	const dropdownRef = useRef(null);

	const closeDropdown = (e) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', closeDropdown);
		} else {
			document.removeEventListener('click', closeDropdown);
		}

		return () => {
			document.removeEventListener('click', closeDropdown);
		};
	}, [isOpen]);

	const handleChange = (optionValue) => {
		const nextValues = value.includes(optionValue)
			? value.filter((v) => v !== optionValue)
			: [...value, optionValue];
		onChange(nextValues);
	};

	return (
		<div className="grid gap-1">
			{label && (
				<span className="text-sm text-gray-600 font-medium">
					{label}
				</span>
			)}
			<div className="relative">
				<button
					onClick={() => !disabled && setIsOpen(!isOpen)}
					className={cn(
						'relative w-full py-1.5 px-2 text-sm rounded border flex items-center gap-3 min-w-[200px]',
						'border-gray-300 hover:border-gray-500',
						{
							'bg-gray-100': disabled,
						}
					)}
					disabled={disabled}
				>
					<div className="flex flex-wrap gap-1 max-w-[160px] overflow-hidden">
						{Object.entries(value).length === 0 ? (
							<span className="text-gray-500">
								{__('Select options', 'neve')}...
							</span>
						) : (
							value.map((choice, index) => {
								if (!choices[choice]) {
									return null;
								}

								return (
									<span
										key={index}
										className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 rounded px-2 py-0.5 text-xs"
									>
										{choices[choice]}
									</span>
								);
							})
						)}
					</div>

					<ChevronDown
						size={18}
						className={`ml-auto transition-transform ${
							isOpen ? 'transform rotate-180' : ''
						}`}
						aria-hidden="true"
					/>
				</button>

				{isOpen && (
					<div
						ref={dropdownRef}
						className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg"
					>
						<div className="max-h-60 overflow-y-auto p-1">
							{Object.entries(choices).map(
								([optionValue, optionLabel]) => (
									<button
										key={optionValue}
										className="flex w-full items-center gap-2 text-sm rounded py-1.5 px-3 hover:bg-blue-100 hover:text-blue-700 cursor-pointer"
										onClick={() =>
											handleChange(optionValue)
										}
									>
										<div className="w-4 h-4 border bg-white rounded flex items-center justify-center">
											{value.includes(optionValue) && (
												<Check
													size={12}
													className="text-blue-600"
												/>
											)}
										</div>
										{optionLabel}
									</button>
								)
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default MultiSelect;
