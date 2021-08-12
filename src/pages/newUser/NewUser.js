import classes from './NewUser.module.css';

const NewUser = () => {
	return (
		<div className={classes.newUser}>
			<h1 className={classes.newUserTitle}>New User</h1>
			<form className={classes.newUserForm}>
				<div className={classes.newUserItem}>
					<label>Username</label>
					<input type="text" placeholder="Sebo" />
				</div>
				<div className={classes.newUserItem}>
					<label>Full Name</label>
					<input type="text" placeholder="Sebastine Graves" />
				</div>

				<div className={classes.newUserItem}>
					<label>Email</label>
					<input type="email" placeholder="sebosneh@br.is" />
				</div>

				<div className={classes.newUserItem}>
					<label>Password</label>
					<input type="password" placeholder="password" />
				</div>

				<div className={classes.newUserItem}>
					<label>Phone</label>
					<input type="text" placeholder="8(998)-456-01-21" />
				</div>

				<div className={classes.newUserItem}>
					<label>Address</label>
					<input type="text" placeholder="1414 becker lane" />
				</div>

				<div className={classes.newUserItem}>
					<label>Gender</label>
					<div className={classes.newUserGender}>
						<input type="radio" name="gender" id="male" value="male" />
						<label htmlFor="male">Male</label>
						<input type="radio" name="gender" id="female" value="female" />
						<label htmlFor="female">Female</label>
					</div>
				</div>
				<div className={classes.newUserItem}>
					<label>Activate</label>
					<select
						className={classes.newUserSelect}
						name="activate"
						id="activate"
					>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<button className={classes.newUserButton}>Create</button>
			</form>
		</div>
	);
};

export default NewUser;
