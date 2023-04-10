/* global neveDash */

import { withSelect } from '@wordpress/data';
import { Button } from '@wordpress/components';
const { proSupportURL, proSupportText } = neveDash;

const SupportCard = ({ license }) => {
	if (!license || !license.valid || 'valid' !== license.valid) {
		return null;
	}

	if (!proSupportURL || !proSupportText) {
		return null;
	}

	const buttonStyle = {
		width: '100%',
		justifyContent: 'center',
		fontWeight: '700',
		fontSize: '14px',
		padding: '28px 0',
		backgroundColor: '#ffffff',
		marginBottom: '24px',
	};

	return (
		<Button
			style={buttonStyle}
			variant="secondary"
			href={proSupportURL}
			target="_blank"
		>
			{proSupportText}
		</Button>
	);
};

export default withSelect((select) => {
	const { getLicense } = select('neve-dashboard');
	return {
		license: getLicense(),
	};
})(SupportCard);
