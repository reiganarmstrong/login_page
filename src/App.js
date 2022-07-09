import { useState } from "react";
import styles from "./App.module.css";
import InputCard from "./Input/InputCard";
import OutputCard from "./Output/OutputCard";

const App = () => {
  const [people, setPeople] = useState([]);
  const addPeopleHandler = (newPerson) => {
    setPeople((oldPeople) => {
      return [...oldPeople, newPerson];
    });
  };
  return (
    <div className={styles.container}>
      <InputCard onAddPerson={addPeopleHandler} />
      <OutputCard users={people} />
    </div>
  );
};

export default App;
