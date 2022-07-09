import styles from "./OutputCard.module.css";
import Card from "../UI/Card";
import UserCard from "./UserCard";
// props has a list of lists with age and name
const OutputCard = (props) => {
  return (
    <Card>
      <div className={styles.container}>
        {props.users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </Card>
  );
};
export default OutputCard;
