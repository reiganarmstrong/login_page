import styles from "./Button.module.css";
const Button = (props) => {
  return <button className={styles.Button}>{props.value}</button>;
};
export default Button;
