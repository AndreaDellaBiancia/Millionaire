import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../pages/Error/Error404";
import Navbar from "../components/Navbar/Navbar"; // Importez le composant Navbar
import Game from "../pages/Game/Game";
import Home from "../pages/Home/Home";
import Ranking from "../pages/Ranking/Ranking";
import ProtectedRoute from "./protectedRoutes";
import AdminMenu from "../components/AdminMenu/AdminMenu";
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
        path: "jeu",
        element: <Game />,
      },
      {
        path: "mon-profil",
        element: <ProtectedRoute route={"mon-profil"} />,
      },
      {
        path: "/admin",
        element: (
          <div>
           <AdminMenu />
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "questions",
            element: <ProtectedRoute route={"admin/questions"} />,
          },
          {
            path: "classement",
            element: <ProtectedRoute route={"admin/classement"} />,
          },
          {
            path: "utilisateurs",
            element: <ProtectedRoute route={"admin/utilisateurs"} />,
          },
        ],
      },
      {
        path: "*", // Route catch-all
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;