import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Ranking from "../pages/Ranking/Ranking";
import ErrorPage from "../pages/Error/Error404";
import Navbar from "../components/navbar/Navbar"; // Importez le composant Navbar

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "classement",
        element: <Ranking />,
      },
    ],
  },
]);

export default router;
