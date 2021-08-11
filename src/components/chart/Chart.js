import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import classes from './Chart.module.css';

const Chart = () => {
	const data = [
		{
			name: 'Jan',
			Activity: 4000,
		},

		{
			name: 'Feb',
			Activity: 3000,
		},

		{
			name: 'Mar',
			Activity: 5000,
		},

		{
			name: 'Apr',
			Activity: 4000,
		},

		{
			name: 'May',
			Activity: 3000,
		},

		{
			name: 'Jun',
			Activity: 2000,
		},

		{
			name: 'Jul',
			Activity: 4000,
		},

		{
			name: 'Aug',
			Activity: 3000,
		},

		{
			name: 'Sep',
			Activity: 4000,
		},

		{
			name: 'Oct',
			Activity: 7000,
		},

		{
			name: 'Nov',
			Activity: 900,
		},

		{
			name: 'Dec',
			Activity: 1000,
		},
	];
	return (
		<div className={classes.chart}>
			<h3 className={classes.chartTitle}>Sales Analytics</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bc" />
					<Line type="monotone" dataKey="Activity" stroke="#5550bc" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
