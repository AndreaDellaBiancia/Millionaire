import { useEffect, useState } from "react";
import { getRanking } from "../../fetch/fetchRanking";
import {
  ColItem,
  ColTitle,
  Line,
  LineTitle,
  ListContainer,
  SearchContainer,
  Table,
} from "./CssAdminRanking";
import UserAdminRanking from "../../interfaces/UserAdminRanking";
import User from "../../interfaces/UserInterface";

function AdminRanking() {
  const [users, setUsers] = useState<UserAdminRanking[]>();
  const [filteredUsers, setFilteredUsers] = useState<UserAdminRanking[]>();
  const [isSortByPlace, setIsSortByPlace] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      // Appel de la fonction getRanking pour obtenir les données des utilisateurs
      const usersData = await getRanking();

      // Transformation des données pour inclure la position de chaque utilisateur (On exclut les admin et superadmin)
      const usersList = usersData.filter((user: User) => (user.role?.name !== "ADMIN" && user.role?.name !== "SUPER_ADMIN")).map((user: any, index: number) => {
        return { position: index + 1, user: user };
      });

      // Création d'une copie de la liste d'utilisateurs pour le tri
      const positionSorted = [...usersList];

      // Tri de la liste en fonction de la position, en ordre croissant ou décroissant
      positionSorted.sort((a, b) => {
        const positionA = a.position !== undefined ? a.position : 0;
        const positionB = b.position !== undefined ? b.position : 0;
        return isSortByPlace ? positionB - positionA : positionA - positionB;
      });

      // Mise à jour de l'état des utilisateurs avec la liste triée
      setUsers(positionSorted);
    }

    // Appel de la fonction fetchData à chaque changement de isSortByPlace
    fetchData();
  }, [isSortByPlace]);

  // Fonction pour gérer la recherche d'utilisateurs
  function handleSearch(e: any) {
    // Filtrage des utilisateurs en fonction du nom d'utilisateur ou des points
    const usersFilter = users?.filter(
      (user: any) =>
        user.user.username
          .toUpperCase()
          .includes(e.target.value.toUpperCase()) ||
        user.user.points.toString().includes(e.target.value)
    );

    // Mise à jour de l'état des utilisateurs filtrés
    setFilteredUsers(usersFilter);
  }

  return (
    <>
      <SearchContainer>
        <label>Recherche</label>
        <input onChange={(e) => handleSearch(e)} type="text" />
      </SearchContainer>
      <Table>
        <LineTitle className="title-line">
          <ColTitle>
            Position{" "}
            <i
              style={{ marginLeft: "1rem" }}
              onClick={() => setIsSortByPlace(!isSortByPlace)}
              className="fa-solid fa-sort"
            ></i>
          </ColTitle>
          <ColTitle>Nom</ColTitle>
          <ColTitle>Points</ColTitle>
        </LineTitle>
        <ListContainer>
          {(filteredUsers ? filteredUsers : users)?.map(
            (user: any, index: number) => (
              <Line key={user.user.id}>
                <ColItem className="col-admin-award">{user.position}</ColItem>
                <ColItem className="col-admin-question">
                  {user.user.username}
                </ColItem>
                <ColItem className="col-admin-level">
                  {user.user.points}
                </ColItem>
              </Line>
            )
          )}
        </ListContainer>
      </Table>
    </>
  );
}

export default AdminRanking;
