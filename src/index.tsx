// import React from 'react'; // tsconfig.json: "jsx": "react-jsx"

import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/provider/router/public';
import { Provider } from 'react-redux';
import { setupStore } from './app/provider/store/public';

const container = document.getElementById('root');
const store = setupStore();

if (!container) throw new Error('root not found!');
if (!store) throw new Error('state-manager not installed!');

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
