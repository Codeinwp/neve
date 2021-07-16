/* jshint esversion: 6 */

import { maybeParseJson } from '../common/common';
import Toggle from '../toggle/Toggle';
import MediaLibrary from '../common/MediaLibrary';
import { __ } from '@wordpress/i18n';
import { Button, Icon } from '@wordpress/components';
import { trash, plusCircleFilled } from '@wordpress/icons';

import { useState } from '@wordpress/element';

const LogoPaletteComponent = ({ control }) => {
	const controlSetting = maybeParseJson(control.setting.get());
	const {
		height,
		width,
		flexHeight,
		flexWidth,
		sameLabel,
	} = control.params.input_attrs;
	const [setting, setSetting] = useState(controlSetting);
	const [light, setLight] = useState();
	const [dark, setDark] = useState();

	const preloadAttachement = (id, type = 'light') => {
		if (!wp.media.attachment(id).get('url')) {
			wp.media
				.attachment(id)
				.fetch()
				.then((data) => {
					if (type === 'light') {
						setLight(data);
					}
					if (type === 'dark') {
						setDark(data);
					}
				});
		}
	};

	preloadAttachement(setting.light, 'light');
	preloadAttachement(setting.dark, 'dark');

	const updateControlSetting = (newSetting) => {
		setSetting(newSetting);
		control.setting.set(JSON.stringify(newSetting));
	};

	const updateControlValue = (attachment, type = 'light') => {
		const nextValue = { ...setting };
		if (type === 'light') {
			setLight(attachment);
			nextValue.light = { ...nextValue.light };
			nextValue.light = attachment.id;
		}

		if (type === 'dark') {
			setDark(attachment);
			nextValue.dark = { ...nextValue.dark };
			nextValue.dark = attachment.id;
		}

		updateControlSetting(nextValue);
	};

	const toggleValue = (val) => {
		const nextValue = { ...setting };
		nextValue.same = { ...nextValue.same };
		nextValue.same = val;

		updateControlSetting(nextValue);
	};

	const resetAttachment = (type = 'light') => {
		const nextValue = { ...setting };
		if (type === 'light') {
			nextValue.light = { ...nextValue.light };
			nextValue.light = 0;
			setLight(null);
		}
		if (type === 'dark') {
			nextValue.dark = { ...nextValue.dark };
			nextValue.dark = 0;
			setDark(null);
		}

		updateControlSetting(nextValue);
	};

	return (
		<>
			<div className="logo-wrap">
				<MediaLibrary
					onSelect={(data) => {
						updateControlValue(data);
					}}
					value={setting.light}
					suggestedWidth={width}
					suggestedHeight={height}
					flexWidth={flexWidth}
					flexHeight={flexHeight}
					title={__('Select Logo', 'neve')}
					render={({ open }) => (
						<>
							{!light && (
								<div
									className="logo-select"
									aria-hidden="true"
									onClick={open}
								>
									<Icon
										className="add-icon"
										icon={plusCircleFilled}
									/>
								</div>
							)}
							{light && (
								<div className="logo-select">
									<Button
										className="remove"
										icon={trash}
										iconSize={20}
										onClick={() => {
											resetAttachment('light');
										}}
									/>
									<img
										aria-hidden="true"
										alt=""
										src={light.url}
										onClick={open}
									/>
								</div>
							)}
						</>
					)}
				/>
				{!setting.same && (
					<MediaLibrary
						onSelect={(data) => {
							updateControlValue(data, 'dark');
						}}
						value={setting.dark}
						suggestedWidth={width}
						suggestedHeight={height}
						flexWidth={flexWidth}
						flexHeight={flexHeight}
						title={__('Select Logo Dark', 'neve')}
						render={({ open }) => (
							<>
								{!dark && (
									<div
										className="logo-select"
										aria-hidden="true"
										onClick={open}
									>
										<Icon
											className="add-icon"
											icon={plusCircleFilled}
										/>
									</div>
								)}
								{dark && (
									<div className="logo-select">
										<Button
											className="remove"
											icon={trash}
											iconSize={20}
											onClick={() => {
												resetAttachment('dark');
											}}
										/>
										<img
											aria-hidden="true"
											alt=""
											src={dark.url}
											onClick={open}
										/>
									</div>
								)}
							</>
						)}
					/>
				)}
			</div>
			<Toggle
				label={sameLabel}
				checked={setting.same}
				onChange={toggleValue}
			/>
		</>
	);
};

export default LogoPaletteComponent;
