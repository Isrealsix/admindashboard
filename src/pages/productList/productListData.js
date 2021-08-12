import PhotoUsername from '../userList/PhotoUsername';
import Actions from './Actions';

export const productColumns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'product',
		headerName: 'Product',
		width: 150,
		editable: true,
		renderCell: params => (
			<PhotoUsername avatar={params.row.img} username={params.row.item} />
		),
	},
	{
		field: 'stock',
		headerName: 'Stock',
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
		field: 'price',
		headerName: 'Price',
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

export const productRows = [
	{
		id: 1,
		item: 'Apple Airpods',
		img: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		stock: 120,
		status: 'active',
		price: '$120.00',
	},

	{
		id: 2,
		item: 'Apple Airpods',
		img: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		stock: 120,
		status: 'active',
		price: '$120.00',
	},

	{
		id: 3,
		item: 'Apple Airpods',
		img: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		stock: 120,
		status: 'active',
		price: '$120.00',
	},

	{
		id: 4,
		item: 'Apple Airpods',
		img: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		stock: 120,
		status: 'active',
		price: '$120.00',
	},

	{
		id: 5,
		item: 'Apple Airpods',
		img: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		stock: 120,
		status: 'active',
		price: '$120.00',
	},

	{
		id: 6,
		item: 'Apple Airpods',
		img: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		stock: 120,
		status: 'active',
		price: '$120.00',
	},

	{
		id: 7,
		item: 'Apple Airpods',
		img: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		stock: 120,
		status: 'active',
		price: '$120.00',
	},

	{
		id: 8,
		item: 'Apple Airpods',
		img: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		stock: 120,
		status: 'active',
		price: '$120.00',
	},

	{
		id: 9,
		item: 'Apple Airpods',
		img: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		stock: 120,
		status: 'active',
		price: '$120.00',
	},

	{
		id: 10,
		item: 'Apple Airpods',
		img: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		stock: 120,
		status: 'active',
		price: '$120.00',
	},
];
