import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Image from './Image';
import Tag from './Tag';

const Item = ({ student }) => {
	const [displayGrades, setDisplayGrades] = useState(false);

	const average = student.grades.reduce((a, b) => parseInt(a) + parseInt(b), 0) / student.grades.length;

	return (
		<div className='w-11/12 flex items-start'>
			<div className='p-5'>
				<Image image={student.pic}></Image>
			</div>
			<div className='w-full flex flex-col justify-center'>
				<div className='flex justify-between'>
					<h1 className='font-bold'>
						{student.firstName} {student.lastName}
					</h1>
					<div className='flex items-center'>
						{!displayGrades && <AiOutlinePlus size={35} color={'grey'} onClick={() => setDisplayGrades(!displayGrades)} className='cursor-pointer'></AiOutlinePlus>}
						{displayGrades && <AiOutlineMinus size={35} color={'grey'} onClick={() => setDisplayGrades(!displayGrades)} className='cursor-pointer'></AiOutlineMinus>}
					</div>
				</div>
				<div className='container ml-4'>
					<h6>Email: {student.email}</h6>
					<h6>Company: {student.company}</h6>
					<h6>Skill: {student.skill}</h6>
					<h6>Average: {average}</h6>
				</div>
				<div className='container ml-4'>
					{displayGrades &&
						student.grades.map((grade, index) => {
							return (
								<h6 key={index}>
									Test {index}: {grade}
								</h6>
							);
						})}
				</div>
				<div>
					{student.tag?.map((tag, index) => {
						return (
							<span key={index} className='inline-block m-1 p-1 rounded-md bg-neutral-300'>
								{tag}
							</span>
						);
					})}
				</div>
				<Tag placeHolder={'Enter a tag'} id={student.id} />
			</div>
		</div>
	);
};

export default Item;
