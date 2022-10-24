import Link from 'next/link';
import React from 'react';
import ReservationForm from '../../../components/pages/rooms/ReservationForm';

const CreateReservation = () => {
	return (
		<div className='container'>
			<div className='flex justify-between items-center mb-4'>
				<h2 class='text-2xl font-medium leading-6 text-gray-900 '>
					Room Reservation
				</h2>
				<Link href={'/customers/create'}>
					<a class='default-btn'>Go Back</a>
				</Link>
			</div>
			<ReservationForm />
		</div>
	);
};

export default CreateReservation;
