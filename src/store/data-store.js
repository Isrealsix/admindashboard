import React, { useState } from 'react';
import { userRows, userColumns } from '../pages/userList/data';
import { DataGrid } from '@material-ui/data-grid';

const DataContext = React.createContext({
	userRowsData: [],
	userColumnsData: [],
	dataGridComp: '',
	onDelete: () => {},
});

export const DataContextProvider = props => {
	const [userRowsData, setUserRowsData] = useState(userRows);
	const [userColumnsData] = useState(userColumns);

	const onDelete = id => {
		setUserRowsData(prevData =>
			prevData.filter(userData => userData.id !== id)
		);
	};

	const dataGridComp = (
		<DataGrid
			rows={userRowsData}
			columns={userColumnsData}
			pageSize={7}
			checkboxSelection
			disableSelectionOnClick
		/>
	);

	return (
		<DataContext.Provider
			value={{
				userRowsData,
				userColumnsData,
				dataGridComp,
				onDelete,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataContext;
