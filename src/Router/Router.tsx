import { useRoutes } from "react-router-dom";
import App from "../App";
import DashboardPage from "../pages/dashboard";
const Router = () => {
  const element = useRoutes([
    {
      path: "",
      children: [
        { path: "/", element: <App /> },
        { path: "/dashboard", element: <DashboardPage /> },
      ],
    },
  ]);

  return element;
};

export default Router;
