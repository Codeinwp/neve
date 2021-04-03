import Repeater from './Repeater';
import { maybeParseJson } from '../common/common';

const RepeaterComponent = ({ control }) => {
	const [value, setValue] = useState(maybeParseJson(control.setting.get()));
	const { title } = control.params;

	return (
		<div className="nv-repeater--items-wrap">
			<Repeater title={title} />
		</div>
	);
};

export default RepeaterComponent;
