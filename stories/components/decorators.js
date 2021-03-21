import './customizerDecorator.scss';

export const CustomizerDecorator = (Story) => (
	<div className="mock-customize preview-desktop">
		<div className="customizer-sidebar">{Story()}</div>
		<div className="preview">{}</div>
	</div>
);

export const WhiteBackgroundDecorator = (Story) => (
	<div className="neve-white-background-control">{Story()}</div>
);
