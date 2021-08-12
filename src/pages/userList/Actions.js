import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './UserList.module.css';
import { DeleteOutline } from '@material-ui/icons';
import DataContext from '../../store/data-store';

const Actions = props => {
	const data = useContext(DataContext);
	const id = props.id;
	return (
		<Fragment>
			<Link to={`/user/${id}`}>
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
