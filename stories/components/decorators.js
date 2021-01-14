import './customizerDecorator.scss';

export const CustomizerDecorator = (Story) => (
	<div className="mock-customize">
		<div className="sidebar">{Story()}</div>
	</div>
);

export const WhiteBackgroundDecorator = (Story) => (
	<div className="neve-white-background-control">{Story()}</div>
);
