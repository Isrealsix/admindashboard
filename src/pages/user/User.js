import {
	CalendarToday,
	LocationSearching,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from '@material-ui/icons';
import classes from './User.module.css';

const User = () => {
	return (
		<div className={classes.user}>
			<div className={classes.userTitleContainer}>
				<h1 className={classes.userTitle}>Edit User</h1>
				<button className={classes.userAddButton}>Create</button>
			</div>
			<div className={classes.userContainer}>
				<div className={classes.userShow}>
					<div className={classes.userShowTop}>
						<img
							src="https://images.pexels.com/photos/4240503/pexels-photo-4240503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt=""
							className={classes.userShowImg}
						/>
						<div className={classes.userShowTopTitle}>
							<span className={classes.userShowUsername}>Anna Daves</span>
							<span className={classes.userShowTitle}>Programmer</span>
						</div>
					</div>

					<div className={classes.userShowBottom}>
						<span className={classes.userShowTitle}>Account Details</span>
						<div className={classes.userShowInfo}>
							<PermIdentity className={classes.userShowIcon} />
							<span className={classes.userShowInfoTitle}>anna4daves</span>
						</div>

						<div className={classes.userShowInfo}>
							<CalendarToday className={classes.userShowIcon} />
							<span className={classes.userShowInfoTitle}>20.12.2000</span>
						</div>
						<span className={classes.userShowTitle}>Contact Details</span>
						<div className={classes.userShowInfo}>
							<PhoneAndroid className={classes.userShowIcon} />
							<span className={classes.userShowInfoTitle}>
								8(998)-456-12-65
							</span>
						</div>

						<div className={classes.userShowInfo}>
							<MailOutline className={classes.userShowIcon} />
							<span className={classes.userShowInfoTitle}>
								anna4daves@mail.in
							</span>
						</div>

						<div className={classes.userShowInfo}>
							<LocationSearching className={classes.userShowIcon} />
							<span className={classes.userShowInfoTitle}>1414 becker St.</span>
						</div>
					</div>
				</div>
				<div className={classes.userUpdate}>
					<span className={classes.userUpdateTitle}>Edit</span>

					<form className={classes.userUpdateForm}>
						<div className={classes.userUpdateLeft}>
							<div className={classes.userUpdateItem}>
								<label>Username</label>
								<input
									type="text"
									placeholder="anna4daves"
									className={classes.userUpdateInput}
								/>
							</div>

							<div className={classes.userUpdateItem}>
								<label>Full Name</label>
								<input
									type="text"
									placeholder="Anna Daves"
									className={classes.userUpdateInput}
								/>
							</div>

							<div className={classes.userUpdateItem}>
								<label>Date of Birth</label>
								<input
									type="text"
									placeholder="20.12.2000"
									className={classes.userUpdateInput}
								/>
							</div>

							<div className={classes.userUpdateItem}>
								<label>Phone</label>
								<input
									type="text"
									placeholder="8(998)-456-12-65"
									className={classes.userUpdateInput}
								/>
							</div>

							<div className={classes.userUpdateItem}>
								<label>Email</label>
								<input
									type="text"
									placeholder="anna4daves@mail.in"
									className={classes.userUpdateInput}
								/>
							</div>
						</div>

						<div className={classes.userUpdateRight}>
							<div className={classes.userUpdateUpload}>
								<img
									src="https://images.pexels.com/photos/4240503/pexels-photo-4240503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
									alt=""
									className={classes.userUpdateImg}
								/>

								<label htmlFor="file">
									<Publish className={classes.userUpdateIcon} />
								</label>
								<input type="file" id="file" style={{ display: 'none' }} />
							</div>
							<button className={classes.userUpdateButton}>Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default User;
