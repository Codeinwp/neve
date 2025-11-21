/* global neveDash */

import { __ } from '@wordpress/i18n';

import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

import Card from '../../Layout/Card';
import Tooltip from '../Common/Tooltip';
import TransitionWrapper from '../Common/TransitionWrapper';

const FreeProCard = () => (
	<Card className="!p-0">
		<div className="flex items-center py-4 px-6 border-b border-gray-200">
			<div className="text-sm font-medium">{__('Feature', 'neve')}</div>
			<div className="ml-auto flex items-center md:space-x-16">
				<div className="w-20 text-center text-sm font-medium">
					{__('Free', 'neve')}
				</div>
				<div className="w-20 text-center text-sm font-medium capitalize">
					{__('PRO', 'neve').toLowerCase()}
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

export default () => {
	return (
		<div className="grid gap-6">
			<TransitionWrapper from="top">
				<FreeProCard />
			</TransitionWrapper>
		</div>
	);
};
