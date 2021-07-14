/* jshint esversion: 6 */

import { getIntValAsResponsive, maybeParseJson } from '../common/common';
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';
import {
	Button,
	ButtonGroup,
	Dashicon,
	FocalPointPicker,
	Placeholder,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import { MediaUpload } from '@wordpress/media-utils';

import { useEffect, useState } from '@wordpress/element';

const LogoPaletteComponent = ({ control }) => {
	console.log(control);
	const parsedValue = maybeParseJson(control.setting.get());
	const [value, setValue] = useState();
	const [logoId, setLogoId] = useState(parsedValue);

	if (!wp.media.attachment(parsedValue).get('url')) {
		wp.media
			.attachment(parsedValue)
			.fetch()
			.then((data) => {
				console.log(data);
				setValue(data);
			});
	}

	const updateControlValue = (attachment) => {
		setValue(attachment);
		setLogoId(attachment.id);
		console.log( 'Update control' );
		console.log( attachment );
		console.log( logoId );
		console.log( attachment.id );
		control.setting.set(attachment.id);
	};

	let frame;

	const myCustomState = wp.media.controller.Library.extend({
		defaults: _.defaults(
			{
				autoSelect: true,
				content: 'browse',
				contentUserSetting: true,
				date: false,
				describe: false,
				filterable: false,
				id: 'library',
				menu: 'default',
				multiple: false,
				syncSelection: true,
				title: 'Select logo',
				toolbar: 'select',
				suggestedWidth: 200,
				suggestedHeight: 50,
				button: {
					text: 'Select',
					close: false,
				},
			},
			wp.media.controller.Library.prototype.defaults
		),
	});

	const cropControl = {
		id: 'control-id',
		params: {
			flex_width: false, // set to true if the width of the cropped image can be different to the width defined here
			flex_height: true, // set to true if the height of the cropped image can be different to the height defined here
			width: 200, // set the desired width of the destination image here
			height: 50, // set the desired height of the destination image here
		},
	};

	cropControl.mustBeCropped = function (
		flexW,
		flexH,
		dstW,
		dstH,
		imgW,
		imgH
	) {
		// If the width and height are both flexible
		// then the user does not need to crop the image.

		if (true === flexW && true === flexH) {
			return false;
		}

		// If the width is flexible and the cropped image height matches the current image height,
		// then the user does not need to crop the image.
		if (true === flexW && dstH === imgH) {
			return false;
		}

		// If the height is flexible and the cropped image width matches the current image width,
		// then the user does not need to crop the image.
		if (true === flexH && dstW === imgW) {
			return false;
		}

		// If the cropped image width matches the current image width,
		// and the cropped image height matches the current image height
		// then the user does not need to crop the image.
		if (dstW === imgW && dstH === imgH) {
			return false;
		}

		// If the destination width is equal to or greater than the cropped image width
		// then the user does not need to crop the image...
		if (imgW <= dstW) {
			return false;
		}

		return true;
	};

	const calculateImageSelectOptions = (attachment, controller) => {
		const currentCropControl = controller.get('control');

		const flexWidth = !!parseInt(currentCropControl.params.flex_width, 10);
		const flexHeight = !!parseInt(
			currentCropControl.params.flex_height,
			10
		);

		const realWidth = attachment.get('width');
		const realHeight = attachment.get('height');

		let xInit = parseInt(currentCropControl.params.width, 10);
		let yInit = parseInt(currentCropControl.params.height, 10);

		const ratio = xInit / yInit;

		controller.set(
			'canSkipCrop',
			!currentCropControl.mustBeCropped(
				flexWidth,
				flexHeight,
				xInit,
				yInit,
				realWidth,
				realHeight
			)
		);

		const xImg = xInit;
		const yImg = yInit;

		if (realWidth / realHeight > ratio) {
			yInit = realHeight;
			xInit = yInit * ratio;
		} else {
			xInit = realWidth;
			yInit = xInit / ratio;
		}

		const x1 = (realWidth - xInit) / 2;
		const y1 = (realHeight - yInit) / 2;

		return {
			handles: true,
			keys: true,
			instance: true,
			persistent: true,
			imageWidth: realWidth,
			imageHeight: realHeight,
			minWidth: xImg > xInit ? xInit : xImg,
			minHeight: yImg > yInit ? yInit : yImg,
			x1,
			y1,
			x2: xInit + x1,
			y2: yInit + y1,
		};
	};

	const setImageFromURL = (url, attachmentId, width, height) => {
		const data = {};

		data.url = url;
		data.thumbnail_url = url;
		// eslint-disable-next-line no-undef
		data.timestamp = _.now();

		if (attachmentId) {
			data.id = attachmentId;
		}

		if (width) {
			data.width = width;
		}

		if (height) {
			data.height = height;
		}

		updateControlValue(data);
	};

	const setImageFromAttachment = (attachment) => {
		updateControlValue(attachment);
	};

	const runUploader = (event) => {
		event.preventDefault();

		// If the media frame already exists, reopen it.
		if (frame) {
			frame.open();
			return;
		}

		// Create a new media frame
		frame = wp.media({
			button: {
				text: 'Select and Crop', // l10n.selectAndCrop,
				close: false,
			},
			state: 'library', // set the custom state as default state
			states: [
				new myCustomState(),
				new wp.media.controller.CustomizeImageCropper({
					imgSelectOptions: calculateImageSelectOptions,
					control: cropControl,
				}),
			],
		});

		frame.on('open', function () {
			frame.setState('library');
			const selection = frame.state().get('selection');
			selection.add(value ? [value] : []);
		});

		frame.on('cropped', function (croppedImage) {
			const url = croppedImage.url,
				attachmentId = croppedImage.attachment_id,
				w = croppedImage.width,
				h = croppedImage.height;

			setImageFromURL(url, attachmentId, w, h);
		});

		frame.on('skippedcrop', function (selection) {
			const url = selection.get('url'),
				w = selection.get('width'),
				h = selection.get('height');

			setImageFromURL(url, selection.id, w, h);
		});

		frame.on('select', function () {
			// Get media attachment details from the frame state
			const attachment = frame.state().get('selection').first().toJSON();
			//console.log( attachment );
			//setValue(attachment);

			if (
				cropControl.params.width === attachment.width &&
				cropControl.params.height === attachment.height &&
				!cropControl.params.flex_width &&
				!cropControl.params.flex_height
			) {
				setImageFromAttachment(attachment);
				console.log('Set Image from attachement');
				frame.close();
			} else {
				frame.setState('cropper');
				console.log('Set Crop state');
			}
		});

		// Finally, open the modal on click
		frame.open();
	};

	return (
		<>
			<Placeholder style={{ width: '130px', height: '81px' }}>
				<MediaUpload
					onSelect={(imageData) => {
						setLogoId(imageData.id);
					}}
					value={logoId}
					allowedTypes={['image']}
					render={({ open }) => (
						<>{value && <img src={value.url} onClick={open} />}</>
						// <Button isSecondary onClick={open}>
						// 	{__('Add Image', 'neve')}
						// </Button>
					)}
				/>
			</Placeholder>
			{value && <img src={value.url} />}
			<button type="button" onClick={runUploader}>
				Open Uploader
			</button>
		</>
	);
};

LogoPaletteComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default LogoPaletteComponent;
