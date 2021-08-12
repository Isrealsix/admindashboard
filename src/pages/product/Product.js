import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './Product.module.css';
import Chart from '../../components/chart/Chart';
import ProductContext from '../../store/product-store';
import { Publish } from '@material-ui/icons';

const Product = () => {
	const ProductCtx = useContext(ProductContext);
	return (
		<div className={classes.product}>
			<div className={classes.productTitleContainer}>
				<h1 className={classes.productTitle}>Product</h1>
				<Link to="/newproduct">
					<button className={classes.productAddButton}>Create</button>
				</Link>
			</div>
			<div className={classes.productTop}>
				<div className={classes.productTopLeft}>
					<Chart
						data={ProductCtx.productLogs}
						dataKey="Activity"
						title="Sales Performance"
					/>
				</div>
				<div className={classes.productTopRight}>
					<div className={classes.productInfoTop}>
						<img
							src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt=""
							className={classes.productInfoImg}
						/>

						<span className={classes.productName}>Apple Airpods</span>
					</div>

					<div className={classes.productInfoBottom}>
						<div className={classes.productInfoItem}>
							<span className={classes.productInfoKey}>id:</span>
							<span className={classes.productInfoValue}>612</span>
						</div>

						<div className={classes.productInfoItem}>
							<span className={classes.productInfoKey}>Sales:</span>
							<span className={classes.productInfoValue}>1200</span>
						</div>

						<div className={classes.productInfoItem}>
							<span className={classes.productInfoKey}>Active:</span>
							<span className={classes.productInfoValue}>yes</span>
						</div>

						<div className={classes.productInfoItem}>
							<span className={classes.productInfoKey}>In stock:</span>
							<span className={classes.productInfoValue}>No</span>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.productBottom}>
				<form className={classes.productForm}>
					<div className={classes.productFormLeft}>
						<label>Product Name</label>
						<input type="text" placeholder="Apple AirPod" />
						<label>In Stock</label>
						<select name="inStock" id="inStock">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>

						<label>Active</label>
						<select name="active" id="active">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div className={classes.productFormRight}>
						<div className={classes.productUpload}>
							<img
								src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
								alt=""
								className={classes.productUploadImg}
							/>
							<label htmlFor="file">
								<Publish />
							</label>
							<input type="file" id="file" style={{ display: 'none' }} />
						</div>
						<button className={classes.productButton}>Update</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Product;
