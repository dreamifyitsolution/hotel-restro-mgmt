import React, { useState } from 'react';

const ReservationCard = () => {
	const [roomStatus, setRoomStatus] = useState(false);

	const handleRoomSelection = () => {
		setRoomStatus(!roomStatus);
	};

	return (
		<div className=''>
			<div className='relative bg-white/30 border rounded-lg shadow-sm hover:shadow-md p-5 transition-all duration-300 ease-in-out'>
				<div className='pb-3 mb-4 border-b border-dashed border-gray-500'>
					<div className='text-lg font-semibold text-gray-700 '>
						Family Deluxe Room
					</div>
					<div>Selected Date:</div>
					<div>Nights:</div>
					<div>Available Room:</div>
					<div className='py-1 px-3 bg-green-500 font-semibold rounded-md text-white absolute top-0 right-0 text-xs mt-2 mr-2'>
						Rs.1200/night
					</div>
					<div className='py-1 px-3 bg-blue-500 font-semibold rounded-md text-white absolute top-8 right-0 text-xs mt-2 mr-2'>
						10% Off
					</div>
				</div>
				{!roomStatus && (
					<button className='default-btn' onClick={handleRoomSelection}>
						Select
					</button>
				)}

				{/* After Selecting this room the below fields will appear */}
				{roomStatus && (
					<div>
						<div className='mt-5'>
							<div className='grid md:grid-cols-2 md:gap-6'>
								<div className='relative z-0 mb-6 w-full group'>
									<label
										for='number-of-rooms'
										class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Number Of Rooms
									</label>
									<input
										type='text'
										id='number-of-rooms'
										class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder=''
										required
									/>
								</div>
								<div className='relative z-0 mb-6 w-full group'>
									<label
										for='number-of-person'
										class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Number Of Person
									</label>
									<input
										type='text'
										id='number-of-person'
										class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder=''
										required
									/>
								</div>
							</div>
							<div className='relative z-0 group w-full group'>
								<label
									for='document-type'
									class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
								>
									Select Rooms Numbers
								</label>
								<select
									type='text'
									id='document-type'
									class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Enter Customer Document Number'
									required
								>
									<option value=''>All</option>
									<option value=''>Family Deluxe Suite A/C</option>
									<option value=''>Honeymoon Suite A/C</option>
									<option value=''>Super Deluxe Couple Non A/C</option>
								</select>
							</div>
						</div>

						{/* Booking payments details */}
						<div className='mt-5'>
							<div className='text-lg font-semibold mb-4 text-gray-700 pb-3 border-b border-dashed border-gray-500'>
								Booking Payments
							</div>
							<div className='relative z-0 mb-6 w-full group'>
								<label
									for='document-type'
									class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
								>
									Discount
								</label>
								<input
									type='text'
									id='document-type'
									class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Enter Customer Document Number'
									required
								/>
							</div>
							<div className='relative z-0 mb-6 w-full group'>
								<label
									for='document-type'
									class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
								>
									Grand Total
								</label>
								<input
									type='text'
									id='document-type'
									class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Enter Customer Document Number'
									required
								/>
							</div>
							<div className='grid md:grid-cols-2 md:gap-6'>
								<div className='relative z-0 mb-6 w-full group'>
									<label
										for='booking-status'
										class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Booking Status
									</label>
									<select
										type='text'
										id='booking-status'
										class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Enter Customer Document Number'
										required
									>
										<option value=''>Pending</option>
										<option value=''>Checked In</option>
										<option value=''>Confirmed</option>
									</select>
								</div>
								<div className='relative z-0 mb-6 w-full group'>
									<label
										for='payment-status'
										class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Payment Status
									</label>
									<select
										type='text'
										id='payment-status'
										class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Enter Customer Document Number'
										required
									>
										<option value=''>Pending</option>
										<option value=''>Paid</option>
										<option value=''>Advance Payment</option>
									</select>
								</div>
							</div>
						</div>

						<div className='flex justify-between'>
							<button className='danger-btn' onClick={handleRoomSelection}>
								Cancel
							</button>
							<button className='success-btn'>Add</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ReservationCard;
