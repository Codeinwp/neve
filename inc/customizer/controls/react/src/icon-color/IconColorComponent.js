import IconColor from './IconColor';
import { maybeParseJson } from '../common/common';
import {useState} from "@wordpress/element";

const IconColorComponent = ({ control }) => {
	const [value, setValue] = useState(maybeParseJson(control.setting.get()));
	const { components, label } = control.params;

	return <IconColor />;
};

export default IconColorComponent;
