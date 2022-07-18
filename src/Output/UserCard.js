import styles from "./UserCard.module.css";
const UserCard = (props) => {
  const removePerson = () => {
    props.onRemovePerson(props.user);
  };
  return (
    <div onClick={removePerson} className={styles.UserCard}>
      {props.user.name} ({props.user.age} years old)
    </div>
  );
};
export default UserCard;
