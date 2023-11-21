import { useEffect, useState } from "react";
import { getRanking } from "../../fetch/fetchRanking";
import User from "../../interfaces/UserInterface";
import { RankingTitle, RankingList, RankingContainer, RankingTitleTop10 } from "./CssRanking";
import UserRanking from "../../components/UserRanking/UserRanking";

function Ranking() {
  const [users, setUsers] = useState<User[]>([]);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  
  const [classPopup, setClassPopup] = useState<string>("popup-inscription animate__animated animate__zoomInDown");


  useEffect(() => {
    async function fetchData() {
      const users = await getRanking();
      const first10Users = users.filter(
        (user: User, index: number) => index < 10
      );
      setUsers(first10Users);
    }
    fetchData();
    const token = localStorage.getItem("token");
    if (!token) {
      setIsPopup(true);
      setTimeout(() => {
        setClassPopup("popup-inscription animate__animated animate__zoomOutDown")
      }, 7000)
    }
  }, []);
  return (
    <RankingContainer>
     {isPopup && <div className={classPopup}>
        Inscris-toi pour atteindre le sommet du classement !
      </div>}
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
