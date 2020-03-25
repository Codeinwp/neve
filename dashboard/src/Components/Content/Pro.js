/* global neveDash */
import ModuleCard from '../ModuleCard';

const {__} = wp.i18n;
const {Fragment} = wp.element;

const Pro = (props) => {
	const {modules} = neveDash;
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
