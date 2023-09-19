import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import ErrorPage from "../pages/Error/Error404";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default router;