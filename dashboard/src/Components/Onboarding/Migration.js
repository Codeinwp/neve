/*global neveDash*/
import {send} from '../../utils/rest';

const{__} = wp.i18n;
const {Button} = wp.components;

const Migration = ({data}) => {
	return (
		<div className="ob-head ob-migration">
			<h2>{data.heading}</h2>
			<p>{data.description}</p>
			<div className="card starter-site-card">
				<div className="top">
					{data.screenshot &&
					<div className="image">
						<img src={data.screenshot} alt={data.theme_name}/>
					</div>
					}
				</div>
				<div className="bottom">
					<p className="title">{data.theme_name}</p>
				</div>
			</div>
			<Button
				isSecondary
				onClick={() => {
					const {template, template_name} = data;
					send(neveDash.onboarding.root + '/migrate_frontpage',
						{
							template,
							template_name
						}
					).then(r => {
						console.log(r);
					});
				}}
			>{__( 'Migrate', 'neve' ) + ' ' + data.theme_name}</Button>
		</div>
	);

};

export default Migration;
