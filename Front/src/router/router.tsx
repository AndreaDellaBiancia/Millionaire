import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../pages/Error/Error404";
import Navbar from "../components/Navbar/Navbar"; // Importez le composant Navbar
import Game from "../pages/Game/Game";
import Home from "../pages/Home/Home";
import Ranking from "../pages/Ranking/Ranking";
import ProtectedRoute from "../outils/protectedRoutes";
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
       // element: <ProtectedRoute route={"classement"} /> ,
       element: <Ranking />,

      },
      {
        path: "jeu",
        element: <Game />,
      },
      {
        path: "*", // Route catch-all
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
