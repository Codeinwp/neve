import React from 'react';
import Header from './Header';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

const App = () => {
	const [currentStep, setCurrentStep] = React.useState(1);
	const [websiteType, setWebsiteType] = React.useState('');
	const [searchText, setSearchText] = React.useState('');

	const handleNextStep = () => {
		setCurrentStep(currentStep + 1);
	};

	const isNarrowContainerStep = [1, 5, 6].includes(currentStep);
	return (
		<div>
			<Header />
			<div
				className={`container ${isNarrowContainerStep ? 'narrow' : ''}`}
			>
				{currentStep === 1 && (
					<StepOne
						onNextStep={handleNextStep}
						onCategorySelect={setWebsiteType}
						onSearchUpdate={setSearchText}
					/>
				)}

				{currentStep === 2 && (
					<StepTwo
						onNextStep={handleNextStep}
						onCategorySelect={setWebsiteType}
						onSearchUpdate={setSearchText}
						searchText={searchText}
						websiteType={websiteType}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
