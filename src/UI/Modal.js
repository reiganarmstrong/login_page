import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";
const Modal = (props) => {
  const localFlip = (e) => {
    console.log(e);
    props.changeValidity();
  };
  return (
    <div className={(props.valid && styles.valid) || styles.container}>
      <Card className={styles.card}>
        <div className={styles.titleBar}>Invalid Input</div>
        <div>{props.error}</div>
        <div className={styles.buttons}>
          <Button value="Okay" onClick={localFlip} />
        </div>
      </Card>
    </div>
  );
};
export default Modal;
