import Form from "../Form/Form";

import styles from "./Discount.module.css";

export default function Discount() {
  return (
    <div className={styles.discount}>
      <div className={styles.wrapperDiscount}>
        <h2 className={styles.title}>
          <span>Get 20% off</span> <span>your first purchase</span>
        </h2>
        <p className={styles.descriptionDiscount}>
          Subscribe to our newsletter and get a promo code for a 20% discount! You will receive only
          the most important and relevant news.
        </p>
      </div>

      <Form />
    </div>
  );
}
