import {
  ProfileContainer,
  Name,
  Table,
  Ligne,
  ColTitle,
  ColItem,
  InfoContainer,
  CoinImg,
  Points,
  Place,
  RankingImg,
  TableTitle,
  NoGames,
  HelpItem,
  ListContainer,
} from "./CssProfile";
import coin from "../../assets/images/gold-coin.svg";
import rankingImg from "../../assets/images/ranking.png";
import { useEffect, useState } from "react";
import { getUser } from "../../fetch/fetchUser";
import User from "../../interfaces/UserInterface";
import { getRanking } from "../../fetch/fetchRanking";
import { getGamesByUser } from "../../fetch/fetchGames";
import { gameNormalize } from "../../outils/gameNormalize";
import GameNormalize from "../../interfaces/GameNormalizeInterface";
import Game from "../../interfaces/GameInterface";

function Profile() {
  const [user, setUser] = useState<User | undefined>({});
  const [myPosition, setMyPosition] = useState<number>(0);

  const [gamesNormalize, setGamesNormalize] = useState<GameNormalize[]>();
  const [games, setGames] = useState<Game[]>();
  const [isSortByPoints, setIsSortByPoints] = useState<boolean>(false);
  const [isSortByAward, setIsSortByAward] = useState<boolean>(false);
  const [isSortByLevel, setIsSortByLevel] = useState<boolean>(false);
  const [isSortByDate, setIsSortByDate] = useState<boolean>(false);

  const userId = Number(localStorage.getItem("userId"));

  function findMyPosition(rankingList: User[], username: string) {
    //On récupere la position de l'utilisateur courant dans le classement total
    const position =
      rankingList.findIndex(
        (user: User, index: number) => user.username === username
      ) + 1;
    setMyPosition(position);
  }

  useEffect(() => {
    // On recupere les données de l'utilisateur courant
    async function getData(id: number) {
      const userData = await getUser(id);
      const rankingData = await getRanking();
      const gamesData = await getGamesByUser(id);
      setGames(gamesData);
      //On utilise la fonction gameNormalize() pour exploiter au mieux les données récuperées
      setGamesNormalize(gameNormalize(gamesData));
      setUser(userData);
      findMyPosition(rankingData, userData.username);
    }
    getData(userId);
  }, []);

  useEffect(() => {
    // Trier les parties par points
    if (games) {
      if (isSortByPoints) {
        const pointsSorted = gameNormalize(games).sort(
          (a, b) => b.points - a.points
        );
        setGamesNormalize(pointsSorted);
      } else {
        const pointsSorted = gameNormalize(games).sort(
          (a, b) => a.points - b.points
        );
        setGamesNormalize(pointsSorted);
      }
    }
  }, [isSortByPoints]);

  useEffect(() => {
    // Trier les parties par prix
    if (games) {
      if (isSortByAward) {
        const awardSorted = gameNormalize(games).sort(function (a, b) {
          const aReplaced = a.questionAward.replace(".", "");
          const bReplaced = b.questionAward.replace(".", "");

          return Number(bReplaced) - Number(aReplaced);
        });
        setGamesNormalize(awardSorted);
      } else {
        const awardSorted = gameNormalize(games).sort(function (a, b) {
          const aReplaced = a.questionAward.replace(".", "");
          const bReplaced = b.questionAward.replace(".", "");
          return Number(aReplaced) - Number(bReplaced);
        });

        setGamesNormalize(awardSorted);
      }
    }
  }, [isSortByAward]);

  useEffect(() => {
    // Trier les parties par niveau
    if (games) {
      if (isSortByLevel) {
        const levelSorted = gameNormalize(games)?.sort(function (a, b) {
          return a.level.localeCompare(b.level);
        });
        setGamesNormalize(levelSorted);
      } else {
        const levelSorted = gameNormalize(games)?.sort(function (a, b) {
          return b.level.localeCompare(a.level);
        });
        setGamesNormalize(levelSorted);
      }
    }
  }, [isSortByLevel]);

  useEffect(() => {
    // Trier les parties par date
    if (games) {
      if (isSortByDate) {
        const dateSorted = gameNormalize(games).sort(function (a, b) {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          const timestampA = dateA.getTime();
          const timestampB = dateB.getTime();
          return timestampA - timestampB;
        });
        setGamesNormalize(dateSorted);
      } else {
        const dateSorted = gameNormalize(games).sort(function (a, b) {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          const timestampA = dateA.getTime();
          const timestampB = dateB.getTime();
          return timestampB - timestampA;
        });
        setGamesNormalize(dateSorted);
      }
    }
  }, [isSortByDate]);

  return (
    <ProfileContainer>
      <Name>Salut {user?.username} !</Name>
      <InfoContainer>
        <Points>
          <CoinImg src={coin} alt="piece dorée" />
          Points Totaux <span>{user?.points}</span>
        </Points>
        <Place>
          Position <span>{myPosition}</span>
          <RankingImg src={rankingImg} alt="piece dorée" />
        </Place>
      </InfoContainer>
      <TableTitle>TES PARTIES</TableTitle>
      {games?.length ? (
        <Table>
          <Ligne>
            <ColTitle scope="col">
              Points
              <i
                onClick={() => setIsSortByPoints(!isSortByPoints)}
                className="fa-solid fa-sort"
              ></i>
            </ColTitle>
            <ColTitle scope="col">
              Argent gagné
              <i
                onClick={() => setIsSortByAward(!isSortByAward)}
                className="fa-solid fa-sort"
              ></i>
            </ColTitle>
            <ColTitle scope="col">Aides utilisées</ColTitle>
            <ColTitle scope="col">
              Niveau
              <i
                onClick={() => setIsSortByLevel(!isSortByLevel)}
                className="fa-solid fa-sort"
              ></i>
            </ColTitle>
            <ColTitle scope="col">
              Date
              <i
                onClick={() => setIsSortByDate(!isSortByDate)}
                className="fa-solid fa-sort"
              ></i>
            </ColTitle>
          </Ligne>
          <ListContainer>
          {gamesNormalize?.map((game) => (
            <Ligne key={game.id}>
              <ColItem>{game.points}</ColItem>
              <ColItem>{game.questionAward} €</ColItem>
              <ColItem>
                {game.helps.length ?  game.helps.map((help) => {
                  if (help.name === "call_home") {
                    return (
                      <HelpItem key={help.id}>
                        <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      </HelpItem>
                    );
                  }
                  if (help.name === "50%") {
                    return (
                      <HelpItem key={help.id}>
                       <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                      </HelpItem>
                    );
                  }
                  if (help.name === "public_help") {
                    return (
                      <HelpItem key={help.id}>
                         <i className="fa-sharp fa-solid fa-people-group"></i>
                      </HelpItem>
                    );
                  }
                }) 
               : <p>Aucune</p>}
               
              </ColItem>
              <ColItem>{game.level}</ColItem>
              <ColItem>{game.created_at}</ColItem>
            </Ligne>
          ))}
          </ListContainer>
        </Table>
      ) : (
        <NoGames>
          Les statistiques des parties sont comme les médailles : vous ne les
          obtenez pas sans effort !
        </NoGames>
      )}
    </ProfileContainer>
  );
}

export default Profile;
