import Link from 'next/link';
import React from 'react';
import CustomerForm from '../../components/pages/customer/CustomerForm';

const CustomerCreate = () => {
	return (
		<div className='container'>
			<div className='flex justify-between items-center mb-4'>
				<h2 class='text-2xl font-medium leading-6 text-gray-900 '>
					New Customer
				</h2>
				<Link href={'/customers/create'}>
					<a class='default-btn'>Go Back</a>
				</Link>
			</div>
      <CustomerForm />
		</div>
	);
};

export default CustomerCreate;
