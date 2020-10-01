/* global neveDash */
import Card from '../Card';
import { tabs } from '../../utils/common';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Button } = wp.components;

const Start = (props) => {

  const { setTab } = props;
  const { showFeedbackNotice, pro, whiteLabel, customizerShortcuts } = neveDash;
  const starterSitesHidden = whiteLabel && whiteLabel.hideStarterSites;

  const renderCustomizerLinks = () => {
    const split = Math.ceil(customizerShortcuts.length / 2);
    const parts = [ customizerShortcuts.slice(0, split), customizerShortcuts.slice(split) ];
    return (
      <div className="columns">
        {
          parts.map((column, index) => {
            return (
              <div className="col" key={index}>
                {
                  column.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <Button isLink href={item.link}>{item.text}</Button>
                        {index !== column.length - 1 && <hr/>}
                      </Fragment>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  };

  return (
    <>
      {(tabs['starter-sites'] && ! starterSitesHidden) &&
      <Card
        icon={neveDash.assets + 'squares.svg'}
        title={__('Starter Sites', 'neve')}
        description={neveDash.strings.starterSitesCardDescription}
      >
        <Button
          isPrimary
          onClick={() => {
            setTab('starter-sites');
          }}
        >{__('Go to Starter Sites', 'neve')}</Button>
      </Card>
      }

      <Card
        classNames="customizer-quick-links"
        icon={neveDash.assets + 'compass.svg'}
        title={__('Customizer quick links', 'neve')}
      >
        {renderCustomizerLinks()}
      </Card>

      {! whiteLabel &&
      <Card
        icon={neveDash.assets + 'page.svg'}
        title={__('Getting Started? Check help and docs', 'neve')}
        description={__('Need more details? Please check our full documentation for detailed information on how to use Neve.', 'neve')}
      >
        <Button
          isLink
          onClick={() => setTab('help')}
        >{__('Go to docs', 'neve')}
        </Button>
      </Card>
      }
      {(showFeedbackNotice && ! pro) &&
      <Card
        classNames="feedback-card"
        icon='awards'
        dashicon={true}
        title={__('Feedback', 'neve')}
        description={__('Share your feedback for Neve and get the chance to win the pro version.', 'neve')}
      >
        <Button isPrimary href='https://themeisle.com/review-neve-theme/'>
          {__('Leave Feedback', 'neve')}
        </Button>
      </Card>
      }
    </>
  );
};

  export default Start;
