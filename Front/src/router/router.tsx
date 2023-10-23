import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import Ranking from "../pages/Ranking/ranking";
import ErrorPage from "../pages/Error/Error404";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "classement",
    element: <Ranking />,
    errorElement: <ErrorPage />,
  },
]);

export default router;