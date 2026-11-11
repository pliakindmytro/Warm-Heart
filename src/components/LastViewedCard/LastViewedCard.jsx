import styles from "./LastViewedCard.module.css";

export default function LastViewedCard({ card }) {
  return (
    <li className={styles.card}>
      <div className={styles.circle}>
        <img src={card.image} alt={card.name} className={styles.img} />
      </div>
    </li>
  );
}
