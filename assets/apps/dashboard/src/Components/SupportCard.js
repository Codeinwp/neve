import { useSelect, withSelect } from '@wordpress/data';
import { Button } from '@wordpress/components';
import Link from './Common/Link';
import { NEVE_STORE } from '../utils/constants';

const SupportCard = () => {
	const { license } = useSelect((select) => {
		const { getLicense } = select(NEVE_STORE);
		return {
			license: getLicense(),
		};
	});

	if (!license || !license.valid || 'valid' !== license.valid) {
		return null;
	}
	const { supportData } = license;

	if (!supportData || !supportData.text || !supportData.url) {
		return null;
	}

	return (
		<Link
			className="flex items-center justify-center bg-white hover:bg-blue-600 text-blue-600 hover:text-white hover:no-underline border border-blue-600 hover:border-transparent rounded font-semibold py-3 px-2"
			url={supportData.url}
			isExternal
			text={supportData.text}
		/>
	);
};

export default SupportCard;
