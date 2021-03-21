import { times } from 'lodash';
import classnames from 'classnames';

const ColumnsIndicators = ({ howMany = 12, horizontal = false }) => {
	const columns = [];
	times(howMany).forEach((i) => {
		columns.push(<span key={i} className={`column-${i}`} />);
	});

	return (
		<div className={classnames('columns-indicator', { horizontal })}>
			{columns}
		</div>
	);
};

export default ColumnsIndicators;
