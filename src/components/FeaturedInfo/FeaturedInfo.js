import classes from './FeaturedInfo.module.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
const FeaturedInfo = () => {
	return (
		<div className={classes.featured}>
			<div className={classes.featuredItem}>
				<span className={classes.featuredTitle}>Revenue</span>
				<div className={classes.featuredMoneyContainer}>
					<span className={classes.featuredMoney}>$3,142</span>
					<span className={classes.featuredMoneyRate}>
						-14.2{' '}
						<ArrowDownward className={classes['featuredIcon--negative']} />
					</span>
				</div>
				<span className={classes.featuredSub}>Compared to last Month</span>
			</div>

			<div className={classes.featuredItem}>
				<span className={classes.featuredTitle}>Sales</span>
				<div className={classes.featuredMoneyContainer}>
					<span className={classes.featuredMoney}>$3,142</span>
					<span className={classes.featuredMoneyRate}>
						-14.2{' '}
						<ArrowDownward className={classes['featuredIcon--negative']} />
					</span>
				</div>
				<span className={classes.featuredSub}>Compared to last Month</span>
			</div>

			<div className={classes.featuredItem}>
				<span className={classes.featuredTitle}>Cost</span>
				<div className={classes.featuredMoneyContainer}>
					<span className={classes.featuredMoney}>$3,142</span>
					<span className={classes.featuredMoneyRate}>
						+10.2 <ArrowUpward className={classes['featuredIcon--positive']} />
					</span>
				</div>
				<span className={classes.featuredSub}>Compared to last Month</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
