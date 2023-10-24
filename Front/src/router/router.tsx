import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../pages/Error/Error404";
import Navbar from "../components/navbar/Navbar"; // Importez le composant Navbar
import Game from "../pages/Game/Game";
import Home from "../pages/Home/Home";
import Ranking from "../pages/Ranking/Ranking";

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
      {
        path: "jeux",
        element: <Game />,
      },
    ],
  },
]);

export default router;
