import React from "react";
import UsersList from "../components/UsersList";
function Users() {
  const USERS = [
    {
      id: "u1",
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      place: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
