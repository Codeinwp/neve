/* global neveDash */
import ModuleCard from '../ModuleCard';

const Pro = () => {
	const { modules, hasOldPro, strings } = neveDash;

	if (hasOldPro) {
		return (
			<div className="col">
				<div className="card">
					<h2>{strings.updateOldPro}</h2>
				</div>
			</div>
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
