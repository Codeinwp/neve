/* global neveDash */
import ModuleCard from '../ModuleCard';

const Pro = () => {
	const {modules} = neveDash;

	if (neveDash.hasOldPro) {
		return (
			<div className="col">
				<div className="card">
					<h2 dangerouslySetInnerHTML={{__html: neveDash.strings.updateOldPro}}/>
				</div>
			</div>
		);
	}

	return (
		<div className="col">
			{
				Object.keys(modules).map((id) => {
					return (
						<ModuleCard slug={id}/>
					);
				})
			}
		</div>
	);
};

export default Pro;
