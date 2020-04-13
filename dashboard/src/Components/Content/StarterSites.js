/* global neveDash */
import {get} from '../../utils/rest';
import Loading from '../Onboarding/Loading';
import Onboarding from '../Onboarding/Main';

const {useState, useEffect} = wp.element;
const {withDispatch, withSelect} = wp.data;
const {compose} = wp.compose;

const StarterSites = ({sites, setSites, setUpsells, setMigrationData}) => {
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);
	useEffect(() => {
		if (sites) {
			setLoading(false);
		} else {
			get(neveDash.onboarding.root + '/initialize_sites_library').then((r) => {
				setLoading(false);
				if (! r.success) {
					setError(true);
				} else {
					console.log(r);
					const {remote, upsell, migrate_data} = r.data;
					setSites(remote);
					setUpsells(upsell);
					setMigrationData(migrate_data);
				}
			});
		}
	}, []);

	if (error) {
		return <h1>Error.</h1>;
	}
	return (
		loading ? <Loading/> : <Onboarding/>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const {setSites, setUpsells, setMigrationData} = dispatch('neve-onboarding');
		return {
			setSites: (sites) => setSites(sites),
			setUpsells: (upsells) => setUpsells(upsells),
			setMigrationData: (migrationData) => setMigrationData(migrationData)
		};
	}),
	withSelect((select) => {
		const {getSites} = select('neve-onboarding');
		return {
			sites: getSites()
		};
	})
)(StarterSites);
