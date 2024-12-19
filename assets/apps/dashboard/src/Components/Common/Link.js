import { __ } from '@wordpress/i18n';

import { LucideExternalLink } from 'lucide-react';
import cn from 'classnames';

export default ({ text, url, isExternal, className }) => {
	const linkClasses = cn([
		'text-blue-600 hover:text-blue-700 hover:underline text-sm',
		className,
		{
			'inline-flex gap-1.5 items-center': isExternal,
		},
	]);
	if (!isExternal) {
		return (
			<a href={url} className={linkClasses}>
				{text}
			</a>
		);
	}

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={linkClasses}
		>
			{text}
			<span className="sr-only">
				{__('(opens in a new tab)', 'neve')}
			</span>
			<LucideExternalLink size={16} className="shrink-0" />
		</a>
	);
};
