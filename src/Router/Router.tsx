import { useRoutes } from "react-router-dom";
import App from "../App";
import AppLayout from "../components/AppLayout";
import DashboardPage from "../pages/dashboard";

const Router = () => {
  const element = useRoutes([
    {
      path: "",
      element: <AppLayout />,
      children: [
        { path: "/", element: <App /> },
        { path: "/dashboard", element: <DashboardPage /> },
      ],
    },
  ]);

  return element;
};

export default Router;
