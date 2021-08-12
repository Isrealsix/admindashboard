import React from 'react';
import classes from './UserList.module.css';

const PhotoUsername = props => {
	return (
		<div className={classes.userListUser}>
			<img src={props.avatar} alt="" className={classes.userListImg} />
			{props.username}
		</div>
	);
};

export default PhotoUsername;
