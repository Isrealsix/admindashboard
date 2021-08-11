import { Fragment } from 'react';
import classes from './Topbar.module.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

function Topbar() {
	return (
		<Fragment>
			<div className={classes.topbar}>
				<div className={classes.topbarWrapper}>
					<div className={classes.topLeft}>
						<span className={classes.logo}>i6 Admin</span>
					</div>
					<div className={classes.topRight}>
						<div className={classes.topbarIconContainer}>
							<NotificationsNone />
							<span className={classes.topIconBadge}>2</span>
						</div>
						<div className={classes.topbarIconContainer}>
							<Language />
							<span className={classes.topIconBadge}>2</span>
						</div>
						<div className={classes.topbarIconContainer}>
							<Settings />
						</div>
						<img
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
							alt=""
							className={classes.topAvatar}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Topbar;
