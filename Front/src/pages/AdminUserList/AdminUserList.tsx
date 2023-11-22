import { useEffect, useState } from "react";
import {
  ColItem,
  ColTitle,
  Line,
  LineTitle,
  ListContainer,
  SearchContainer,
  Table,
} from "./CssAdminUsers";
import { getUsersList } from "../../fetch/fetchUsersList";
import User from "../../interfaces/UserInterface";
import AdminUserDetails from "../../components/AdminUserDetails/AdminUserDetails";

function AdminUsers() {
  const [users, setUsers] = useState<User[]>();
  const [userId, setUserId] = useState<number>();

  const [filteredUsers, setFilteredUsers] = useState<User[]>();
  const [modalViewShow, setModalViewShow] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const usersData = await getUsersList();
      setUsers(usersData);
    }

    fetchData();
  }, []);

  function handleSearch(e: any) {
    const usersFilter = users?.filter(
      (user: any) =>
        user.username.toUpperCase().includes(e.target.value.toUpperCase()) ||
        user.email.includes(e.target.value)||
        user.role.name.includes(e.target.value)
    );
    setFilteredUsers(usersFilter);
  }

  // Fonction pour afficher les détails d'une question
  function handleViewDetails(idUser: number) {
    setUserId(idUser);
    setModalViewShow(true);
  }
  return (
    <>
      <AdminUserDetails
        show={modalViewShow}
        setModalShow={setModalViewShow}
        onHide={() => setModalViewShow(false)}
        userId={userId}
      />
      <SearchContainer>
        <label>Recherche</label>
        <input onChange={(e) => handleSearch(e)} type="text" />
      </SearchContainer>
      <Table>
        <LineTitle className="title-line">
          <ColTitle>Nom</ColTitle>
          <ColTitle>Email</ColTitle>
          <ColTitle>Rôle</ColTitle>
          <ColTitle>Points</ColTitle>
          <ColTitle></ColTitle>
        </LineTitle>
        <ListContainer>
          {(filteredUsers ? filteredUsers : users)?.map(
            (user: any, index: number) => (
              <Line key={user.id}>
                <ColItem className="col-admin-award">{user.username}</ColItem>
                <ColItem className="col-admin-question">{user.email}</ColItem>
                <ColItem className="col-admin-level">{user.role.name}</ColItem>
                <ColItem className="col-admin-level">{user.points}</ColItem>
                <ColItem
                  className="col-admin-view"
                  onClick={() => handleViewDetails(user.id)}
                >
                  <i className="fa-regular fa-eye"></i>
                </ColItem>
              </Line>
            )
          )}
        </ListContainer>
      </Table>
    </>
  );
}

export default AdminUsers;
