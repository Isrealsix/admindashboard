import { Fragment } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/Topbar';
import classes from './App.module.css';
import Home from './pages/home/Home';

function App() {
	return (
		<Fragment>
			<Topbar />
			<div className={classes.container}>
				<Sidebar />
				<Home />
			</div>
		</Fragment>
	);
}

export default App;
