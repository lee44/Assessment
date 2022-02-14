import React from 'react';
import ProfileItem from '../components/ProfileItem';
import ProfileNameInput from '../components/ProfileNameInput';
import { useStudentContext } from '../context/StudentProvider';

const Profiles = () => {
	const { profiles, search } = useStudentContext();

	const filteredData = profiles.filter((el) => {
		//if no input the return the original
		if (search === '') {
			return el;
		}
		//return the item which contains the user input
		else {
			return el.firstName.toLowerCase().includes(search);
		}
	});

	return (
		<div className='container mx-auto h-screen-75% w-1/2 flex flex-col rounded-lg bg-white'>
			<ProfileNameInput></ProfileNameInput>
			<div className='mt-2 overflow-auto scrollbar-hide'>
				{filteredData.map((student) => {
					return (
						<>
							<ProfileItem key={student.id} student={student}></ProfileItem>
							<hr></hr>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Profiles;
