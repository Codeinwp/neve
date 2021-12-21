import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { WPCustomizeControl } from '../@types/customizer-control';
// @ts-ignore
import FreePro from '../../../dashboard/src/Components/Content/FreePro';

type Props = {
	control: WPCustomizeControl;
};

const Upsells: React.FC<Props> = ({ control }) => {
	const { params, id } = control;
	const { features, url } = params;
	const [isOpen, setOpen] = useState(false);
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	return (
		<div className="upsell-inner">
			{params.title && (
				<div className="neve-customizer-heading">
					<span className="accordion-heading">{params.title}</span>
					<Button
						className="button button-primary"
						onClick={openModal}
					>
						{__('Learn More', 'neve')}
					</Button>
					{isOpen && (
						<Modal
							style={{ width: '50%' }}
							title={params.title}
							onRequestClose={closeModal}
						>
							<div id="neve-upsell">
								<div className="tab-content free-pro">
									<FreePro
										style={{ width: '100%' }}
										features={features}
										url={url}
									/>
								</div>
							</div>
						</Modal>
					)}
				</div>
			)}
		</div>
	);
};

export default Upsells;
