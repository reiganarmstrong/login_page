import { useState } from "react";
import styles from "./App.module.css";
import InputCard from "./Input/InputCard";
import OutputCard from "./Output/OutputCard";
import Modal from "./UI/Modal";
const App = () => {
  const [people, setPeople] = useState([]);
  const [valid, setValid] = useState(true);
  const addPeopleHandler = (newPerson) => {
    setPeople((oldPeople) => {
      return [...oldPeople, newPerson];
    });
  };
  const removePeopleHandler = (toRemove) => {
    setPeople((oldPeople) => {
      return oldPeople.filter((person) => {
        return person.name !== toRemove.name && person.age !== toRemove.age;
      });
    });
  };
  const changeValitidy = () => {
    setValid((oldValue) => {
      return !oldValue;
    });
  };
  return (
    <>
      <Modal
        changeValidity={changeValitidy}
        error={`Enter a username and a valid age > 0`}
        valid={valid}
      ></Modal>
      <div className={styles.container}>
        <InputCard
          isValid={valid}
          changeValidity={changeValitidy}
          onAddPerson={addPeopleHandler}
        />
        <OutputCard onRemovePerson={removePeopleHandler} users={people} />
      </div>
    </>
  );
};

export default App;
