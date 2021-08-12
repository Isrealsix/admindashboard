import React, { useState } from 'react';
import { userRows, userColumns } from '../pages/userList/data';

const DataContext = React.createContext({
	userRowsData: [],
	userColumnsData: [],
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

	return (
		<DataContext.Provider
			value={{
				userRowsData,
				userColumnsData,
				onDelete,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataContext;
