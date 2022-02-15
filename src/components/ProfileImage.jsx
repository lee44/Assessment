import React from 'react';

const ProfileImage = (props) => {
	return <img className='h-25 w-36 rounded-full border-2' src={props.image} alt='student_profile_image' />;
};

export default ProfileImage;
