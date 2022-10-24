import React from 'react';
import { overviewList } from '../../utils/data';

const Overview = () => {
	return (
		<div class='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
			<h2 class='text-lg font-medium leading-6 text-gray-900'>Overview</h2>
			<div class='mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
				{/* <!-- Card --> */}
				{overviewList.map((item, key) => (
					<div class='overflow-hidden rounded-lg bg-white shadow' key={key}>
						<div class='p-5'>
							<div class='flex items-center'>
								<div class='flex-shrink-0'>
									{/* <!-- Heroicon name: outline/scale --> */}
									<svg
										class='h-6 w-6 text-gray-400'
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
								</div>
								<div class='ml-5 w-0 flex-1'>
									<dl>
										<dt class='truncate text-sm font-medium text-gray-500'>
											{item.title}
										</dt>
										<dd>
											<div class='text-lg font-medium text-gray-900'>
												{item.data}
											</div>
										</dd>
									</dl>
								</div>
							</div>
						</div>
						<div class='bg-gray-50 px-5 py-3'>
							<div class='text-sm'>
								<a
									href='#'
									class='font-medium text-cyan-700 hover:text-cyan-900'
								>
									View all
								</a>
							</div>
						</div>
					</div>
				))}

				{/* <!-- More items... --> */}
			</div>
		</div>
	);
};

export default Overview;
