import Button from "../Button/Button";
import Counter from "../Counter/Counter";

import styles from "./AddToCard.module.css";

export default function AddToCard() {
  return (
    <div className={styles.wrapper}>
      <Counter />
      <Button
        style={{ backgroundColor: "var(--black)", color: "var(--white)" }}
        className={styles.btn}
      >
        Add to Card
      </Button>
    </div>
  );
}
