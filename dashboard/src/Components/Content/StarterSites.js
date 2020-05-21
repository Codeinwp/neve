/* global neveDash */
import Onboarding from '../Onboarding/Main';
import {get} from '../../utils/rest';

const {useEffect, useState} = wp.element;

const StarterSites = () => {
	const [ restApiState, setRestApiState ] = useState(true);

	useEffect(() => {
		get(neveDash.onboarding.root).then(r => {
			if ( ! r.namespace || 'ti-sites-lib/v1' !== r.namespace ) {
				setRestApiState(false);
			}
		});
	}, []);

	if ( ! neveDash.hasFileSystem ) {
		return <div className="no-rest card"><p dangerouslySetInnerHTML={{__html: neveDash.onboarding.i18n.fsDown}}></p></div>;
	}

	return (
		restApiState ? <Onboarding/> : <div className="no-rest card"><p dangerouslySetInnerHTML={{__html: neveDash.onboarding.i18n.rest_not_working}}></p></div>
		);
};

export default StarterSites;
