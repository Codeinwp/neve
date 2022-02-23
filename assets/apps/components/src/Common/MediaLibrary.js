import { castArray, defaults, now } from 'lodash';
import { Component } from '@wordpress/element';
const { wp } = window;

const getAttachmentsCollection = (ids) => {
	return wp.media.query({
		order: 'ASC',
		orderby: 'post__in',
		post__in: ids,
		posts_per_page: -1,
		query: true,
		type: 'image',
	});
};

const mustBeCropped = (flexW, flexH, dstW, dstH, imgW, imgH) => {
	// We might be working with a SVG
	if (imgW === imgH && imgW === 0) {
		return false;
	}
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

	const realWidth = attachment.get('width');
	const realHeight = attachment.get('height');

	let xInit = parseInt(currentCropControl.params.width, 10);
	let yInit = parseInt(currentCropControl.params.height, 10);

	const ratio = xInit / yInit;

	controller.set('canSkipCrop', true);

	const xImg = xInit;
	const yImg = yInit;

	if (realWidth / realHeight > ratio) {
		yInit = realHeight;
		xInit = yInit * ratio;
	} else {
		xInit = realWidth;
		yInit = xInit / ratio;
	}

	const x1 = parseFloat(((realWidth - xInit) / 2).toFixed(2));
	const y1 = parseFloat(((realHeight - yInit) / 2).toFixed(2));

	return {
		handles: true,
		keys: true,
		instance: true,
		persistent: false,
		imageWidth: parseFloat(realWidth.toFixed(2)),
		imageHeight: parseFloat(realHeight.toFixed(2)),
		minWidth: xImg > xInit ? xInit : xImg,
		minHeight: yImg > yInit ? yInit : yImg,
		x1,
		y1,
		x2: parseFloat((xInit + x1).toFixed(2)),
		y2: parseFloat((yInit + y1).toFixed(2)),
	};
};

const setImageFromURL = (url, attachmentId, width, height) => {
	const data = {};

	data.url = url;
	data.thumbnail_url = url;
	// eslint-disable-next-line no-undef
	data.timestamp = now();

	if (attachmentId) {
		data.id = attachmentId;
	}

	if (width) {
		data.width = width;
	}

	if (height) {
		data.height = height;
	}

	return data;
};

class MediaLibrary extends Component {
	constructor() {
		super(...arguments);
		this.openModal = this.openModal.bind(this);
		this.onOpen = this.onOpen.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onClose = this.onClose.bind(this);
		this.onCropped = this.onCropped.bind(this);
		this.onSkippedCrop = this.onSkippedCrop.bind(this);
		this.buildAndSetGalleryFrame();
	}

	createStates() {
		const {
			title = wp.media.view.l10n.createGalleryTitle,
			suggestedWidth = 200,
			suggestedHeight = 50,
			flexWidth = false,
			flexHeight = true,
		} = this.props;
		const states = [];

		const libraryState = wp.media.controller.Library.extend({
			defaults: defaults(
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
					title,
					toolbar: 'select',
					suggestedWidth,
					suggestedHeight,
				},
				wp.media.controller.Library.prototype.defaults
			),
		});
		states.push(new libraryState());

		const cropControl = {
			id: 'crop-control-id',
			params: {
				flex_width: flexWidth, // set to true if the width of the cropped image can be different to the width defined here
				flex_height: flexHeight, // set to true if the height of the cropped image can be different to the height defined here
				width: suggestedWidth, // set the desired width of the destination image here
				height: suggestedHeight, // set the desired height of the destination image here
			},
		};
		cropControl.mustBeCropped = mustBeCropped;

		const cropState = new wp.media.controller.CustomizeImageCropper({
			imgSelectOptions: calculateImageSelectOptions,
			control: cropControl,
		});
		states.push(cropState);

		return states;
	}

	buildAndSetGalleryFrame() {
		const {
			button = {
				text: wp.media.view.l10n.selectAndCrop, // l10n.selectAndCrop,
				close: false,
			},
			multiple = false,
			value = {},
		} = this.props;

		if (this.frame) {
			this.frame.remove();
		}

		const attachments = getAttachmentsCollection(value);
		const selection = new wp.media.model.Selection(attachments.models, {
			props: attachments.props.toJSON(),
			multiple,
		});

		const states = this.createStates();
		this.frame = wp.media({
			button,
			selection,
			state: 'library', // set the custom state as default state
			states,
		});
		this.initializeListeners();
	}

	initializeListeners() {
		// When an image is selected in the media frame...
		this.frame.on('select', this.onSelect);
		this.frame.on('open', this.onOpen);
		this.frame.on('close', this.onClose);
		this.frame.on('cropped', this.onCropped);
		this.frame.on('skippedcrop', this.onSkippedCrop);
	}

	onCropped(croppedImage) {
		const { onSelect } = this.props;
		const url = croppedImage.url,
			attachmentId = croppedImage.id,
			w = croppedImage.width,
			h = croppedImage.height;

		const attachment = setImageFromURL(url, attachmentId, w, h);
		onSelect(attachment);
	}

	onSkippedCrop(selection) {
		const { onSelect } = this.props;
		const url = selection.get('url'),
			w = selection.get('width'),
			h = selection.get('height');

		const attachment = setImageFromURL(url, selection.id, w, h);
		onSelect(attachment);
	}

	onSelect() {
		const {
			onSelect,
			multiple = false,
			suggestedWidth = 200,
			suggestedHeight = 50,
			flexWidth = false,
			flexHeight = true,
		} = this.props;
		// Get media attachment details from the frame state
		const attachment = this.frame.state().get('selection').toJSON();

		if (
			suggestedWidth === attachment.width &&
			suggestedHeight === attachment.height &&
			!flexWidth &&
			!flexHeight
		) {
			onSelect(multiple ? attachment : attachment[0]);
			this.frame.close();
		} else {
			this.frame.setState('cropper');
		}
	}

	onOpen() {
		this.frame.setState('library');
		this.updateCollection();

		// Handle both this.props.value being either (number[]) multiple ids
		// (for galleries) or a (number) singular id (e.g. image block).
		const hasMedia = Array.isArray(this.props.value)
			? !!this.props.value?.length
			: !!this.props.value;

		if (!hasMedia) {
			return;
		}

		if (!this.props.gallery) {
			const selection = this.frame.state().get('selection');
			castArray(this.props.value).forEach((id) => {
				selection.add(wp.media.attachment(id));
			});
		}

		// load the images so they are available in the media modal.
		getAttachmentsCollection(castArray(this.props.value)).more();
	}

	updateCollection() {
		const frameContent = this.frame.content.get();
		if (frameContent && frameContent.collection) {
			const collection = frameContent.collection;

			// clean all attachments we have in memory.
			collection
				.toArray()
				.forEach((model) => model.trigger('destroy', model));

			// reset has more flag, if library had small amount of items all items may have been loaded before.
			collection.mirroring._hasMore = true;

			// request items
			collection.more();
		}
	}

	onClose() {
		const { onClose } = this.props;

		if (onClose) {
			onClose();
		}
	}

	openModal(event) {
		event.preventDefault();
		this.buildAndSetGalleryFrame();
		this.frame.open();
	}

	render() {
		return this.props.render({ open: this.openModal });
	}
}

export default MediaLibrary;
