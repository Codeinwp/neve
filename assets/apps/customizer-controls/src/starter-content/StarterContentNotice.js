const StarterContentNotice = ({ onKeep, onRemove, labels, error }) => {
	return (
		<div className="nv-notice">
			<h3>{labels.title}</h3>
			<p>{labels.description}</p>
			<button
				type="button"
				className="button button-primary"
				onClick={onKeep}
			>
				{labels.save}
			</button>
			<button
				type="button"
				className="button secondary"
				onClick={onRemove}
			>
				{labels.dismiss}
			</button>
			{error && <div className="nv-notice-error">{error}</div>}
			<span className="nv-subtitle">{labels.info}</span>
		</div>
	);
};

export default StarterContentNotice;
