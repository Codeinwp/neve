/* global NeveReactCustomize */
import Modal from '../common/Modal.js';

const UiComponent = () => {
	const { instructionalVid } = NeveReactCustomize;
	return (
		<div className="neve-ui-wrap">
			<Modal openAttr="hfg-instructional">
				<video
					style={{ margin: '0 auto', display: 'block' }}
					autoPlay
					muted
					loop
					playsInline
				>
					<source src={instructionalVid} type="video/mp4" />
				</video>
			</Modal>
		</div>
	);
};

export default UiComponent;
