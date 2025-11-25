/* global neveDash */
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { LucideExternalLink, LucideCheck } from 'lucide-react';
import Card from '../../Layout/Card';
import Button from '../Common/Button';
import TransitionWrapper from '../Common/TransitionWrapper';
import cn from 'classnames';
import apiFetch from '@wordpress/api-fetch';

/**
 * Initialize step state with auto-detection and saved progress
 *
 * @param {Array} steps - Array of step objects
 * @param {string} sectionKey - Section key (identity, content, performance)
 * @param {Object} savedProgress - Saved progress from server
 * @param {Object} autoDetections - Auto-detection overrides by index
 * @return {Array} Initialized state array
 */
const initializeStepState = (
	steps,
	sectionKey,
	savedProgress,
	autoDetections = {}
) => {
	return steps.map((step, index) => {
		// Auto-detection overrides saved false values
		if (autoDetections[index]) {
			return true;
		}

		// Use saved progress if available
		if (
			savedProgress[sectionKey] &&
			savedProgress[sectionKey][index] !== undefined
		) {
			return savedProgress[sectionKey][index];
		}

		return step.completed;
	});
};

const { plugins } = neveDash;

const activeTPC =
	plugins['templates-patterns-collection'] &&
	plugins['templates-patterns-collection'].cta === 'deactivate';

const LaunchProgress = () => {
	// Get checks from neveDash
	const checks = neveDash.launchProgress || {};
	const autoDetected = checks.autoDetected || {};
	const savedProgress = checks.savedProgress || {};

	// State to track completion for all steps
	const [stepsState, setStepsState] = useState({
		identity: initializeStepState(
			identitySteps,
			'identity',
			savedProgress,
			{
				1: autoDetected.hasLogo,
				3: autoDetected.hasFavicon,
			}
		),
		content: initializeStepState(contentSteps, 'content', savedProgress),
		performance: initializeStepState(
			performanceSteps,
			'performance',
			savedProgress,
			{
				0: autoDetected.hasCustomPermalink,
				1: autoDetected.hasSeoPlugin,
				3: autoDetected.hasPrivacyPage,
			}
		),
	});

	// Save progress whenever it changes
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			apiFetch({
				path: '/nv/v1/dashboard/launch-progress',
				method: 'POST',
				data: { progress: stepsState },
			}).catch((error) => {
				// eslint-disable-next-line no-console
				console.error('Failed to save progress:', error);
			});
		}, 500); // Debounce for 500ms

		return () => clearTimeout(timeoutId);
	}, [stepsState]);

	// Calculate total steps and completed steps
	const allCompleted = [
		...stepsState.identity,
		...stepsState.content,
		...stepsState.performance,
	];
	const completedSteps = allCompleted.filter((completed) => completed).length;
	const totalSteps = allCompleted.length;
	const progressPercentage = (completedSteps / totalSteps) * 100;

	// Trigger confetti when all steps are completed
	useEffect(() => {
		if (completedSteps === totalSteps && totalSteps > 0) {
			triggerConfetti();
		}
	}, [completedSteps, totalSteps]);

	return (
		<TransitionWrapper className="grid gap-6">
			{/* Skip Setup Banner */}
			<div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-sm">
				<div className="flex items-center justify-between gap-6">
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-2">
							<span
								className="text-2xl"
								role="img"
								aria-label="lightning"
							>
								⚡
							</span>
							<h3 className="font-semibold text-gray-900 text-base">
								{__('Want to skip the setup?', 'neve')}
							</h3>
						</div>
						<p className="text-sm text-gray-700 leading-relaxed">
							{__(
								'Explore a vast library of pre-designed sites within Neve. Visit our constantly growing collection of demos to find the perfect starting point for your project.',
								'neve'
							)}
						</p>
					</div>
					<Button
						isPrimary
						href={
							activeTPC
								? neveDash.tpcOnboardingURL
								: neveDash.launchProgressUrls.starterSites
						}
						className="shrink-0 whitespace-nowrap"
					>
						{__('Starter Sites', 'neve')}
					</Button>
				</div>
			</div>

			{/* Progress Bar */}
			<Card className="border-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700">
				{completedSteps === totalSteps && totalSteps > 0 ? (
					// Completion message
					<div className="text-center text-white py-2">
						<h2 className="text-xl font-bold flex items-center justify-center gap-2 mb-3 text-white">
							<span
								className="text-3xl"
								role="img"
								aria-label="party"
							>
								🎉
							</span>
							{__(
								'Congratulations! Your Website is Ready for Launch!',
								'neve'
							)}
						</h2>
						<p className="text-base text-blue-100 mb-4">
							{__(
								"You've completed all essential setup steps. Take your site to the next level with Pro features!",
								'neve'
							)}
						</p>
						{!neveDash.isValidLicense && (
							<a
								href={neveDash.upgradeURL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2 rounded shadow-md hover:shadow-lg transition-all"
							>
								{__('View Pro Plans', 'neve')}
							</a>
						)}
					</div>
				) : (
					// Progress tracking
					<>
						<div className="flex items-center justify-between text-white mb-4">
							<div>
								<h2 className="text-lg font-bold flex items-center gap-2 mb-1 text-white">
									<span
										className="text-2xl"
										role="img"
										aria-label="rocket"
									>
										🚀
									</span>
									{__('Launch Progress', 'neve')}
								</h2>
								<p className="text-sm text-blue-100">
									{__(
										'Complete these essential steps to launch your website',
										'neve'
									)}
								</p>
							</div>
							<div className="text-right">
								<div className="text-3xl font-bold">
									{completedSteps}/{totalSteps}
								</div>
								<div className="text-sm text-blue-100">
									{__('Steps Completed', 'neve')}
								</div>
							</div>
						</div>
						{/* Progress Bar */}
						<div className="w-full bg-blue-500 rounded-full h-3 overflow-hidden">
							<div
								className="bg-white h-full transition-all duration-500 ease-out"
								style={{ width: `${progressPercentage}%` }}
							/>
						</div>
					</>
				)}
			</Card>

			<StepSection
				title={__('Logo & Site Identity', 'neve')}
				steps={identitySteps}
				sectionKey="identity"
				stepsState={stepsState.identity}
				setStepsState={setStepsState}
				startIndex={1}
			/>

			<StepSection
				title={__('Content', 'neve')}
				steps={contentSteps}
				sectionKey="content"
				stepsState={stepsState.content}
				setStepsState={setStepsState}
				startIndex={5}
			/>

			<StepSection
				title={__('Performance', 'neve')}
				steps={performanceSteps}
				sectionKey="performance"
				stepsState={stepsState.performance}
				setStepsState={setStepsState}
				startIndex={9}
			/>
		</TransitionWrapper>
	);
};

const StepSection = ({
	title,
	steps,
	sectionKey,
	stepsState,
	setStepsState,
	startIndex = 1,
}) => {
	const stepsCount = steps.length;

	return (
		<Card>
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-lg font-semibold text-gray-900">{title}</h3>
				<span className="text-sm font-medium text-gray-500">
					{stepsCount} {__('Steps', 'neve')}
				</span>
			</div>
			<div className="grid gap-4">
				{steps.map((step, index) => (
					<StepItem
						key={index}
						step={step}
						index={startIndex + index}
						isCompleted={stepsState[index]}
						onToggle={() => {
							setStepsState((prev) => ({
								...prev,
								[sectionKey]: prev[sectionKey].map(
									(completed, i) =>
										i === index ? !completed : completed
								),
							}));
						}}
					/>
				))}
			</div>
		</Card>
	);
};

const StepItem = ({ step, index, isCompleted, onToggle }) => {
	const checkboxClasses = cn(
		'size-6 rounded border-2 flex items-center justify-center cursor-pointer transition-all shrink-0',
		{
			'bg-blue-600 border-blue-600': isCompleted,
			'bg-white border-gray-300 hover:border-gray-400': !isCompleted,
		}
	);

	const handleToggle = (e) => {
		e.preventDefault();
		e.stopPropagation();
		onToggle();
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			e.stopPropagation();
			onToggle();
		}
	};

	const handleButtonClick = (e) => {
		e.stopPropagation();

		if (!isCompleted) {
			onToggle();
		}

		if (step.link.startsWith('http')) {
			window.open(step.link, '_blank', 'noopener,noreferrer');
		} else {
			window.location.href = step.link;
		}
	};

	const handleRowClick = () => {
		onToggle();
	};

	const handleRowKeyDown = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			onToggle();
		}
	};

	return (
		<div
			className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
			onClick={handleRowClick}
			onKeyDown={handleRowKeyDown}
			role="button"
			tabIndex={0}
		>
			<div
				className={checkboxClasses}
				onClick={handleToggle}
				onKeyDown={handleKeyDown}
				role="checkbox"
				aria-checked={isCompleted}
				tabIndex={0}
			>
				{isCompleted && (
					<LucideCheck
						size={16}
						className="text-white"
						strokeWidth={3}
					/>
				)}
			</div>
			<div className="flex items-center justify-center size-8 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-600 shrink-0">
				{index}
			</div>
			<div className="flex-1">
				<h4 className="text-base font-medium text-gray-900 mb-1">
					{step.title}
				</h4>
				<p className="text-sm text-gray-600">{step.description}</p>
			</div>
			<Button
				isPrimary
				target={step.link.startsWith('http') ? '_blank' : undefined}
				rel={
					step.link.startsWith('http')
						? 'noopener noreferrer'
						: undefined
				}
				className="shrink-0 inline-flex items-center gap-1.5"
				onClick={handleButtonClick}
			>
				{__('Set Up', 'neve')}
				<LucideExternalLink size={16} />
			</Button>
		</div>
	);
};

// Step data
const urls = neveDash.launchProgressUrls || {};

const identitySteps = [
	{
		title: __('Site Title', 'neve') + ' & ' + __('Site Tagline', 'neve'),
		description: __(
			'Replace "Just Another WordPress Site" with your brand name and description',
			'neve'
		),
		link: urls.siteIdentity,
		completed: false,
	},
	{
		title: __('Upload Logo', 'neve'),
		description: __(
			'Add your custom logo to the header for a professional look',
			'neve'
		),
		link: urls.logo,
		completed: false,
	},
	{
		title: __('Set Colors', 'neve'),
		description: __(
			"Customize your site's color scheme to match your brand identity",
			'neve'
		),
		link: urls.colors,
		completed: false,
	},
	{
		title: __('Add Site Icon (Favicon)', 'neve'),
		description: __(
			'Display your brand in browser tabs, bookmarks, and mobile home screens',
			'neve'
		),
		link: urls.favicon,
		completed: false,
	},
];

const contentSteps = [
	{
		title: __('Create Your Homepage', 'neve'),
		description: __(
			'Add compelling content that tells visitors what you do and why it matters',
			'neve'
		),
		link: urls.homepage,
		completed: false,
	},
	{
		title:
			__('About', 'neve') +
			' & ' +
			__('Contact', 'neve') +
			' ' +
			__('Pages', 'neve'),
		description: __(
			'Create essential pages so visitors can learn about you and get in touch',
			'neve'
		),
		link: urls.pages,
		completed: false,
	},
	{
		title: __('Navigation Menu', 'neve'),
		description: __(
			'Make it easy for visitors to find their way around your website',
			'neve'
		),
		link: urls.menus,
		completed: false,
	},
	{
		title: __('Footer', 'neve'),
		description: __(
			'Add copyright info, social links, and contact details to your footer',
			'neve'
		),
		link: urls.footer,
		completed: false,
	},
];

const performanceSteps = [
	{
		title: __('Set Permalink Structure', 'neve'),
		description: __(
			'Configure SEO-friendly URLs (recommended: Post name)',
			'neve'
		),
		link: urls.permalinks,
		completed: false,
	},
	{
		title: __('Install SEO Plugin', 'neve'),
		description: __(
			'Optimize your site for search engines with Yoast SEO or RankMath',
			'neve'
		),
		link: urls.plugins,
		completed: false,
	},
	{
		title: __('Test Site Speed', 'neve'),
		description: __(
			'Check your website speed and performance using free testing tools',
			'neve'
		),
		link: urls.speedTest,
		completed: false,
	},
	{
		title: __('Create Privacy Policy Page', 'neve'),
		description: __(
			'Meet legal requirements with essential privacy and terms pages',
			'neve'
		),
		link: urls.privacyPolicy,
		completed: false,
	},
];

/**
 * Trigger confetti animation
 */
const triggerConfetti = () => {
	const duration = 3000;
	const animationEnd = Date.now() + duration;
	const defaults = {
		startVelocity: 30,
		spread: 360,
		ticks: 60,
		zIndex: 999999,
	};

	const randomInRange = (min, max) => Math.random() * (max - min) + min;

	const interval = setInterval(() => {
		const timeLeft = animationEnd - Date.now();

		if (timeLeft <= 0) {
			return clearInterval(interval);
		}

		const particleCount = 50 * (timeLeft / duration);

		// Create confetti from two origins
		createConfetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
			})
		);
		createConfetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
			})
		);
	}, 250);
};

/**
 * Create confetti particles
 *
 * @param {Object} options - Confetti options
 */
const createConfetti = (options) => {
	const canvas = document.createElement('canvas');
	canvas.style.position = 'fixed';
	canvas.style.top = '0';
	canvas.style.left = '0';
	canvas.style.width = '100%';
	canvas.style.height = '100%';
	canvas.style.pointerEvents = 'none';
	canvas.style.zIndex = options.zIndex || 999999;
	document.body.appendChild(canvas);

	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const particles = [];
	const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];

	const randomInRange = (min, max) => Math.random() * (max - min) + min;

	// Create particles
	for (let i = 0; i < options.particleCount; i++) {
		particles.push({
			x: canvas.width * options.origin.x,
			y: canvas.height * options.origin.y,
			angle: randomInRange(0, 360),
			velocity: options.startVelocity + randomInRange(-5, 5),
			color: colors[Math.floor(Math.random() * colors.length)],
			size: randomInRange(5, 10),
			rotation: randomInRange(0, 360),
			rotationSpeed: randomInRange(-10, 10),
			gravity: 0.5,
			decay: 0.95,
			tick: 0,
		});
	}

	// Animate particles
	const animate = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		let activeParticles = 0;

		particles.forEach((particle) => {
			if (particle.tick < options.ticks) {
				activeParticles++;
				particle.tick++;
				particle.velocity *= particle.decay;
				particle.x +=
					Math.cos((particle.angle * Math.PI) / 180) *
					particle.velocity;
				particle.y +=
					Math.sin((particle.angle * Math.PI) / 180) *
						particle.velocity +
					particle.gravity;
				particle.rotation += particle.rotationSpeed;

				ctx.save();
				ctx.translate(particle.x, particle.y);
				ctx.rotate((particle.rotation * Math.PI) / 180);
				ctx.fillStyle = particle.color;
				ctx.fillRect(
					-particle.size / 2,
					-particle.size / 2,
					particle.size,
					particle.size
				);
				ctx.restore();
			}
		});

		if (activeParticles > 0) {
			window.requestAnimationFrame(animate);
		} else {
			document.body.removeChild(canvas);
		}
	};

	animate();
};

export default LaunchProgress;
