import Button from "../Button/Button";
import styles from "./AuthorizationBlock.module.css";

export default function AuthorizationBlock() {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Welcome back</h2>
      <div className={styles.text}>
        Log in to your account to continue shopping and save your favourites.
      </div>

      <form className={styles.form}>
        <input type="text" placeholder="Email" className={styles.email} />
        <input type="text" placeholder="Password" className={styles.password} />

        <Button className={styles.btn}>Log in</Button>
      </form>
    </div>
  );
}
