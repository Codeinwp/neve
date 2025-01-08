/* global neveDash */
import { __ } from '@wordpress/i18n';
import { LucidePanelsTopLeft } from 'lucide-react';
import Card from '../../Layout/Card';
import { NEVE_HAS_PRO, NEVE_HAS_VALID_PRO } from '../../utils/constants';
import Link from '../Common/Link';
import ModuleGrid from './ModuleGrid';
import ModuleGridPlaceholder from './ModuleGridPlaceholder';

export default () => {
	return (
		<div className="grid gap-6">
			<CustomizerShortcutsCard />
			{!NEVE_HAS_PRO || !NEVE_HAS_VALID_PRO ? (
				<ModuleGridPlaceholder />
			) : (
				<ModuleGrid />
			)}
		</div>
	);
};

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
