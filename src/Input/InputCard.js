import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./InputCard.module.css";
import { useState } from "react";
const InputCard = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (age > 0) {
      props.onAddPerson({ id: Math.random(), name: name, age: age });
    } else {
      props.changeValidity();
    }
    setAge("");
    setName("");
  };
  return (
    <Card>
      <form className={styles.wrapper} onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" onChange={nameChangeHandler} value={name} />
        <label>Age (Years)</label>
        <input type="number" onChange={ageChangeHandler} value={age} />
        <Button value="submit"></Button>
      </form>
    </Card>
  );
};
export default InputCard;
