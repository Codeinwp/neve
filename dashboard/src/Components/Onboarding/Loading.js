const Loading = () => {
	return (
		<div className="ob mock-dash">
			<div className="ob-head">
				<h2 className="loading"/>
				<p className="loading"/>
				<p className="loading"/>
			</div>
			<div className="ob-body">
				<div className="header-form">
					<div>
						<div className="ob-dropdown">
							<button>
								<div className="editor-icon loading"/>
								<span className="loading"/>
							</button>
						</div>
					</div>
					<div className="search">
						<button>
							<span className="loading"/>
						</button>
					</div>
				</div>

				<div className="ob-sites">
					{[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].map(() => {
						return (
							<div className="card starter-site-card">
								<div className="top">
									<div className="image loading"/>
								</div>
								<div className="bottom">
									<p className="title loading"/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};


export default Loading;
