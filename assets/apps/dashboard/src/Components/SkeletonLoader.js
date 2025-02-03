const SkeletonLoader = () => {
	return (
		<div className="antialiased grow flex flex-col gap-6 h-full">
			{/* Header Skeleton */}
			<header className="bg-white z-50">
				<div className="border-b border-gray-100">
					<div className="max-w-[90vw] w-full lg:container mx-auto px-2 lg:px-6">
						<div className="flex flex-col gap-5 py-2 sm:flex-row items-center justify-between">
							<div className="flex items-center space-x-3">
								<div className="size-7 rounded-sm bg-gray-200 animate-pulse" />
								<div className="w-16 h-4 bg-gray-200 animate-pulse rounded" />
							</div>
							<div className="flex items-center gap-3">
								<div className="w-28 h-8 bg-gray-200 animate-pulse rounded" />
								<div className="w-px h-4 bg-gray-200" />
								<div className="w-28 h-8 bg-gray-200 animate-pulse rounded" />
							</div>
						</div>
					</div>
				</div>
				<div className="border-b border-gray-200">
					<div className="max-w-[90vw] w-full lg:container mx-auto px-2 lg:px-6">
						<nav className="flex -mb-px justify-center sm:justify-start">
							{[1, 2, 3].map((i) => (
								<div
									key={i}
									className="w-24 h-4 bg-gray-200 animate-pulse rounded m-4"
								/>
							))}
						</nav>
					</div>
				</div>
			</header>

			{/* Main Content Skeleton */}
			<div className="max-w-[90vw] w-full lg:container mx-auto px-2 lg:px-6 flex flex-col lg:flex-row gap-6">
				<div className="grow">
					{/* Get Started Section */}
					<div className="p-6 rounded-lg shadow-sm bg-white border border-gray-200">
						<div className="flex items-center mb-6 gap-3">
							<div className="w-5 h-5 bg-gray-200 animate-pulse rounded" />
							<div className="w-24 h-5 bg-gray-200 animate-pulse rounded" />
							<div className="ml-auto">
								<div className="w-32 h-10 bg-gray-200 animate-pulse rounded" />
							</div>
						</div>
						<div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
							{[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
								<div
									key={i}
									className="h-20 bg-gray-100 rounded-lg animate-pulse"
								/>
							))}
						</div>
					</div>

					{/* Plugins Section */}
					<div className="mt-6 p-6 rounded-lg shadow-sm bg-white">
						<div className="flex items-center mb-6 gap-3">
							<div className="w-40 h-5 bg-gray-200 animate-pulse rounded" />
						</div>
						<div className="grid gap-4 2xl:grid-cols-2">
							{[1, 2, 3, 4, 5, 6].map((i) => (
								<div
									key={i}
									className="flex items-start p-3 bg-white rounded-lg border border-gray-100"
								>
									<div className="flex-grow">
										<div className="flex gap-4 items-center">
											<div className="w-6 h-6 bg-gray-200 animate-pulse rounded" />
											<div className="w-24 h-4 bg-gray-200 animate-pulse rounded" />
											<div className="ml-auto w-24 h-4 bg-gray-200 animate-pulse rounded" />
										</div>
										<div className="w-48 h-4 bg-gray-200 animate-pulse rounded mt-2" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Sidebar Skeleton */}
				<div className="shrink-0 lg:w-[435px]">
					<div className="grid gap-6">
						{[1, 2, 3, 4].map((i) => (
							<div
								key={i}
								className="p-6 rounded-lg shadow-sm bg-white"
							>
								<div className="flex items-center mb-6 gap-3">
									<div className="w-32 h-5 bg-gray-200 animate-pulse rounded" />
								</div>
								<div className="w-full h-24 bg-gray-100 rounded animate-pulse" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkeletonLoader;
