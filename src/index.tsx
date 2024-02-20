// import React from 'react'; // tsconfig.json: "jsx": "react-jsx"

import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/provider/router/public';

const container = document.getElementById('root');

if (!container)
	throw new Error('root not found!')

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<RouterProvider router={router} />
);