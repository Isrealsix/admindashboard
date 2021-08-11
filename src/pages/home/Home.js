import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import classes from './Home.module.css';
import { activityData } from '../../components/chart/dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

function Home() {
	return (
		<div className={classes.home}>
			<FeaturedInfo />
			<Chart
				data={activityData}
				title="User Activity"
				grid={true}
				dataKey="Activity"
			/>
			<div className={classes.homeWidgets}>
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}

export default Home;
