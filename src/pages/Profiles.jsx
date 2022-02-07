import React from "react";
import ProfileItem from "../components/ProfileItem";
import { useStudentContext } from "../context/StudentProvider";

const Profiles = () => {
	const {profiles} = useStudentContext();

	return (
		<div>
			{profiles.map((student) => {
				return <ProfileItem key={student.id} student={student}></ProfileItem>;
			})}
		</div>
	);
};

export default Profiles;