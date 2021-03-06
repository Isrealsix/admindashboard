import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
	productRows,
	productColumns,
} from '../pages/productList/productListData';
import { productData } from '../components/chart/dummyData';

const ProductContext = React.createContext({
	productRowsData: [],
	productColumnsData: [],
	productLogs: [],
	productGridComp: '',
	onDelete: () => {},
});

export const ProductContextProvider = props => {
	const [productRowsData, setProductRowsData] = useState(productRows);
	const [productColumnsData] = useState(productColumns);
	const [productLogs] = useState(productData);

	const onDelete = id => {
		setProductRowsData(prevData =>
			prevData.filter(userData => userData.id !== id)
		);
	};

	const productGridComp = (
		<DataGrid
			rows={productRowsData}
			columns={productColumnsData}
			pageSize={7}
			checkboxSelection
			disableSelectionOnClick
		/>
	);

	return (
		<ProductContext.Provider
			value={{
				productRowsData,
				productColumnsData,
				productLogs,
				productGridComp,
				onDelete,
			}}
		>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContext;
