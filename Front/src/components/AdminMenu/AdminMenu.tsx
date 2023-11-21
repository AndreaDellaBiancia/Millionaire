import { Link, useLocation } from "react-router-dom";
import { AdminNav, LinkItem, NavList, Title } from "./CssAdminMenu";
import { useState } from "react";

function AdminMenu() {
  const [colorQuestionsCliked, setColorQuestionsCliked] = useState<string>("blue")
  const [colorRankingCliked, setColorRankingCliked] = useState<string>("black")
  const [colorUsersCliked, setColorUsersCliked] = useState<string>("black")

  const pathname: string = useLocation().pathname;

  function handleClick(event: any): void {
   if (pathname === "admin/questions") {
    setColorQuestionsCliked("blue");
    setColorRankingCliked("black");
    setColorUsersCliked("black");
   }else if (pathname === "admin/classement") {
    setColorQuestionsCliked("black");
    setColorRankingCliked("blue");
    setColorUsersCliked("black");
   }else if (pathname === "admin/utilisateurs") {
    setColorQuestionsCliked("black");
    setColorRankingCliked("black");
    setColorUsersCliked("blue");
   }
  }

  return (
    <AdminNav className="animate__animated animate__backInDown">
      <Title>ADMINISTRATION</Title>
      <NavList className="me-auto">
        <Link to="" onClick={(e) => handleClick(e)} className="admin-menu-link">
          <LinkItem color={colorQuestionsCliked}>Questions</LinkItem>
        </Link>
        <Link to="" onClick={(e) => handleClick(e)} className="admin-menu-link">
          <LinkItem color={colorRankingCliked}>Classement</LinkItem>
        </Link>
        <Link to="" onClick={(e) => handleClick(e)} className="admin-menu-link">
          <LinkItem color={colorUsersCliked}>Utilisateurs</LinkItem>
        </Link>
      </NavList>
    </AdminNav>
  );
}

export default AdminMenu;
