const Loading = () => (
	<div className="antialiased grow flex flex-col gap-6 h-full">
		<header className="bg-white z-50">
			<div>
				<div className="border-b border-gray-100">
					<div className="max-w-[90vw] lg:container mx-auto px-2 lg:px-6">
						<div className="flex items-center justify-between h-14">
							<div className="flex items-center space-x-3">
								<div className="size-7 bg-gray-200 rounded-sm" />
								<div className="h-4 w-16 bg-gray-200 rounded" />
								<div className="h-5 w-14 bg-gray-200 rounded" />
								<div className="h-4 w-16 bg-gray-200 rounded" />
							</div>
							<div className="flex items-center">
								<div className="flex items-center gap-2 px-3 py-2">
									<div className="size-5 bg-gray-200 rounded" />
									<div className="h-4 w-24 bg-gray-200 rounded" />
								</div>
								<div className="w-px h-4 bg-gray-200 mx-3" />
								<div className="flex items-center gap-2 px-3 py-2">
									<div className="size-5 bg-gray-200 rounded" />
									<div className="h-4 w-20 bg-gray-200 rounded" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-b border-gray-200">
					<div className="max-w-[90vw] lg:container mx-auto px-2 lg:px-6">
						<nav className="flex -mb-px">
							{[...Array(4)].map((item, i) => (
								<div
									key={i}
									className={`px-4 py-3 ${
										i === 0
											? 'border-b-2 border-gray-200'
											: ''
									}`}
								>
									<div className="h-4 w-20 bg-gray-200 rounded" />
								</div>
							))}
						</nav>
					</div>
				</div>
			</div>
		</header>

		<div className="max-w-[90vw] lg:container mx-auto px-2 lg:px-6 flex flex-col lg:flex-row gap-6 h-full grow">
			<div className="grow">
				<div className="grid gap-6">
					<div className="p-6 rounded-lg bg-white shadow-sm">
						<div className="flex items-center mb-6 gap-3">
							<div className="size-5 bg-gray-200 rounded" />
							<div className="h-5 w-40 bg-gray-200 rounded" />
						</div>
						<div className="grid grid-cols-2 gap-x-8 gap-y-4">
							{[...Array(8)].map((_, i) => (
								<div
									key={i}
									className="h-4 w-32 bg-gray-200 rounded"
								/>
							))}
						</div>
					</div>

					<div className="grid xl:grid-cols-2 gap-6">
						<div className="xl:col-span-2 flex items-center justify-between">
							<div className="h-6 w-40 bg-gray-200 rounded" />
							<div className="h-4 w-24 bg-gray-200 rounded" />
						</div>
						{[...Array(8)].map((_, i) => (
							<div
								key={i}
								className="p-6 rounded-lg bg-white shadow-sm"
							>
								<div className="flex items-center mb-6 gap-3">
									<div className="size-5 bg-gray-200 rounded" />
									<div className="h-5 w-32 bg-gray-200 rounded" />
									<div className="ml-auto">
										<div className="h-5 w-12 bg-gray-200 rounded" />
									</div>
								</div>
								<div className="h-4 w-full bg-gray-200 rounded" />
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="shrink-0 lg:w-[435px]">
				<div className="grid gap-6">
					{[...Array(2)].map((_, i) => (
						<div
							key={i}
							className="p-6 rounded-lg bg-white shadow-sm"
						>
							<div className="flex items-center mb-6 gap-3">
								<div className="h-5 w-32 bg-gray-200 rounded" />
							</div>
							<div className="h-4 w-full bg-gray-200 rounded mb-4" />
							<div className="h-4 w-40 bg-gray-200 rounded" />
						</div>
					))}
					<div className="p-6 rounded-lg bg-white shadow-sm space-y-3">
						<div className="flex items-center mb-6 gap-3">
							<div className="h-5 w-40 bg-gray-200 rounded" />
						</div>
						{[...Array(6)].map((_, i) => (
							<div
								key={i}
								className="flex items-start p-3 bg-white rounded-lg border border-gray-100"
							>
								<div className="flex-grow">
									<div className="flex gap-4 items-center">
										<div className="size-6 bg-gray-200 rounded" />
										<div className="h-4 w-24 bg-gray-200 rounded" />
										<div className="ml-auto h-4 w-32 bg-gray-200 rounded" />
									</div>
									<div className="h-4 w-3/4 bg-gray-200 rounded mt-1" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Loading;
