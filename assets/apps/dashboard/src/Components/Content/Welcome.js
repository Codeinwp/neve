/* global neveDash */
import { __ } from '@wordpress/i18n';
import { LucidePanelsTopLeft } from 'lucide-react';

import Card from '../../Layout/Card';
import { NEVE_HAS_PRO } from '../../utils/constants';

import TransitionWrapper from '../Common/TransitionWrapper';
import ModuleGrid from './ModuleGrid';
import PluginsCard from './Sidebar/PluginsCard';
import Button from '../Common/Button';

export default () => (
	<TransitionWrapper className="grid gap-6">
		<CustomizerShortcutsCard />
		{!NEVE_HAS_PRO && <ModuleGrid />}
		{NEVE_HAS_PRO && <PluginsCard grid />}
	</TransitionWrapper>
);

const CustomizerShortcutsCard = () => (
	<Card
		title={__('Get Started', 'neve')}
		icon={<LucidePanelsTopLeft size={18} />}
		className="border border-blue-300"
		afterTitle={
			<Button isPrimary href={neveDash.customizerURL}>
				{__('Go to Customizer', 'neve')}
			</Button>
		}
	>
		<div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
			{neveDash.customizerShortcuts.map(({ text, link, description }) => (
				<a
					href={link}
					key={link}
					className="grid gap-1 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
				>
					<span
						className={
							'text-base text-blue-600 group-hover:text-blue-700 group-hover:underline'
						}
					>
						{text}
					</span>
					{description && (
						<span className="text-gray-600 text-xs">
							{description}
						</span>
					)}
				</a>
			))}
		</div>
	</Card>
);
