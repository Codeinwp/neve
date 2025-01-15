/* global neveDash */

import { __ } from '@wordpress/i18n';

import {
	CheckCircle2,
	XCircle,
	HelpCircle,
	ArrowRight,
	BookOpen,
} from 'lucide-react';

import Card from '../../Layout/Card';
import Tooltip from '../Common/Tooltip';
import Button from '../Common/Button';
import { TransitionWrapper } from '../Common/TransitionWrapper';

const FreeProCard = () => (
	<Card className="!p-0">
		<div className="flex items-center py-4 px-6 border-b border-gray-200">
			<div className="text-sm font-medium">{__('Feature', 'neve')}</div>
			<div className="ml-auto flex items-center md:space-x-16">
				<div className="w-20 text-center text-sm font-medium">
					{__('Free', 'neve')}
				</div>
				<div className="w-20 text-center text-sm font-medium">
					{__('Pro', 'neve')}
				</div>
			</div>
		</div>

		{neveDash.featureData.map(({ section, items }) => (
			<div key={section}>
				<div className="py-3 px-6 bg-gray-50 border-b border-gray-200">
					<h3 className="text-sm font-medium text-gray-600 uppercase">
						{section}
					</h3>
				</div>

				{items.map((item, index) => (
					<div
						key={index}
						className="border-b border-gray-200 hover:bg-gray-50"
					>
						<div className="flex items-center py-4 px-6">
							<div className="max-w-2xl">
								<div className="flex items-center">
									<span className="text-sm font-medium text-gray-900">
										{item.title}
									</span>
									{item.tooltip && (
										<Tooltip content={item.tooltip}>
											<button className="ml-2">
												<HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600" />
											</button>
										</Tooltip>
									)}
								</div>
								<p className="text-gray-600 mt-1">
									{item.description}
								</p>
							</div>
							<div className="ml-auto flex items-center md:space-x-16 flex-shrink-0">
								<div className="w-20 text-center">
									{item.free ? (
										<CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
									) : (
										<XCircle className="w-5 h-5 text-red-500 mx-auto" />
									)}
								</div>
								<div className="w-20 text-center">
									<CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		))}
	</Card>
);

const UpsellCard = () => {
	return (
		<Card>
			<div className="max-w-2xl mx-auto">
				<h3 className="text-lg font-semibold mb-4">
					{__('Need help deciding?', 'neve')}
				</h3>
				<div className="space-y-4 mb-6 text-gray-600">
					<p>
						{__(
							'Our support team is happy to answer your questions about specific Pro features and help you determine if they match your needs.',
							'neve'
						)}
					</p>
					<div className="flex items-start space-x-2">
						<div className="bg-gray-100 px-3 py-1.5 rounded">
							{__(
								'Average response time: ~8 hours during business days',
								'neve'
							)}
						</div>
					</div>
				</div>
				<div className="flex gap-4">
					<Button
						isPrimary
						href={neveDash.upgradeURL}
						target="_blank"
						className="gap-"
					>
						{__('View Pro Plans', 'neve')}
						<ArrowRight className="ml-2" size={16} />
					</Button>
					<Button
						isLink
						href="https://themeisle.com/contact"
						target="_blank"
						className="!border-gray-300"
					>
						{__('Contact Support', 'neve')}
						<BookOpen className="ml-2" size={16} />
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default () => {
	return (
		<div className="grid gap-6">
			<TransitionWrapper from="top">
				<FreeProCard />
			</TransitionWrapper>
			<TransitionWrapper className="delay-150">
				<UpsellCard />
			</TransitionWrapper>
		</div>
	);
};
