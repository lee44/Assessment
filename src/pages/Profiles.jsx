import React from 'react';
import Input from '../components/Input';
import Item from '../components/Profile/Item';
import { useStudentContext } from '../context/StudentProvider';

const Profiles = () => {
	const { profiles, searchName, setSearchName, searchTag, setSearchTag } = useStudentContext();

	const findTags = (element, tag) => {
		return element?.tag?.find((element) => {
			if (element.includes(tag)) {
				return true;
			}
			return false;
		});
	};
	const filteredData = profiles.filter((el) => {
		if (searchName === '' && searchTag === '') {
			return el;
		} else if (searchName !== '' && searchTag !== '') {
			return el.firstName.toLowerCase().includes(searchName) && findTags(el, searchTag) !== undefined;
		} else if (searchName !== '' && searchTag === '') {
			return el.firstName.toLowerCase().includes(searchName);
		} else {
			return findTags(el, searchTag) !== undefined;
		}
	});

	return (
		<div className='container mx-auto h-screen-75% w-1/2 flex flex-col rounded-lg bg-white'>
			<Input setHook={setSearchName} placeHolder='Search by Name' />
			<Input setHook={setSearchTag} placeHolder='Search by Tag' />
			<div className='mt-2 overflow-auto scrollbar-hide'>
				{filteredData.map((student) => {
					return (
						<>
							<Item key={student.id} student={student} />
							<hr></hr>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Profiles;
