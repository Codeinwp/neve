/* global neveDash */
import Card from '../Card';

const {__} = wp.i18n;
const {Fragment} = wp.element;
const {Button} = wp.components;

const Help = (props) => {
  const {setTab} = props;
  return (
    <Fragment>
      <div className="col">
        <Card
          icon={neveDash.assets + 'buoy.svg'}
          title={__('Contact Support', 'neve')}
          /* eslint-disable-next-line max-len */
          description={__('We want to make sure you have the best experience using Neve, and that is why we have gathered all the necessary information here for you. We hope you will enjoy using Neve as much as we enjoy creating great products.', 'neve')}
        >
          <Button
            isDefault
            isPrimary
            href='https://wordpress.org/support/theme/neve/'
          >{__('Contact Support', 'neve')}</Button>
        </Card>
        <Card
          icon={neveDash.assets + 'list.svg'}
          title={__('Changelog', 'neve')}
          /* eslint-disable-next-line max-len */
          description={__('Want to get the gist on the latest theme changes? Just consult our changelog below to get a taste of the recent fixes and features implemented.', 'neve')}
        >
          <Button
            isLink
            onClick={() => setTab('changelog')}
          >{__('View Changelog', 'neve')}
          </Button>
        </Card>
        <Card
          icon={neveDash.assets + 'tachometer.svg'}
          title={__('Speed up your site', 'neve')}
          /* eslint-disable-next-line max-len */
          description={__('If you find yourself in a situation where everything on your site is running very slowly, you might consider having a look at the documentation below where you will find the most common issues causing this and possible solutions for each of the issues.', 'neve')}
        >
          <Button
            isLink
            href="http://docs.themeisle.com/article/63-speed-up-your-wordpress-site">
            {__('Learn More', 'neve')}
          </Button>
        </Card>
      </div>
      <div className="col col-last">
        <Card
          icon={neveDash.assets + 'page.svg'}
          title={__('Documentation', 'neve')}
          /* eslint-disable-next-line max-len */
          description={__('Need more details? Please check our full documentation for detailed information on how to use Neve.', 'neve')}
        >
          <Button
            isLink
            href="https://docs.themeisle.com/article/946-neve-doc"
          >
            {__('Go to docs', 'neve')}
          </Button>
        </Card>
        <Card
          icon={neveDash.assets + 'clone.svg'}
          title={__('Create a child theme', 'neve')}
          /* eslint-disable-next-line max-len */
          description={__('If you want to make changes to the theme\'s files, those changes are likely to be overwritten when you next update the theme. In order to prevent that from happening, you need to create a child theme. For this, please follow the documentation below.', 'neve')}
        >
          <Button
            isLink
            href="http://docs.themeisle.com/article/14-how-to-create-a-child-theme"
          >
            {__('Learn More', 'neve')}
          </Button>
        </Card>
        <Card
          icon={neveDash.assets + 'arrows.svg'}
          title={__('Build a landing page with a drag-and-drop content builder', 'neve')}
          /* eslint-disable-next-line max-len */
          description={__('In the documentation below you will find an easy way to build a great looking landing page using a drag-and-drop content builder plugin.', 'neve')}
        >
          <Button
            isLink
            /* eslint-disable-next-line max-len */
            href="http://docs.themeisle.com/article/219-how-to-build-a-landing-page-with-a-drag-and-drop-content-builder"
          >
            {__('Learn More', 'neve')}
          </Button>
        </Card>
      </div>
    </Fragment>
  );
};

export default Help;
