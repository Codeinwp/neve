const {Dashicon, Button} = wp.components;
const {__} = wp.i18n;

const ImportModalError = ({message, code}) => {
	return (
		<div className="well error">
			{message && <h3><Dashicon icon="warning"/><span>{message}</span></h3>}
			<ul>
				<li dangerouslySetInnerHTML={{__html: neveDash.onboarding.i18n.troubleshooting}}/>
				<li dangerouslySetInnerHTML={{__html: neveDash.onboarding.i18n.support}}/>
				{code && <li>{__('Error code', 'neve')}: <code>{code}</code></li>}
				<li>{__('Error log', 'neve')}: <Button
						isLink
						href={neveDash.onboarding.logUrl}>{neveDash.onboarding.logUrl}<Dashicon
						icon="external"/></Button></li>
			</ul>
		</div>
	);
};

export default ImportModalError;
