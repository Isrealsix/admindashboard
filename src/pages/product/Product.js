import { Link } from 'react-router-dom';
import classes from './Product.module.css';

const Product = () => {
	return (
		<div className={classes.product}>
			<div className={classes.productTitleContainer}>
				<h1 className={classes.productTitle}>Product</h1>
				<Link to="/newproduct">
					<button className={classes.productAddButton}>Create</button>
				</Link>
			</div>
		</div>
	);
};

export default Product;
