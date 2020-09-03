/**
 * WordPress dependencies
 */
const {
	Path,
	Rect,
	SVG
} = wp.components;

export const neveIcon = () => {
	return (
		<SVG width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Path d="M4.77822 10.2133V19.3287H0.118347V0.802224C0.118347 0.712594 0.145598 0.649854 0.200099 0.614002C0.254601 0.578149 0.354519 0.622964 0.499857 0.748446L12.1359 10.2133V1.04422H16.7958V19.5976C16.7958 19.7051 16.7685 19.7724 16.714 19.7992C16.6595 19.8261 16.5596 19.7768 16.4143 19.6514L4.77822 10.2133Z"/>
			<Rect x="0.118347" y="22.3334" width="16.6774" height="1.51613"/>
		</SVG>
	);
};

export const alignRightIcon = () => {
	return (
		<SVG width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Path d="M16.5 1.25H7.61111M16.5 9H0.5M16.5 16.75H7.61111" strokeWidth="1.5"/>
		</SVG>
	);
};

export const alignCenterIcon = () => {
	return (
		<SVG width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Path d="M12.9444 1.25H4.05556M16.5 9H0.5M12.9444 16.75H4.05556" strokeWidth="1.5"/>
		</SVG>
	);
};

export const alignLeftIcon = () => {
	return (
		<SVG width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Path d="M0.5 1.25H9.38889M0.5 9H16.5M0.5 16.75H9.38889" strokeWidth="1.5"/>
		</SVG>
	);
};
