import React from 'react';
import {
	createInterpolateElement,
	useEffect,
	useState,
} from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { info } from '@wordpress/icons';
import { WPCustomizeControl } from '../../@types/customizer-control';
import { useSelect } from '@wordpress/data';

type Props = {
	builder: string;
};

const BuilderHeaderNotification: React.FC<Props> = ({ builder }) => {
	const [conditionalHeader, setConditionalHeader] = useState('');

	const focusConditionalSelector = () => {
		window.wp.customize.control('neve_header_conditional_selector').focus();
	};

	const { currentHeaderLayout, headerLayouts } = useSelect((select) => ({
		currentHeaderLayout: select('neve-store').getCurrentLayout(),
		headerLayouts: select('neve-store').getHeaderLayouts(),
	}));

	console.log(currentHeaderLayout);
	console.log(headerLayouts);

	useEffect(() => {
		if (!currentHeaderLayout) {
			return;
		}

		if (builder !== 'header') return;

		window.wp.customize.control(
			'neve_header_conditional_selector',
			(control: WPCustomizeControl) => {
				control.setting.bind((nextValue: string) => {
					setConditionalHeader(nextValue);
				});
			}
		);
	}, []);

	return (
		<span className="builder-instructions">
			{conditionalHeader && (
				<p>
					{createInterpolateElement(
						sprintf(
							/* translators: %1$s conditional header name (ie: Posts Header, Page Header, 404 Header) */
							__(
								'You are customizing the <Button>%1$s</Button> Header',
								'neve'
							),
							conditionalHeader
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
			{!conditionalHeader && (
				<p>
					<strong>
						{sprintf(
							/* translators: %1$s builder name (ie: Header) */
							__('%1$s Builder', 'neve'),
							builder
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
