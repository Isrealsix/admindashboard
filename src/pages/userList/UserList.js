import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import classes from './UserList.module.css';
import { userRows, userColumns } from './data';

const UserList = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = id => {
		setData(prevData => prevData.filter(userData => userData.id !== id));
	};

	return (
		<div className={classes.userList}>
			<h1>users list</h1>
			<DataGrid
				rows={data}
				columns={userColumns}
				pageSize={7}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
};

export default UserList;
