/* jshint esversion: 6 */
import Heading from './Heading';
import PropTypes from 'prop-types';

const HeadingComponent = ({ control }) => {
	const { label, categoryLabel, accordion, style } = control.params;

	return (
		<>
			<Heading
				categoryLabel={categoryLabel}
				label={label}
				accordion={accordion}
			/>
			{style && (
				<style
					dangerouslySetInnerHTML={{
						__html: style,
					}}
				/>
			)}
		</>
	);
};

HeadingComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default HeadingComponent;
