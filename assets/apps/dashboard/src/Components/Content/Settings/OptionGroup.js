import { useSelect } from '@wordpress/data';
import MultiselectControl from '../../Controls/MultiselectControl';
import SelectControl from '../../Controls/SelectControl';
import TextControl from '../../Controls/TextControl';
import ToggleControl from '../../Controls/ToggleControl';
import { NEVE_STORE } from '../../../utils/constants';
import { useEffect } from '@wordpress/element';
import AccessRestriction from './AccessRestriction';
import ControlWrap from '../../Controls/ControlWrap';

export default ({ options, overrides = {}, module }) => {
	const { getProOption, getModuleStatus } = useSelect(NEVE_STORE);

	if (!getModuleStatus(module)) {
		return null;
	}

	return (
		<>
			{Object.entries(options).map(([slug, optionData]) => {
				if (
					optionData.depends_on &&
					getProOption(optionData.depends_on) !== true
				) {
					return null;
				}

				if (slug === 'enable_local_fonts') {
					return null;
				}

				if (overrides[slug]) {
					optionData = { ...optionData, ...overrides[slug] };
				}

				const { type } = optionData;

				switch (type) {
					case 'toggle':
						return (
							<ToggleControl
								key={slug}
								option={slug}
								icon={optionData.icon}
								label={optionData.label}
								description={optionData.description}
								checked={optionData.value}
							/>
						);

					case 'text':
						return (
							<TextControl
								key={slug}
								option={slug}
								icon={optionData.icon}
								label={optionData.label}
								description={optionData.description}
							/>
						);

					case 'select':
						return (
							<SelectControl
								key={slug}
								icon={optionData.icon}
								label={optionData.label}
								description={optionData.description}
								option={slug}
								choices={optionData.choices}
							/>
						);
					case 'multi_select':
						return (
							<MultiselectControl
								key={slug}
								icon={optionData.icon}
								label={optionData.label}
								description={optionData.description}
								option={slug}
								choices={optionData.choices}
							/>
						);

					case 'react':
						return slug === 'neve_access_restriction' ? (
							<AccessRestriction
								key={slug}
								optionData={optionData}
							/>
						) : (
							<ControlWrap
								key={slug}
								label={optionData.label}
								description={optionData.description}
								icon={optionData.icon}
								locked={optionData.locked}
							>
								<ReactPlaceholder key={slug} slug={slug} />
							</ControlWrap>
						);

					default:
						return null;
				}
			})}
		</>
	);
};

const ReactPlaceholder = ({ slug }) => {
	useEffect(() => {
		window.dispatchEvent(
			new window.CustomEvent('neve-dashboard-react-placeholder', {
				detail: {
					slug,
				},
			})
		);
	}, []);

	return <div id={slug} />;
};
