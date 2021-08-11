import {
	LineStyle,
	Timeline,
	TrendingUp,
	PermIdentity,
	Storefront,
	AttachMoney,
	BarChart,
	MailOutline,
	DynamicFeed,
	ChatBubbleOutline,
	WorkOutline,
	Report,
} from '@material-ui/icons';
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
							<PermIdentity className={classes.sidebarIcon} />
							Users
						</li>
						<li className={classes.sidebarListItem}>
							<Storefront className={classes.sidebarIcon} />
							Products
						</li>
						<li className={classes.sidebarListItem}>
							<AttachMoney className={classes.sidebarIcon} />
							Transactions
						</li>
						<li className={classes.sidebarListItem}>
							<BarChart className={classes.sidebarIcon} />
							Reports
						</li>
					</ul>
				</div>

				<div className={classes.sidebarMenu}>
					<h3 className={classes.sidebarTitle}>Notifications</h3>
					<ul className={classes.sidebarList}>
						<li className={classes.sidebarListItem}>
							<MailOutline className={classes.sidebarIcon} />
							Mail
						</li>
						<li className={classes.sidebarListItem}>
							<DynamicFeed className={classes.sidebarIcon} />
							Feedback
						</li>
						<li className={classes.sidebarListItem}>
							<ChatBubbleOutline className={classes.sidebarIcon} />
							Messages
						</li>
					</ul>
				</div>

				<div className={classes.sidebarMenu}>
					<h3 className={classes.sidebarTitle}>Staff</h3>
					<ul className={classes.sidebarList}>
						<li className={classes.sidebarListItem}>
							<WorkOutline className={classes.sidebarIcon} />
							Manage
						</li>
						<li className={classes.sidebarListItem}>
							<Timeline className={classes.sidebarIcon} />
							Analytics
						</li>
						<li className={classes.sidebarListItem}>
							<Report className={classes.sidebarIcon} />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
