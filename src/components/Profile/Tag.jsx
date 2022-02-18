import React from 'react';
import { useStudentContext } from '../../context/StudentProvider';

const Tag = ({ placeHolder, id }) => {
	const { setProfiles } = useStudentContext();

	return (
		<div>
			<input
				className='w-4/12 p-2 my-2 outline-none border-b-2 border-b-neutral-300 focus:outline-none focus:border-b-2 focus:border-b-neutral-500'
				placeholder={placeHolder}
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						const value = e.target.value;
						setProfiles((oldArray) => {
							return oldArray.map((element) => {
								if (element.id === id) {
									if (element.tag === undefined) {
										const tag = [];
										tag.push(value);
										element = { ...element, tag };
									} else {
										element.tag = [...element.tag, value];
									}
								}
								return element;
							});
						});
						e.target.value = '';
					}
				}}
			></input>
		</div>
	);
};

export default Tag;
