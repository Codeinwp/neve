import PaletteSelector from './PaletteSelector';
import PaletteColors from './PaletteColors';
import PaletteForm from './PaletteForm';

const GlobalColors = ({ onChange, currentValue, label, defaultValues }) => {
	return (
		<div className="neve-global-colors-wrap">
			{label && <span className="customize-control-title">{label}</span>}

			<PaletteSelector values={currentValue} save={onChange} />

			<PaletteForm
				values={currentValue}
				save={onChange}
				disabled={Object.keys(currentValue.palettes).length > 5}
			/>

			<PaletteColors
				values={currentValue}
				save={onChange}
				defaults={defaultValues}
			/>
		</div>
	);
};

export default GlobalColors;
