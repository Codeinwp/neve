import React from 'react';
import Repeater from "./Repeater";
import {
	CustomizerDecorator,
} from '../components/decorators';
import { SOCIAL_ICONS_DEFAULT, CONTACT_DEFAULT } from '../utils/values';
import { useState } from '@wordpress/element';

export default {
	title: 'Customizer/Controls/Repeater',
	component: Repeater,
	args: {
		label: 'Repeater',
		components: SOCIAL_ICONS_DEFAULT
	},
	decorators: [ CustomizerDecorator ],
};

const Template = (args) => {
	const [value, setValue] = useState(args.components);

	return (
		<>
			<Repeater {...args} value={value} onUpdate={setValue}/>
			<div className="value-previewer">
				<strong>Components:</strong>
				<pre>{ JSON.stringify(value, null, ' ') }</pre>
			</div>
		</>
	);
};

export const SocialIcons = Template.bind({});
export const Contact = Template.bind({});

SocialIcons.args = { components: SOCIAL_ICONS_DEFAULT };
Contact.args = { components: CONTACT_DEFAULT };
