import styles from "./UserCard.module.css";
const UserCard = (props) => {
  return (
    <div className={styles.UserCard}>
      {props.user.name} ({props.user.age} years old)
    </div>
  );
};
export default UserCard;
