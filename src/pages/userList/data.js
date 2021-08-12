import Actions from './Actions';
import PhotoUsername from './PhotoUsername';

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
			<PhotoUsername
				avatar={params.row.avatar}
				username={params.row.username}
			/>
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
		renderCell: params => <Actions id={params.row.id} />,
	},
];
