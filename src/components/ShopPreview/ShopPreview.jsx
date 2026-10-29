import styles from "./ShopPreview.module.css";

export default function ShopPreview() {
  return (
    <div className={styles.shopPreview}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Shop</h2>
        <p className={styles.text}>
          In our store you will find a large number <br /> of high-quality blankets that will help
          make your home more comfortable and warm your life.
        </p>
      </div>
    </div>
  );
}
