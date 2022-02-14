import React from 'react';
import ProfileItem from '../components/ProfileItem';
import ProfileNameInput from '../components/ProfileNameInput';
import { useStudentContext } from '../context/StudentProvider';

const Profiles = () => {
	const { profiles } = useStudentContext();

	return (
		<div className='h-screen-75% container mx-auto w-1/2 overflow-auto scrollbar-hide rounded-lg bg-white'>
			<ProfileNameInput></ProfileNameInput>
			{profiles.map((student) => {
				return (
					<>
						<ProfileItem key={student.id} student={student}></ProfileItem>
						<hr></hr>
					</>
				);
			})}
		</div>
	);
};

export default Profiles;
