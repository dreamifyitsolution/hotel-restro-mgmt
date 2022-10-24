import React from 'react';

const RoomTypeForm = () => {
	return (
		<div>
			<form>
				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='room-name'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Room Name
						</label>
						<input
							type='text'
							id='room-name'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Room Name'
							required
						/>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='capacity'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Capacity
						</label>
						<input
							type='text'
							id='capacity'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Capacity'
							required
						/>
					</div>
				</div>
				<div className='grid md:grid-cols-4 md:gap-6'>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='child-limit'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Child Limit
						</label>
						<input
							type='text'
							id='child-limit'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer First Name'
							required
						/>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='rate'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Rate
						</label>
						<input
							type='text'
							id='rate'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer Rate'
							required
						/>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='room-size'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Room Size
						</label>
						<input
							type='text'
							id='room-size'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Room Size'
							required
						/>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='room-size-unit'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Room Size Unit
						</label>
						<select
							type='select'
							id='room-size-unit'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							required
						>
							<option value=''>Select Unit</option>
						</select>
					</div>
				</div>
				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='room-description'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Room Description
						</label>
						<textarea
							type='text'
							id='address'
							rows={4}
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
							placeholder='Enter Customer Address'
							required
						></textarea>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='document-type'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Reserve Condition
						</label>
						<textarea
							type='text'
							id='address'
							rows={4}
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
							placeholder='Enter Customer Address'
							required
						></textarea>
					</div>
				</div>

				<div className='flex justify-end'>
					<button type='submit' className='default-btn mr-4'>
						Reset
					</button>
					<button type='submit' className='default-btn'>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default RoomTypeForm;
