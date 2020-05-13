const Loading = () => {
	return (
		<div className="mock-dash">
			<header>
				<div className="container">
					<div className="top">
						<h1 className="heading loading"/>
						<span className="version loading">v2.6.2</span>
						{! neveDash.whiteLabel &&
						<div className="loading logo"/>
						}
					</div>
					<nav className="navigation">
						{
							Array.from(Array(6)).map(() => {
								return <li><a className="loading"/></li>;
							})
						}
					</nav>
				</div>
			</header>
			<div className="container content">
				<div className="main">
					{
						neveDash.notifications &&
						<div className="notifications">
							{Object.keys(neveDash.notifications).map(() => {
								return <div className="notification loading placeholder"/>;
							})}
						</div>
					}
					<div className="tab-content columns start">
						<div className="col">
							<div className="card">
								<div className="card-header">
									<div className="loading icon"/>
									<h3 className="loading title"/>
								</div>
								<div className="card-content">
									<p className="loading card-description"/>
									<p className="loading card-description"/>
									<button type="button" className="loading components-button is-button is-default is-primary"/>
								</div>
							</div>
							<div className="card">
								<div className="card-header">
									<div className="loading icon"/>
									<h3 className="loading title"/>
								</div>
								<div className="card-content">
									<p className="loading card-description"/>
									<button type="button" className="loading components-button is-button is-default is-primary"/>
								</div>
							</div>
						</div>
						<div className="col col-last">
							<div className="card customizer-quick-links">
								<div className="card-header">
									<div className="loading icon"/>
									<h3 className="loading title"/>
								</div>
								<div className="card-content">
									<p className="loading card-description"/>
									<p className="loading card-description"/>

									<div className="columns">
										<div className="col">
											<span className="loading link"/>
											<hr/>
											<span className="loading link"/>
											<hr/>
											<span className="loading link"/>
											<hr/>
											<span className="loading link"/>
										</div>
										<div className="col">
											<span className="loading link"/>
											<hr/>
											<span className="loading link"/>
											<hr/>
											<span className="loading link"/>
											<hr/>
											<span className="loading link"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sidebar-wrap">
					{! neveDash.whiteLabel &&
					<aside className="sidebar card">
						<div className="sidebar-section">
							<h4 className="loading"/>
							<p className="loading card-description"/>
							<p className="loading card-description"/>
							<p className="loading card-description"/>
							<span className="loading link"/>
						</div>
						<hr/>
						<div className="sidebar-section">
							<h4 className="loading"/>
							<p className="loading card-description"/>
							<p className="loading card-description"/>
							<span className="loading link"/>
						</div>
						<hr/>
						<div className="sidebar-section">
							<h4 className="loading"/>
							<p className="loading card-description"/>
							<p className="loading card-description"/>
							<span className="loading link"/>
						</div>
					</aside>
					}
				</div>
			</div>
		</div>
	);
};


export default Loading;
