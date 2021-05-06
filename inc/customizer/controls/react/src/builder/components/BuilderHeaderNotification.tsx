import React from 'react';
import {
	createInterpolateElement,
	useEffect,
	useState,
} from '@wordpress/element';
import { Button, Modal } from '@wordpress/components';
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
	const [modalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!modalVisible);
	};

	const focusConditionalSelector = () => {
		window.wp.customize.control('neve_header_conditional_selector').focus();
	};

	const {
		dashUpdatesMessage,
		instructionalVid,
		hideConditionalHeaderSelector: incompatiblePro,
	} = window.NeveReactCustomize;

	let currentEditedHeader = null;

	const { currentHeaderLayout, headerLayouts } = useSelect((select) => ({
		currentHeaderLayout: select('neve-store')?.getCurrentLayout(),
		headerLayouts: select('neve-store')?.getHeaderLayouts(),
	}));

	// Disable conditional headers on old versions of the plugin.
	useEffect(() => {
		if (!incompatiblePro || builder !== 'header') {
			return;
		}

		const control = window.wp.customize.control(
			'neve_header_conditional_selector'
		);

		if (!control) {
			return;
		}

		control.deactivate();
		window.wp.customize.control('neve_global_header').deactivate();

		const sectionToNotify = control.params.section;
		window.wp.customize.section(sectionToNotify).notifications.add(
			new window.wp.customize.Notification(
				'neve-incompatible-conditional',
				{
					type: 'warning',
					message: dashUpdatesMessage,
				}
			)
		);
	});

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
				onClick={toggleModal}
			/>
			{modalVisible && (
				<Modal
					title={''}
					className="neve-ui-modal-wrap"
					onRequestClose={toggleModal}
					shouldCloseOnClickOutside
					isDismissible
				>
					<video
						style={{ margin: '0 auto', display: 'block' }}
						autoPlay
						muted
						loop
						playsInline
					>
						<source src={instructionalVid} type="video/mp4" />
					</video>
				</Modal>
			)}
		</span>
	);
};

export default BuilderHeaderNotification;
