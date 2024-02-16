// import React from 'react'; // tsconfig.json: "jsx": "react-jsx"

import { createRoot } from 'react-dom/client';
import App from './components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './pages/about/public';
import { Store } from './pages/store/public';
import { Suspense } from 'react';

const container = document.getElementById('root');

if (!container)
	throw new Error('root not found!')

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		children: [
			{
				path: "/about",
				element: <Suspense fallback='Loading...'><About/></Suspense>,
			},
			{
				path: "/store",
				element: <Suspense fallback='Loading...'><Store/></Suspense>,
			},
		]
	},
]);

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<RouterProvider router={router} />
);