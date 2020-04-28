import classnames from 'classnames';

const {__} = wp.i18n;
const {Dashicon} = wp.components;
const ImportStepper = ({currentStep, progress, willDo}) => {

	const stepsMap = {
		plugins: {
			label: __('Installing Plugins', 'neve'),
			status: progress.plugins,
			willDo: true
		},
		content: {
			label: __('Importing Content', 'neve'),
			status: progress.content,
			willDo: willDo.content
		},
		customizer: {
			label: __('Importing Customizer Settings', 'neve'),
			status: progress.customizer,
			willDo: willDo.customizer
		},
		widgets: {
			label: __('Importing Widgets', 'neve'),
			status: progress.widgets,
			willDo: willDo.widgets
		}
	};

	return (
		<ul className="stepper">
			{Object.keys(stepsMap).map(key => {
				const {label, status, willDo} = stepsMap[key];

				if (! willDo) {
					return null;
				}

				const classes = classnames([
					'icon', {
						'loading': currentStep === key,
						'warning': currentStep === key,
						'success': 'done' === status,
						'error': 'error' === status,
						'skip': 'skip' === status
					}
				]);

				let icon = 'clock';
				if (currentStep === key) {
					icon = 'update';
				}

				if ('done' === status) {
					icon = 'yes';
				}

				if ('error' === status ) {
					icon = 'no-alt';
				}

				return (
					<li>
					<span className={classes}>
						<Dashicon icon={icon} className={currentStep === key ? 'loading' : ''}/>
					</span>
						<span>{label}</span>
					</li>
				);
			})}
		</ul>);
};

export default ImportStepper;
