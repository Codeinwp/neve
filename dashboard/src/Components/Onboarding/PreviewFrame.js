const {withSelect, withDispatch} = wp.data;
const {compose} = wp.compose;
const {Button, Dashicon} = wp.components;
const {__} = wp.i18n;

const PreviewFrame = ({next, prev, siteData, setSite, setPreview}) => {
	return (
		<div className="ob-preview">
			<div className="preview">
				<iframe src={siteData['demo_url']} frameborder="0"/>
				<div className="loading">
					<Dashicon icon="update" size={50}/>
				</div>
			</div>
			<div className="bottom-bar">
				<div className="navigator">
					<Button
						onClick={(e) => {
							e.preventDefault();
							setPreview(false);
							setSite(null);
						}}
						className="close"
						label={__('Close', 'neve')}
						icon="no"/>

						{prev && <Button
						onClick={(e) => {
							e.preventDefault();
							setSite(prev);
						}}
						className="prev"
						label={__('Previous', 'neve')}
						icon="arrow-left-alt2"
					/>}

					{next && <Button
						onClick={(e) => {
							e.preventDefault();
							setSite(next);
						}}
						className="next"
						label={__('Next', 'neve')}
						icon="arrow-right-alt2"
					/>}
				</div>
				<div className="actions">
					{siteData.in_pro ?
						<Button
							className="upgrade"
							isLink
							href={siteData.outbound_link}
						>
							{__('Upgrade', 'neve')}
						</Button> :
						<Button
							className="import"
							isPrimary
							onClick={(e) => {
								e.preventDefault();
								console.log('Open Modal');
							}}
						>
							{__('Import', 'neve')}
						</Button>
					}
				</div>
			</div>
		</div>
	);
};


export default compose(
	withSelect(select => {
		const {getCurrentSite} = select('neve-onboarding');
		return {
			siteData: getCurrentSite()
		};
	}),
	withDispatch(dispatch => {
		const {setCurrentSite, setPreviewStatus} = dispatch('neve-onboarding');
		return {
			setSite: (data) => setCurrentSite(data),
			setPreview: (status) => setPreviewStatus(status)
		};
	})
)(PreviewFrame);
