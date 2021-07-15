/* jshint esversion: 6 */

import { maybeParseJson } from '../common/common';
import MediaLibrary from '../common/MediaLibrary';
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';

import { useEffect, useState } from '@wordpress/element';

const LogoPaletteComponent = ({ control }) => {
	const parsedValue = maybeParseJson(control.setting.get());
	const [value, setValue] = useState();
	const [logoId, setLogoId] = useState(parsedValue);

	if (!wp.media.attachment(parsedValue).get('url')) {
		wp.media
			.attachment(parsedValue)
			.fetch()
			.then((data) => {
				setValue(data);
			});
	}

	const updateControlValue = (attachment) => {
		setValue(attachment);
		setLogoId(attachment.id);
		control.setting.set(attachment.id);
	};

	return (
		<>
			<MediaLibrary
				onSelect={(data) => {
					updateControlValue( data );
				}}
				value={logoId}
				title={__('Select Logo', 'neve')}
				render={({ open }) => (
					<>
						{value && (
							<button onClick={open}>
								<img alt="" src={value.url} />
							</button>
						)}
					</>
				)}
			/>
		</>
	);
};

LogoPaletteComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default LogoPaletteComponent;
