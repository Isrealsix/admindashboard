import { useContext } from 'react';
import classes from './UserList.module.css';
import DataContext from '../../store/data-store';

const UserList = () => {
	const data = useContext(DataContext);
	return (
		<div className={classes.userList}>
			<h1>users list</h1>
			{data.dataGridComp}
		</div>
	);
};

export default UserList;
