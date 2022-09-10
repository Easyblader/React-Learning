import { useState, useEffect } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    inputValid: inputInvalid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((name) => name.trim() === "");

  //const [enteredName, setEnteredName] = useState("");
  const [inputTouched, setInputTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  // const inputInvalid = enteredName.trim() === "";
  const textInvalidity = !inputInvalid && inputTouched;

  useEffect(() => {
    if (inputInvalid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [inputInvalid]);

  // const enteredNameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const nameInputBlurHandler = (event) => {
  //   setInputTouched(true);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    setInputTouched(true);

    if (inputInvalid) {
      return;
    }
    //setEnteredName("");
    setInputTouched(false);
  };

  const formClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          onBlur={nameBlurHandler}
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && <p className="error-text">Input invalid!</p>}
      <div className="form-actions">
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
