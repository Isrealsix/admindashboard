import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import classes from './Home.module.css';

function Home() {
	return (
		<div className={classes.home}>
			<FeaturedInfo />
			<Chart />
		</div>
	);
}

export default Home;
