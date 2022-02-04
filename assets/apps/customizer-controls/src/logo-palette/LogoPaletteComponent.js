/* jshint esversion: 6 */

import { maybeParseJson, Toggle } from '@neve-wp/components';
import MediaLibrary from '../../../components/src/Common/MediaLibrary';
import { __ } from '@wordpress/i18n';
import { Button, Icon } from '@wordpress/components';
import { trash, plusCircleFilled } from '@wordpress/icons';

import { useEffect, useState } from '@wordpress/element';

const LogoPaletteComponent = ({ control }) => {
	const controlSetting = maybeParseJson(control.setting.get());
	const {
		height,
		width,
		flexHeight,
		flexWidth,
		sameLabel,
		builderListen,
		compChange,
	} = control.params.input_attrs;
	const [setting, setSetting] = useState(controlSetting);
	const [light, setLight] = useState();
	const [dark, setDark] = useState();
	const [isPaletteActive, setIsPaletteActive] = useState(false);

	const hasValue = (object, value) => {
		return Object.values(object).some(function (val) {
			if (val === value) {
				return true;
			}
			if (val && typeof val === 'object') {
				return hasValue(val, value);
			}
			if (
				val &&
				Object.prototype.toString.call(val) === '[object Array]'
			) {
				return val.some((obj) => {
					return hasValue(obj, value);
				});
			}
			return false;
		});
	};

	const changeOnPalette = (currentHeaderItems, componentChange) => {
		const hasPaletteComp = hasValue(currentHeaderItems, componentChange);
		setSetting(maybeParseJson(control.setting.get()));
		if (!hasPaletteComp) {
			toggleValue(true);
		}
		setIsPaletteActive(hasPaletteComp);
	};

	useEffect(() => {
		if (
			typeof builderListen !== 'string' ||
			typeof compChange !== 'string' ||
			builderListen === '' ||
			compChange === ''
		) {
			return;
		}

		window.wp.customize.bind('ready', () => {
			const currentHeaderItems = maybeParseJson(
				window.wp.customize.control(builderListen).setting.get()
			);
			changeOnPalette(currentHeaderItems, compChange);
		});

		window.wp.customize.control(builderListen, (customizeControl) => {
			customizeControl.setting.bind('changed', (nextValue) => {
				const currentHeaderItems = maybeParseJson(nextValue);
				changeOnPalette(currentHeaderItems, compChange);
			});
		});
	}, [builderListen, compChange]);

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

		if (type === 'dark' || setting.same) {
			setDark(attachment);
			nextValue.dark = { ...nextValue.dark };
			nextValue.dark = attachment.id;
		}

		updateControlSetting(nextValue);
	};

	const toggleValue = (val) => {
		const currentSetting = maybeParseJson(control.setting.get());
		const nextValue = { ...currentSetting };
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
					title={__('Change Logo', 'neve')}
					render={({ open }) => (
						<>
							<div className="logo-select">
								{light && (
									<Button
										className="remove"
										icon={trash}
										iconSize={20}
										onClick={() => {
											resetAttachment('light');
										}}
									/>
								)}
								<button
									className="logo-select-inner"
									onClick={open}
								>
									{!light && (
										<Icon
											className="add-icon"
											icon={plusCircleFilled}
										/>
									)}
									<p>
										{__('Light Palette', 'neve')}
										<br />
										{dark
											? __('Change Logo', 'neve')
											: __('Upload Logo', 'neve')}
									</p>
								</button>
								{light && (
									<img
										aria-hidden="true"
										alt={__('Light Palette', 'neve')}
										src={light.url}
									/>
								)}
							</div>
						</>
					)}
				/>
				{!setting.same && isPaletteActive && (
					<MediaLibrary
						onSelect={(data) => {
							updateControlValue(data, 'dark');
						}}
						value={setting.dark}
						suggestedWidth={width}
						suggestedHeight={height}
						flexWidth={flexWidth}
						flexHeight={flexHeight}
						title={__('Change Logo', 'neve')}
						render={({ open }) => (
							<>
								<div className="logo-select dark">
									{dark && (
										<Button
											className="remove"
											icon={trash}
											iconSize={20}
											onClick={() => {
												resetAttachment('dark');
											}}
										/>
									)}
									<button
										className="logo-select-inner"
										onClick={open}
									>
										{!dark && (
											<Icon
												className="add-icon"
												icon={plusCircleFilled}
											/>
										)}
										<p>
											{__('Dark Palette', 'neve')}
											<br />
											{dark
												? __('Change Logo', 'neve')
												: __('Upload Logo', 'neve')}
										</p>
									</button>
									{dark && (
										<img
											aria-hidden="true"
											alt={__('Dark Palette', 'neve')}
											src={dark.url}
										/>
									)}
								</div>
							</>
						)}
					/>
				)}
			</div>
			{isPaletteActive && (
				<Toggle
					label={sameLabel}
					checked={setting.same}
					onChange={toggleValue}
				/>
			)}
		</>
	);
};

export default LogoPaletteComponent;
