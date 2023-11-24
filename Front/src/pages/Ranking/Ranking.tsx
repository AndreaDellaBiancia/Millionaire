import { useEffect, useState } from "react";
import { getRanking } from "../../fetch/fetchRanking";
import User from "../../interfaces/UserInterface";
import {
  RankingTitle,
  RankingList,
  RankingContainer,
  RankingTitleTop10,
} from "./CssRanking";
import UserRanking from "../../components/UserRanking/UserRanking";

function Ranking() {
  const [users, setUsers] = useState<User[]>([]);
  const [isPopup, setIsPopup] = useState<boolean>(false);

  const [classPopup, setClassPopup] = useState<string>(
    "popup-inscription animate__animated animate__zoomInDown"
  );

  useEffect(() => {
    async function fetchData() {
      const users = await getRanking();
      // On filtre les 10 premiers user avec le plus haut nombre de point apres avoir
      // exclu les admin et super admin
      const first10Users = users
        .filter(
          (user: User) =>
            user.role?.name !== "ADMIN" && user.role?.name !== "SUPER_ADMIN"
        )
        .filter((user: User, index: number) => index < 10);
      setUsers(first10Users);
    }
    fetchData();

    // On affiche le popup si l'utilisateur n'est pas connecté
    const token = localStorage.getItem("token");
    if (!token) {
      setIsPopup(true);
      setTimeout(() => {
        setClassPopup(
          "popup-inscription animate__animated animate__zoomOutDown"
        );
      }, 5000);
    }
  }, []);
  return (
    <RankingContainer>
      {isPopup && (
        <div className={classPopup}>
          Inscris-toi pour atteindre le sommet du classement !
        </div>
      )}
      <RankingList>
        <RankingTitle>Classement</RankingTitle>
        <RankingTitleTop10>TOP 10</RankingTitleTop10>
        {users?.map((user: User, index: number) => (
          <UserRanking key={user.id} index={index} user={user} />
        ))}
      </RankingList>
    </RankingContainer>
  );
}

export default Ranking;
