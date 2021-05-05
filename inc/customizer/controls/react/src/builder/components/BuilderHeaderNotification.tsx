import React from 'react';
import { createInterpolateElement } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { info } from '@wordpress/icons';

type Props = {
	builderName: string;
	builder: string;
};

const BuilderHeaderNotification: React.FC<Props> = ({
	builder,
	builderName,
}) => {
	const focusConditionalSelector = () => {
		window.wp.customize.control('neve_header_conditional_selector').focus();
	};

	let currentEditedHeader = null;

	const { currentHeaderLayout, headerLayouts } = useSelect((select) => ({
		currentHeaderLayout: select('neve-store')?.getCurrentLayout(),
		headerLayouts: select('neve-store')?.getHeaderLayouts(),
	}));

	if (
		builder === 'header' &&
		currentHeaderLayout &&
		currentHeaderLayout !== 'default'
	) {
		currentEditedHeader = headerLayouts[currentHeaderLayout];
	}

	return (
		<span className="builder-instructions">
			{currentEditedHeader && (
				<p>
					{createInterpolateElement(
						sprintf(
							/* translators: %1$s conditional header name (ie: Posts Header, Page Header, 404 Header) */
							__(
								'You are customizing the <Button>%1$s</Button> Header',
								'neve'
							),
							currentEditedHeader
						),
						{
							Button: (
								<Button
									isLink
									onClick={focusConditionalSelector}
								>
									#dumptext
								</Button>
							),
						}
					)}
				</p>
			)}
			{!currentEditedHeader && (
				<p>
					<strong>
						{sprintf(
							/* translators: %1$s builder name (ie: Header) */
							__('%1$s Builder', 'neve'),
							builderName
						) + ':'}
					</strong>
					{__(
						'Click on any empty space to add components, or existing components to adjust settings.',
						'neve'
					)}
				</p>
			)}
			<Button
				style={{ padding: 0 }}
				isLink
				icon={info}
				iconSize={20}
				data-open-nv-modal="hfg-instructional"
			/>
		</span>
	);
};

export default BuilderHeaderNotification;
