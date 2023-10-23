import { useEffect, useState } from "react";
import { getRanking } from "../../fetch/fetchUser";
import User from "../../interfaces/UserInterface";
import { RankingTitle, RankingList, RankingContainer } from "./CssRanking";


function Ranking() {
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    async function fetchData() {
      const users = await getRanking();
      setUsers(users);
    }
    fetchData();
  }, []);

  return (
    <RankingContainer>
      <RankingList>
      <RankingTitle>Classement</RankingTitle>
        {users?.map((user) => (
          <article key={user.id}>
            <p>{user.username}  {user.points}</p>
          </article>
        ))}
      </RankingList>
    </RankingContainer>
  );
}

export default Ranking;
