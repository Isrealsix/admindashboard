import { useContext } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import classes from './UserList.module.css';
import DataContext from '../../store/data-store';

const UserList = () => {
	const data = useContext(DataContext);
	return (
		<div className={classes.userList}>
			<h1>users list</h1>
			<DataGrid
				rows={data.userRowsData}
				columns={data.userColumnsData}
				pageSize={7}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
};

export default UserList;
