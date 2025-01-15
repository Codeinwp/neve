/* global neveDash */
import { __ } from '@wordpress/i18n';
import { LucidePanelsTopLeft } from 'lucide-react';

import Card from '../../Layout/Card';
import { NEVE_HAS_PRO } from '../../utils/constants';
import Link from '../Common/Link';
import ModuleCard from '../ModuleCard';
import ModuleGrid from './ModuleGrid';
import { TransitionWrapper } from '../Common/TransitionWrapper';

export default () => (
	<TransitionWrapper className="grid gap-6">
		<CustomizerShortcutsCard />
		{!NEVE_HAS_PRO && <ModuleGrid />}
		{/* <OldModuleGrid /> */}
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

// const OldModuleGrid = () => (
// 	<div className="grid xl:grid-cols-2 gap-6">
// 		{Object.entries(neveDash.modules).map(([slug, moduleData]) => (
// 			<ModuleCard key={slug} moduleData={moduleData} slug={slug} />
// 		))}
// 	</div>
// );
