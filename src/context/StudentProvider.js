import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const StudentContext = createContext([]);

export const StudentProvider = ({ children }) => {
	const [profiles, setProfiles] = useState([]);
	const [searchName, setSearchName] = useState('');
	const [searchTag, setSearchTag] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('https://api.hatchways.io/assessment/students');
			setProfiles(response.data.students);
		};
		fetchData();
	}, []);

	return <StudentContext.Provider value={{ profiles, setProfiles, searchName, setSearchName, searchTag, setSearchTag }}>{children}</StudentContext.Provider>;
};

export const useStudentContext = () => {
	const context = useContext(StudentContext);
	if (context === undefined) {
		throw new Error('useAuth can only be used inside AuthProvider');
	}
	return context;
};
