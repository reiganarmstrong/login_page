import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const ModalBackend = (props) => {
  const localFlip = (e) => {
    console.log(e);
    props.changeValidity();
  };
  return (
    <div className={(props.valid && styles.valid) || styles.container}>
      <Card className={styles.card}>
        <header className={styles.titleBar}>Invalid Input</header>
        <p>{props.error}</p>
        <div className={styles.buttons}>
          <Button value="Okay" onClick={localFlip} />
        </div>
      </Card>
    </div>
  );
};
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackend {...props} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};
export default Modal;
