import Link from 'next/link'
import React from 'react'
import RoomTypeForm from '../../components/pages/rooms/RoomTypeForm'

const RoomCreateScreen = () => {
  return (
    <div className='container'>
			<div className='flex justify-between items-center mb-4'>
				<h2 class='text-2xl font-medium leading-6 text-gray-900 '>
					New Room Type
				</h2>
				<Link href={'/rooms'}>
					<a class='default-btn'>Go Back</a>
				</Link>
			</div>
      <RoomTypeForm />
		</div>
  )
}

export default RoomCreateScreen