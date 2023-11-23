import { useSelector } from "react-redux";
import ErrorPage401 from "../pages/Error/Error401";
import Profile from "../pages/Profile/Profile";
import { RootState } from "../store/store";
import AdminQuestionsList from "../pages/AdminQuestionsList/AdminQuestionsList";
import AdminRanking from "../pages/AdminRanking/AdminRanking";
import AdminUserList from "../pages/AdminUserList/AdminUserList";
import AdminMenu from "../components/AdminMenu/AdminMenu";

const ProtectedRoute = (route: { route: string }) => {
  const role = useSelector((state: RootState) => state.user.user?.role?.name);

  function isAuthenticated() {
    const token = localStorage.getItem("token");
    return token ? true : false;
  }

  const components: any = {
    SUPER_ADMIN: {
      "admin/questions": <AdminQuestionsList />,
      "admin/classement": <AdminRanking />,
      "admin/utilisateurs": <AdminUserList />,
      "mon-profil": <Profile />,
    },
    ADMIN: {
      "admin/questions": <AdminQuestionsList />,
      "admin/classement": <AdminRanking />,
      "mon-profil": <Profile />,
    },
    USER: {
      "mon-profil": <Profile />,
    },
  };

  if (!isAuthenticated()) {
    return <ErrorPage401 />;
  }

  if (!role) {
    return <ErrorPage401 />;
  }
  if (components[role][route.route]) {
    return <div><AdminMenu /> {components[role][route.route]}</div> 
  }
  return <ErrorPage401 />;
};

export default ProtectedRoute;
