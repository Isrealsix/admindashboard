import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataContextProvider } from './store/data-store';
import { ProductContextProvider } from './store/product-store';

ReactDOM.render(
	<React.StrictMode>
		<DataContextProvider>
			<ProductContextProvider>
				<App />
			</ProductContextProvider>
		</DataContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
