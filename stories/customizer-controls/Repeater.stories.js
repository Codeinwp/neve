import Repeater from '../../assets/apps/customizer-controls/src/repeater/Repeater';
import { CustomizerDecorator } from '../components/decorators';
import {
	SOCIAL_ICONS_DEFAULT,
	CONTACT_DEFAULT,
	SHARING_ICONS_DEFAULT,
	FIELDS,
} from '../utils/values';
import { useState } from '@wordpress/element';

export default {
	title: 'Customizer/Controls/Repeater',
	component: Repeater,
	args: {
		label: 'Repeater',
		components: SOCIAL_ICONS_DEFAULT,
		fields: FIELDS,
	},
	decorators: [CustomizerDecorator],
};

const Template = (args) => {
	const [value, setValue] = useState(args.components);

	return (
		<>
			<Repeater
				{...args}
				value={value}
				onUpdate={setValue}
				newItemFields={args?.newItemFields || {}}
				allowNew={args.allowNew || false}
			/>
			<div className="value-previewer">
				<strong>Components:</strong>
				<pre>{JSON.stringify(value, null, ' ')}</pre>
			</div>
		</>
	);
};

export const SocialIcons = Template.bind({});
export const Contact = Template.bind({});
export const Sharing = Template.bind({});
export const AllowsAdding = Template.bind({});

SocialIcons.args = { components: SOCIAL_ICONS_DEFAULT };
Contact.args = { components: CONTACT_DEFAULT };
Sharing.args = { components: SHARING_ICONS_DEFAULT };
AllowsAdding.args = { components: SHARING_ICONS_DEFAULT, allowNew: 'yes' };
