import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons';
import classes from './Sidebar.module.css';

function Sidebar() {
	return (
		<div className={classes.sidebar}>
			<div className={classes.sidebarWrapper}>
				<div className={classes.sidebarMenu}>
					<h3 className={classes.sidebarTitle}>Dashboard</h3>
					<ul className={classes.sidebarList}>
						<li className={classes.sidebarListItem}>
							<LineStyle className={classes.sidebarIcon} />
							Home
						</li>
						<li className={classes.sidebarListItem}>
							<Timeline className={classes.sidebarIcon} />
							Analytics
						</li>
						<li className={classes.sidebarListItem}>
							<TrendingUp className={classes.sidebarIcon} />
							Sales
						</li>
					</ul>
				</div>

				<div className={classes.sidebarMenu}>
					<h3 className={classes.sidebarTitle}>Quick Menu</h3>
					<ul className={classes.sidebarList}>
						<li className={classes.sidebarListItem}>
							<LineStyle className={classes.sidebarIcon} />
							Users
						</li>
						<li className={classes.sidebarListItem}>
							<Timeline className={classes.sidebarIcon} />
							Products
						</li>
						<li className={classes.sidebarListItem}>
							<TrendingUp className={classes.sidebarIcon} />
							Transactions
						</li>
						<li className={classes.sidebarListItem}>
							<TrendingUp className={classes.sidebarIcon} />
							Reports
						</li>
					</ul>
				</div>

				<div className={classes.sidebarMenu}>
					<h3 className={classes.sidebarTitle}>Notifications</h3>
					<ul className={classes.sidebarList}>
						<li className={classes.sidebarListItem}>
							<LineStyle className={classes.sidebarIcon} />
							Mail
						</li>
						<li className={classes.sidebarListItem}>
							<Timeline className={classes.sidebarIcon} />
							Feedback
						</li>
						<li className={classes.sidebarListItem}>
							<TrendingUp className={classes.sidebarIcon} />
							Messages
						</li>
					</ul>
				</div>

				<div className={classes.sidebarMenu}>
					<h3 className={classes.sidebarTitle}>Staff</h3>
					<ul className={classes.sidebarList}>
						<li className={classes.sidebarListItem}>
							<LineStyle className={classes.sidebarIcon} />
							Manage
						</li>
						<li className={classes.sidebarListItem}>
							<Timeline className={classes.sidebarIcon} />
							Analytics
						</li>
						<li className={classes.sidebarListItem}>
							<TrendingUp className={classes.sidebarIcon} />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
