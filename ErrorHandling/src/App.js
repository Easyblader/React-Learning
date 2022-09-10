import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import "./App.css";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
    //  users.unshift(...prevState, [uName, uAge]
  };

  return (
    <div>
      <AddUser onAdd={addUserHandler}></AddUser>
      <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
