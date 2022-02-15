import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import ProfileImage from './ProfileImage';

const ProfileItem = (props) => {
	const [displayGrades, setDisplayGrades] = useState(false);
	const average = props.student.grades.reduce((a, b) => parseInt(a) + parseInt(b), 0) / props.student.grades.length;

	return (
		<div className='w-11/12 flex items-start'>
			<div className='p-5'>
				<ProfileImage image={props.student.pic}></ProfileImage>
			</div>
			<div className='w-full flex flex-col justify-center'>
				<div className='flex justify-between'>
					<h1 className='font-bold'>
						{props.student.firstName} {props.student.lastName}
					</h1>
					<div className='flex items-center'>
						{!displayGrades && <AiOutlinePlus size={35} color={'grey'} onClick={() => setDisplayGrades(!displayGrades)} className='cursor-pointer'></AiOutlinePlus>}
						{displayGrades && <AiOutlineMinus size={35} color={'grey'} onClick={() => setDisplayGrades(!displayGrades)} className='cursor-pointer'></AiOutlineMinus>}
					</div>
				</div>
				<div className='container ml-4'>
					<h6>Email: {props.student.email}</h6>
					<h6>Company: {props.student.company}</h6>
					<h6>Skill: {props.student.skill}</h6>
					<h6>Average: {average}</h6>
				</div>
				<div className='container ml-4'>
					{displayGrades &&
						props.student.grades.map((grade, index) => {
							return (
								<h6 key={index}>
									Test {index}: {grade}
								</h6>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default ProfileItem;
