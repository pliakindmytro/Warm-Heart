import Button from "../Button/Button";

import styles from "./OrderSummary.module.css";

export default function OrderSummary() {
  return (
    <div className={styles.order}>
      <h2 className={styles.title}>Order summary</h2>

      <div className={styles.wrapper}>
        <div className={styles.subtotal}>
          <p>Subtotal:</p>
          <p>
            <strong>€955</strong>
          </p>
        </div>

        <div className={styles.shipping}>
          <p>Shipping:</p>
          <p>
            <strong>free shipping</strong>
          </p>
        </div>

        <div className={styles.total}>
          <p>
            <strong>Total:</strong>
          </p>
          <p>
            <strong>€955</strong>
          </p>
        </div>
      </div>

      <Button className={styles.btn}>Checkout</Button>
    </div>
  );
}
