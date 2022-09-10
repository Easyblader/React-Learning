import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please fill the required fields!",
      });
      return;
    }
    if (+age <= 0) {
      setError({
        title: "Invalid age",
        message: "Age must be > 0",
      });
      return;
    }
    props.onAdd(username, age);
    setUsername("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      <Card className={classes.input}>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          ></ErrorModal>
        )}
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={usernameChangeHandler}
            type="text"
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={age}
            onChange={ageChangeHandler}
            type="number"
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
