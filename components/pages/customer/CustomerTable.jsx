import React from 'react';
import { customers } from '../../../utils/data';

const CustomerTable = () => {
	return (
		<div>
			{/* <!-- Activity table (small breakpoint and up) --> */}
			<div class='block'>
				<div class='mt-2 flex flex-col'>
					<div class='min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg'>
						<table class='min-w-full divide-y divide-gray-200'>
							<thead>
								<tr>
									<th
										class='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										First Name
									</th>
									<th
										class='bg-gray-50 whitespace-nowrap px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Last Name
									</th>
									<th
										class='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Email
									</th>
									<th
										class='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Phone
									</th>
									<th
										class='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Status
									</th>

									<th
										class='bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900'
										scope='col'
									>
										Action
									</th>
								</tr>
							</thead>
							<tbody class='divide-y divide-gray-200 bg-white'>
								{customers.map((customer) => (
									<tr class='bg-white' key={customer.id}>
										<td class='whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
											{customer.firstName}
										</td>
										<td class='whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500'>
											{customer.lastName}
										</td>
										<td class='whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500'>
											{customer.email}
										</td>
										<td class='whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500'>
											{customer.phoneNumber}
										</td>
										<td class='hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block'>
											<span class='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize'>
												success
											</span>
										</td>
										<td class='whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500'>
											<time datetime='2020-07-11'>July 11, 2020</time>
										</td>
									</tr>
								))}

								{/* <!-- More transactions... --> */}
							</tbody>
						</table>
						{/* <!-- Pagination --> */}
						<nav
							class='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
							aria-label='Pagination'
						>
							<div class='hidden sm:block'>
								<p class='text-sm text-gray-700'>
									Showing
									<span class='font-medium'>1</span>
									to
									<span class='font-medium'>10</span>
									of
									<span class='font-medium'>20</span>
									results
								</p>
							</div>
							<div class='flex flex-1 justify-between sm:justify-end'>
								<a
									href='#'
									class='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
								>
									Previous
								</a>
								<a
									href='#'
									class='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
								>
									Next
								</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerTable;
