import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import classes from './Chart.module.css';

const Chart = ({ title, data, dataKey, grid }) => {
	return (
		<div className={classes.chart}>
			<h3 className={classes.chartTitle}>{title}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bc" />
					<Line type="monotone" dataKey={dataKey} stroke="#5550bc" />
					<Tooltip />
					{grid && <CartesianGrid stroke="#eee" strokeDasharray="5 5" />}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
