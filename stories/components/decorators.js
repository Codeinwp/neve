import './customizerDecorator.scss';
import { useState } from '@wordpress/element';
import { chevronLeft } from '@wordpress/icons';
import { Button } from '@wordpress/components';
import classNames from 'classnames';

export const CustomizerDecorator = (Story) => {
	const [isCollapsed, collapse] = useState(false);
	const sidebarClasses = classNames('customizer-sidebar', {
		collapsed: isCollapsed,
	});
	return (
		<div className="mock-customize preview-desktop">
			<div className={sidebarClasses}>
				{Story()}
				<Button
					className="collapse-sidebar"
					icon={chevronLeft}
					iconSize={16}
					onClick={() => collapse(!isCollapsed)}
					label={isCollapsed ? 'Show Sidebar' : 'Hide Sidebar'}
				/>
			</div>
			<div className="preview">{}</div>
		</div>
	);
};

export const WhiteBackgroundDecorator = (Story) => (
	<div className="neve-white-background-control">{Story()}</div>
);
