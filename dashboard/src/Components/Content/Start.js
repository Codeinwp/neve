/* global neveDash */
import Card from '../Card';
import { tabs } from '../../utils/common';

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { Button } from '@wordpress/components';

const Start = ( props ) => {
	function renderLeftCol() {
		if ( neveDash.whiteLabel && neveDash.whiteLabel.hideStarterSites ) {
			return null;
		}

		return (
			<div className="col">
				{ tabs[ 'starter-sites' ] && (
					<Card
						icon={ neveDash.assets + 'squares.svg' }
						title={ __( 'Starter Sites', 'neve' ) }
						description={
							neveDash.strings.starterSitesCardDescription
						}
					>
						<Button
							isPrimary
							onClick={ () => {
								setTab( 'starter-sites' );
							} }
						>
							{ __( 'Go to Starter Sites', 'neve' ) }
						</Button>
					</Card>
				) }
				{ ! neveDash.whiteLabel && (
					<Card
						icon={ neveDash.assets + 'page.svg' }
						title={ __(
							'Getting Started? Check help and docs',
							'neve'
						) }
						description={ __(
							'Need more details? Please check our full documentation for detailed information on how to use Neve.',
							'neve'
						) }
					>
						<Button isLink onClick={ () => setTab( 'help' ) }>
							{ __( 'Go to docs', 'neve' ) }
						</Button>
					</Card>
				) }
			</div>
		);
	}

	const { setTab } = props;
	return (
		<Fragment>
			{ renderLeftCol() }
			<div className="col col-last">
				<Card
					classNames="customizer-quick-links"
					icon={ neveDash.assets + 'compass.svg' }
					title={ __( 'Customizer quick links', 'neve' ) }
				>
					{ renderCustomizerLinks() }
				</Card>
			</div>
		</Fragment>
	);
};

const renderCustomizerLinks = () => {
	const links = neveDash.customizerShortcuts;
	const split = Math.ceil( links.length / 2 );
	const parts = [ links.slice( 0, split ), links.slice( split ) ];
	return (
		<div className="columns">
			{ parts.map( ( column, index ) => {
				return (
					<div className="col" key={ index }>
						{ column.map( ( item, index ) => {
							return (
								<Fragment key={ index }>
									<Button isLink href={ item.link }>
										{ item.text }
									</Button>
									{ index !== column.length - 1 && <hr /> }
								</Fragment>
							);
						} ) }
					</div>
				);
			} ) }
		</div>
	);
};

export default Start;
