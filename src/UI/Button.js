import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button onClick={props.onClick} className={styles.Button}>
      {props.value}
    </button>
  );
};
export default Button;
