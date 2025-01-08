/* global neveDash */
import { CircleFadingArrowUp } from 'lucide-react';
import Notice from '../Common/Notice';
import ModuleCard from '../ModuleCard';
const Pro = () => {
	const { modules, hasOldPro, strings } = neveDash;

	if (hasOldPro) {
		return (
			<Notice icon={CircleFadingArrowUp}>{strings.updateOldPro}</Notice>
		);
	}

	return (
		<div className="col">
			{Object.keys(modules).map((id, index) => {
				return <ModuleCard key={index} slug={id} />;
			})}
		</div>
	);
};

export default Pro;
