import React from 'react';
import classes from './UserList.module.css';

const PhotoUsername = props => {
	// Re using this component for multiple components

	const avatar = props.avatar || props.img;
	const username = props.username || props.item;

	return (
		<div className={classes.userListUser}>
			<img src={avatar} alt="" className={classes.userListImg} />
			{username}
		</div>
	);
};

export default PhotoUsername;
