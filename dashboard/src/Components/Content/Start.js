/* global neveDash */
import Card from '../Card';

const {__} = wp.i18n;
const {Fragment} = wp.element;
const {Button} = wp.components;


const Start = (props) => {
  const {setTab} = props;
  return (
    <Fragment>
      <div className="col">
        <Card
          icon={neveDash.assets + 'squares.svg'}
          title={__('Starter Sites', 'neve')}
          description={__('Neve now comes with a sites library with various designs to pick from. Visit our collection of demos that are constantly being added.', 'neve')}
        >
          <Button
            isPrimary
						isLarge
            onClick={() => {
              setTab('starter-sites');
            }}
          >{__('Go to Starter Sites', 'neve')}</Button>
        </Card>
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
      </div>
      <div className="col col-last">
        <Card
          classNames="customizer-quick-links"
          icon={neveDash.assets + 'compass.svg'}
          title={__('Customizer quick links', 'neve')}
          description={__('Join the community of Neve users. Get connected, share opinions, ask questions and help each other!', 'neve')}
        >
          {renderCustomizerLinks()}
        </Card>
      </div>
    </Fragment>
  );
};


const renderCustomizerLinks = () => {
  const links = neveDash.customizerShortcuts;
  const split = Math.ceil(links.length / 2);
  const parts = [ links.slice(0, split), links.slice(split) ];
  return (
    <div className="columns">
      {
        parts.map((column) => {
          return (
            <div className="col">
              {
                column.map((item, index) => {
                  return (
                    <Fragment>
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

export default Start;
