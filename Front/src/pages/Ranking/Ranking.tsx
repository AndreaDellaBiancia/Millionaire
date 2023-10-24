import { useEffect, useState } from "react";
import { getRanking } from "../../fetch/fetchUser";
import User from "../../interfaces/UserInterface";
import {
  RankingTitle,
  RankingList,
  RankingContainer,
} from "./CssRanking";
import UserRanking from "../../components/UserRanking/UserRanking";

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
        {users?.map((user: User, index: number) => (
          <UserRanking  index={index} user={user} />
        ))}
      </RankingList>
    </RankingContainer>
  );
}

export default Ranking;
