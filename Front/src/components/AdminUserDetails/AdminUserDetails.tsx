import Modal from "react-bootstrap/Modal";
import ModalAdminUserDetailsProps from "../../interfaces/ModalAdminUserDetailsProps";
import { useEffect, useState } from "react";
import { getUser } from "../../fetch/fetchUser";
import { getRanking } from "../../fetch/fetchRanking";
import { getGamesByUser } from "../../fetch/fetchGames";
import { gameNormalize } from "../../outils/gameNormalize";
import GameNormalize from "../../interfaces/GameNormalizeInterface";
import User from "../../interfaces/UserInterface";
import "./style.css";

function AdminUserDetails({
  userId,
  show,
  onHide,
}: ModalAdminUserDetailsProps) {
  const [user, setUser] = useState<User | undefined>({});
  const [myPosition, setMyPosition] = useState<number>(0);
  const [gamesNormalize, setGamesNormalize] = useState<GameNormalize[]>();

  useEffect(() => {
    // On recupere les données de l'utilisateur courant
    async function getData(id: number) {
      const userData = await getUser(id);
      const rankingData = await getRanking();
      const gamesData = await getGamesByUser(id);
      //On utilise la fonction gameNormalize() pour exploiter au mieux les données récuperées
      setGamesNormalize(gameNormalize(gamesData));
      setUser(userData);
      findMyPosition(rankingData, userData.username);
    }
    if (userId) {
      getData(userId);
    }
  }, [userId]);

  function findMyPosition(rankingList: User[], username: string) {
    //On récupere la position de l'utilisateur courant dans le classement total
    const position =
      rankingList.findIndex(
        (user: User, index: number) => user.username === username
      ) + 1;
    setMyPosition(position);
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ width: "100%" }}
        >
          <p  className="user-details-name">{user?.username}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="user-details">
          <p>Position : <span>{myPosition}</span></p>
          <p>Points :<span> {user?.points}</span></p>
          <p>Parties realisées : <span>{gamesNormalize?.length}</span></p>
        </div>

        <table className="user-details-table">
          <tr>
            <th>POINTS</th>
            <th>ARGENT GAGNÉ</th>
            <th>AIDES UTILISEES</th>
            <th>NIVEAU</th>
            <th>DATE</th>
          </tr>
          <div className="list-container">
          {gamesNormalize?.map((game) => (
            <tr key={game.id}>
              <td>{game.points}</td>
              <td>{game.questionAward} €</td>
              <td>
                {game.helps.length ?  game.helps.map((help) => {
                  if (help.name === "call_home") {
                    return (
                      <div key={help.id} className="help-item">
                        <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      </div>
                    );
                  }
                  if (help.name === "50%") {
                    return (
                      <div key={help.id} className="help-item">
                       <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                      </div>
                    );
                  }
                  if (help.name === "public_help") {
                    return (
                      <div key={help.id} className="help-item">
                         <i className="fa-sharp fa-solid fa-people-group"></i>
                      </div>
                    );
                  }
                }) : <p>Aucune</p>}
              </td>
              <td>{game.level}</td>
              <td>{game.created_at}</td>
            </tr>
          ))}
          </div>
        </table>
      </Modal.Body>
    </Modal>
  );
}

export default AdminUserDetails;
