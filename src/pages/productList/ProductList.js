import { useContext } from 'react';
import classes from './ProductList.module.css';
import ProductContext from '../../store/product-store';

const ProductList = () => {
	const dataCtx = useContext(ProductContext);
	return <div className={classes.productList}>{dataCtx.productGridComp}</div>;
};

export default ProductList;
