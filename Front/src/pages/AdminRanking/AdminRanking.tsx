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

function AdminRanking() {
  const [users, setUsers] = useState<UserAdminRanking[]>();
  const [filteredUsers, setFilteredUsers] = useState<UserAdminRanking[]>();

  const [isSortByPlace, setIsSortByPlace] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const usersData = await getRanking();
      const usersList = usersData.map((user: any, index: number) => {
        return { position: index + 1, user: user };
      });

      const positionSorted = [...usersList];

      positionSorted.sort((a, b) => {
        const positionA = a.position !== undefined ? a.position : 0;
        const positionB = b.position !== undefined ? b.position : 0;
        return isSortByPlace ? positionB - positionA : positionA - positionB;
      });

      setUsers(positionSorted);
    }

    fetchData();
  }, [isSortByPlace]);

  function handleSearch(e: any) {
    const usersFilter = users?.filter(
      (user: any) =>
        user.user.username
          .toUpperCase()
          .includes(e.target.value.toUpperCase()) ||
        user.user.points.toString().includes(e.target.value)
    );
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
