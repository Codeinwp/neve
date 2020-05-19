/* global neveDash */
import Onboarding from '../Onboarding/Main';
import {get} from '../../utils/rest';

const {useEffect, useState} = wp.element;

const StarterSites = () => {
	const [ restApiState, setRestApiState ] = useState(true);

	useEffect(() => {
		get(neveDash.onboarding.root, true).then(r => {
			if ( ! r.ok || 200 !== r.status ) {
				setRestApiState(false);
			}
		});
	}, []);

	return (
		restApiState ? <Onboarding/> : <div className="no-rest card"><p dangerouslySetInnerHTML={{__html: neveDash.onboarding.i18n.rest_not_working}}></p></div>
		);
};

export default StarterSites;
