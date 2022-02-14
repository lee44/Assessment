import React from 'react';

const ProfileNameInput = () => {
	return (
		<div className='w-full flex justify-center'>
			<input className='w-11/12 p-2 outline-none border-b-2 border-b-neutral-300 focus:outline-none focus:border-b-2 focus:border-b-neutral-500' placeholder='Search by Name'></input>
		</div>
	);
};

export default ProfileNameInput;
