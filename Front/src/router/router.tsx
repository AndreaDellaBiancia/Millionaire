import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage404 from "../pages/Error/Error404";
import Navbar from "../components/Navbar/Navbar"; // Importez le composant Navbar
import Game from "../pages/Game/Game";
import Home from "../pages/Home/Home";
import Ranking from "../pages/Ranking/Ranking";
import ProtectedRoute from "./protectedRoutes";
import AdminMenu from "../components/AdminMenu/AdminMenu";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
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
        path: "reset-password/:token",
        element: <ResetPassword />,
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
        path: "*", 
        element: <ErrorPage404 />,
      },
    ],
  },
]);

export default router;
