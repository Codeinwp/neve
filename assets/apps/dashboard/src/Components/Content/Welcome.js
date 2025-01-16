/* global neveDash */
import { __ } from '@wordpress/i18n';
import { LucidePanelsTopLeft } from 'lucide-react';

import Card from '../../Layout/Card';
import { NEVE_HAS_PRO } from '../../utils/constants';
import Link from '../Common/Link';
import { TransitionWrapper } from '../Common/TransitionWrapper';
import ModuleGrid from './ModuleGrid';

export default () => (
	<TransitionWrapper className="grid gap-6">
		<CustomizerShortcutsCard />
		{!NEVE_HAS_PRO && <ModuleGrid />}
	</TransitionWrapper>
);

const CustomizerShortcutsCard = () => (
	<Card
		title={__('Customizer quick links', 'neve')}
		icon={<LucidePanelsTopLeft size={18} />}
	>
		<div className="grid grid-cols-2 gap-x-8 gap-y-4">
			{neveDash.customizerShortcuts.map(({ text, link }) => (
				<Link text={text} url={link} key={link} />
			))}
		</div>
	</Card>
);
