import { useContext } from 'react';
import classes from './ProductList.module.css';
import DataContext from '../../store/data-store';

const ProductList = () => {
	const dataCtx = useContext(DataContext);
	return <div className={classes.productList}>{dataCtx.dataGridComp}</div>;
};

export default ProductList;
