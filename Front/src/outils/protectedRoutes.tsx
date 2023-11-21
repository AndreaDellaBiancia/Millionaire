import {useSelector } from "react-redux";
import ErrorPage from "../pages/Error/Error404";
import Profile from "../pages/Profile/Profile";
import { RootState } from "../store/store";
import AdminQuestionsList from "../pages/AdminQuestionsList/AdminQuestionsList";

const ProtectedRoute = (route: { route: string }) => {
  const role = useSelector((state: RootState) => state.user.user?.role?.name);

  function isAuthenticated() {
    const token = localStorage.getItem("token");
    return token ? true : false;
  }

  if (!isAuthenticated()) {
    return <ErrorPage />;
  }

  if (isAuthenticated() && (role === "ADMIN" || role === "SUPER_ADMIN")) {
    switch (route.route) {
      case "admin/questions":
        return <AdminQuestionsList />;
      case "mon-profil":
        return <Profile />;
      default:
        return <ErrorPage />;
    }
  } else {
    switch (route.route) {
      case "mon-profil":
        return <Profile />;
      default:
        return <ErrorPage />;
    }
  }
};

export default ProtectedRoute;
