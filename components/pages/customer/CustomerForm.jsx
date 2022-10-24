import React from 'react';

const CustomerForm = () => {
	return (
		<div>
			<form>
				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='first-name'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							First Name
						</label>
						<input
							type='text'
							id='first-name'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer First Name'
							required
						/>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='last-name'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Last Name
						</label>
						<input
							type='text'
							id='last-name'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer Last Name'
							required
						/>
					</div>
				</div>
				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='email'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Email
						</label>
						<input
							type='text'
							id='email'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer First Name'
							required
						/>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='phone'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Phone Number
						</label>
						<input
							type='text'
							id='phone'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer phone number'
							required
						/>
					</div>
				</div>
				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='first-name'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Date of Birth
						</label>
						<input
							type='date'
							id='first-name'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer First Name'
							required
						/>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='profession'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Profession
						</label>
						<input
							type='text'
							id='profession'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer Profession'
							required
						/>
					</div>
				</div>
				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='first-name'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Nationality
						</label>
						<ul class='items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
							<li class='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
								<div class='flex items-center pl-3'>
									<input
										id='horizontal-list-radio-license'
										type='radio'
										value=''
										name='list-radio'
										class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
									/>
									<label
										for='horizontal-list-radio-license'
										class='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Native
									</label>
								</div>
							</li>
							<li class='w-full dark:border-gray-600'>
								<div class='flex items-center pl-3'>
									<input
										id='horizontal-list-radio-passport'
										type='radio'
										value=''
										name='list-radio'
										class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
									/>
									<label
										for='horizontal-list-radio-passport'
										class='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Foreigner
									</label>
								</div>
							</li>
						</ul>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							for='document-type'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							NID/Passport
						</label>
						<input
							type='text'
							id='document-type'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Customer Document Number'
							required
						/>
					</div>
				</div>
				<div>
					<label
						for='address'
						class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
					>
						Address
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

export default CustomerForm;
