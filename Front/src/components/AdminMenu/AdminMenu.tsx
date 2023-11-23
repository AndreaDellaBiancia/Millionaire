import { Link, useLocation } from "react-router-dom";
import { AdminNav, LinkItem, NavList, Title } from "./CssAdminMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function AdminMenu() {
  const [colorQuestionsCliked, setColorQuestionsCliked] = useState<string>("#2F2FCD")
  const [colorRankingCliked, setColorRankingCliked] = useState<string>("black")
  const [colorUsersCliked, setColorUsersCliked] = useState<string>("black")
  const roleCurrentUser = useSelector(
    (state: RootState) => state.user.user?.role?.name
  );
  const pathname: string = useLocation().pathname;

  useEffect(() => {
    if (pathname === "/admin/questions") {
      setColorQuestionsCliked("#2F2FCD");
      setColorRankingCliked("black");
      setColorUsersCliked("black");
     }else if (pathname === "/admin/classement") {
      setColorQuestionsCliked("black");
      setColorRankingCliked("#2F2FCD");
      setColorUsersCliked("black");
     }else if (pathname === "/admin/utilisateurs") {
      setColorQuestionsCliked("black");
      setColorRankingCliked("black");
      setColorUsersCliked("#2F2FCD");
     }
  }, [pathname])


  return (
    <AdminNav className="animate__animated animate__backInDown">
      <Title>ADMINISTRATION</Title>
      <NavList className="me-auto">
        <Link to="/admin/questions" className="admin-menu-link">
          <LinkItem color={colorQuestionsCliked}>Questions</LinkItem>
        </Link>
        <Link to="/admin/classement" className="admin-menu-link">
          <LinkItem color={colorRankingCliked}>Classement</LinkItem>
        </Link>
       {roleCurrentUser === "SUPER_ADMIN" && <Link to="/admin/utilisateurs" className="admin-menu-link">
          <LinkItem color={colorUsersCliked}>Utilisateurs</LinkItem>
        </Link>
  }
      </NavList>
    </AdminNav>
  );
}

export default AdminMenu;
