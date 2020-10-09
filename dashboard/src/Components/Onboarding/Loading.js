import { withSelect } from '@wordpress/data';

const Loading = ( { isOnboarding } ) => {
	return (
		<div className="ob mock-dash">
			<div className="ob-head">
				<h2 className="loading" />
				<p className="loading" />
				<p className="loading" />
				{ isOnboarding && (
					<button className="loading components-button is-primary" />
				) }
				<div className="header-form">
					<div>
						<div className="ob-dropdown">
							<button>
								<div className="editor-icon loading" />
								<span className="loading" />
							</button>
						</div>
					</div>
					<div className="search">
						<button>
							<span className="loading" />
						</button>
					</div>
				</div>
			</div>
			<div className="ob-body">
				<div className="ob-sites">
					{ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].map( ( i ) => {
						return (
							<div key={ i } className="card starter-site-card">
								<div className="top">
									<div className="image loading" />
								</div>
								<div className="bottom">
									<p className="title loading" />
								</div>
							</div>
						);
					} ) }
				</div>
			</div>
			{ isOnboarding && <div className="ob-footer" /> }
		</div>
	);
};

export default withSelect( ( select ) => {
	const { getOnboardingStatus } = select( 'neve-onboarding' );
	return { isOnboarding: getOnboardingStatus() };
} )( Loading );
