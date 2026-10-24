import AddToCard from "../AddToCard/AddToCard";

import styles from "./CardDetails.module.css";

export default function CardDetails() {
  return (
    <div className={styles.cardDetails}>
      <div className={styles.wrapper}>
        <img src="images/Helgun.png" alt="#" className={styles.img} />

        <div className={styles.info}>
          <h2 className={styles.name}>Helgun</h2>
          <p className={styles.price}>€135</p>
          <div className={styles.tabs}>
            <button className={`${styles.tab}`}>Description</button>
            <button className={`${styles.tab} ${styles.active}`}>Details</button>
            <button className={`${styles.tab} ${styles.active}`}>Delivery</button>
          </div>
          <p className={styles.content}>
            Wool is stain resistant. This wear-resistant material perfectly retains heat.Y ou can
            wrap yourself up comfortably lying on the couch or throw it over yourself when it's
            cool.
          </p>
          <div className={styles.characteristics}>
            <p>
              Size: <strong>150x200 cm</strong>
            </p>
            <p>
              Color: <strong>beige</strong>
            </p>
          </div>
          <AddToCard />
        </div>
      </div>
    </div>
  );
}
