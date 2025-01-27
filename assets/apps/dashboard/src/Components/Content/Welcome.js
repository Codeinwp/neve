/* global neveDash */
import { __ } from '@wordpress/i18n';
import { LucidePanelsTopLeft } from 'lucide-react';

import Card from '../../Layout/Card';
import { NEVE_HAS_PRO } from '../../utils/constants';
import Link from '../Common/Link';
import TransitionWrapper from '../Common/TransitionWrapper';
import ModuleGrid from './ModuleGrid';
import PluginsCard from './Sidebar/PluginsCard';

export default () => (
	<TransitionWrapper className="grid gap-6">
		<CustomizerShortcutsCard />
		{!NEVE_HAS_PRO && <ModuleGrid />}
		{NEVE_HAS_PRO && <PluginsCard grid />}
	</TransitionWrapper>
);

const CustomizerShortcutsCard = () => (
	<Card
		title={__('Essential Settings', 'neve')}
		icon={<LucidePanelsTopLeft size={18} />}
	>
		<div className="grid grid-cols-2 gap-x-8 gap-y-4">
			{neveDash.customizerShortcuts.map(({ text, link, description }) => (
				<div key={link} className="grid gap-1">
					<Link text={text} url={link} />
					{description && (
						<span className="text-gray-600 text-xs">
							{description}
						</span>
					)}
				</div>
			))}
		</div>
	</Card>
);
