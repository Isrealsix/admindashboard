import classes from './WidgetLg.module.css';
import Button from './WidgetLgButton';
const WidgetLg = () => {
	return (
		<div className={classes.widgetLg}>
			<h3 className={classes.widgetLgTitle}>Latest transactions</h3>
			<table className={classes.widgetLgTable}>
				<tr className={classes.widgetLgTr}>
					<th className={classes.widgetLgTh}>Customer</th>
					<th className={classes.widgetLgTh}>Date</th>
					<th className={classes.widgetLgTh}>Amount</th>
					<th className={classes.widgetLgTh}>Status</th>
				</tr>
				<tr className={classes.widgetLgTr}>
					<td className={classes.widgetLgUser}>
						<img
							src="https://images.pexels.com/photos/8721987/pexels-photo-8721987.jpeg"
							alt=""
							className={classes.widgetLgImg}
						/>
						<span className={classes.widgetLgName}>Anastasia Graves</span>
					</td>
					<td className={classes.widgetLgDate}>18 Jan 2021</td>
					<td className={classes.widgetLgAmount}>$100.01</td>
					<td className={classes.widgetLgStatus}>
						<Button type="Approved" />
					</td>
				</tr>

				<tr className={classes.widgetLgTr}>
					<td className={classes.widgetLgUser}>
						<img
							src="https://images.pexels.com/photos/6969017/pexels-photo-6969017.jpeg"
							alt=""
							className={classes.widgetLgImg}
						/>
						<span className={classes.widgetLgName}>Anastasia Graves</span>
					</td>
					<td className={classes.widgetLgDate}>18 Jan 2021</td>
					<td className={classes.widgetLgAmount}>$100.01</td>
					<td className={classes.widgetLgStatus}>
						<Button type="Declined" />
					</td>
				</tr>

				<tr className={classes.widgetLgTr}>
					<td className={classes.widgetLgUser}>
						<img
							src="https://images.pexels.com/photos/6774195/pexels-photo-6774195.jpeg"
							alt=""
							className={classes.widgetLgImg}
						/>
						<span className={classes.widgetLgName}>Anastasia Graves</span>
					</td>
					<td className={classes.widgetLgDate}>18 Jan 2021</td>
					<td className={classes.widgetLgAmount}>$100.01</td>
					<td className={classes.widgetLgStatus}>
						<Button type="Approved" />
					</td>
				</tr>

				<tr className={classes.widgetLgTr}>
					<td className={classes.widgetLgUser}>
						<img
							src="https://images.pexels.com/photos/4571943/pexels-photo-4571943.jpeg"
							alt=""
							className={classes.widgetLgImg}
						/>
						<span className={classes.widgetLgName}>Anastasia Graves</span>
					</td>
					<td className={classes.widgetLgDate}>18 Jan 2021</td>
					<td className={classes.widgetLgAmount}>$100.01</td>
					<td className={classes.widgetLgStatus}>
						<Button type="Pending" />
					</td>
				</tr>
			</table>
		</div>
	);
};

export default WidgetLg;
