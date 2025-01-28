import { __ } from '@wordpress/i18n';
import cn from 'classnames';
import { LucideSettings } from 'lucide-react';
import Pill from '../Common/Pill';

export default ({
	icon,
	label,
	description,
	locked,
	afterTitle = null,
	className,
	children,
}) => {
	const ICON = icon || LucideSettings;

	return (
		<div
			className={cn(
				className,
				'last:pb-0 pb-6 border-b last:border-0 first:mt-0 mt-6 grid gap-6'
			)}
		>
			<div className="flex items-center gap-3">
				<div className="grid gap-3 grow">
					<div className="flex items-center">
						{icon !== null && (
							<ICON size={20} className="text-blue-600 mr-2" />
						)}
						<h3 className="text-base font-semibold">{label}</h3>
						{locked && (
							<Pill className="ml-2 !px-2 !py-1 text-xs bg-blue-100 text-blue-800 rounded">
								{__('Pro', 'neve')}
							</Pill>
						)}
					</div>

					{description && (
						<p className="text-gray-600">{description}</p>
					)}
				</div>

				{afterTitle && (
					<span className="ml-auto flex gap-3 items-center shrink-0">
						{afterTitle}
					</span>
				)}
			</div>
			{children && <div>{children}</div>}
		</div>
	);
};
