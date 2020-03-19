/* global neveDash */
import classnames from 'classnames';

const Card = (props) => {
  const {icon, iconAlt, title, description, children, classNames} = props;
  return (
    <div className={classnames([ 'card', classNames ])}>
      <div className="card-header">
        {icon && <img className="icon" src={icon} alt={iconAlt || 'icon'}/>}
        {title && <h3 className="title">{title}</h3>}
      </div>
      <div className="card-content">
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
