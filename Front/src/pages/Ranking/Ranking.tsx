import { useEffect, useState } from "react";
import { getRanking } from "../../fetch/fetchUser";
import User from "../../interfaces/UserInterface";
import {
  RankingTitle,
  RankingList,
  RankingContainer,
} from "./CssRanking";
import UserRanking from "../../components/UserRanking/UserRanking";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Ranking() {

  const level = useSelector((state: RootState) => state.game.level)

  console.log('=============RANKING================');
  console.log(level);
  console.log('====================================');
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
