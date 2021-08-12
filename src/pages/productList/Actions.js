import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from '../userList/UserList.module.css';
import { DeleteOutline } from '@material-ui/icons';
import ProductContext from '../../store/product-store';

const Actions = props => {
	const data = useContext(ProductContext);
	const id = props.id;
	return (
		<Fragment>
			<Link to={`/product/${id}`}>
				<button className={classes.userListEdit}>Edit</button>
			</Link>
			<DeleteOutline
				className={classes.userListDelete}
				onClick={data.onDelete.bind(null, id)}
			/>
		</Fragment>
	);
};

export default Actions;
