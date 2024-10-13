import { useRoutes } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import HomePage from "../pages/home.tsx";

const Router = () => {
  const element = useRoutes([
    {
      path: "",
      element: <AppLayout />,
      children: [
        { path: "/", element: <HomePage /> },
      ],
    },
  ]);

  return element;
};

export default Router;
