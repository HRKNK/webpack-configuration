import App from "@/app/App";
import { About } from "@/pages/about/public";
import { Store } from "@/pages/store/public";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

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

export { router };