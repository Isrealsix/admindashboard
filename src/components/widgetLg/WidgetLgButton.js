import classes from './WidgetLgButton.module.css';

const Button = ({ type }) => {
	return (
		<button className={`${classes.widgetLgButton} ${classes[type]}`}>
			{type}
		</button>
	);
};

export default Button;
