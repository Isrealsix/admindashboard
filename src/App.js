import { Fragment } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/Topbar';
import classes from './App.module.css';

function App() {
	return (
		<Fragment>
			<Topbar />
			<div className={classes.container}>
				<Sidebar />
				<div className={classes.others}>other item</div>
			</div>
		</Fragment>
	);
}

export default App;
