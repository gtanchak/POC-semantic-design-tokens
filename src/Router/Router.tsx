import { useRoutes } from "react-router-dom";
import App from "../App";
import AppLayout from "../components/AppLayout";
import DashboardPage from "../pages/dashboard";
import UserPage from "../pages/user.tsx";
const Router = () => {
  const element = useRoutes([
    {
      path: "",
      element: <AppLayout />,
      children: [
        { path: "/", element: <App /> },
        { path: "/dashboard", element: <DashboardPage /> },
        { path: "/user", element: <UserPage /> },
      ],
    },
  ]);

  return element;
};

export default Router;
