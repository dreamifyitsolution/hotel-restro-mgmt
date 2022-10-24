import React from 'react';
import ReservationCard from './ReservationCard';

const ReservationForm = () => {
	return (
		<div>
			<form action=''>
				<div className='grid md:grid-cols-3 md:gap-6'>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='check-in'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Customer Name *
						</label>
						<select
							type='date'
							id='check-in'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer First Name'
							required
						>
							<option value=''>Roshan Adhikari</option>
						</select>
						<div className='text-right'>
							<button className='mt-2 text-sm font-semibold text-blue-600 hover:text-blue-800 underline'>
								Add New
							</button>
						</div>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='check-in'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Check In *
						</label>
						<input
							type='date'
							id='check-in'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer First Name'
							required
						/>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='check-out'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Check Out *
						</label>
						<input
							type='date'
							id='check-out'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer First Name'
							required
						/>
					</div>
				</div>
				<div className='flex justify-end'>
					<button type='submit' className='default-btn mr-4'>
						Reset Date
					</button>
					<button type='submit' className='default-btn'>
						Search Rooms
					</button>
				</div>
			</form>
			<hr className='mt-4 border-gray-400 border-dotted' />

			<div className='mt-10'>
				<div className='flex justify-between items-center mb-6'>
					<h3 class='text-xl font-medium leading-6 text-gray-700'>
						Available Rooms
					</h3>
					<div className='relative z-0 group flex items-center'>
						<label
							for='document-type'
							class='block whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Rooms Types
						</label>
						<select
							type='text'
							id='document-type'
							class=' ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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

				<div className='grid grid-cols-2 gap-6'>
					<ReservationCard />
					<ReservationCard />
				</div>
			</div>
		</div>
	);
};

export default ReservationForm;
