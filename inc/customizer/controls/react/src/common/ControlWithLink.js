/* global NeveProReactCustomize */
import { maybeParseJson } from './common';

const ControlWithLink = ( { control, children } ) => {
	if ( typeof NeveProReactCustomize !== 'undefined' ) {
		const { whiteLabel } = NeveProReactCustomize;

		if ( whiteLabel ) {
			return children;
		}
	}

	const attrs = maybeParseJson( control.params.input_attrs );
	const link = attrs.link || null;

	return (
		<>
			{ children }
			{ link && (
				<p className="neve-customizer-link">
					<a href={ link.url }>{ link.string }</a>
				</p>
			) }
		</>
	);
};

export default ControlWithLink;
