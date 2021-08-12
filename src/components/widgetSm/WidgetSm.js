import { Visibility } from '@material-ui/icons';
import classes from './WidgetSm.module.css';
const WidgetSm = () => {
	return (
		<div className={classes.widgetSm}>
			<span className={classes.widgetSmTitle}>New Members</span>
			<ul className={classes.widgetSmList}>
				<li className={classes.widgetSmListItem}>
					<img
						src="https://images.pexels.com/photos/2467389/pexels-photo-2467389.jpeg"
						alt="profile_pic"
						className={classes.widgetSmImg}
					/>
					<div className={classes.widgetSmUser}>
						<span className={classes.widgetSmUsername}>Alina Gretchen</span>
						<span className={classes.widgetSmUserTitle}>Programmer</span>
					</div>
					<button className={classes.widgetSmButton}>
						<Visibility className={classes.widgetSmIcon} />
						Display
					</button>
				</li>

				<li className={classes.widgetSmListItem}>
					<img
						src="https://images.pexels.com/photos/2467389/pexels-photo-2467389.jpeg"
						alt="profile_pic"
						className={classes.widgetSmImg}
					/>
					<div className={classes.widgetSmUser}>
						<span className={classes.widgetSmUsername}>Alina Gretchen</span>
						<span className={classes.widgetSmUserTitle}>Programmer</span>
					</div>
					<button className={classes.widgetSmButton}>
						<Visibility className={classes.widgetSmIcon} />
						Display
					</button>
				</li>

				<li className={classes.widgetSmListItem}>
					<img
						src="https://images.pexels.com/photos/2467389/pexels-photo-2467389.jpeg"
						alt="profile_pic"
						className={classes.widgetSmImg}
					/>
					<div className={classes.widgetSmUser}>
						<span className={classes.widgetSmUsername}>Alina Gretchen</span>
						<span className={classes.widgetSmUserTitle}>Programmer</span>
					</div>
					<button className={classes.widgetSmButton}>
						<Visibility className={classes.widgetSmIcon} />
						Display
					</button>
				</li>

				<li className={classes.widgetSmListItem}>
					<img
						src="https://images.pexels.com/photos/2467389/pexels-photo-2467389.jpeg"
						alt="profile_pic"
						className={classes.widgetSmImg}
					/>
					<div className={classes.widgetSmUser}>
						<span className={classes.widgetSmUsername}>Alina Gretchen</span>
						<span className={classes.widgetSmUserTitle}>Programmer</span>
					</div>
					<button className={classes.widgetSmButton}>
						<Visibility className={classes.widgetSmIcon} />
						Display
					</button>
				</li>

				<li className={classes.widgetSmListItem}>
					<img
						src="https://images.pexels.com/photos/2467389/pexels-photo-2467389.jpeg"
						alt="profile_pic"
						className={classes.widgetSmImg}
					/>
					<div className={classes.widgetSmUser}>
						<span className={classes.widgetSmUsername}>Alina Gretchen</span>
						<span className={classes.widgetSmUserTitle}>Programmer</span>
					</div>
					<button className={classes.widgetSmButton}>
						<Visibility className={classes.widgetSmIcon} />
						Display
					</button>
				</li>
			</ul>
		</div>
	);
};

export default WidgetSm;
