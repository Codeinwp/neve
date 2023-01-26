import PaletteColors from './PaletteColors';

const GlobalCustomColors = ({ onChange, currentValue, defaultValues }) => {
	return (
		<div className="neve-global-colors-wrap">
			<PaletteColors
				values={currentValue}
				save={onChange}
				defaults={defaultValues}
			/>
		</div>
	);
};

export default GlobalCustomColors;
