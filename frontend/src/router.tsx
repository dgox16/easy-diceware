import { createBrowserRouter } from "react-router-dom";
import { Index } from "./pages/Index";
import { CheckPasswordPage } from "./pages/CheckPasswordPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},
	{
		path: "/check-password",
		element: <CheckPasswordPage />,
	},
]);
