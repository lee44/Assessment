import React from 'react';
import ProfileImage from './ProfileImage';

const ProfileItem = (props) => {
	const average = props.student.grades.reduce((a, b) => parseInt(a) + parseInt(b), 0) / props.student.grades.length;

	return (
		<div className='flex items-center'>
			<div className='p-10'>
				<ProfileImage image={props.student.pic}></ProfileImage>
			</div>
			<div className='flex flex-col justify-center'>
				<h1 className='font-bold'>
					{props.student.firstName} {props.student.lastName}
				</h1>
				<div className='container ml-4'>
					<h6>Email: {props.student.email}</h6>
					<h6>Company: {props.student.company}</h6>
					<h6>Skill: {props.student.skill}</h6>
					<h6>Average: {average}</h6>
				</div>
			</div>
		</div>
	);
};

export default ProfileItem;
