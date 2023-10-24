import { useEffect, useState } from "react";
import { getRanking } from "../../fetch/fetchUser";
import User from "../../interfaces/UserInterface";
import { RankingTitle, RankingList, RankingContainer, TriangleLeft, TriangleRight, DivUser, Line, RankingImg, RankingName, RankingPoints } from "./CssRanking";
import firstPlace from "../../assets/images/firstPlace.jpg";
import secondPlace from "../../assets/images/secondPlace.png";
import thirdPlace from "../../assets/images/thirdPlace.png";



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
        {users?.map((user, index) => (
 
          <DivUser key={user.id}>
            <TriangleLeft></TriangleLeft>
            <RankingName>{user.username}</RankingName> 
            <RankingPoints>{user.points}</RankingPoints>
            <RankingImg style={index === 0 ? {display:"block"} : {display:"none"}} src={firstPlace} alt="premiere place" />
            <RankingImg style={index === 1 ? {display:"block"} : {display:"none"}} src={secondPlace} alt="deuxieme place" />
            <RankingImg style={index === 2 ?{display:"block"} : {display:"none"}} src={thirdPlace} alt="troisieme place" />
            <Line></Line>
            <TriangleRight></TriangleRight>
          </DivUser>
        ))}
      </RankingList>
    </RankingContainer>
  );
}

export default Ranking;
