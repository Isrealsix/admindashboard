import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';
import classes from './UserList.module.css';

export const userRows = [
	{
		id: 1,
		username: 'Will Smith',
		avatar:
			'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg',
		email: 'willest@mail.net',
		status: 'active',
		transaction: '$120.00',
	},

	{
		id: 2,
		username: 'Will Smith',
		avatar:
			'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg',
		email: 'willest@mail.net',
		status: 'active',
		transaction: '$120.00',
	},

	{
		id: 3,
		username: 'Will Smith',
		avatar:
			'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg',
		email: 'willest@mail.net',
		status: 'active',
		transaction: '$120.00',
	},

	{
		id: 4,
		username: 'Will Smith',
		avatar:
			'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg',
		email: 'willest@mail.net',
		status: 'active',
		transaction: '$120.00',
	},

	{
		id: 5,
		username: 'Will Smith',
		avatar:
			'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg',
		email: 'willest@mail.net',
		status: 'active',
		transaction: '$120.00',
	},

	{
		id: 6,
		username: 'Will Smith',
		avatar:
			'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg',
		email: 'willest@mail.net',
		status: 'active',
		transaction: '$120.00',
	},

	{
		id: 7,
		username: 'Will Smith',
		avatar:
			'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg',
		email: 'willest@mail.net',
		status: 'active',
		transaction: '$120.00',
	},

	{
		id: 8,
		username: 'Will Smith',
		avatar:
			'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg',
		email: 'willest@mail.net',
		status: 'active',
		transaction: '$120.00',
	},

	{
		id: 9,
		username: 'Will Smith',
		avatar:
			'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg',
		email: 'willest@mail.net',
		status: 'active',
		transaction: '$120.00',
	},

	{
		id: 10,
		username: 'Will Smith',
		avatar:
			'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg',
		email: 'willest@mail.net',
		status: 'active',
		transaction: '$120.00',
	},
];

export const userColumns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'user',
		headerName: 'User',
		width: 150,
		editable: true,
		renderCell: params => (
			<div className={classes.userListUser}>
				<img src={params.row.avatar} alt="" className={classes.userListImg} />
				{params.row.username}
			</div>
		),
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 150,
		editable: true,
	},
	{
		field: 'status',
		headerName: 'Status',
		width: 120,
		editable: true,
	},
	{
		field: 'transaction',
		headerName: 'Transaction',
		width: 150,
		editable: true,
	},

	{
		field: 'action',
		headerName: 'Action',
		width: 150,
		renderCell: params => (
			<Fragment>
				<Link to={`/user/${params.row.id}`}>
					<button className={classes.userListEdit}>Edit</button>
				</Link>
				<DeleteOutline className={classes.userListDelete} />
			</Fragment>
		),
	},
];
