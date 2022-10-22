import Link from 'next/link';
import React, { useState } from 'react';

const DefaultLayout = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	return (
		<div class='min-h-full'>
			{/* <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}
			{sidebarOpen && (
				<div class='relative z-40 lg:hidden' role='dialog' aria-modal='true'>
					{/* <!--
                    Off-canvas menu backdrop, show/hide based on off-canvas menu state.

                    Entering: "transition-opacity ease-linear duration-300"
                        From: "opacity-0"
                        To: "opacity-100"
                    Leaving: "transition-opacity ease-linear duration-300"
                        From: "opacity-100"
                        To: "opacity-0"
                    --> */}
					<div class='fixed inset-0 bg-gray-600 bg-opacity-75'></div>

					<div class='fixed inset-0 z-40 flex'>
						{/* <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      --> */}
						<div class='relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pt-5 pb-4'>
							{/* <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        --> */}
							<div class='absolute top-0 right-0 -mr-12 pt-2'>
								<button
									type='button'
									onClick={() => setSidebarOpen(false)}
									class='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
								>
									<span class='sr-only'>Close sidebar</span>
									{/* <!-- Heroicon name: outline/x-mark --> */}
									<svg
										class='h-6 w-6 text-white'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								</button>
							</div>

							<div class='flex flex-shrink-0 items-center px-4'>
								<img
									class='h-8 w-auto'
									src='https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=300'
									alt='Easywire logo'
								/>
							</div>
							<nav
								class='mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto'
								aria-label='Sidebar'
							>
								<div class='space-y-1 px-2'>
									{/* <!-- Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600" --> */}
									<a
										href='#'
										class='bg-cyan-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md'
										aria-current='page'
									>
										{/* <!-- Heroicon name: outline/home --> */}
										<svg
											class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
											/>
										</svg>
										Home
									</a>

									<a
										href='#'
										class='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
									>
										{/* <!-- Heroicon name: outline/clock --> */}
										<svg
											class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
											/>
										</svg>
										History
									</a>

									<a
										href='#'
										class='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
									>
										{/* <!-- Heroicon name: outline/scale --> */}
										<svg
											class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z'
											/>
										</svg>
										Balances
									</a>

									<a
										href='#'
										class='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
									>
										{/* <!-- Heroicon name: outline/credit-card --> */}
										<svg
											class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
											/>
										</svg>
										Cards
									</a>

									<a
										href='#'
										class='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
									>
										{/* <!-- Heroicon name: outline/user-group --> */}
										<svg
											class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
											/>
										</svg>
										Recipients
									</a>

									<a
										href='#'
										class='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
									>
										{/* <!-- Heroicon name: outline/document-chart-bar --> */}
										<svg
											class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
											/>
										</svg>
										Reports
									</a>
								</div>
								<div class='mt-6 pt-6'>
									<div class='space-y-1 px-2'>
										<a
											href='#'
											class='group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white'
										>
											{/* <!-- Heroicon name: outline/cog --> */}
											<svg
												class='mr-4 h-6 w-6 text-cyan-200'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke-width='1.5'
												stroke='currentColor'
												aria-hidden='true'
											>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													d='M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495'
												/>
											</svg>
											Settings
										</a>

										<a
											href='#'
											class='group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white'
										>
											{/* <!-- Heroicon name: outline/question-mark-circle --> */}
											<svg
												class='mr-4 h-6 w-6 text-cyan-200'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke-width='1.5'
												stroke='currentColor'
												aria-hidden='true'
											>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
												/>
											</svg>
											Help
										</a>

										<a
											href='#'
											class='group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white'
										>
											{/* <!-- Heroicon name: outline/shield-check --> */}
											<svg
												class='mr-4 h-6 w-6 text-cyan-200'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke-width='1.5'
												stroke='currentColor'
												aria-hidden='true'
											>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
												/>
											</svg>
											Privacy
										</a>
									</div>
								</div>
							</nav>
						</div>

						<div class='w-14 flex-shrink-0' aria-hidden='true'>
							{/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
						</div>
					</div>
				</div>
			)}

			{/* <!-- Static sidebar for desktop --> */}
			<div class='hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col'>
				{/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
				<div class='flex flex-grow flex-col overflow-y-auto bg-cyan-700 pt-5 pb-4'>
					<div class='flex flex-shrink-0 items-center px-4'>
						<img
							class='h-8 w-auto'
							src='https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=300'
							alt='Easywire logo'
						/>
					</div>
					<nav
						class='mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto'
						aria-label='Sidebar'
					>
						<div class='space-y-1 px-2'>
							{/* <!-- Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600" --> */}
							<Link href='/'>
								<a
									class='bg-cyan-800 text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
									aria-current='page'
								>
									{/* <!-- Heroicon name: outline/home --> */}
									<svg
										class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
										/>
									</svg>
									Home
								</a>
							</Link>

							<a
								href='#'
								class='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
							>
								{/* <!-- Heroicon name: outline/clock --> */}
								<svg
									class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									aria-hidden='true'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
								History
							</a>

							<a
								href='#'
								class='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
							>
								{/* <!-- Heroicon name: outline/scale --> */}
								<svg
									class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									aria-hidden='true'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z'
									/>
								</svg>
								Balances
							</a>

							<a
								href='#'
								class='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
							>
								{/* <!-- Heroicon name: outline/credit-card --> */}
								<svg
									class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									aria-hidden='true'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
									/>
								</svg>
								Cards
							</a>

							<Link href='/customers'>
								<a class='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'>
									<svg
										class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
										/>
									</svg>
									Customers
								</a>
								{/* <!-- Heroicon name: outline/user-group --> */}
							</Link>

							<a
								href='#'
								class='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
							>
								{/* <!-- Heroicon name: outline/document-chart-bar --> */}
								<svg
									class='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									aria-hidden='true'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
									/>
								</svg>
								Reports
							</a>
						</div>
						<div class='mt-6 pt-6'>
							<div class='space-y-1 px-2'>
								<a
									href='#'
									class='group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white'
								>
									{/* <!-- Heroicon name: outline/cog --> */}
									<svg
										class='mr-4 h-6 w-6 text-cyan-200'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495'
										/>
									</svg>
									Settings
								</a>

								<a
									href='#'
									class='group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white'
								>
									{/* <!-- Heroicon name: outline/question-mark-circle --> */}
									<svg
										class='mr-4 h-6 w-6 text-cyan-200'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
										/>
									</svg>
									Help
								</a>

								<a
									href='#'
									class='group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white'
								>
									{/* <!-- Heroicon name: outline/shield-check --> */}
									<svg
										class='mr-4 h-6 w-6 text-cyan-200'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
										/>
									</svg>
									Privacy
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>

			<div class='flex flex-1 flex-col lg:pl-64'>
				<div class='flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none'>
					<button
						type='button'
						onClick={() => setSidebarOpen(true)}
						class='border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden'
					>
						<span class='sr-only'>Open sidebar</span>
						{/* <!-- Heroicon name: outline/bars-3-center-left --> */}
						<svg
							class='h-6 w-6'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							aria-hidden='true'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5'
							/>
						</svg>
					</button>
					{/* <!-- Search bar --> */}
					<div class='flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8'>
						<div class='flex flex-1'>
							<form class='flex w-full md:ml-0' action='#' method='GET'>
								<label for='search-field' class='sr-only'>
									Search
								</label>
								<div class='relative w-full text-gray-400 focus-within:text-gray-600'>
									<div
										class='pointer-events-none absolute inset-y-0 left-0 flex items-center'
										aria-hidden='true'
									>
										{/* <!-- Heroicon name: mini/magnifying-glass --> */}
										<svg
											class='h-5 w-5'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'
											aria-hidden='true'
										>
											<path
												fill-rule='evenodd'
												d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
												clip-rule='evenodd'
											/>
										</svg>
									</div>
									<input
										id='search-field'
										name='search-field'
										class='block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
										placeholder='Search transactions'
										type='search'
									/>
								</div>
							</form>
						</div>
						<div class='ml-4 flex items-center md:ml-6'>
							<button
								type='button'
								class='rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2'
							>
								<span class='sr-only'>View notifications</span>
								{/* <!-- Heroicon name: outline/bell --> */}
								<svg
									class='h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									aria-hidden='true'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
									/>
								</svg>
							</button>

							{/* <!-- Profile dropdown --> */}
							<div class='relative ml-3'>
								<div>
									<button
										type='button'
										class='flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50'
										id='user-menu-button'
										aria-expanded='false'
										aria-haspopup='true'
										onClick={() => setDropdownOpen(!dropdownOpen)}
									>
										<img
											class='h-8 w-8 rounded-full'
											src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
											alt=''
										/>
										<span class='ml-3 hidden text-sm font-medium text-gray-700 lg:block'>
											<span class='sr-only'>Open user menu for </span>Emilia
											Birch
										</span>
										{/* <!-- Heroicon name: mini/chevron-down --> */}
										<svg
											class='ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'
											aria-hidden='true'
										>
											<path
												fill-rule='evenodd'
												d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
												clip-rule='evenodd'
											/>
										</svg>
									</button>
								</div>

								{/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
								{dropdownOpen && (
									<div
										class='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
										role='menu'
										aria-orientation='vertical'
										aria-labelledby='user-menu-button'
										tabindex='-1'
									>
										{/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
										<a
											href='#'
											class='block px-4 py-2 text-sm text-gray-700'
											role='menuitem'
											tabindex='-1'
											id='user-menu-item-0'
										>
											Your Profile
										</a>
										<a
											href='#'
											class='block px-4 py-2 text-sm text-gray-700'
											role='menuitem'
											tabindex='-1'
											id='user-menu-item-1'
										>
											Settings
										</a>
										<a
											href='#'
											class='block px-4 py-2 text-sm text-gray-700'
											role='menuitem'
											tabindex='-1'
											id='user-menu-item-2'
										>
											Logout
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<main class='flex-1 pb-8'>{children}</main>
			</div>
		</div>
	);
};

export default DefaultLayout;
