import React from "react";
import userList from "../components/usersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Rishi Musuvathi",
      image:
        "https://i.pinimg.com/550x/f5/54/55/f554557b0de80aea86c729ea790b8b05.jpg",
      places: 3,
    },
  ];

  return <userList items={USERS} />;
};

export default Users;
