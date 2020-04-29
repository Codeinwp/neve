const {Dashicon} = wp.components;
const {useState} = wp.element;

import classnames from 'classnames';

const FeatureRow = ({item}) => {
  const {title, description, inLite} = item;
  const [ tooltip, toggleTooltip ] = useState(false);

  const showTooltip = () => toggleTooltip(true);
  const hideTooltip = () => toggleTooltip(false);

  return (
    <tr className="feature-row">
      <td className="large">
        <div className="feat-wrap">
          <h4>{title}</h4>
          <a href="#"
             onMouseEnter={(e) => {
               e.preventDefault();
               showTooltip();
             }}
             onMouseLeave={(e) => {
               e.preventDefault();
               hideTooltip();
             }}
             onFocus={(e) => {
               e.preventDefault();
               showTooltip();
             }}
             onBlur={(e) => {
               e.preventDefault();
               hideTooltip();
             }}
             onClick={(e) => {
               e.preventDefault();
             }}
          >
            <Dashicon icon="info"/>
            {tooltip &&
            <div className="tooltip-content">
              <p>{description}</p>
            </div>
            }
          </a>
        </div>
      </td>
      <td className={classnames([ 'indicator', {'error': ! inLite, 'success': inLite} ])}>
        <Dashicon size={30} icon={inLite ? 'yes' : 'no-alt'}/>
      </td>
      <td className="indicator success">
        <Dashicon size={30} icon="yes"/>
      </td>
    </tr>
  );
};

export default FeatureRow;
