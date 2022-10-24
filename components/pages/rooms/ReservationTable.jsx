import React from 'react';
import { reservations } from '../../../utils/data';

const ReservationTable = () => {
	return (
		<div>
			{/* <!-- Activity table (small breakpoint and up) --> */}
			<div className='block'>
				<div className='mt-2 flex flex-col'>
					<div className='min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg'>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead>
								<tr>
									<th
										className='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Customer Name
									</th>
									<th
										className='bg-gray-50 whitespace-nowrap px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Phone
									</th>
									<th
										className='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Room Name
									</th>
									<th
										className='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Room No
									</th>
									<th
										className='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Check In
									</th>
									<th
										className='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Check Out
									</th>
									<th
										className='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Booking Status
									</th>
									<th
										className='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
										scope='col'
									>
										Payment Status
									</th>

									<th
										className='bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900'
										scope='col'
									>
										Action
									</th>
								</tr>
							</thead>
							<tbody className='divide-y divide-gray-200 bg-white'>
								{reservations.map((reservation) => (
									<tr className='bg-white' key={reservation.id}>
										<td className='whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
											{reservation.customerName}
										</td>
										<td className='whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500'>
											{reservation.phoneNumber}
										</td>
										<td className='whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500'>
											{reservation.roomName}
										</td>
										<td className='whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500'>
											{reservation.roomNumber}
										</td>
										<td className='whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500'>
											{reservation.checkIn}
										</td>
										<td className='whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500'>
											{reservation.checkOut}
										</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
											<span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize'>
												{reservation.bookingStatus}
											</span>
										</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
											<span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize'>
												{reservation.paymentStatus}
											</span>
										</td>
										<td className='whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500'>
											<time datetime='2020-07-11'>July 11, 2020</time>
										</td>
									</tr>
								))}

								{/* <!-- More transactions... --> */}
							</tbody>
						</table>
						{/* <!-- Pagination --> */}
						<nav
							className='w-full flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
							aria-label='Pagination'
						>
							<div className='hidden sm:block'>
								<p className='text-sm text-gray-700'>
									Showing
									<span className='font-medium'>1</span>
									to
									<span className='font-medium'>10</span>
									of
									<span className='font-medium'>20</span>
									results
								</p>
							</div>
							<div className='flex flex-1 justify-between sm:justify-end'>
								<a
									href='#'
									className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
								>
									Previous
								</a>
								<a
									href='#'
									className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
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

export default ReservationTable;
