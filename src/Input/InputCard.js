import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./InputCard.module.css";
import { useState, useRef } from "react";
const InputCard = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameInput);
    const age = ageInput.current.value;
    const name = nameInput.current.value;
    if (age > 0 && name.length > 0) {
      props.onAddPerson({ id: Math.random(), name: name, age: age });
    } else {
      props.changeValidity();
    }
    nameInput.current.value = "";
    ageInput.current.value = "";
  };
  return (
    <Card>
      <form className={styles.wrapper} onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" ref={nameInput} />
        <label>Age (Years)</label>
        <input type="number" ref={ageInput} />
        <Button value="submit" type="submit" />
      </form>
    </Card>
  );
};
export default InputCard;
