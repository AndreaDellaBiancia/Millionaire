
import Ranking from "../pages/Ranking/Ranking";
import ErrorPage from "../pages/Error/Error404";
import Home from "../pages/Home/Home";

const ProtectedRoute = (route: {route: string}) => {
  function isAuthenticated(){
    const token = localStorage.getItem("token");
    return token ? true : false;
    
  }

  if (!isAuthenticated()) {
    return <ErrorPage />; 
  }

  switch (route.route) {
    case "home":
     return <Home />
    case "classement":
      return <Ranking />
    default:
     return <ErrorPage />
  }
};

export default ProtectedRoute;
