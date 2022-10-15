import PropTypes from 'prop-types';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Spinner, ResponsiveWrapper } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';

const ALLOWED_MEDIA_TYPES = ['image'];

const MetaFeaturedImage = ({ bgImageId, bgImage, setMetaValue, metaId }) => {
	const instructions = (
		<p>
			{__(
				'To edit the second thumbnail image, you need permission to upload media.',
				'neve'
			)}
		</p>
	);

	return (
		<div className="editor-post-featured-image">
			<MediaUploadCheck fallback={instructions}>
				<MediaUpload
					title={__('Featured image', 'neve')}
					onSelect={(newValue) => {
						setMetaValue(metaId, newValue.id);
					}}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					value={bgImageId}
					render={({ open }) => (
						<div className="editor-post-featured-image__container">
							<Button
								className={
									!bgImageId
										? 'editor-post-featured-image__toggle'
										: 'editor-post-featured-image__preview'
								}
								onClick={open}
							>
								{!bgImageId && __('Set featured image', 'neve')}
								{!!bgImageId && !bgImage && <Spinner />}
								{!!bgImageId && bgImage && (
									<ResponsiveWrapper
										naturalWidth={
											bgImage?.media_details?.sizes
												?.thumbnail?.width ||
											bgImage.media_details.width
										}
										naturalHeight={
											bgImage?.media_details?.sizes
												?.thumbnail?.height ||
											bgImage.media_details.height
										}
									>
										<img
											src={
												bgImage?.media_details?.sizes
													?.thumbnail?.source_url ||
												bgImage?.source_url
											}
											alt={
												bgImage.alt_text
													? sprintf(
															// translators: %s: The image's alt text.
															__(
																'Featured image: %s',
																'neve'
															),
															bgImage.alt_text
													  )
													: __(
															'Featured image',
															'neve'
													  )
											}
										/>
									</ResponsiveWrapper>
								)}
							</Button>
						</div>
					)}
				/>
			</MediaUploadCheck>
			{!!bgImageId && bgImage && (
				<MediaUploadCheck>
					<MediaUpload
						title={__('Featured image', 'neve')}
						onSelect={(newValue) => {
							setMetaValue(metaId, newValue.id);
						}}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						value={bgImageId}
						render={({ open }) => (
							<Button onClick={open} isDefault>
								{__('Replace image', 'neve')}
							</Button>
						)}
					/>
					<Button
						onClick={() => {
							setMetaValue(metaId, 0);
						}}
						isLink
						isDestructive
					>
						{__(
							'Remove background image',
							'image-selector-example'
						)}
					</Button>
				</MediaUploadCheck>
			)}
		</div>
	);
};

MetaFeaturedImage.propTypes = {
	bgImageId: PropTypes.number,
	bgImage: PropTypes.object,
	setMetaValue: PropTypes.func.isRequired,
	metaId: PropTypes.string.isRequired,
};

export default compose(
	withSelect((select, props) => {
		const { getMedia } = select('core');
		const metaValue =
			select('core/editor').getEditedPostAttribute('meta')[props.metaId];

		return {
			bgImageId: metaValue,
			bgImage: metaValue ? getMedia(metaValue) : null,
		};
	}),

	withDispatch((dispatch) => {
		return {
			setMetaValue: (id, value) => {
				dispatch('core/editor').editPost({
					meta: { [id]: value },
				});
			},
		};
	})
)(MetaFeaturedImage);
