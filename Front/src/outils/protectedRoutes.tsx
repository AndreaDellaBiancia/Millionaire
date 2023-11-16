import ErrorPage from "../pages/Error/Error404";
import Profile from "../pages/Profile/Profile";

const ProtectedRoute = (route: { route: string }) => {
  function isAuthenticated() {
    const token = localStorage.getItem("token");
    return token ? true : false;
  }

  if (!isAuthenticated()) {
    return <ErrorPage />;
  }

  switch (route.route) {
    case "mon-profil":
      return <Profile />;
    default:
      return <ErrorPage />;
  }
};

export default ProtectedRoute;
