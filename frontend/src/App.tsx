import { RouterProvider } from "react-router-dom";
import { useLanguage } from "./hooks/useLanguage";
import { router } from "./router";

const App = () => {
	useLanguage();

	return <RouterProvider router={router} />;
};

export default App;
