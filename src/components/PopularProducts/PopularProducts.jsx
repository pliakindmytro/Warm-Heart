import PopularSlider from "../PopularSlider/PopularSlider";

import styles from "./PopularProducts.module.css";

export default function PopularProducts() {
  return (
    <div className={styles.popular}>
      <h2 className={styles.title}>Popular products</h2>

      <PopularSlider />
    </div>
  );
}
