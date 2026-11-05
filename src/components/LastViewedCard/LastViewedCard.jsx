import styles from "./LastViewedCard.module.css";

export default function LastViewedCard() {
  return (
    <li className={styles.card}>
      <div className={styles.circle}>
        <img src="images/Dablidun.png" alt="#" className={styles.img} />
      </div>
    </li>
  );
}
